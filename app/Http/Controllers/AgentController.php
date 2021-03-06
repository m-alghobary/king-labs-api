<?php

namespace App\Http\Controllers;

use App\Http\Resources\AgentRescource;
use App\Models\Agent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
    public function index(Request $request)
    {
        $isMain = Auth::user()->branch->is_main;
        $search = trim($request->get('query', '%'));
        $query = Agent::orderBy('created_at', 'DESC')->where('name', 'like', '%'. $search .'%');

        $agents = $isMain
                ? $query->paginate($request->get('itemsPerPage', 10))
                : $query->where('branch_id', Auth::user()->branch->id)->paginate($request->get('itemsPerPage', 10));

        return AgentRescource::collection($agents);
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
        $data['branch_id'] = auth()->user()->branch_id;
        $data['user_id'] = auth()->user()->id;
        $agent = Agent::create($data);

        return new AgentRescource($agent);
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

        return new AgentRescource($agent);
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
        $agent->travel_type = $request->travel_type;
        $agent->identity = $request->identity;
        $agent->identity_number = $request->identity_number;
        $agent->company_id = $request->company_id;

        $agent->save();

        return new AgentRescource($agent);
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
        return new AgentRescource($agent);
    }

    private function _validate(Request $request)
    {
        return Validator::make($request->all(), [
            'name' => 'required',
            'age' => 'required',
            'travel_type' => 'required',
            'gender' => 'required',
            'identity' => 'required',
            'identity_number' => 'required',
        ]);
    }
}
