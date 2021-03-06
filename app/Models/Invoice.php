<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'branch_id',
        'payment_method',
        'total_amount',
        'amount',
        'remain',
        'discount',
        'fee',
        'discount_type',
        'discount_by',
    ];

    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    public function agents()
    {
        return $this->belongsToMany(Agent::class, 'agent_invoice_test');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function tests()
    {
        return $this->belongsToMany(Test::class, 'agent_invoice_test');
    }
}
