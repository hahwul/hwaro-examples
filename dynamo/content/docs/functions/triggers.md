+++
title = "Triggers"
description = "Configure event triggers for Dynamo functions"
tags = ["triggers", "events", "dynamo"]
+++

# Triggers

Triggers define the event sources that invoke your functions. Each function has exactly one trigger configured in its `config.yaml`. Dynamo normalizes all event types into a common envelope before passing them to your handler.

## Trigger Types

| Type | Invocation | Delivery | Use Case |
|------|-----------|----------|----------|
| `http` | Synchronous | Exactly-once | REST APIs, webhooks, web applications |
| `queue` | Asynchronous | At-least-once | Background jobs, order processing |
| `timer` | Asynchronous | Best-effort | Scheduled reports, cleanup tasks |
| `storage` | Asynchronous | At-least-once | File processing, image transforms |
| `stream` | Asynchronous | Ordered, at-least-once | Change data capture, event sourcing |

## HTTP Trigger

HTTP triggers expose your function as an API endpoint through the Dynamo Gateway:

```yaml
trigger:
  type: http
  method: POST
  path: /api/orders
  cors:
    enabled: true
    origins: ["https://app.example.com"]
    methods: ["GET", "POST", "OPTIONS"]
    headers: ["Content-Type", "Authorization"]
  auth:
    type: jwt
    issuer: https://auth.example.com
    audience: api.example.com
```

The handler receives a normalized request object:

```javascript
export async function main(event, context) {
  const body = JSON.parse(event.body);
  const userId = event.headers['x-user-id'];

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ orderId: 'ord_a1b2c3', userId })
  };
}
```

## Queue Trigger

Queue triggers consume messages from a message broker topic:

```yaml
trigger:
  type: queue
  source: orders-queue
  batch_size: 10
  batch_window: 5
  dead_letter_queue: orders-dlq
  max_retries: 3
  visibility_timeout: 60
```

The handler receives a batch of messages:

```python
def main(event, context):
    for record in event["records"]:
        order = json.loads(record["body"])
        process_order(order)

    return {"batch_item_failures": []}
```

## Timer Trigger

Timer triggers invoke functions on a recurring schedule using cron expressions:

```yaml
trigger:
  type: timer
  schedule: "0 */6 * * *"
  timezone: UTC
  payload:
    report_type: daily_summary
```

Common cron patterns:

| Expression | Schedule |
|-----------|----------|
| `* * * * *` | Every minute |
| `0 * * * *` | Every hour |
| `0 */6 * * *` | Every 6 hours |
| `0 0 * * *` | Daily at midnight |
| `0 0 * * 1` | Every Monday at midnight |
| `0 0 1 * *` | First day of each month |

## Storage Trigger

Storage triggers fire when objects are created, modified, or deleted in an object store:

```yaml
trigger:
  type: storage
  bucket: uploads
  events:
    - object:created
    - object:deleted
  prefix: images/
  suffix: .jpg
```

The event includes object metadata:

```python
def main(event, context):
    for record in event["records"]:
        bucket = record["bucket"]
        key = record["key"]
        size = record["size"]
        event_type = record["event_type"]

        if event_type == "object:created":
            process_upload(bucket, key)
```

## Stream Trigger

Stream triggers process ordered records from a change data capture stream:

```yaml
trigger:
  type: stream
  source: user-events-stream
  starting_position: latest
  batch_size: 100
  parallelization_factor: 2
  max_batching_window: 10
```

## Event Envelope

All trigger types deliver events in a common envelope format:

```json
{
  "id": "evt_f8a2b1c3d4e5",
  "source": "http/gateway",
  "type": "http.request",
  "timestamp": "2025-03-15T10:30:00Z",
  "data": { },
  "metadata": {
    "function": "process-order",
    "region": "us-east-1",
    "attempt": 1
  }
}
```

## CLI Commands

List all triggers configured in the current project:

```bash
dynamo triggers list
```

```
FUNCTION         TRIGGER   SOURCE              STATUS
process-order    queue     orders-queue         active
send-email       queue     email-queue          active
generate-report  timer     0 0 * * *            active
resize-image     storage   uploads/images/      active
api-handler      http      POST /api/orders     active
```

Test a trigger locally by sending a synthetic event:

```bash
dynamo triggers test process-order --event '{"body": "{\"item\": \"widget\"}"}'
```

> When using queue triggers with batch processing, return a `batch_item_failures` array containing the message IDs of any records that failed processing. Dynamo will retry only those specific messages.
