+++
title = "User Events"
date = "2026-03-20"
description = "Behavioral tracking events from web and mobile clients"
weight = 1
tags = ["behavioral", "real-time", "high-volume"]

[extra]
records = "1,247,832"
throughput = "324/s"
quality_score = "94"
category = "behavioral"
+++

## Overview

The `user_events` dataset captures all behavioral interactions from web and mobile clients. Events are streamed in real-time via a gRPC collector and processed through the Flink pipeline with sub-second latency.

## Schema

| Field | Type | Description |
|---|---|---|
| event_id | UUID | Unique event identifier |
| user_id | STRING | Anonymized user identifier |
| session_id | STRING | Browser/app session token |
| event_type | ENUM | click, view, scroll, submit, navigate |
| timestamp | TIMESTAMP | Event timestamp (UTC) |
| properties | JSON | Event-specific metadata |
| device_type | STRING | desktop, mobile, tablet |
| geo_country | STRING | ISO 3166-1 alpha-2 code |

## Quality Metrics

| Metric | Score | Threshold |
|---|---|---|
| Completeness | 96.2% | 95.0% |
| Uniqueness | 99.8% | 99.5% |
| Timeliness | 98.1% | 95.0% |
| Consistency | 91.4% | 90.0% |
| Validity | 94.7% | 93.0% |

## Ingestion Pipeline

Events flow through three processing stages:

1. **Collection** -- gRPC endpoint receives raw events, validates schema, assigns event_id
2. **Enrichment** -- Geo-IP resolution, device detection, session stitching
3. **Storage** -- Partitioned writes to ClickHouse by date and event_type

Average end-to-end latency: **1.2 seconds**

## Retention Policy

- Hot storage (ClickHouse): 90 days
- Warm storage (S3 Parquet): 1 year
- Cold archive (S3 Glacier): 7 years
