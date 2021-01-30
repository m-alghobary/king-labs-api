<?php

namespace Database\Seeders;

use App\Models\Branch;
use App\Models\Company;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Branch::factory()->times(12)->create();
        Company::factory()->times(8)->create();

        $this->call([
            UserSeeder::class,
        ]);
    }
}
