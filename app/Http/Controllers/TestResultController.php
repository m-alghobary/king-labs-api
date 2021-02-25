<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use App\Models\TestResult;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TestResultController extends Controller
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
        $testResults = TestResult::with(['user' => function ($query) {
            $query->select('id', 'name');
        }])
        ->get();

        if (!$testResults) {
            return response()->json(['message' => 'Test result not found!'], 404);
        }

        return response()->json($testResults);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = $this->_validate($request);
        if ($validator->fails()) {
            return response()->json(['messages' => $validator->errors()], 400);
        }

        $data = $request->result;
        $data['user_id'] = auth()->user()->id;
        $testResult = TestResult::create($data);

        return response()->json(['data' => $testResult]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $testResult = TestResult::where('operation_id', $id)->first();
        if (!$testResult) {
            return response()->json(['message' => 'Test result not found!'], 404);
        }

        return response()->json(['data' => $testResult]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $testResult = TestResult::find($id);
        if (!$testResult) {
            return response()->json(['message' => 'Test result not found!'], 404);
        }

        $validator = $this->_validate($request);
        if ($validator->fails()) {
            return response()->json(['messages' => $validator->errors()], 400);
        }

        $testResult->result = $request->result;
        $testResult->note = $request->note ? $request->note: '';
        $testResult->save();

        return response()->json(['data' => $testResult]);
    }

    public function deliver(Request $request, $id)
    {
        $testResult = TestResult::find($id);
        if (!$testResult) {
            return response()->json(['message' => 'Test result not found!'], 404);
        }

        $testResult->delivered = $request->delivered;
        $testResult->save();

        return response()->json(['data' => $testResult]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $testResult = TestResult::find($id);
        if (!$testResult) {
            return response()->json(['message' => 'Test result not found!'], 404);
        }

        $testResult->delete();
        return response()->json(['data' => $testResult]);
    }

    private function _validate(Request $request)
    {
        return Validator::make($request->all(), [
            'operation_id' => 'required',
            'result' => 'required',
        ]);
    }
}
