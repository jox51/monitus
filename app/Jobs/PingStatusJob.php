<?php

namespace App\Jobs;

use App\Events\BroadcastStatusChangedEvent;
use App\Models\Monitor;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class PingStatusJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(protected Monitor $monitor)
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $url = $this->monitor->site_url;
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_NOBODY, false);

        $response = curl_exec($ch);

        $httpStatus = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        $newStatus = $httpStatus >= 200 && $httpStatus < 400;
        $statusChanged = $this->monitor->status != $newStatus;

        if ($statusChanged) {
            event(new BroadcastStatusChangedEvent($this->monitor->id, $newStatus));
        };

        $this->monitor->update([
            'status' => $newStatus,
            'response' => $response,
            'response_code' => $httpStatus
        ]);
    }
}
