+++
title = "Error Handling"
weight = 3
description = "Handle API errors gracefully in your integration"
tags = ["errors", "debugging"]
template = "doc"
toc = true
+++

## Overview

The Pulse API uses standard HTTP status codes and returns consistent error objects to help you handle failures gracefully.

## Error Response Format

All errors follow this structure:

```json
{
  "error": {
    "code": "not_found",
    "message": "The requested user was not found.",
    "request_id": "req_abc123"
  }
}
```

## Status Codes

| Code | Meaning |
|------|---------|
| `200` | Success |
| `201` | Created |
| `400` | Bad Request — invalid parameters |
| `401` | Unauthorized — invalid or missing API key |
| `403` | Forbidden — insufficient permissions |
| `404` | Not Found — resource doesn't exist |
| `409` | Conflict — resource already exists |
| `422` | Unprocessable — validation failed |
| `429` | Too Many Requests — rate limit exceeded |
| `500` | Internal Error — something went wrong on our end |

## Error Codes

| Code | Description |
|------|-------------|
| `invalid_request` | The request body is malformed |
| `missing_field` | A required field is missing |
| `invalid_field` | A field value is invalid |
| `not_found` | The requested resource doesn't exist |
| `already_exists` | A resource with this identifier already exists |
| `rate_limit_exceeded` | You've exceeded the rate limit |
| `internal_error` | An unexpected error occurred |

## Retry Strategy

- **4xx errors**: Fix the request and retry (except 429 — wait and retry)
- **5xx errors**: Retry with exponential backoff
- **Network errors**: Retry with exponential backoff
- Always include a maximum retry count (recommended: 3)
