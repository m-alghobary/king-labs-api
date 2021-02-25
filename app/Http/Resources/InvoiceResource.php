<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class InvoiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'delivery_at' => $this->delivery_at,
            'invoice_id' => $this->invoice_id,
            'remain' => $this->remain,
            'test' => $this->test,
            'branch' => $this->branch,
            'state' => 0
        ];
    }
}
