<?php

namespace App\Http\Controllers;

use App\Models\Company;
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

        $type = $request->get('type', 'user');
        $loginData = $request->only(['email', 'password']);

        $account = $type === 'user' ? User::where('email', $request->email)->first() : Company::where('email', $request->email)->first();
        if (is_null($account)) {
            return response()->json(['messages' => 'Account not found!'], 404);
        }

        $loggedIn = $type === 'user'? Auth::attempt($loginData): Auth::guard('company')->attempt($loginData);
        if ($loggedIn) {
            return response()->json([
                'data' => $account,
                'type' => $type,
                'token' => $account->createToken('userToken')->plainTextToken,
            ]);
        }

        return response()->json(['messages' => 'User not found!'], 404);
    }

    public function logout(Request $request)
    {
        $user = Auth::user();
        if ($user) {
            $user->tokens()->where('id', $user->currentAccessToken()->id)->delete();
        }

        return response()->json(['message' => 'User logged out!']);
    }
}
