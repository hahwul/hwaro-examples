+++
title = "Payloads"
description = "Webhook payload formats and delivery details"
tags = ["payloads", "webhooks"]
+++

# Payloads

When Relay delivers a webhook, it sends an HTTP POST request to the registered endpoint URL. This page documents the payload format, HTTP headers, and response handling.

## Delivery Format

Every webhook delivery includes the following HTTP headers:

| Header | Description | Example |
|--------|-------------|---------|
| `Content-Type` | Always `application/json` | `application/json` |
| `X-Relay-Event` | The event type | `deployment.completed` |
| `X-Relay-Delivery-ID` | Unique delivery identifier | `dlv_01H8N3PQRX5M` |
| `X-Relay-Signature` | HMAC-SHA256 signature | `sha256=a1b2c3d4...` |
| `X-Relay-Timestamp` | Delivery timestamp | `1710500700` |
| `User-Agent` | Relay user agent | `Relay/1.4.0` |

## Payload Structure

The request body contains the full event wrapped in a delivery envelope:

```json
{
  "delivery_id": "dlv_01H8N3PQRX5M7WKBT4GHJ2YN",
  "event": {
    "id": "evt_01H8MZXK9P4B7GQWRT5N6VJ3",
    "type": "repository.push",
    "source": "api.example.com",
    "timestamp": "2025-03-15T10:30:00Z",
    "data": {
      "repository": "acme/web-app",
      "branch": "main",
      "commits": [
        {
          "sha": "a1b2c3d4e5f6",
          "message": "Update API endpoint validation",
          "author": {
            "name": "Jane Doe",
            "email": "jdoe@example.com"
          },
          "timestamp": "2025-03-15T10:29:45Z"
        },
        {
          "sha": "f6e5d4c3b2a1",
          "message": "Add rate limiting middleware",
          "author": {
            "name": "John Smith",
            "email": "jsmith@example.com"
          },
          "timestamp": "2025-03-15T10:28:30Z"
        }
      ],
      "head_commit": "a1b2c3d4e5f6",
      "compare_url": "https://git.example.com/acme/web-app/compare/f6e5d4c3b2a1...a1b2c3d4e5f6"
    }
  },
  "endpoint": {
    "id": "ep_01H8KR4WMXN9",
    "url": "https://hooks.example.com/relay"
  },
  "attempt": 1,
  "max_attempts": 6
}
```

## Example Payloads

### Deployment Completed

```json
{
  "delivery_id": "dlv_01H8N4KQMW7R",
  "event": {
    "id": "evt_01H8N4JPLX6Q",
    "type": "deployment.completed",
    "source": "ci.example.com",
    "timestamp": "2025-03-15T14:20:00Z",
    "data": {
      "environment": "production",
      "service": "api-gateway",
      "version": "2.1.0",
      "previous_version": "2.0.3",
      "duration_seconds": 142,
      "status": "success",
      "deployed_by": "deploy-bot",
      "artifacts": [
        "api-gateway:2.1.0",
        "api-gateway-migrations:2.1.0"
      ]
    }
  },
  "attempt": 1,
  "max_attempts": 6
}
```

### Alert Fired

```json
{
  "delivery_id": "dlv_01H8N5MRWX8S",
  "event": {
    "id": "evt_01H8N5LQVW7R",
    "type": "alert.fired",
    "source": "monitor.example.com",
    "timestamp": "2025-03-15T14:35:00Z",
    "data": {
      "alert_name": "high_error_rate",
      "severity": "critical",
      "metric": "http_errors_5xx_rate",
      "value": 12.5,
      "threshold": 5.0,
      "unit": "percent",
      "duration": "5m",
      "labels": {
        "service": "api-gateway",
        "region": "us-east-1"
      }
    }
  },
  "attempt": 1,
  "max_attempts": 6
}
```

## Response Handling

Relay interprets the HTTP response from your endpoint to determine delivery status:

| Status Code | Result | Action |
|-------------|--------|--------|
| 200-299 | Success | Delivery marked as completed |
| 400-499 | Client error | Delivery marked as failed, no retry |
| 500-599 | Server error | Delivery retried with backoff |
| Timeout | Timeout | Delivery retried with backoff |
| Connection error | Network failure | Delivery retried with backoff |

> Relay waits up to 30 seconds for a response by default. If your webhook handler requires more time, increase the `delivery.timeout` setting in your configuration.

## Idempotency

Relay may deliver the same event more than once in failure scenarios. Use the `X-Relay-Delivery-ID` header or the `delivery_id` field in the payload to detect and deduplicate repeated deliveries:

```python
def handle_webhook(request):
    delivery_id = request.headers.get("X-Relay-Delivery-ID")

    if already_processed(delivery_id):
        return Response(status=200)

    process_event(request.json)
    mark_processed(delivery_id)

    return Response(status=200)
```
