<?php

use App\Http\Controllers\AgentController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CompanyController;
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

// Branchs routes
Route::get('branches', [BranchController::class, 'index'])->name('branches.index');
Route::post('branches', [BranchController::class, 'store'])->name('branches.store');
Route::get('branches/{id}', [BranchController::class, 'show'])->name('branches.show');
Route::put('branches/{id}', [BranchController::class, 'update'])->name('branches.update');
Route::delete('branches/{id}', [BranchController::class, 'destroy'])->name('branches.destroy');

// Agents routes
Route::get('agents', [AgentController::class, 'index'])->name('agents.index');
Route::post('agents', [AgentController::class, 'store'])->name('agents.store');
Route::get('agents/{id}', [AgentController::class, 'show'])->name('agents.show');
Route::put('agents/{id}', [AgentController::class, 'update'])->name('agents.update');
Route::delete('agents/{id}', [AgentController::class, 'destroy'])->name('agents.destroy');

// Agents routes
Route::get('companies', [CompanyController::class, 'index'])->name('companies.index');
Route::post('companies', [CompanyController::class, 'store'])->name('companies.store');
Route::get('companies/{id}', [CompanyController::class, 'show'])->name('companies.show');
Route::put('companies/{id}', [CompanyController::class, 'update'])->name('companies.update');
Route::delete('companies/{id}', [CompanyController::class, 'destroy'])->name('companies.destroy');
