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

        $data = $request->only(['name', 'duration', 'note']);
        $test = Test::create($data);
        $test->prices()->create($request->only('price'));

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
        $test->duration = $request->duration;
        $test->note = $request->note;

        if ($test->getCurrentPrice() != $request->price) {
            $test->prices()->update(['is_current' => false]);
            $test->prices()->create($request->only('price'));
        }

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
        return response()->json(['data' => $test]);
    }

    private function _validate(Request $request, $id = null)
    {
        $currentId = $id ? ','. $id: '';
        return Validator::make($request->all(), [
            'name' => 'required|unique:tests,name'. $currentId,
            'price' => 'required',
            'duration' => 'required',
        ]);
    }
}
