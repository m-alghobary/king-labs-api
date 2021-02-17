<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestResult extends Model
{
    use HasFactory;

    protected $fillable = [
        'result',
        'note',
        'delivered',
        'delivered_at',
        'operation_id',
        'user_id',
    ];

    protected $table = 'test_result';

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
