+++
title = "eu-west-db-02"
date = "2024-08-03T00:00:00Z"
tags = ["database", "eu-west", "primary"]
+++

## Role
Primary write node for the `accounts` and `billing` schemas. Replicates synchronously to `eu-west-db-02-replica` in a separate availability zone and asynchronously to `us-east-db-02-dr` for disaster recovery.

## System Specifications
* **CPU:** 32 vCPUs (AMD EPYC 7763)
* **RAM:** 256 GiB ECC
* **Storage:** 4 TB NVMe SSD in RAID 10
* **Network:** 25 Gbps with dedicated replication interface

## Current Load
* **CPU Usage:** ~38%
* **Memory Usage:** 188 GB / 256 GB
* **Disk I/O:** 220 MB/s Read, 95 MB/s Write
* **Active Connections:** 412 / 2000

## Replication
* Synchronous replica lag: 14 ms
* Asynchronous replica lag: 1.2 s
* Last full backup: 2024-11-17T02:00:00Z
* Last verified restore drill: 2024-10-21

## Recent Activity
* 2024-11-12: Vacuum and analyze cycle completed for the `billing` schema.
* 2024-10-30: Postgres patched to 15.8.
* 2024-10-15: Index rebuild on `accounts.transactions_user_id_idx`.

Status: <span class="status-dot ok"></span> Online
