+++
title = "Incident: Database High Load"
date = "2025-03-18"
description = "Database connection pool exhaustion caused elevated error rates"
tags = ["incident", "database"]
+++

## Incident Report

**Severity**: P2
**Duration**: 12 minutes (14:22 - 14:34 UTC)
**Status**: Resolved

### Timeline

- **14:22** -- Monitoring alert: 5xx error rate exceeded 1% threshold
- **14:24** -- On-call engineer acknowledged, began investigation
- **14:26** -- Root cause identified: connection pool exhaustion on primary DB
- **14:28** -- Mitigation applied: increased pool size from 20 to 50
- **14:34** -- Error rates returned to normal, incident resolved

### Root Cause

A traffic spike from a partner integration caused connection pool exhaustion. The default pool size of 20 was insufficient for the sustained load of 3,200 requests/minute.

### Action Items

- Increase default pool size to 50 across all services
- Add connection pool utilization to alerting thresholds
- Implement circuit breaker for partner API requests
