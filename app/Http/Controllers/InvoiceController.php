<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Carbon\Carbon;
use Illuminate\Http\Request;
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
    public function index()
    {
        $invoices = Invoice::with(['user' => function ($query) {
            $query->select('id', 'name');
        }])
        ->get();

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
            'discount' => 'required',
            'discount_type' => 'required',
            'delivery_date' => 'required',
            'agent_ids' => 'required',
            'test_ids' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['messages' => $validator->errors()], 400);
        }

        $data = $request->except(['test_ids']);
        $data['delivery_date'] = Carbon::parse($request->delivery_date)->format('Y-m-d');
        $data['user_id'] = auth()->user()->id;

        $invoice = Invoice::create($data);
        $invoice->tests()->attach($request->test_ids);
        $invoice->agents()->attach($request->agent_ids);

        return response()->json(['data' => $invoice]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $invoice = Invoice::with(['tests' => function ($query) {
            $query->select('test_id', 'name');
        }])
        ->with(['agents'=> function ($query) {
            $query->select('name');
        }])
        ->with(['user' => function ($query) {
            $query->select('id', 'name');
        }])
        ->find($id);

        if (!$invoice) {
            return response()->json(['message' => 'Invoice not found!'], 404);
        }

        return response()->json(['data' => $invoice]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
    }
}
