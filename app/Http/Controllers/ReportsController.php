<?php

namespace App\Http\Controllers;

use App\Http\Resources\FinancialDataReportResource;
use App\Models\Agent;
use App\Models\Branch;
use App\Models\Invoice;
use Illuminate\Http\Request;

class ReportsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function financialSummary(Request $request)
    {
        static $params;

        $params = $request->query();
        $isMain = auth()->user()->branch->is_main;

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
        return response()->json($data);
    }

    public function financialData(Request $request)
    {
        $params = $request->query();
        $isMain = auth()->user()->branch->is_main;

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

        $data = $query->get();
        return FinancialDataReportResource::collection($data);
    }
}
