<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => 'admin',
            'phone' => 'admin',
            'job_title' => 'admin',
            'email' => 'admin@kinglab.vns.agency',
            'branch_id' => 1,
            'password' => Hash::make('kinglab1234'), // kinglab1234
            'remember_token' => Str::random(10),
        ];
    }
}
