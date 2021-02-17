<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agent extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'age',
        'gender',
        'travel_type',
        'address',
        'identity',
        'identity_number',
        'company_id',
        'user_id',
        'branch_id',
    ];

    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    public function invoices()
    {
        return $this->belongsToMany(Invoice::class, 'agent_invoice_test');
    }

    public function tests()
    {
        return $this->belongsToMany(Test::class, 'agent_invoice_test');
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function batches()
    {
        return $this->belongsToMany(Batch::class);
    }
}
