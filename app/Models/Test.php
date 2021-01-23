<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'test_type_id',
    ];

    public function testType()
    {
        return $this->belongsTo(TestType::class);
    }
}
