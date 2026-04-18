+++
title = "Recurring Jobs"
weight = 2
description = "Create and manage recurring scheduled jobs"
[taxonomies]
tags = ["scheduling", "jobs"]
+++

## Overview

Recurring jobs are long-lived scheduled tasks that execute repeatedly based on a cron expression or a fixed interval. Meridian manages the lifecycle, execution, and monitoring of these jobs across your infrastructure.

## Creating a Recurring Job

```bash
curl -X POST -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "nightly-data-sync",
    "description": "Synchronize user data with the analytics warehouse",
    "schedule": {
      "expression": "0 2 * * *",
      "timezone": "America/Chicago"
    },
    "callback": {
      "url": "https://app.example.com/hooks/data-sync",
      "method": "POST",
      "headers": {
        "X-Webhook-Secret": "whsec_abc123"
      },
      "body": {
        "action": "full_sync",
        "source": "meridian"
      }
    },
    "retry": {
      "max_attempts": 3,
      "backoff": "exponential"
    }
  }' \
  https://api.meridian.dev/v3/jobs
```

```json
{
  "id": "job_8xK2mP4nL7",
  "name": "nightly-data-sync",
  "status": "active",
  "schedule": {
    "expression": "0 2 * * *",
    "timezone": "America/Chicago",
    "description": "Every day at 02:00"
  },
  "next_run": "2026-04-03T02:00:00-05:00",
  "created_at": "2026-04-02T12:00:00Z"
}
```

## Job Lifecycle

Every recurring job moves through a defined set of states:

| Status       | Description                                              |
|-------------|----------------------------------------------------------|
| `active`    | Job is scheduled and will execute at the next run time    |
| `paused`    | Job exists but will not execute until resumed             |
| `executing` | Job callback is currently being delivered                 |
| `completed` | Job has been permanently stopped (terminal state)         |
| `failed`    | Last execution failed and all retries exhausted           |

## Listing Jobs

Retrieve all jobs for your account, optionally filtered by status:

```bash
curl -H "Authorization: Bearer $API_KEY" \
  "https://api.meridian.dev/v3/jobs?status=active&limit=20"
```

```json
{
  "jobs": [
    {
      "id": "job_8xK2mP4nL7",
      "name": "nightly-data-sync",
      "status": "active",
      "next_run": "2026-04-03T02:00:00-05:00",
      "last_run": "2026-04-02T02:00:00-05:00",
      "last_run_status": "success",
      "total_runs": 47,
      "total_failures": 1
    }
  ],
  "total": 1,
  "limit": 20,
  "offset": 0
}
```

## Pausing and Resuming

Pause a job to temporarily stop execution without deleting it:

```bash
# Pause
curl -X PATCH -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"status": "paused"}' \
  https://api.meridian.dev/v3/jobs/job_8xK2mP4nL7

# Resume
curl -X PATCH -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"status": "active"}' \
  https://api.meridian.dev/v3/jobs/job_8xK2mP4nL7
```

When resuming a paused job, the next run time is recalculated based on the current time and the cron expression. Missed runs during the pause window are not retroactively executed.

## Execution History

View the execution history for a specific job:

```bash
curl -H "Authorization: Bearer $API_KEY" \
  "https://api.meridian.dev/v3/jobs/job_8xK2mP4nL7/runs?limit=5"
```

```json
{
  "runs": [
    {
      "id": "run_q9W3kR7mN2",
      "job_id": "job_8xK2mP4nL7",
      "scheduled_at": "2026-04-02T02:00:00-05:00",
      "started_at": "2026-04-02T07:00:00.142Z",
      "completed_at": "2026-04-02T07:00:01.387Z",
      "duration_ms": 1245,
      "status": "success",
      "http_status": 200,
      "attempt": 1
    }
  ]
}
```

## Interval-Based Scheduling

For jobs that need to run at a fixed interval rather than a cron schedule, use the `interval` field:

```bash
curl -X POST -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "health-check",
    "schedule": {
      "interval": "PT5M"
    },
    "callback": {
      "url": "https://app.example.com/hooks/health",
      "method": "GET"
    }
  }' \
  https://api.meridian.dev/v3/jobs
```

Intervals are specified using ISO 8601 duration format:

| Duration | Meaning         |
|----------|-----------------|
| `PT30S`  | Every 30 seconds|
| `PT5M`   | Every 5 minutes |
| `PT1H`   | Every hour      |
| `P1D`    | Every day       |
| `P1W`    | Every week      |

## Deleting a Job

Permanently remove a job and all its execution history:

```bash
curl -X DELETE -H "Authorization: Bearer $API_KEY" \
  https://api.meridian.dev/v3/jobs/job_8xK2mP4nL7
```

This action is irreversible. Consider pausing instead if you may need the job again.
