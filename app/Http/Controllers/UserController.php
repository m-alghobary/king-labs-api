<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
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
        $users = User::with(['branch' => function ($query) {
            $query->select('id', 'name');
        }])
        ->orderBy('created_at', 'DESC')
        ->get();

        return UserResource::collection($users);
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
        $data['password'] = Hash::make($request->password);
        $user = User::create($data);

        return new UserResource($user);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found!'], 404);
        }

        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found!'], 404);
        }

        $validator = $this->_validate($request, $id);
        if ($validator->fails()) {
            return response()->json(['messages' => $validator->errors()], 400);
        }

        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->job_title = $request->job_title;
        if ($request->password) {
            $user->password = Hash::make($request->password);
        }

        $user->branch_id = $request->branch_id;
        $user->save();

        return new UserResource($user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found!'], 404);
        }

        $user->delete();
        return new UserResource($user);
    }

    private function _validate(Request $request, $id = null)
    {
        $currentId = $id ? ','. $id: '';
        $rules = [
            'name' => 'required',
            'email' => 'required|email|unique:users,email'. $currentId,
            'phone' => 'required',
            'job_title' => 'required',
            'branch_id' => 'required',
        ];

        if (!$id) {
            $rules['password'] = 'required|confirmed';
            $rules['password_confirmation'] = 'required';
        }

        return Validator::make($request->all(), $rules);
    }
}
