+++
title = "API Reference"
weight = 3
sort_by = "weight"
+++

# API Reference

This section documents the full API surface of the Anthology SDK. Every method, parameter, and return type is described with examples in Python, JavaScript, and Go.

## Base URL

All API requests are made against:

```
https://api.anthology.io/v2
```

## Authentication

Every request must include either an API key in the `Authorization` header or a valid OAuth access token. See the [Authentication]({{ base_url }}/docs/getting-started/authentication/) guide for details.

## Response Format

All successful responses return a JSON object with a `data` field. List endpoints also include `pagination` metadata:

```json
{
  "data": { ... },
  "pagination": {
    "cursor": "cur_abc123",
    "has_more": true
  }
}
```

## In This Section

- **Resources** -- CRUD operations for the primary resource type
- **Pagination** -- Cursor-based pagination across list endpoints
- **Webhooks** -- Event subscriptions and payload verification
