+++
title = "Scheduled Database Maintenance"
date = "2026-03-05"
tags = ["database", "maintenance"]

[extra]
severity = "maintenance"
status = "completed"
duration = "30 minutes"
affected = "Database Cluster"
+++

## Summary

Planned maintenance window for database version upgrade and security patching. All services experienced brief read-only mode during the failover.

## Timeline

- **03:00 UTC** -- Maintenance window opened. Primary database set to read-only mode.
- **03:05 UTC** -- Replica promoted to primary. Write operations resumed.
- **03:15 UTC** -- Former primary patched and upgraded.
- **03:25 UTC** -- Replication re-established. All nodes running updated version.
- **03:30 UTC** -- Maintenance window closed. All systems nominal.

## Impact

Write operations were unavailable for approximately 5 minutes during the primary-replica failover. Read operations were unaffected throughout the maintenance window.
