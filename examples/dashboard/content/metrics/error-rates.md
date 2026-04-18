+++
title = "Error Rates"
weight = 2
description = "Error tracking and reliability metrics"
tags = ["errors", "reliability"]
+++

## Error Rate Dashboard

Current error budget consumption and incident tracking.

### Error Budget Status

- **Monthly budget**: 0.1% (99.9% SLO)
- **Budget consumed**: 23.4%
- **Budget remaining**: 76.6%
- **Projected end-of-month**: 31.2% consumed

### Error Breakdown by Type

| Error Type | Count (7d) | Rate | Trend |
|------------|-----------|------|-------|
| 5xx Server Errors | 142 | 0.018% | Stable |
| Timeout Errors | 89 | 0.011% | Decreasing |
| Rate Limit (429) | 1,204 | 0.152% | Increasing |
| Bad Request (400) | 3,891 | 0.491% | Stable |

### Notable Incidents

**2025-03-18 14:22 UTC** -- Elevated 5xx errors on `/api/search` endpoint for 12 minutes. Root cause: connection pool exhaustion during traffic spike. Resolved by increasing pool size from 20 to 50.

**2025-03-11 09:05 UTC** -- Rate limiting triggered for partner integration `acme-corp`. Temporarily increased their quota from 1,000 to 5,000 req/min.
