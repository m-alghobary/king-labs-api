<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class FinancialDataReportResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $result = [];
        for ($i = 0; $i < count($this->agents); $i++) {
            $agent = $this->agents[$i];

            array_push($result, [
                'id' => $this->id,
                'barnch' => $this->branch->name,
                'date' => Carbon::parse($this->created_at)->format('Y/m/d'),
                'agent' => $agent['name'],
                'identityNo' => $agent['identity_number'],
                'amount' => $this->total_amount + $this->fee,
                'discount' => $this->discount,
                'fee' => $this->fee,
                'duplicate' => $i > 0
            ]);
        }

        return $result;
    }
}
