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

    public function financialSummary()
    {
        $query = Branch::withCount('invoices')
            ->withSum('invoices', 'amount')
            ->withSum('invoices', 'total_amount')
            ->withSum('invoices', 'discount')
            ->withSum('invoices', 'fee');

        $data =  auth()->user()->branch->is_main ? $query->get(): $query->where('id', auth()->user()->branch_id)->get();
        return response()->json($data);
    }

    public function financialData()
    {
        $query = Invoice::with('branch')
            ->with('agents');

        $data = auth()->user()->branch->is_main ? $query->get(): $query->where('branch_id', auth()->user()->branch_id)->get();
        return FinancialDataReportResource::collection($data);
    }
}
