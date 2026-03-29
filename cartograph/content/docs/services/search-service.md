+++
title = "Search Service"
description = "Full-text search service powered by OpenSearch with multi-tenant index management"
weight = 3
tags = ["service", "data", "high"]

[extra]
status = "degraded"
region = "Global"
provider = "Internal"
+++

## Service Overview

The Search Service provides full-text search capabilities across all platform data. It manages index lifecycle, query routing, and relevance tuning.

## Specifications

| Property | Value |
|----------|-------|
| Language | Java 21 |
| Repository | platform/search-service |
| Port | 9200 (API), 9300 (cluster) |
| Protocol | HTTP/REST |
| SLA Target | 99.95% |
| Owner | Data Team |

## Current Status

> **Degraded** -- AP Southeast region experiencing elevated search latency due to ongoing index migration from OpenSearch 2.x to 2.11. US East and EU West operating normally.

| Metric | US East | EU West | AP Southeast |
|--------|---------|---------|--------------|
| p50 latency | 12ms | 15ms | 210ms |
| p99 latency | 85ms | 92ms | 1.2s |
| Error rate | 0.01% | 0.02% | 0.15% |

## Index Architecture

```
Platform Indices
  ├── users-v3 (3 primary, 1 replica per AZ)
  ├── orders-v5 (5 primary, 1 replica per AZ)
  ├── products-v2 (3 primary, 1 replica per AZ)
  └── audit-logs-{date} (daily rollover, 90d retention)
```

## Dependencies

| Service | Type | Criticality | Fallback |
|---------|------|-------------|----------|
| OpenSearch cluster | Sync | Critical | Read replicas |
| Redis (cache) | Sync | Medium | Direct query to OpenSearch |
| Kafka (indexing) | Async | High | Retry queue with 24h buffer |
| config-service | Async | Low | Local config cache |
