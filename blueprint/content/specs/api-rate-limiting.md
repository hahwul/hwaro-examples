+++
title = "API Rate Limiting Framework"
date = "2024-01-28"
tags = ["api", "security", "performance"]
categories = ["backend"]
authors = ["engineering"]
description = "Specification for a distributed rate limiting framework using the token bucket algorithm with Redis-backed state."
status = "draft"
spec_id = "SPEC-003"
revision = "0.4"
spec_author = "API Gateway Team"
+++

## Abstract

This document proposes a distributed rate limiting framework for the public API. The framework uses a token bucket algorithm with Redis-backed state and supports per-client, per-endpoint, and global rate limits.

## Background

The current rate limiter is a simple in-process counter that resets every 60 seconds. It does not account for burst traffic, has no coordination across instances, and cannot differentiate between API tiers.

## Algorithm

The token bucket algorithm is chosen for its simplicity and burst-tolerance:

```
function allow_request(client_id, endpoint):
    key = "rate:{client_id}:{endpoint}"
    bucket = redis.get(key)

    if bucket is null:
        bucket = new_bucket(max_tokens, refill_rate)

    now = current_time()
    elapsed = now - bucket.last_refill
    tokens_to_add = elapsed * refill_rate
    bucket.tokens = min(max_tokens, bucket.tokens + tokens_to_add)
    bucket.last_refill = now

    if bucket.tokens >= 1:
        bucket.tokens -= 1
        redis.set(key, bucket, ttl=window_seconds)
        return ALLOW
    else:
        return DENY
```

## Rate Limit Tiers

| Tier | Requests/min | Burst Size | Use Case |
|------|-------------|------------|----------|
| Free | 60 | 10 | Public integrations |
| Standard | 600 | 50 | Paid customers |
| Enterprise | 6,000 | 500 | Enterprise contracts |
| Internal | Unlimited | -- | Service-to-service |

## Response Headers

All API responses include rate limit metadata:

```
X-RateLimit-Limit: 600
X-RateLimit-Remaining: 583
X-RateLimit-Reset: 1706400000
Retry-After: 12
```

When a client exceeds their limit, the API returns:

```json
{
  "error": "rate_limit_exceeded",
  "message": "Too many requests. Retry after 12 seconds.",
  "retry_after": 12
}
```

## Redis Architecture

### Key Design

- **Pattern**: `rate:{client_id}:{endpoint_group}`
- **TTL**: Matches the window duration (60s default)
- **Serialization**: MessagePack for compact storage

### Failure Mode

If Redis is unreachable, the rate limiter fails open (allows requests) and emits a metric for alerting. This prevents Redis outages from cascading into a full API outage.

## Monitoring

Key metrics to track:

- `rate_limiter.requests.allowed` - Counter of allowed requests
- `rate_limiter.requests.denied` - Counter of denied requests
- `rate_limiter.redis.latency_ms` - Redis operation latency
- `rate_limiter.redis.errors` - Redis connectivity errors
- `rate_limiter.fallback.active` - Whether fail-open mode is engaged

## Open Items

- Decide on sliding window vs. fixed window for the refill interval
- Evaluate whether to expose rate limit configuration via an admin API
- Define escalation policy for clients that consistently hit limits
