<?php

namespace App\Http\Controllers;

use App\Models\SocialAccount;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Laravel\Socialite\Socialite;

class SocialLoginController extends Controller
{
    public function callback(string $provider = 'google')
    {
        $providerUser = Socialite::driver($provider)->user();

        $providerId = $providerUser->getId();
        $email = $providerUser->getEmail();
        $name = $providerUser->getName();

        $user = DB::transaction(function () use (
            $providerId, $email, $name
        ) {
            $socialAccount = SocialAccount::where('provider', 'google')
                ->where('provider_id', $providerId)
                ->first();
            if ($socialAccount) {
                return $socialAccount->user;
            }

            $user = User::where('email', $email)->first();

            if (! $user) {
                $user = User::create([
                    'name' => $name,
                    'email' => $email,
                    'password' => bcrypt(Str::random(32)),
                ]);
            }

            $user->socialAccounts()->create(['provider' => 'google', 'provider_id' => $providerId]);

            return $user;
        });

        Auth::login($user);

        request()->session()->regenerate();

        return redirect()->intended(route('dashboard'));
    }

    public function redirect(string $provider = 'google')
    {
        return Socialite::driver($provider)->redirect();
    }
}
