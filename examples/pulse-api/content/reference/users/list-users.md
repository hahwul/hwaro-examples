+++
title = "List Users"
weight = 1
description = "Retrieve a paginated list of users in your workspace"
tags = ["users", "list"]
template = "doc"
method = "GET"
api_path = "/v1/users"
+++

Returns a paginated list of all users in the authenticated workspace.

## Parameters

{{ param(name="page", type="integer", required="false", description="Page number (default: 1)") }}
{{ param(name="per_page", type="integer", required="false", description="Items per page, max 100 (default: 20)") }}
{{ param(name="role", type="string", required="false", description="Filter by role: admin, member, viewer") }}

## Example Request

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  "https://api.pulse.dev/v1/users?page=1&per_page=10"
```

## Responses

{% response(status="200 OK", description="Returns a list of users") %}
{
  "data": [
    {
      "id": "usr_abc123",
      "name": "Alice Chen",
      "email": "alice@example.com",
      "role": "admin",
      "created_at": "2025-06-15T10:00:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 10,
    "total": 42
  }
}
{% end %}

{% response(status="401 Unauthorized", description="Invalid or missing API key") %}
{
  "error": {
    "code": "unauthorized",
    "message": "Invalid API key"
  }
}
{% end %}
