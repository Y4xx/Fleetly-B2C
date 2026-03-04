<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'brand',
        'model',
        'year',
        'price_per_day',
        'city',
        'image_url',
        'is_available',
        'seats',
        'transmission',
        'fuel_type',
        'rating',
    ];

    protected function casts(): array
    {
        return [
            'price_per_day' => 'decimal:2',
            'is_available' => 'boolean',
            'rating' => 'decimal:1',
            'year' => 'integer',
            'seats' => 'integer',
        ];
    }
}
