<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['messages' => $validator->errors()], 400);
        }

        $user = User::where('email', $request->email)->first();
        if (is_null($user)) {
            return response()->json(['messages' => 'User not found!'], 404);
        }

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json([
                'data' => Auth::user(),
                'token' => $user->createToken('userToken')->plainTextToken,
            ]);
        }

        return response()->json(['messages' => 'User not found!'], 404);
    }
}
