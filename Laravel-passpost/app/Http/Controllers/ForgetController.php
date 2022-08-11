<?php

namespace App\Http\Controllers;

use App\Http\Requests\ForgetRequest;
use App\Mail\ForgetMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class ForgetController extends Controller
{
    public function ForgetPassword(ForgetRequest $request)
    {
        $email = $request->email;
        if (User::where('email', $email)->doesntExist()) {
            return response([
                'message' => " Email Invalid"
            ], 401);
        }
        //generate Random Token
        $token = rand(10, 100000);
        try {
            //code...
            // $user =  User::where('email', $email)->update([
            //     'password' => $request->password
            // ]);

            //Cách đúng phải truy vấn vào reset password

            DB::table('password_resets')->insert([
                'email' => $email,
                'token' => $token,
            ]);
            // mail send to user
            Mail::to($email)->send(new ForgetMail($token));
            return response([
                'message' => 'Reset Password Mail send on your email'
            ], 200);




            // return response([
            //     'message' => 'Successfully Forgot password',
            //     'token' => $token,
            //     'user' => $user
            // ], 200);
        } catch (Exception $exception) {
            return response([
                'message' => $exception->getMessage()
            ], 400);
        }
    }
}
