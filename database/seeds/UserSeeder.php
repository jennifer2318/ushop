<?php

use Illuminate\Database\Seeder;
use \App\UID;
use \App\User;
use \Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'uid' => UID::createUID(),
            'name' => 'root',
            'email' => 'root@root.ru',
            'login' => 'rootadmin',
            'email_verified_at' => Carbon::now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            'user_type' => 0,
            'remember_token' => Str::random(16),
            User::CREATED_AT => Carbon::now(),
            User::UPDATED_AT => Carbon::now(),
        ]);
    }
}
