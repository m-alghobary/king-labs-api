<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class Company extends Authenticatable
{
    use HasFactory, HasApiTokens;

    protected $guard = 'company';

    protected $fillable = [
        'name',
        'phone',
        'email',
        'fee',
        'password',
    ];

    protected $hidden = [
        'password',
    ];
}
