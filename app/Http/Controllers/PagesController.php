<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Http\Requests;
use Auth;

class PagesController extends Controller
{
    public function index()
    {
        if(!Auth::user())
        {
            return redirect('/login');
        }
        else
        {
            $guitars = DB::table('guitars')->get();
            $guitar_imgs = DB::table('guitars')->groupBy('name')->get();
            $likes = DB::table('users')->join('likes', 'users.id', '=', 'likes.user_id')->join('guitars', 'likes.guitar_id', '=', 'guitars.id')->where('users.id', '=', Auth::user()->id)->get();
            return view('main')->with(['guitars' => $guitars, 'likes' => $likes, 'guitar_imgs' => $guitar_imgs]);
        }
    }
}
