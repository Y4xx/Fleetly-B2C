<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('brand');
            $table->string('model');
            $table->integer('year');
            $table->decimal('price_per_day', 10, 2);
            $table->string('city');
            $table->string('image_url')->nullable();
            $table->boolean('is_available')->default(true);
            $table->integer('seats')->default(5);
            $table->string('transmission')->default('automatic');
            $table->string('fuel_type')->default('petrol');
            $table->decimal('rating', 2, 1)->default(4.5);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('vehicles');
    }
};
