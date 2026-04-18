+++
title = "Error Handling"
weight = 3
description = "Error handling, retry strategies, and failure notifications"
[taxonomies]
tags = ["scheduling", "errors"]
+++

## Overview

Distributed scheduling introduces failure modes that do not exist in synchronous systems. Network timeouts, server errors, and transient outages are expected. Meridian provides configurable retry strategies and failure notifications to help you build resilient scheduled workflows.

## Retry Configuration

Every job can define a retry policy that controls how Meridian handles callback failures:

```json
{
  "retry": {
    "max_attempts": 5,
    "backoff": "exponential",
    "initial_delay": "PT10S",
    "max_delay": "PT10M",
    "retry_on": [502, 503, 504]
  }
}
```

### Retry Parameters

| Parameter       | Type     | Default        | Description                                      |
|----------------|----------|----------------|--------------------------------------------------|
| `max_attempts` | integer  | 3              | Maximum number of delivery attempts               |
| `backoff`      | string   | `exponential`  | Backoff strategy: `fixed`, `linear`, `exponential`|
| `initial_delay`| string   | `PT10S`        | Delay before the first retry (ISO 8601 duration)  |
| `max_delay`    | string   | `PT5M`         | Maximum delay between retries                     |
| `retry_on`     | int[]    | [500-599]      | HTTP status codes that trigger a retry            |

## Backoff Strategies

### Fixed Backoff

Every retry waits the same amount of time:

```
Attempt 1: immediate
Attempt 2: +10s
Attempt 3: +10s
Attempt 4: +10s
```

### Linear Backoff

Each retry waits incrementally longer:

```
Attempt 1: immediate
Attempt 2: +10s
Attempt 3: +20s
Attempt 4: +30s
```

### Exponential Backoff

Each retry doubles the wait time (with jitter), capped at `max_delay`:

```
Attempt 1: immediate
Attempt 2: +10s  (+ up to 2s jitter)
Attempt 3: +20s  (+ up to 4s jitter)
Attempt 4: +40s  (+ up to 8s jitter)
Attempt 5: +80s  (+ up to 16s jitter)
```

Jitter prevents retry storms when many jobs fail simultaneously (for example, during an upstream outage).

## Failure Detection

Meridian considers a callback execution to have failed when any of the following conditions are met:

| Condition                  | Description                                          |
|---------------------------|------------------------------------------------------|
| HTTP status 4xx or 5xx    | The callback endpoint returned an error status       |
| Connection timeout         | Could not establish a TCP connection within 10s      |
| Read timeout               | Response was not fully received within 30s           |
| TLS handshake failure      | Certificate validation failed                        |
| DNS resolution failure     | Could not resolve the callback hostname              |

Successful execution requires an HTTP 2xx response received within the timeout window.

## Dead Letter Queue

When all retry attempts are exhausted, the failed execution is placed in a dead letter queue (DLQ). You can inspect and replay DLQ items:

```bash
# List dead letter items
curl -H "Authorization: Bearer $API_KEY" \
  "https://api.meridian.dev/v3/jobs/job_8xK2mP4nL7/dlq"
```

```json
{
  "items": [
    {
      "id": "dlq_mN4kR8pW2q",
      "run_id": "run_q9W3kR7mN2",
      "job_id": "job_8xK2mP4nL7",
      "failed_at": "2026-04-02T07:02:45Z",
      "attempts": 5,
      "last_error": "Connection timeout after 10000ms",
      "last_http_status": null,
      "payload": {
        "action": "full_sync",
        "source": "meridian"
      }
    }
  ]
}
```

### Replaying Failed Executions

```bash
curl -X POST -H "Authorization: Bearer $API_KEY" \
  "https://api.meridian.dev/v3/jobs/job_8xK2mP4nL7/dlq/dlq_mN4kR8pW2q/replay"
```

This re-enqueues the execution with the original payload and applies the retry policy from scratch.

## Failure Notifications

Configure webhook or email notifications for job failures:

```bash
curl -X PUT -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "notifications": {
      "on_failure": {
        "webhook": "https://app.example.com/hooks/alerts",
        "email": ["ops@example.com"],
        "after_attempts": 3
      },
      "on_dlq": {
        "webhook": "https://app.example.com/hooks/alerts",
        "email": ["ops@example.com", "oncall@example.com"]
      }
    }
  }' \
  https://api.meridian.dev/v3/jobs/job_8xK2mP4nL7/notifications
```

The `after_attempts` field controls when failure notifications fire. Setting it to 3 means you only get notified after the third consecutive failure, reducing noise from transient errors.

## Circuit Breaker

Meridian implements a circuit breaker pattern. If a job fails 10 consecutive times, the job is automatically paused and a `circuit_open` notification is sent. This prevents wasted resources on a persistently failing endpoint.

To resume the job after fixing the underlying issue:

```bash
curl -X PATCH -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"status": "active"}' \
  https://api.meridian.dev/v3/jobs/job_8xK2mP4nL7
```

## Monitoring Best Practices

- Set `after_attempts` to at least 2 to avoid alerts on transient failures
- Use exponential backoff for external API callbacks
- Monitor the DLQ size as a key operational metric
- Configure email notifications as a fallback for webhook-based alerting
- Review execution history weekly to identify patterns in failures
