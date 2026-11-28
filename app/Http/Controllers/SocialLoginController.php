<?php

namespace App\Http\Controllers;

use App\Actions\CreateDefaultWorkspace;
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
        $avatar = $providerUser->getAvatar();

        $user = DB::transaction(function () use (
            $providerId, $email, $name, $avatar, $provider
        ) {
            $socialAccount = SocialAccount::where('provider', $provider)
                ->where('provider_id', $providerId)
                ->first();
            if ($socialAccount) {
                $user = $socialAccount->user;
            } else {
                $user = User::where('email', $email)->first();
            }

            if (! $user) {
                $user = User::create([
                    'name' => $name,
                    'email' => $email,
                    'avatar' => $avatar,
                    'password' => bcrypt(Str::random(32)),
                ]);
                app(CreateDefaultWorkspace::class)->handle($user);
            } else {
                if (! $user->avatar && $avatar) {
                    $user->update(['avatar' => $avatar]);
                }
                $user->socialAccounts()->create(['provider' => $provider, 'provider_id' => $providerId]);
            }

            return $user;
        });

        Auth::login($user, remember: true);

        request()->session()->regenerate();

        return redirect()->intended(route('dashboard'));
    }

    public function redirect(string $provider = 'google')
    {
        return Socialite::driver($provider)->redirect();
    }
}
