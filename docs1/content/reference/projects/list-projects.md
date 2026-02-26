+++
title = "List Projects"
weight = 1
description = "Retrieve all projects in the workspace"
tags = ["projects", "list"]
template = "doc"
method = "GET"
api_path = "/v1/projects"
+++

Returns a paginated list of all projects.

## Parameters

{{ param(name="page", type="integer", required="false", description="Page number (default: 1)") }}
{{ param(name="per_page", type="integer", required="false", description="Items per page, max 100 (default: 20)") }}
{{ param(name="status", type="string", required="false", description="Filter by status: active, archived") }}

## Example Request

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  "https://api.pulse.dev/v1/projects?status=active"
```

## Responses

{% response(status="200 OK", description="Returns a list of projects") %}
{
  "data": [
    {
      "id": "prj_xyz789",
      "name": "Website Redesign",
      "description": "Q1 website overhaul",
      "status": "active",
      "owner_id": "usr_abc123",
      "created_at": "2025-12-01T10:00:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "per_page": 20,
    "total": 8
  }
}
{% end %}
