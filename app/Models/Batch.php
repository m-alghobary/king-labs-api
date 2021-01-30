<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Batch extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'identifier',
        'company_id',
    ];

    public function agents()
    {
        return $this->belongsToMany(Agent::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
