<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Auth routes
Route::post('login', [AuthController::class, 'login'])->name('login');
Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum')->name('logout');

// Users routes
Route::get('users', [UserController::class, 'index'])->name('users.index');
Route::post('users', [UserController::class, 'store'])->name('users.store');
Route::get('users/{id}', [UserController::class, 'show'])->name('users.show');
Route::put('users/{id}', [UserController::class, 'update'])->name('users.update');
Route::delete('users/{id}', [UserController::class, 'destroy'])->name('users.destroy');

// Branch routes
Route::get('branches', [BranchController::class, 'index'])->name('users.index');
Route::post('branches', [BranchController::class, 'store'])->name('branches.store');
Route::get('branches/{id}', [BranchController::class, 'show'])->name('branches.show');
Route::put('branches/{id}', [BranchController::class, 'update'])->name('branches.update');
Route::delete('branches/{id}', [BranchController::class, 'destroy'])->name('branches.destroy');
