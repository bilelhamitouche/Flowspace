<?php

namespace App\Actions;

use App\Models\User;
use App\Models\Workspace;

class CreateDefaultWorkspace
{
    public function handle(User $user): Workspace
    {
        $workspace = Workspace::create([
            'name' => "{$user->name}'s workspace",
        ]);

        $workspace->members()->create([
            'user_id' => $user->id,
            'role' => 'owner',
        ]);

        return $workspace;
    }
}
