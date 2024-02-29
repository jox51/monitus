<?php

namespace App\Console\Commands;

use App\Jobs\PingStatusJob;
use App\Models\Monitor;
use Illuminate\Console\Command;

class CheckStatusCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:check-status';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'It checks the monitors for all site';

    /**
     * Execute the console command.
     */
    public function handle()
    {

        $monitors = Monitor::all();

        $monitors->each(function ($monitor) {
            PingStatusJob::dispatch($monitor)->onQueue('ping-status');
        });
    }
}
