+++
title = "Update User"
weight = 4
description = "Update a user's profile or role"
tags = ["users", "update"]
template = "doc"
method = "PATCH"
api_path = "/v1/users/:id"
+++

Updates the specified user's information. Only provided fields are updated.

## Path Parameters

{{ param(name="id", type="string", required="true", description="The user ID to update") }}

## Request Body

{{ param(name="name", type="string", required="false", description="Updated full name") }}
{{ param(name="role", type="string", required="false", description="Updated role: admin, member, viewer") }}

## Example Request

```bash
curl -X PATCH \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"role": "admin"}' \
  https://api.pulse.dev/v1/users/usr_abc123
```

## Responses

{% response(status="200 OK", description="User updated successfully") %}
{
  "data": {
    "id": "usr_abc123",
    "name": "Alice Chen",
    "email": "alice@example.com",
    "role": "admin",
    "created_at": "2025-06-15T10:00:00Z"
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
