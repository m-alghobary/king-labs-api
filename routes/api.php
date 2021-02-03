<?php

use App\Http\Controllers\AgentController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BatchController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\TestResultController;
use App\Http\Controllers\TestTypeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Auth routes
Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

// Users routes
Route::get('users', [UserController::class, 'index']);
Route::post('users', [UserController::class, 'store']);
Route::get('users/{id}', [UserController::class, 'show']);
Route::put('users/{id}', [UserController::class, 'update']);
Route::delete('users/{id}', [UserController::class, 'destroy']);

// Branchs routes
Route::get('branches', [BranchController::class, 'index']);
Route::post('branches', [BranchController::class, 'store']);
Route::get('branches/{id}', [BranchController::class, 'show']);
Route::put('branches/{id}', [BranchController::class, 'update']);
Route::delete('branches/{id}', [BranchController::class, 'destroy']);

// Agents routes
Route::get('agents', [AgentController::class, 'index']);
Route::post('agents', [AgentController::class, 'store']);
Route::get('agents/{id}', [AgentController::class, 'show']);
Route::put('agents/{id}', [AgentController::class, 'update']);
Route::delete('agents/{id}', [AgentController::class, 'destroy']);

// Companies routes
Route::get('companies', [CompanyController::class, 'index']);
Route::post('companies', [CompanyController::class, 'store']);
Route::get('companies/{id}', [CompanyController::class, 'show']);
Route::put('companies/{id}', [CompanyController::class, 'update']);
Route::delete('companies/{id}', [CompanyController::class, 'destroy']);

// Batches routes
Route::get('batches', [BatchController::class, 'index']);
Route::post('batches', [BatchController::class, 'store']);
Route::get('batches/{id}', [BatchController::class, 'show']);
Route::put('batches/{id}', [BatchController::class, 'update']);
Route::delete('batches/{id}', [BatchController::class, 'destroy']);

// Tests routes
Route::get('tests', [TestController::class, 'index']);
Route::post('tests', [TestController::class, 'store']);
Route::get('tests/{id}', [TestController::class, 'show']);
Route::put('tests/{id}', [TestController::class, 'update']);
Route::delete('tests/{id}', [TestController::class, 'destroy']);

// Invoices routes
Route::get('invoices', [InvoiceController::class, 'index']);
Route::post('invoices', [InvoiceController::class, 'store']);
Route::get('invoices/{id}', [InvoiceController::class, 'show']);
Route::put('invoices/{id}', [InvoiceController::class, 'update']);
Route::delete('invoices/{id}', [InvoiceController::class, 'destroy']);

// Tests routes
Route::get('testResults/{invoice_id}', [TestResultController::class, 'index']);
Route::post('testResults', [TestResultController::class, 'store']);
Route::get('testResults/{id}', [TestResultController::class, 'show']);
Route::put('testResults/{id}', [TestResultController::class, 'update']);
Route::delete('testResults/{id}', [TestResultController::class, 'destroy']);
