<?php

namespace App\Http\Controllers;

use App\Http\Requests\MonitorStoreRequest;
use App\Models\Monitor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MonitorController extends Controller
{
    public function store(MonitorStoreRequest $request)
    {
        // relationship method of adding user id
        // auth()->user()->monitors()->create($request->validated());

        // prepareForValidation method
        Monitor::create($request->validated());
        return to_route('home');
    }
    public function create()
    {
        return Inertia::render('site/create');
    }

    public function destroy(Monitor $monitor)
    {

        $monitor->delete();
        return to_route('home');
    }

    public function edit(Monitor $monitor)
    {

        return Inertia::render('Site/Edit', [
            'monitor' => $monitor
        ]);
    }

    public function update(MonitorStoreRequest $request, Monitor $monitor)
    {
        $monitor->update($request->validated());
        return to_route('home');
    }
}
