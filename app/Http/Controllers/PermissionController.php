<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required',
            'permissions' => 'array',
        ]);

        if ($validator->fails()) {
            return response()->json(['messages' => $validator->errors()], 400);
        }

        $permission = Permission::create($request->only('user_id', 'permissions'));

        return response()->json(['data' => $permission]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $permission = Permission::where('user_id', $id)->first();
        if (!$permission) {
            return response()->json(['message' => 'User not found!'], 404);
        }

        return response()->json(['data' => $permission]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required',
            'permissions' => 'array',
        ]);

        if ($validator->fails()) {
            return response()->json(['messages' => $validator->errors()], 400);
        }

        $permission = Permission::where('user_id', $request->user_id)->first();
        if (!$permission) {
            return response()->json(['message' => 'User not found!'], 404);
        }

        $permission->permissions = $request->permissions;
        $permission->save();

        return response()->json(['data' => $permission]);
    }
}
