<?php

namespace App\Http\Controllers;

use App\Models\Agent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AgentController extends Controller
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
        $agents = Agent::orderBy('created_at', 'DESC')->get();
        return response()->json($agents);
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
        $data['branch_id'] = auth()->user()->branch->id;
        $agent = Agent::create($data);

        return response()->json(['data' => $agent]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $agent = Agent::find($id);
        if (!$agent) {
            return response()->json(['message' => 'Agent not found!'], 404);
        }

        return response()->json(['data' => $agent]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $agent = Agent::find($id);
        if (!$agent) {
            return response()->json(['message' => 'Agent not found!'], 404);
        }

        $validator = $this->_validate($request);
        if ($validator->fails()) {
            return response()->json(['messages' => $validator->errors()], 400);
        }

        $agent->name = $request->name;
        $agent->age = $request->age;
        $agent->identity = $request->identity;
        $agent->identity_number = $request->identity_number;
        $agent->save();

        return response()->json(['data' => $agent]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $agent = Agent::find($id);
        if (!$agent) {
            return response()->json(['message' => 'Agent not found!'], 404);
        }

        $agent->delete();
        return response()->json(['data' => $agent]);
    }

    private function _validate(Request $request)
    {
        return Validator::make($request->all(), [
            'name' => 'required',
            'age' => 'required',
            'gender' => 'required',
            'identity' => 'required',
            'identity_number' => 'required',
        ]);
    }
}
