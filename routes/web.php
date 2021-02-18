<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

use App\Models\Branch;
use App\Models\Invoice;
use App\Models\TestResult;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/print/result/{id}', function ($id) {
    $result = TestResult::where('operation_id', $id)->first();
    $result->delivered = true;
    $result->save();

    $data = DB::table('test_result')
        ->join('agent_invoice_test', 'test_result.operation_id', '=', 'agent_invoice_test.id')
        ->join('agents', 'agent_invoice_test.agent_id', '=', 'agents.id')
        ->join('invoices', 'agent_invoice_test.invoice_id', '=', 'invoices.id')
        ->select('test_result.*', 'agents.*', 'invoices.created_at as date_collect')
        ->where('test_result.operation_id', $id)
        ->first();

    $pdf = PDF::loadView('result', ['data' => $data, 'user' => $result->user->name]);
    return $pdf->stream();
});

Route::get('/print/qrcode/{id}', function ($id) {
    $pdf = PDF::loadView('qrcode', ['id'=>$id]);
    return $pdf->stream();
});

Route::get('/print/invoice/{id}', function ($id) {
    $invoice = Invoice::with('agents')->with('user')->find($id);
    $tests = [];
    foreach ($invoice->agents as $agent) {
        $agent['test'] = DB::table('agent_invoice_test')->join('tests', 'agent_invoice_test.test_id', '=', 'tests.id')->where('agent_id', $agent['id'])->get();
    }

    $data = [
        'invoiceId' => $id,
        'amount' => $invoice->amount,
        'remain' => $invoice->remain,
        'agents' => $invoice->agents,
        'tests' => $invoice->tests,
        'user' => $invoice->user['name'],
    ];

    $pdf = PDF::loadView('invoice', $data);
    return $pdf->stream();
});

Route::get('/print/reports/summary', function (Request $request) {
    $params = $request->query();
    $isMain = Branch::find($params['branch'])->is_main;

    $query = Branch::withCount(['invoices' => function ($q) use ($params) {
        return $params['from']? $q->whereBetween('created_at', [$params['from'], $params['to'] ? $params['to']: now()]): $q;
    }])
        ->withSum(['invoices' => function ($q) use ($params) {
            return $params['from']? $q->whereBetween('created_at', [$params['from'], $params['to'] ? $params['to']: now()]): $q;
        }], 'amount')
        ->withSum(['invoices' => function ($q) use ($params) {
            return $params['from']? $q->whereBetween('created_at', [$params['from'], $params['to'] ? $params['to']: now()]): $q;
        }], 'total_amount')
        ->withSum(['invoices' => function ($q) use ($params) {
            return $params['from']? $q->whereBetween('created_at', [$params['from'], $params['to'] ? $params['to']: now()]): $q;
        }], 'discount')
        ->withSum(['invoices' => function ($q) use ($params) {
            return $params['from']? $q->whereBetween('created_at', [$params['from'], $params['to'] ? $params['to']: now()]): $q;
        }], 'fee');

    if ($params['branches']) {
        $ids = explode(',', $params['branches']);
        $query = $query->whereIn('id', $ids);
    } else {
        $query = $query->where('id', 'like', $isMain ? '%': '%' . auth()->user()->branch_id . '%');
    }

    $data = $query->get();

    $branches = [];
    $totalInvoices = 0;
    $totalAmount = 0;
    $totalDicount = 0;
    $totalFee = 0;

    foreach ($data as $branch) {
        $total_amount = $branch['invoices_sum_total_amount'] ? $branch['invoices_sum_total_amount'] : 0;
        $discount = $branch['invoices_sum_discount'] ? $branch['invoices_sum_discount'] : 0;
        $fee = $branch['invoices_sum_fee'] ? $branch['invoices_sum_fee'] : 0;

        array_push($branches, [
            'id' => $branch['id'],
            'name' => $branch['name'],
            'invoices_count' => $branch['invoices_count'],
            'total_amount' => $total_amount + $discount,
            'discount' => $discount,
            'fee' => $fee,
            'net' => $total_amount - $discount - $fee,
        ]);

        $totalInvoices += $branch['invoices_count'];
        $totalAmount += $total_amount + $discount;
        $totalDicount += $discount;
        $totalFee += $fee;
    }

    $data = [
        'data' => [
            'branches' => $branches,
            'totals' => [
                'invoices' => $totalInvoices,
                'amount' => $totalAmount,
                'discount' => $totalDicount,
                'fee' => $totalFee,
                'net' => $totalAmount - $totalDicount - $totalFee,
            ]
        ],
    ];

    $pdf = PDF::loadView('summary', $data);
    return $pdf->stream();
});

Route::get('/print/reports/data', function (Request $request) {
    $params = $request->query();
    $isMain = Branch::find($params['branch'])->is_main;

    $query = Invoice::with('branch')
            ->with('agents');

    if ($params['branches']) {
        $ids = explode(',', $params['branches']);
        $query = $query->whereIn('branch_id', $ids);
    } else {
        $query = $query->where('branch_id', 'like', $isMain ? '%': '%' . auth()->user()->branch_id . '%');
    }

    if ($params['from']) {
        $to = $params['to'] ? $params['to']: now();
        $query->whereBetween('created_at', [$params['from'], $to]);
    }

    $data =  $query->get();

    $agents = [];
    $totalAmount = 0;
    $totalDicount = 0;
    $totalFee = 0;

    foreach ($data as $invoice) {
        for ($i = 0; $i < count($invoice->agents); $i++) {
            $agent = $invoice->agents[$i];

            array_push($agents, [
                'id' => $invoice->id,
                'barnch' => $invoice->branch->name,
                'date' => Carbon::parse($invoice->created_at)->format('Y/m/d'),
                'agent' => $agent['name'],
                'identityNo' => $agent['identity_number'],
                'amount' => $invoice->total_amount + $invoice->discount + $invoice->fee,
                'discount' => $invoice->discount,
                'fee' => $invoice->fee,
                'duplicate' => $i > 0
            ]);
        }

        $totalAmount += $invoice->total_amount + $invoice->discount + $invoice->fee;
        $totalDicount += $invoice->discount;
        $totalFee += $invoice->fee;
    }

    $data = [
        'data' => [
            'agents' => $agents,
            'totals' => [
                'amount' => $totalAmount,
                'discount' => $totalDicount,
                'fee' => $totalFee,
                'net' => $totalAmount - $totalDicount - $totalFee,
            ]
        ],
    ];

    $pdf = PDF::loadView('data', $data, [], [
        'orientation' => 'L',
        'margin_left' => 10,
        'margin_right' => 10,
        'margin_top' => 10,
        'margin_bottom' => 10,
    ]);

    return $pdf->stream();
});


Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');
