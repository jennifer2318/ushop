<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use \App\UID;
use \App\Models\Product;
use \Illuminate\Support\Carbon;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i <= 20; $i++) {
            DB::table('products')->insert([
                'uid' => UID::createUID(),
                'title' => 'Product ' . $i,
                'title_ru' => 'Товар ' . $i,
                'description' => 'Description ' . $i,
                'description_ru' => 'Описание ' . $i,
                'price' => 50 * $i,
                Product::CREATED_AT => Carbon::now(),
                Product::UPDATED_AT => Carbon::now(),
            ]);
        }
    }
}
