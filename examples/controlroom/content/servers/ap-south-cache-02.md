+++
title = "ap-south-cache-02"
date = "2024-09-21T00:00:00Z"
tags = ["cache", "ap-south", "secondary"]
+++

## Role
Secondary Redis cache for the Mumbai region. Promoted to primary during the November 15 outage of `ap-south-cache-01` and reverted to secondary at 15:42 UTC the same day.

## System Specifications
* **CPU:** 8 vCPUs (Intel Xeon E5)
* **RAM:** 64 GiB ECC
* **Storage:** 256 GB NVMe SSD (persistence and AOF logs)
* **Network:** 10 Gbps

## Current Load
* **CPU Usage:** ~12%
* **Memory Usage:** 28 GB / 64 GB
* **Hit Ratio:** 96.4%
* **Connections:** 1,820

## Configuration
* Eviction policy: `allkeys-lru`
* Max memory: 60 GiB
* Persistence: RDB snapshots every 5 minutes, AOF on every second
* Replication target: `ap-south-cache-01` (read-only)

## Recent Activity
* 2024-11-15: Promoted to primary for 71 minutes during hardware incident.
* 2024-11-08: TLS certificates rotated.
* 2024-10-02: Memory expanded from 32 GiB to 64 GiB.

Status: <span class="status-dot ok"></span> Online
