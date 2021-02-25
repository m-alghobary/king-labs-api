<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TestResultResource extends JsonResource
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
            'delivered' => $this->delivered,
            'delivered_at' => $this->delivered_at,
            'note' => $this->note,
            'operation_id' => $this->operation_id,
            'result' => $this->result,
            'state' => 0,
        ];
    }
}
