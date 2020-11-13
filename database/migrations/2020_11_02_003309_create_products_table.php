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
            $table->string('uid', 34);
            $table->string('title');
            $table->string('title_ru');
            $table->string('description');
            $table->string('description_ru');
            $table->string('art')->nullable();
            $table->double('price')->nullable(false);
            $table->double('multiplier')->default(1);
            $table->double('rating')->nullable();
            $table->bigInteger('category_id')->unsigned()->default(1);
            $table->bigInteger('action_id')->unsigned()->nullable(true);
            $table->bigInteger('image_id')->unsigned()->nullable(true);
            $table->timestamps();
        });

        Schema::table('products', function (Blueprint $table) {
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->foreign('image_id')->references('id')->on('images')->onDelete('cascade');
//            $table->foreign('action_id')->references('id')->on('actions')->onDelete('cascade');
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
