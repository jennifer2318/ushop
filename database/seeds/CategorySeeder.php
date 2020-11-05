<?php

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use \App\UID;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'uid' => UID::createUID(),
            'name' => 'No category',
            'name_ru' => 'Без категории',
            Category::CREATED_AT => Carbon::now(),
            Category::UPDATED_AT => Carbon::now(),
        ]);
    }
}
