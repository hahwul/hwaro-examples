+++
title = "Get User"
weight = 2
description = "Retrieve a single user by ID"
tags = ["users", "read"]
template = "doc"
method = "GET"
api_path = "/v1/users/:id"
+++

Returns the details of a specific user.

## Path Parameters

{{ param(name="id", type="string", required="true", description="The user ID (e.g., usr_abc123)") }}

## Example Request

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.pulse.dev/v1/users/usr_abc123
```

## Responses

{% response(status="200 OK", description="Returns the user object") %}
{
  "data": {
    "id": "usr_abc123",
    "name": "Alice Chen",
    "email": "alice@example.com",
    "role": "admin",
    "avatar_url": "https://avatars.pulse.dev/usr_abc123.jpg",
    "created_at": "2025-06-15T10:00:00Z",
    "last_active_at": "2026-01-20T14:30:00Z"
  }
}
{% end %}

{% response(status="404 Not Found", description="User does not exist") %}
{
  "error": {
    "code": "not_found",
    "message": "User not found"
  }
}
{% end %}
