+++
title = "AP Southeast"
description = "Asia-Pacific region for low-latency APAC access"
weight = 3
tags = ["region", "gcp", "production"]

[extra]
status = "degraded"
region = "asia-southeast1"
provider = "GCP"
+++

## Region Overview

AP Southeast provides low-latency access for Asia-Pacific customers. Currently operating in degraded state due to ongoing capacity expansion.

## Availability Zones

| Zone | CIDR Block | Instances | Role |
|------|-----------|-----------|------|
| asia-southeast1-a | 10.2.0.0/18 | 68 | Primary |
| asia-southeast1-b | 10.2.64.0/18 | 52 | Secondary |

## Current Issues

> **Degraded Performance** -- The region is experiencing increased latency on the search-service due to ongoing index migration. Expected resolution by end of Q2 2026.

| Issue | Impact | ETA |
|-------|--------|-----|
| Search index migration | +200ms latency on search queries | Q2 2026 |
| Zone C provisioning | Limited DR capacity | Q3 2026 |

## Deployed Services

| Service | Instances | CPU | Memory | Health |
|---------|-----------|-----|--------|--------|
| api-gateway | 3 | 4 vCPU | 16 GB | Healthy |
| auth-service | 2 | 2 vCPU | 8 GB | Healthy |
| user-service | 2 | 2 vCPU | 8 GB | Healthy |
| search-service | 2 | 8 vCPU | 32 GB | Degraded |
| cache-service | 2 | 4 vCPU | 16 GB | Healthy |
