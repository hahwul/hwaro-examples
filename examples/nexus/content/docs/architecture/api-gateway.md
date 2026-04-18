+++
title = "API Gateway"
weight = 2
description = "Gateway routing patterns, rate limiting, and request transformation"
+++

## Overview

The Nexus API Gateway sits at the edge of the service mesh and serves as the single entry point for all external traffic. It handles authentication, rate limiting, request routing, and protocol translation before forwarding requests to internal microservices.

## Gateway Architecture

The gateway operates as a reverse proxy with a plugin-based middleware pipeline. Each incoming request passes through an ordered chain of middleware before reaching the target service.

### Request Pipeline

1. **TLS Termination** -- decrypt incoming HTTPS traffic
2. **Rate Limiting** -- enforce per-client and global rate limits
3. **Authentication** -- validate JWT tokens or API keys
4. **Authorization** -- check RBAC policies against the request
5. **Request Transform** -- modify headers, body, or path before forwarding
6. **Routing** -- match the request to a backend service
7. **Load Balancing** -- select a healthy upstream instance
8. **Response Transform** -- modify the response before returning to the client

## Route Configuration

Routes map external paths to internal services. Each route specifies matching rules, middleware, and upstream targets:

```yaml
# nexus-routes.yaml
apiVersion: nexus.io/v1
kind: Route
metadata:
  name: user-api
spec:
  match:
    prefix: /api/v2/users
    methods: [GET, POST, PUT, DELETE]
    headers:
      x-api-version: "2"
  middleware:
    - rateLimit:
        requests: 1000
        window: 60s
        keyBy: client-ip
    - auth:
        type: jwt
        issuer: https://auth.nexus.io
        audience: nexus-api
    - transform:
        request:
          addHeaders:
            x-request-id: "{{ uuid }}"
            x-forwarded-service: "api-gateway"
  upstream:
    service: user-service
    port: 8080
    timeout: 30s
    retries: 2
```

## Rate Limiting

The gateway supports multiple rate limiting strategies:

| Strategy | Key | Use Case |
|----------|-----|----------|
| Fixed Window | client-ip | General API protection |
| Sliding Window | api-key | Per-customer quotas |
| Token Bucket | endpoint | Burst-tolerant endpoints |
| Concurrent | client-ip | WebSocket connections |

### Configuration Example

```json
{
  "rateLimiting": {
    "global": {
      "requestsPerSecond": 10000,
      "burstSize": 500
    },
    "perClient": {
      "strategy": "sliding-window",
      "requests": 100,
      "window": "60s",
      "keyExtractor": "header:x-api-key"
    },
    "perEndpoint": {
      "/api/v2/auth/token": {
        "requests": 10,
        "window": "60s",
        "strategy": "fixed-window"
      }
    }
  }
}
```

When a client exceeds their rate limit, the gateway returns:

```
HTTP/1.1 429 Too Many Requests
Retry-After: 45
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1711640400
```

## Request Transformation

The gateway can modify requests and responses in-flight using transformation rules:

```yaml
transform:
  request:
    addHeaders:
      x-correlation-id: "{{ uuid }}"
      x-source: "external"
    removeHeaders:
      - x-internal-token
    rewritePath:
      from: /api/v2/users/(.*)
      to: /internal/users/$1
  response:
    addHeaders:
      x-served-by: "nexus-gateway"
      cache-control: "private, max-age=300"
    removeHeaders:
      - x-internal-trace-id
```

## Circuit Breaker

The gateway implements circuit breaker logic to protect downstream services from cascading failures:

```json
{
  "circuitBreaker": {
    "failureThreshold": 5,
    "successThreshold": 3,
    "timeout": "30s",
    "halfOpenRequests": 1,
    "monitoredExceptions": [
      "CONNECTION_TIMEOUT",
      "SERVICE_UNAVAILABLE"
    ]
  }
}
```

**Circuit states:**

- <span class="text-emerald-400 font-semibold">CLOSED</span> -- normal operation, requests flow through
- <span class="text-amber-400 font-semibold">OPEN</span> -- failures exceeded threshold, requests rejected immediately
- <span class="text-sky-400 font-semibold">HALF-OPEN</span> -- testing recovery, limited requests allowed through

## Canary Deployments

The gateway supports weighted traffic splitting for canary releases:

```yaml
apiVersion: nexus.io/v1
kind: TrafficSplit
metadata:
  name: user-service-canary
spec:
  service: user-service
  backends:
    - version: v3.1.2
      weight: 90
    - version: v3.2.0-rc1
      weight: 10
  sticky: true
  stickyKey: cookie:nexus-session
```

Monitor canary health through the observability plane before gradually increasing the weight of the new version.
