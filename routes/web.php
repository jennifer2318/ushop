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
    $products = \App\Models\Product::all();
    $products_rebase = [];

    foreach ($products as $key => $product) {
        $products_rebase[$key]['uid'] = $product->uid;
        $products_rebase[$key]['title'] = $product->title;
        $products_rebase[$key]['art'] = $product->art;
        $products_rebase[$key]['price'] = $product->price;
        $products_rebase[$key]['description'] = $product->description;
        $products_rebase[$key]['category']['uid'] = $product->category->uid;
        $products_rebase[$key]['category']['name'] = $product->category->name;
        if ($product->image !== null) {
            $products_rebase[$key]['image']['uid'] = $product->image->uid;
            $products_rebase[$key]['image']['path'] = $product->image->path;
            $products_rebase[$key]['image']['description'] = $product->image->description;
        }
    }

    echo json_encode($products_rebase);
});
