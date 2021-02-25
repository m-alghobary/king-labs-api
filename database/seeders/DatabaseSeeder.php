<?php

namespace Database\Seeders;

use App\Models\Branch;
use App\Models\Company;
use App\Models\Permission;
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
        Branch::factory()->times(1)->create();

        $this->call([
            UserSeeder::class,
        ]);

        Permission::factory()->times(1)->create();
    }
}
