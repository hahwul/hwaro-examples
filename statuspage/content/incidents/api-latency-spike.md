+++
title = "API Latency Spike"
date = "2026-03-18"
tags = ["api", "performance"]

[extra]
severity = "minor"
status = "resolved"
duration = "47 minutes"
affected = "API Gateway"
+++

## Summary

Increased API response times detected across all endpoints. Average latency spiked from 120ms to 2.4s during the incident window.

## Timeline

- **14:23 UTC** -- Monitoring alerts triggered for elevated p99 latency on API Gateway.
- **14:28 UTC** -- Engineering team identified a connection pool exhaustion issue in the upstream database proxy.
- **14:35 UTC** -- Temporary mitigation applied by increasing connection pool limits.
- **14:52 UTC** -- Root cause fix deployed. Connection recycling logic was updated.
- **15:10 UTC** -- All latency metrics returned to normal. Incident resolved.

## Root Cause

A recent configuration change reduced the maximum idle connection timeout, causing excessive connection churn under load. The database proxy could not recycle connections fast enough, leading to pool exhaustion and queued requests.

## Corrective Actions

- Reverted the idle timeout configuration to previous values.
- Added connection pool saturation to the alerting dashboard.
- Scheduled a review of all proxy configuration parameters.
