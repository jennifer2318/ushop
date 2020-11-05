<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('uid');
            $table->string('title');
            $table->string('title_ru');
            $table->string('description');
            $table->string('description_ru');
            $table->double('price')->nullable(false);
            $table->double('multiplier')->default(1);
            $table->integer('category_id')->default(1);
            $table->integer('action_id')->nullable(true);
            $table->integer('image_id')->nullable(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
