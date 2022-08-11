<?php

namespace App\Http\Controllers;

use App\Http\Requests\ResetRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ResetController extends Controller
{
    public function ResetPassword(ResetRequest $request)
    {
        $email = $request->email;
        $token = $request->token;
        $password = Hash::make($request->password);

        $emailCheck = DB::table('password_resets')->where('email', $email)->first();
        $pinCheck = DB::table('password_resets')->where('token', $token)->first();

        if (!$emailCheck) {
            return response([
                'message' => 'Email Not Found'
            ], 401);
        }
        if (!$pinCheck) {
            return response([
                'message' => 'Pin code Invalid'
            ], 401);
        }

        DB::table('users')->where('email', $email)->update(['password' => $password]);
        DB::table('password_resets')->where('email', $email)->delete();
        return response([
            'message' => 'Password Change Successfully'
        ], 200);
    }
}
