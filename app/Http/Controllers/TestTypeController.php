<?php

namespace App\Http\Controllers;

use App\Models\TestType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TestTypeController extends Controller
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
        $testTypes = TestType::withCount('tests')->orderBy('created_at', 'DESC')->get();
        return response()->json($testTypes);
    }

    public function tests($id)
    {
        $testType = TestType::find($id);
        if (!$testType) {
            return response()->json(['message' => 'Test type not found!'], 404);
        }

        return response()->json(['data' => $testType->tests]);
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

        $data = $request->all();
        $testType = TestType::create($data);

        return response()->json(['data' => $testType]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $testType = TestType::find($id);
        if (!$testType) {
            return response()->json(['message' => 'Test type not found!'], 404);
        }

        return response()->json(['data' => $testType]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $testType = TestType::find($id);
        if (!$testType) {
            return response()->json(['message' => 'Test type not found!'], 404);
        }

        $validator = $this->_validate($request);
        if ($validator->fails()) {
            return response()->json(['messages' => $validator->errors()], 400);
        }

        $testType->name = $request->name;
        $testType->save();

        return response()->json(['data' => $testType]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $testType = TestType::find($id);
        if (!$testType) {
            return response()->json(['message' => 'Test type not found!'], 404);
        }

        $testType->delete();
        return response()->json(['data' => $testType]);
    }

    private function _validate(Request $request)
    {
        return Validator::make($request->all(), [
            'name' => 'required',
        ]);
    }
}
