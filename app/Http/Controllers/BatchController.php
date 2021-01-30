<?php

namespace App\Http\Controllers;

use App\Models\Agent;
use App\Models\Batch;
use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class BatchController extends Controller
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
        $batches = Batch::withCount('agents')
            ->where('company_id', Auth::user()->id)
            ->get();

        return response()->json(["data" => $batches]);
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

        $batch = new Batch($request->only('name'));
        $batch->company_id = Auth::user()->id;
        if ($request->identifier) {
            $batch->identifier = $request->identifier;
        }

        $batch->save();
        $this->_createAgents($request, $batch);

        return response()->json(["data" => $batch]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $batch = Batch::with('agents')->find($id);
        if (!$batch) {
            return response()->json(['message' => 'Batch not found!'], 404);
        }

        return response()->json(["data" => $batch]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $batch = Batch::find($id);
        if (!$batch) {
            return response()->json(['message' => 'Batch not found!'], 404);
        }

        $validator = $this->_validate($request);
        if ($validator->fails()) {
            return response()->json(['messages' => $validator->errors()], 400);
        }

        $batch->name = $request->name;
        if ($request->identifier) {
            $batch->identifier = $request->identifier;
        }
        $batch->save();

        $this->_deleteAgents($batch);
        $this->_createAgents($request, $batch);

        return response()->json(["data" => $batch->with('agents')->find($id)]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $batch = Batch::find($id);
        if (!$batch) {
            return response()->json(['message' => 'Batch not found!'], 404);
        }

        $this->_deleteAgents($batch);
        $batch->delete();

        return response()->json(["data" => $batch]);
    }

    private function _validate(Request $request)
    {
        return Validator::make($request->all(), [
            'name' => 'required',
            'agents' => 'required|array|min:1'
        ]);
    }

    private function _createAgents(Request $request, Batch $batch)
    {
        foreach ($request->agents as $agentData) {
            $agent = new Agent($agentData);
            $agent->company_id = Auth::user()->id;
            $agent->save();

            $agent->batches()->attach($batch);
        }
    }

    private function _deleteAgents(Batch $batch)
    {
        $gaentIds = $batch->agents->pluck('id');
        Agent::destroy($gaentIds);
    }
}
