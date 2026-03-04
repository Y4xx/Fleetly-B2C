<?php

namespace Database\Seeders;

use App\Models\Vehicle;
use Illuminate\Database\Seeder;

class VehicleSeeder extends Seeder
{
    public function run(): void
    {
        $vehicles = [
            [
                'name' => 'Toyota Camry 2024',
                'brand' => 'Toyota',
                'model' => 'Camry',
                'year' => 2024,
                'price_per_day' => 45.00,
                'city' => 'Casablanca',
                'image_url' => 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400',
                'is_available' => true,
                'seats' => 5,
                'transmission' => 'automatic',
                'fuel_type' => 'petrol',
                'rating' => 4.8,
            ],
            [
                'name' => 'Mercedes C-Class',
                'brand' => 'Mercedes',
                'model' => 'C-Class',
                'year' => 2023,
                'price_per_day' => 85.00,
                'city' => 'Casablanca',
                'image_url' => 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400',
                'is_available' => true,
                'seats' => 5,
                'transmission' => 'automatic',
                'fuel_type' => 'petrol',
                'rating' => 4.9,
            ],
            [
                'name' => 'Dacia Logan',
                'brand' => 'Dacia',
                'model' => 'Logan',
                'year' => 2023,
                'price_per_day' => 25.00,
                'city' => 'Rabat',
                'image_url' => 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400',
                'is_available' => true,
                'seats' => 5,
                'transmission' => 'manual',
                'fuel_type' => 'diesel',
                'rating' => 4.2,
            ],
            [
                'name' => 'BMW X5',
                'brand' => 'BMW',
                'model' => 'X5',
                'year' => 2024,
                'price_per_day' => 120.00,
                'city' => 'Marrakech',
                'image_url' => 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400',
                'is_available' => true,
                'seats' => 7,
                'transmission' => 'automatic',
                'fuel_type' => 'diesel',
                'rating' => 4.7,
            ],
            [
                'name' => 'Renault Clio',
                'brand' => 'Renault',
                'model' => 'Clio',
                'year' => 2023,
                'price_per_day' => 30.00,
                'city' => 'Tangier',
                'image_url' => 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400',
                'is_available' => false,
                'seats' => 5,
                'transmission' => 'manual',
                'fuel_type' => 'petrol',
                'rating' => 4.3,
            ],
            [
                'name' => 'Hyundai Tucson',
                'brand' => 'Hyundai',
                'model' => 'Tucson',
                'year' => 2024,
                'price_per_day' => 55.00,
                'city' => 'Fes',
                'image_url' => 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400',
                'is_available' => true,
                'seats' => 5,
                'transmission' => 'automatic',
                'fuel_type' => 'petrol',
                'rating' => 4.6,
            ],
        ];

        foreach ($vehicles as $vehicle) {
            Vehicle::create($vehicle);
        }
    }
}
