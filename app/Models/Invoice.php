<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $fillable = [
        'agent_id',
        'user_id',
        'payment_method',
        'amount',
        'remain',
        'discount',
        'test_ids',
    ];

    public function agent()
    {
        return $this->belongsTo(Agent::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function tests()
    {
        return $this->belongsToMany(Test::class);
    }
}
