+++
title = "Content Delivery Network"
template = "doc"
description = "A geographically distributed network of servers that caches content close to end users."
tags = ["networking", "performance"]
[extra]
full_name = "Content Delivery Network"
category = "Networking"
+++

## Definition

A content delivery network is a system of edge servers placed in multiple geographic locations that cache and serve content on behalf of an origin server. Users are routed to the nearest healthy edge, reducing latency and offloading traffic from the origin.

## Cache Hierarchy

| Tier | Role |
|------|------|
| Edge | First point of contact for end users |
| Mid-Tier | Aggregates requests from multiple edges to reduce origin load |
| Shield | Optional layer that further consolidates requests before reaching the origin |
| Origin | The authoritative source of the content |

## Cache Control

Cache behavior is governed by HTTP response headers issued by the origin or rewritten by the edge. The `Cache-Control` header specifies maximum age, revalidation requirements, and visibility scope. Surrogate headers extend the model with directives that apply only to the CDN and are stripped before reaching the client.

```
Cache-Control: public, max-age=3600
Surrogate-Control: max-age=86400
```

## Invalidation Strategies

- Time-based expiration through `max-age` and `s-maxage`
- Explicit purge requests issued through the provider API
- Versioned URLs that bypass the existing cache entry by changing the request key
- Tag-based invalidation that flushes a logical group of objects in one call

## Operational Notes

A CDN absorbs traffic spikes and shields the origin from volumetric attacks at the network edge. Logs are typically aggregated through a streaming export and analyzed offline. Cache hit ratio is the primary efficiency metric and is monitored alongside origin offload percentage.

## Related Terms

- Origin Server
- Edge Computing
- HTTP Caching
- Anycast Routing
