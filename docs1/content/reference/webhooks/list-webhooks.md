+++
title = "List Webhooks"
weight = 1
description = "Retrieve all webhook subscriptions"
tags = ["webhooks", "list"]
template = "doc"
method = "GET"
api_path = "/v1/webhooks"
+++

Returns all webhook subscriptions for the workspace.

## Parameters

{{ param(name="active", type="boolean", required="false", description="Filter by active status (default: all)") }}

## Example Request

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.pulse.dev/v1/webhooks
```

## Responses

{% response(status="200 OK", description="Returns a list of webhooks") %}
{
  "data": [
    {
      "id": "wh_hook123",
      "url": "https://example.com/webhooks/pulse",
      "events": ["project.created", "task.completed"],
      "active": true,
      "created_at": "2025-11-01T10:00:00Z"
    }
  ]
}
{% end %}
