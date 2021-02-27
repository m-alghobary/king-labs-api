<?php

use App\Http\Controllers\AgentController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BatchController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\TestResultController;
use App\Http\Controllers\TestTypeController;
use App\Http\Resources\AgentRescource;
use App\Http\Resources\BranchResource;
use App\Http\Resources\CompanyResource;
use App\Http\Resources\InvoiceResource;
use App\Http\Resources\PermissionResource;
use App\Http\Resources\TestResource;
use App\Http\Resources\TestResultResource;
use App\Http\Resources\UserResource;
use App\Models\Agent;
use App\Models\Branch;
use App\Models\Company;
use App\Models\Permission;
use App\Models\Test;
use App\Models\TestResult;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Auth routes
Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::get('/data', function (Request $request) {
    $users = User::with(['branch' => function ($query) {
        $query->select('id', 'name');
    }])->orderBy('created_at', 'DESC')->get();

    $branches = Branch::orderBy('created_at', 'DESC')->get();
    $companies = Company::orderBy('created_at', 'DESC')->get();
    $tests = Test::orderBy('created_at', 'DESC')->get();

    $isMain = Auth::user()->branch->is_main;
    $query = Agent::orderBy('created_at', 'DESC');

    $agents = $isMain
                ? $query->take(30)->get()
                : $query->where('branch_id', Auth::user()->branch->id)->take(30)->get();

    $permissions = Permission::all();

    $query = DB::table('agent_invoice_test')
            ->join('agents', 'agent_invoice_test.agent_id', '=', 'agents.id')
            ->join('invoices', 'agent_invoice_test.invoice_id', '=', 'invoices.id')
            ->join('branches', 'invoices.branch_id', '=', 'branches.id')
            ->join('tests', 'agent_invoice_test.test_id', '=', 'tests.id')
            ->select('agent_invoice_test.*', 'invoices.amount', 'tests.name AS test', 'invoices.remain', 'invoices.total_amount', 'agents.name', 'branches.name AS branch', 'agents.travel_type')
            ->orderBy('invoices.created_at', 'DESC');

    $invoices = $isMain
                ? $query->take(30)->get()
                : $query->where('invoices.branch_id', Auth::user()->branch->id)->take(30)->get();

    $testResults = TestResult::take(30)->get();

    return response()->json([
        'data' => [
            'users' => UserResource::collection($users),
            'branches' => BranchResource::collection($branches),
            'companies' => CompanyResource::collection($companies),
            'tests' => TestResource::collection($tests),
            'agents' => AgentRescource::collection($agents),
            'permissions' => PermissionResource::collection($permissions),
            'invoices' => InvoiceResource::collection($invoices),
            'results' => TestResultResource::collection($testResults),
        ]
    ]);
})->middleware('auth:sanctum');

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
Route::put('branches/{id}/main', [BranchController::class, 'updateMain']);
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
Route::put('invoices/{id}/remain', [InvoiceController::class, 'updateRemain']);
Route::delete('invoices/{id}', [InvoiceController::class, 'destroy']);

// Tests Results routes
Route::get('testResults', [TestResultController::class, 'index']);
Route::post('testResults', [TestResultController::class, 'store']);
Route::get('testResults/{id}', [TestResultController::class, 'show']);
Route::put('testResults/{id}', [TestResultController::class, 'update']);
Route::put('testResults/{id}/deliver', [TestResultController::class, 'deliver']);
Route::delete('testResults/{id}', [TestResultController::class, 'destroy']);

// Permissions routes
Route::post('permissions', [PermissionController::class, 'store']);
Route::put('permissions', [PermissionController::class, 'update']);
Route::get('permissions/{id}', [PermissionController::class, 'show']);

// Reports
Route::get('/reports/financial/summary', [ReportsController::class, 'financialSummary']);
Route::get('/reports/financial/data', [ReportsController::class, 'financialData']);
