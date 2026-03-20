+++
title = "Create Project"
weight = 2
description = "Create a new project"
tags = ["projects", "create"]
template = "doc"
method = "POST"
api_path = "/v1/projects"
+++

Creates a new project in the workspace.

## Request Body

{{ param(name="name", type="string", required="true", description="Project name (max 100 characters)") }}
{{ param(name="description", type="string", required="false", description="Project description") }}
{{ param(name="owner_id", type="string", required="false", description="User ID of the project owner (defaults to authenticated user)") }}

## Example Request

```bash
curl -X POST \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"name": "Mobile App v2", "description": "React Native rewrite"}' \
  https://api.pulse.dev/v1/projects
```

## Responses

{% response(status="201 Created", description="Project created") %}
{
  "data": {
    "id": "prj_new456",
    "name": "Mobile App v2",
    "description": "React Native rewrite",
    "status": "active",
    "owner_id": "usr_abc123",
    "created_at": "2026-02-15T09:00:00Z"
  }
}
{% end %}

{% response(status="400 Bad Request", description="Invalid request body") %}
{
  "error": {
    "code": "missing_field",
    "message": "Field 'name' is required"
  }
}
{% end %}
