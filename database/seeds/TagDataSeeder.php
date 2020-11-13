<?php

use App\Models\TagData;
use App\UID;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class TagDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tags_data')->insert([
            'uid' => UID::createUID(),
            'key' => 'hit',
            'title' => 'Hit',
            'title_ru' => 'Хит',
            'color' => 'var(--color-blue)',
            'is_top' => true,
            TagData::CREATED_AT => Carbon::now(),
            TagData::UPDATED_AT => Carbon::now(),
        ]);
    }
}
