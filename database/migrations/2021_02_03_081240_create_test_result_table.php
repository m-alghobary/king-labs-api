<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTestResultTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('test_result', function (Blueprint $table) {
            $table->id();
            $table->string('result');
            $table->string('note')->nullable();
            $table->boolean('delivered')->default(false);
            $table->timestamp('delivered_at')->nullable();
            $table->foreignId('operation_id');
            $table->timestamps();

            $table->foreign('operation_id')->references('id')->on('agent_invoice_test')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('test_result');
    }
}
