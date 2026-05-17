+++
title = "Streaming replication, generally available"
date = "2026-05-10"
description = "Sub-second change data capture from Postgres, MySQL, and MongoDB into your warehouse."
tags = ["replication", "ga"]
+++

Streaming replication moves out of preview today after eight months of private beta with 64 design partners.

- Logical replication slots for Postgres 12+ with automatic catch-up on connector restart
- Binlog-based CDC for MySQL 5.7 and 8.0, including row image and DDL events
- Change streams for MongoDB 5.0+ with resume tokens persisted in your warehouse
- p99 end-to-end latency under 900 ms for typed workloads up to 200 GB/day
- New `luminal stream tail` CLI for live debugging of replication lag and conflict resolution
