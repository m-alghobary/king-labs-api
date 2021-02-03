<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAgentInvoiceTestTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agent_invoice_test', function (Blueprint $table) {
            $table->id();
            $table->foreignId('agent_id')->nullable();
            $table->foreignId('invoice_id')->nullable();
            $table->foreignId('test_id')->nullable();
            $table->timestamp('delivery_at');
            $table->timestamps();

            $table->foreign('agent_id')->references('id')->on('agents')->onDelete('set null');
            $table->foreign('invoice_id')->references('id')->on('invoices')->onDelete('set null');
            $table->foreign('test_id')->references('id')->on('tests')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('agent_invoice_test');
    }
}
