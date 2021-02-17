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
        $company = 'NO';
        $batch = $this->batches()->where('company_id', $this->company_id)->first();
        if ($this->company) {
            $company = $this->company->name;
            $company .= $batch ? ' (' . $batch->name . ')': '';
        }

        return [
            'id' => $this->id,
            'name' => $this->name,
            'age' => $this->age,
            'gender' => $this->gender,
            'identity' => $this->identity,
            'travel_type' => $this->travel_type,
            'identity_number' => $this->identity_number,
            'company_id' => $this->company_id,
            'company' => $company
        ];
    }
}
