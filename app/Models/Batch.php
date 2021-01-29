<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Batch extends Model
{
    use HasFactory;

    public function agents()
    {
        return $this->hasMany(Agent::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}