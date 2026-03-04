<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Vehicle;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class VehicleController extends Controller
{
    public function availableVehicles(Request $request): JsonResponse
    {
        $query = Vehicle::query();

        if ($request->has('city') && $request->city) {
            $query->where('city', 'LIKE', '%' . $request->city . '%');
        }

        $vehicles = $query->orderBy('created_at', 'desc')->get();

        return response()->json([
            'data' => $vehicles,
        ]);
    }
}
