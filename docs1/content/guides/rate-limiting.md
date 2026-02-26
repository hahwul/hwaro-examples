+++
title = "Rate Limiting"
weight = 2
description = "Understand API rate limits and best practices"
tags = ["limits", "performance"]
template = "doc"
toc = true
+++

## Overview

The Pulse API enforces rate limits to ensure fair usage and platform stability. Limits are applied per API key.

## Default Limits

| Plan | Requests/minute | Requests/day |
|------|-----------------|--------------|
| Free | 60 | 10,000 |
| Pro | 300 | 100,000 |
| Enterprise | 1,000 | Unlimited |

## Rate Limit Headers

Every response includes rate limit information:

```
X-RateLimit-Limit: 300
X-RateLimit-Remaining: 297
X-RateLimit-Reset: 1706234400
```

| Header | Description |
|--------|-------------|
| `X-RateLimit-Limit` | Maximum requests per window |
| `X-RateLimit-Remaining` | Requests remaining in current window |
| `X-RateLimit-Reset` | Unix timestamp when the window resets |

## Handling 429 Responses

When you exceed the rate limit, the API returns a `429 Too Many Requests` response:

```json
{
  "error": {
    "code": "rate_limit_exceeded",
    "message": "Rate limit exceeded. Try again in 45 seconds.",
    "retry_after": 45
  }
}
```

## Best Practices

- **Implement exponential backoff** — wait 1s, 2s, 4s, etc. between retries
- **Cache responses** — reduce unnecessary API calls
- **Use webhooks** — subscribe to events instead of polling
- **Batch requests** — use bulk endpoints where available
