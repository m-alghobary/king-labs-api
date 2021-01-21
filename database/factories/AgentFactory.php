<?php

namespace Database\Factories;

use App\Models\Agent;
use Illuminate\Database\Eloquent\Factories\Factory;

class AgentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Agent::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'age' => $this->faker->numberBetween(5, 70),
            'gender' => $this->faker->numberBetween(1, 2),
            'address' => $this->faker->address,
            'identity' => $this->faker->randomElement(['Personal', 'Passport']),
            'identity_number' => $this->faker->randomNumber(),
            'branch_id' => rand(1, 10),
        ];
    }
}
