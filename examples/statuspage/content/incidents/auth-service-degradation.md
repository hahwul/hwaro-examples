+++
title = "Authentication Service Degradation"
date = "2026-02-22"
tags = ["auth", "performance"]

[extra]
severity = "minor"
status = "resolved"
duration = "1 hour 5 minutes"
affected = "Authentication"
+++

## Summary

The authentication service experienced elevated error rates, causing intermittent login failures for approximately 8% of users.

## Timeline

- **16:45 UTC** -- Error rate threshold exceeded on authentication service. Alert fired.
- **16:52 UTC** -- Investigation identified token validation cache returning stale entries after a cache node restart.
- **17:10 UTC** -- Cache invalidation triggered manually. Error rates began declining.
- **17:35 UTC** -- Error rates returned to baseline. Cache warming completed.
- **17:50 UTC** -- Monitoring confirmed stable operation. Incident resolved.

## Root Cause

A scheduled cache node restart did not properly warm the token validation cache. Cold cache entries caused validation failures for tokens issued before the restart, resulting in authentication errors for active sessions.

## Corrective Actions

- Implemented pre-warming step in the cache node restart procedure.
- Added cache hit-rate monitoring with alerting threshold.
- Updated runbook for cache-related incidents.
