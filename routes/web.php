<?php

use App\Http\Controllers\SocialLoginController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('/dashboard', 'dashboard')->name('dashboard');
});

Route::get('/auth/google', [SocialLoginController::class, 'redirect'])
    ->name('auth.google');

Route::get('/auth/google/callback', [SocialLoginController::class, 'callback'])
    ->name('auth.google.callback');
