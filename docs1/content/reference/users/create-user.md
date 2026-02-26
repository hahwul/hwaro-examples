+++
title = "Create User"
weight = 3
description = "Invite a new user to the workspace"
tags = ["users", "create"]
template = "doc"
method = "POST"
api_path = "/v1/users"
+++

Creates a new user and sends an invitation email.

## Request Body

{{ param(name="name", type="string", required="true", description="Full name of the user") }}
{{ param(name="email", type="string", required="true", description="Email address (must be unique in workspace)") }}
{{ param(name="role", type="string", required="false", description="User role: admin, member, viewer (default: member)") }}

## Example Request

```bash
curl -X POST \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"name": "Bob Smith", "email": "bob@example.com", "role": "member"}' \
  https://api.pulse.dev/v1/users
```

## Responses

{% response(status="201 Created", description="User created successfully") %}
{
  "data": {
    "id": "usr_def456",
    "name": "Bob Smith",
    "email": "bob@example.com",
    "role": "member",
    "created_at": "2026-02-01T09:00:00Z"
  }
}
{% end %}

{% response(status="409 Conflict", description="Email already exists") %}
{
  "error": {
    "code": "already_exists",
    "message": "A user with this email already exists"
  }
}
{% end %}
