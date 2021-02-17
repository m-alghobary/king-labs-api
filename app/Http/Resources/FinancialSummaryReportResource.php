<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FinancialSummaryReportResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $total_amount = $this->invoices_sum_total_amount ? $this->invoices_sum_total_amount : 0;
        $discount = $this->invoices_sum_discount? $this->invoices_sum_discount : 0;
        $fee = $this->invoices_sum_fee? $this->invoices_sum_fee : 0;

        return [
            'id' => $this->id,
            'barnch' => $this->name,
            'invoices_count' => $this->invoices_count,
            'total_amount' => $total_amount + $discount + $fee,
            'discount' => $discount,
            'fee' => $fee,
            'net' => $total_amount - $discount - $fee,
        ];
    }
}
