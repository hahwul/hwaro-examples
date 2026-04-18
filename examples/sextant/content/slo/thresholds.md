+++
title = "Thresholds"
description = "Approved SLO threshold tables for production services."
weight = 2
+++

## API Gateway

| SLI | SLO Target | Warning | Critical | Window |
|-----|-----------|---------|----------|--------|
| Availability | 99.95% | Below 99.97% | Below 99.95% | 30 days |
| Latency (p95) | 400ms | Above 350ms | Above 400ms | 1 hour |
| Latency (p99) | 1200ms | Above 1000ms | Above 1200ms | 1 hour |
| Error Rate | 0.1% | Above 0.08% | Above 0.1% | 15 min |

## Authentication Service

| SLI | SLO Target | Warning | Critical | Window |
|-----|-----------|---------|----------|--------|
| Availability | 99.99% | Below 99.995% | Below 99.99% | 30 days |
| Login Latency (p95) | 300ms | Above 250ms | Above 300ms | 1 hour |
| Token Validation (p95) | 50ms | Above 40ms | Above 50ms | 1 hour |
| Error Rate | 0.05% | Above 0.03% | Above 0.05% | 15 min |

## Data Pipeline

| SLI | SLO Target | Warning | Critical | Window |
|-----|-----------|---------|----------|--------|
| Freshness | 15 min lag | Above 10 min | Above 15 min | Rolling |
| Completeness | 99.9% | Below 99.95% | Below 99.9% | 24 hours |
| Correctness | 99.99% | Below 99.995% | Below 99.99% | 7 days |
| Throughput | 10k events/sec | Below 12k/sec | Below 10k/sec | 5 min |

## Search Service

| SLI | SLO Target | Warning | Critical | Window |
|-----|-----------|---------|----------|--------|
| Availability | 99.9% | Below 99.95% | Below 99.9% | 30 days |
| Query Latency (p95) | 200ms | Above 180ms | Above 200ms | 1 hour |
| Index Freshness | 5 min lag | Above 3 min | Above 5 min | Rolling |
| Relevance (NDCG@10) | 0.75 | Below 0.78 | Below 0.75 | 7 days |

## Notification Service

| SLI | SLO Target | Warning | Critical | Window |
|-----|-----------|---------|----------|--------|
| Delivery Rate | 99.5% | Below 99.7% | Below 99.5% | 24 hours |
| Delivery Latency (p95) | 30 sec | Above 20 sec | Above 30 sec | 1 hour |
| Duplicate Rate | 0.01% | Above 0.008% | Above 0.01% | 24 hours |

## Alerting Rules

Thresholds are evaluated at two severity levels:

### Warning

A warning alert fires when the SLI approaches the SLO boundary. It is informational and does not page on-call. Warnings appear in Slack and on the team dashboard.

### Critical

A critical alert fires when the SLI violates the SLO target. It pages the on-call engineer and opens an incident ticket automatically.

### Burn Rate Windows

For availability SLOs, alerts use a multi-window burn rate strategy:

| Alert Type | Short Window | Long Window | Burn Rate |
|-----------|-------------|-------------|-----------|
| Page (fast burn) | 5 min | 1 hour | 14.4x |
| Page (slow burn) | 30 min | 6 hours | 6x |
| Ticket | 2 hours | 3 days | 1x |

A "14.4x burn rate" means the service is consuming its 30-day error budget 14.4 times faster than expected. At this rate, the entire budget would be exhausted in roughly 2 days.
