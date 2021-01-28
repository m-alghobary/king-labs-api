<?php

namespace App\Http\Controllers;

use App\Http\Resources\TestResource;
use App\Models\Test;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TestController extends Controller
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
        $tests = Test::orderBy('created_at', 'DESC')->get();

        return TestResource::collection($tests);
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
        $test = Test::create($data);

        return new TestResource($test);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $test = Test::find($id);
        if (!$test) {
            return response()->json(['message' => 'Test not found!'], 404);
        }

        return new TestResource($test);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $test = Test::find($id);
        if (!$test) {
            return response()->json(['message' => 'Test not found!'], 404);
        }

        $validator = $this->_validate($request, $id);
        if ($validator->fails()) {
            return response()->json(['messages' => $validator->errors()], 400);
        }

        $test->name = $request->name;
        $test->price = $request->price;
        $test->test_type_id = $request->test_type_id;
        $test->save();

        return new TestResource($test);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $test = Test::find($id);
        if (!$test) {
            return response()->json(['message' => 'Test not found!'], 404);
        }

        $test->delete();
        return new TestResource($test);
    }

    private function _validate(Request $request, $id = null)
    {
        $currentId = $id ? ','. $id: '';
        return Validator::make($request->all(), [
            'name' => 'required|unique:tests,name'. $currentId,
            'price' => 'required',
            'test_type_id' => 'required',
        ]);
    }
}
