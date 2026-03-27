+++
title = "Rate Limiting"
template = "doc"
description = "Controlling the number of requests a client can make within a time window."
tags = ["security", "performance"]
[extra]
full_name = "Rate Limiting"
category = "Security"
+++

## Definition

Rate limiting is a technique used to control the number of requests a client can make to a server within a specified time window. It protects services from abuse, prevents resource exhaustion, and ensures fair usage.

## Common Algorithms

### Fixed Window

Counts requests in fixed time intervals (e.g., 100 requests per minute). Simple but can allow burst traffic at window boundaries.

### Sliding Window

Tracks requests over a rolling time period. Smoother than fixed window, but requires more memory.

### Token Bucket

Tokens are added to a bucket at a fixed rate. Each request consumes a token. Allows short bursts while maintaining an average rate.

## Response Headers

```
HTTP/1.1 200 OK
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 57
X-RateLimit-Reset: 1625097600
```

When the limit is exceeded:

```
HTTP/1.1 429 Too Many Requests
Retry-After: 30
```

## Related Terms

- Throttling
- Backpressure
- Circuit Breaker
