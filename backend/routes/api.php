<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\VehicleController;
use Illuminate\Support\Facades\Route;

Route::prefix('api')->group(function () {

    Route::prefix('v1')->group(function () {

        Route::get('/test', function () {
            return response()->json([
                'message' => 'Laravel Sail API Working ✅'
            ]);
        });

        // Auth routes
        Route::post('/register', [AuthController::class, 'register']);
        Route::post('/login', [AuthController::class, 'login']);

        // Protected routes
        Route::middleware('auth:sanctum')->group(function () {
            Route::post('/logout', [AuthController::class, 'logout']);
            Route::get('/user', [AuthController::class, 'user']);
        });

        // Vehicle routes
        Route::get('/available-vehicles', [VehicleController::class, 'availableVehicles']);
    });

});
