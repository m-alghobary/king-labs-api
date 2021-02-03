<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'duration'
    ];

    public function prices()
    {
        return $this->hasMany(Price::class);
    }

    public function getCurrentPrice()
    {
        return $this->prices()->where('is_current', true)->first()->price;
    }

    public function agents()
    {
        return $this->belongsToMany(Test::class, 'agent_invoice_test');
    }

    public function invoices()
    {
        return $this->belongsToMany(Invoice::class, 'agent_invoice_test');
    }
}
