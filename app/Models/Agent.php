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
        'address',
        'identity',
        'identity_number',
        'branch_id',
    ];

    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }

    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }

    public function testResults()
    {
        return $this->hasMany(TestResult::class);
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
