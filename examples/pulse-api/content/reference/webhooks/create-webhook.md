+++
title = "Create Webhook"
weight = 2
description = "Subscribe to events with a webhook endpoint"
tags = ["webhooks", "create"]
template = "doc"
method = "POST"
api_path = "/v1/webhooks"
+++

Creates a new webhook subscription. Pulse will send POST requests to the specified URL when matching events occur.

## Request Body

{{ param(name="url", type="string", required="true", description="HTTPS endpoint URL to receive webhook events") }}
{{ param(name="events", type="array", required="true", description="Event types to subscribe to (comma-separated)") }}
{{ param(name="secret", type="string", required="false", description="Secret for webhook signature verification") }}

## Available Events

| Event | Description |
|-------|-------------|
| `project.created` | A new project was created |
| `project.archived` | A project was archived |
| `task.created` | A new task was created |
| `task.completed` | A task was marked complete |
| `user.invited` | A new user was invited |
| `user.removed` | A user was removed |

## Example Request

```bash
curl -X POST \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com/webhooks", "events": ["task.completed", "project.created"], "secret": "whsec_abc123"}' \
  https://api.pulse.dev/v1/webhooks
```

## Responses

{% response(status="201 Created", description="Webhook created") %}
{
  "data": {
    "id": "wh_new789",
    "url": "https://example.com/webhooks",
    "events": ["task.completed", "project.created"],
    "active": true,
    "created_at": "2026-02-20T09:00:00Z"
  }
}
{% end %}

{% response(status="400 Bad Request", description="Invalid URL or events") %}
{
  "error": {
    "code": "invalid_field",
    "message": "URL must use HTTPS"
  }
}
{% end %}
