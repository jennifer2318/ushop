<?php

use Illuminate\Support\Facades\Request as HttpRequest;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/admin', 'Admin\AdminController@indexAction')->middleware(\App\Http\Middleware\AdminAuthenticated::class);

Route::get('/admin/login', 'Admin\LoginController@indexAction');

Route::get('/', function () {
    return view('index');
});

Route::post('/catalog', function() {
    echo json_encode(HttpRequest::all());
});
