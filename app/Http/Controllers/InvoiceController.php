<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
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
        $invoices = Invoice::all();
        return response()->json(['data' => $invoices]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'agent_id' => 'required',
            'payment_method' => 'required',
            'amount' => 'required',
            'remain' => 'required',
            'discount' => 'required',
            'test_ids' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['messages' => $validator->errors()], 400);
        }

        $data = $request->except(['test_ids']);
        $data['user_id'] = auth()->user()->id;
        // return response()->json($data);

        $invoice = Invoice::create($data);
        $invoice->tests()->attach($request->test_ids);

        return response()->json(['data' => $invoice]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $invoice = Invoice::with(['tests' => function ($query) {
            $query->select('test_id', 'name', 'price');
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
