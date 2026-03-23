+++
title = "Pipeline Optimization Results"
date = "2026-03-15"
description = "Performance improvements from the Q1 infrastructure migration"
tags = ["infrastructure", "performance"]
+++

## Background

In January 2026, the data team initiated a migration from a single-node ClickHouse instance to a 3-node shared-nothing cluster. This report summarizes the measured performance impact after 6 weeks in production.

## Query Performance

| Query Type | Before | After | Improvement |
|---|---|---|---|
| Simple aggregation | 120ms | 42ms | 65% |
| Multi-table join | 2.4s | 890ms | 63% |
| Full scan (30-day) | 18.7s | 6.2s | 67% |
| Materialized view refresh | 45s | 12s | 73% |

## Ingestion Throughput

| Metric | Before | After |
|---|---|---|
| Peak throughput | 620/s | 1,100/s |
| Sustained throughput | 480/s | 847/s |
| Write latency (p99) | 210ms | 78ms |
| Backpressure events/day | 12 | 0 |

## Resource Utilization

The distributed setup uses more total resources but operates with significantly more headroom:

| Resource | Single Node | Cluster (total) | Per Node |
|---|---|---|---|
| CPU Usage | 78% | 51% | 17% |
| Memory Usage | 84% | 63% | 21% |
| Disk I/O | 92% | 48% | 16% |
| Network | 34% | 52% | 17% |

## Cost Impact

Monthly infrastructure cost increased from $2,400 to $3,100 (+29%). However, the elimination of backpressure events and improved query times reduced on-call incidents by 62%, translating to approximately 18 fewer engineering hours per month.

Net cost assessment: **positive ROI within 3 months** when factoring in engineering time savings.
