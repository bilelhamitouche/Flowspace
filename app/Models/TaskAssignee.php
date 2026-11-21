<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

#[Fillable(['task_id', 'assigned_by', 'assigned_to'])]
class TaskAssignee extends Model
{
    public function assigner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'assigned_by');
    }

    public function assignee(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'assigned_to');
    }

    public function task(): BelongsTo
    {
        return $this->belongsTo(Task::class);
    }
}
