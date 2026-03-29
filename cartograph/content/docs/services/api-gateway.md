+++
title = "API Gateway"
description = "Edge reverse proxy handling request routing, rate limiting, and TLS termination"
weight = 1
tags = ["service", "edge", "critical"]

[extra]
status = "healthy"
region = "Global"
provider = "Internal"
+++

## Service Overview

The API Gateway is the edge entry point for all client traffic. It handles TLS termination, request routing, rate limiting, and authentication token validation.

## Specifications

| Property | Value |
|----------|-------|
| Language | Go 1.22 |
| Repository | platform/api-gateway |
| Port | 443 (external), 8080 (internal) |
| Protocol | HTTP/2, gRPC |
| SLA Target | 99.99% |
| Owner | Platform Team |

## Dependencies

| Service | Type | Criticality | Fallback |
|---------|------|-------------|----------|
| auth-service | Sync (gRPC) | Critical | Token cache (5min TTL) |
| user-service | Sync (gRPC) | High | Cached user profiles |
| rate-limiter | Sync (Redis) | Medium | Allow-all on failure |
| config-service | Async (polling) | Low | Local config cache |

## Request Flow

```
Client Request
  ├── TLS Termination
  ├── Rate Limit Check
  ├── Auth Token Validation
  ├── Request Routing
  │   ├── /api/v2/users/* → user-service
  │   ├── /api/v2/orders/* → order-service
  │   └── /api/v2/search/* → search-service
  ├── Response Transformation
  └── Access Logging
```

## Configuration

```yaml
server:
  listen: ":8080"
  tls:
    cert: /etc/tls/server.crt
    key: /etc/tls/server.key

routes:
  - path: /api/v2/users
    upstream: user-service:8080
    timeout: 5s
    retries: 2
    circuit_breaker:
      threshold: 5
      timeout: 30s

rate_limit:
  default:
    requests: 1000
    window: 60s
  authenticated:
    requests: 5000
    window: 60s
```

## Deployment

| Region | Instances | Version | Last Deploy |
|--------|-----------|---------|-------------|
| US East | 6 | v2.4.1 | 2026-03-15 |
| EU West | 4 | v2.4.1 | 2026-03-15 |
| AP Southeast | 3 | v2.4.0 | 2026-03-10 |
