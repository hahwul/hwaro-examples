+++
title = "Response Times"
weight = 1
description = "API and page load latency percentiles"
tags = ["performance", "latency"]
+++

## Response Time Metrics

Monitoring p50, p95, and p99 latency across all endpoints.

### API Latency (Last 7 Days)

| Endpoint | p50 | p95 | p99 | SLO |
|----------|-----|-----|-----|-----|
| GET /api/users | 12ms | 45ms | 120ms | < 200ms |
| POST /api/orders | 34ms | 89ms | 210ms | < 500ms |
| GET /api/products | 8ms | 28ms | 75ms | < 200ms |
| GET /api/search | 52ms | 180ms | 450ms | < 500ms |
| POST /api/webhooks | 18ms | 62ms | 155ms | < 300ms |

All endpoints are currently within their SLO targets.

### Page Load Times

- **First Contentful Paint**: 0.8s (target: < 1.5s)
- **Largest Contentful Paint**: 1.4s (target: < 2.5s)
- **Time to Interactive**: 1.9s (target: < 3.0s)
- **Cumulative Layout Shift**: 0.02 (target: < 0.1)
