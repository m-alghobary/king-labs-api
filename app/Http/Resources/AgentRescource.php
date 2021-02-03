<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AgentRescource extends JsonResource
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
            'age' => $this->age,
            'gender' => $this->gender,
            'identity' => $this->identity,
            'identity_number' => $this->identity_number,
            'company_id' => $this->company_id,
            'company' => $this->company ? $this->company->name . ' (' . $this->batches()->where('company_id', $this->company_id)->first()->name . ')' : 'NO'
        ];
    }
}
