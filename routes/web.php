<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MonitorController;
use App\Jobs\PingStatusJob;
use App\Models\Monitor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('about', function () {
    return Inertia::render('About');
});
Route::get('login', function () {
    return Inertia::render('Login');
});

Route::post('auth/login', [AuthController::class, 'login']);



Route::middleware(['auth'])->group(function () {
    Route::get('home', function () {
        $monitors = auth()->user()->monitors()->latest()->paginate();
        return Inertia::render('Home', [
            'monitors' => $monitors
        ]);
    })->name('home');

    Route::get('site/create', function () {
        return Inertia::render('Site/Create');
    });

    Route::post('auth/logout', [AuthController::class, 'logout']);

    Route::post('site/store', [MonitorController::class, 'store'])->name('site.store');
    Route::post('site/create', [MonitorController::class, 'create'])->name('site.create');
    Route::delete('site/{monitor}', [MonitorController::class, 'destroy'])->name('site.delete');
    Route::get('site/{monitor}/edit', [MonitorController::class, 'edit'])->name('site.edit');
    Route::patch('site/{monitor}/update', [MonitorController::class, 'update'])->name('site.update');
});


Route::get('test', function () {



    return 'done';
});
