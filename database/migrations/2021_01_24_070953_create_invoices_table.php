<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('agent_id');
            $table->foreignId('user_id');
            $table->string('paymeny_method');
            $table->unsignedDouble('amount');
            $table->unsignedDouble('remain');
            $table->unsignedDouble('discount');
            $table->timestamps();

            $table->foreign('agent_id')->references('id')->on('agents')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoices');
    }
}
