<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class InvoiceController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $isMain = Auth::user()->branch->is_main;

        $query = DB::table('agent_invoice_test')
            ->join('agents', 'agent_invoice_test.agent_id', '=', 'agents.id')
            ->join('invoices', 'agent_invoice_test.invoice_id', '=', 'invoices.id')
            ->join('branches', 'invoices.branch_id', '=', 'branches.id')
            ->join('tests', 'agent_invoice_test.test_id', '=', 'tests.id')
            ->select('agent_invoice_test.*', 'invoices.amount', 'tests.name AS test', 'invoices.remain', 'invoices.total_amount', 'agents.name', 'branches.name AS branch', 'agents.travel_type');

        $invoices = $isMain
                ? $query->get()
                : $query->where('invoices.branch_id', Auth::user()->branch->id)->get();

        return response()->json(['data' => $invoices]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'payment_method' => 'required',
            'total_amount' => 'required',
            'amount' => 'required',
            'remain' => 'required',
            'delivery_date' => 'required',
            'agents' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['messages' => $validator->errors()], 400);
        }

        $data = $request->except(['agents']);
        $data['delivery_date'] = Carbon::parse($request->delivery_date)->format('Y-m-d');
        $data['user_id'] = auth()->user()->id;
        $data['branch_id'] = auth()->user()->branch_id;

        $invoice = Invoice::create($data);

        foreach ($request->agents as $agent) {
            foreach ($agent['tests'] as $test) {
                DB::table('agent_invoice_test')->insert(array(
                    'agent_id' => $agent['id'],
                    'invoice_id' => $invoice->id,
                    'test_id' => $test,
                ));
            }
        }

        return response()->json(['data' => $invoice]);
    }

    public function updateRemain($id)
    {
        $invoice = Invoice::find($id);
        if (!$invoice) {
            return response()->json(['message' => 'Invoice not found!'], 404);
        }

        $invoice->remain = 0;
        $invoice->save();

        return response()->json(['data' => $invoice]);
    }
}
