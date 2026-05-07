+++
title = "Throughput"
weight = 3
description = "Request volume and message processing rates across the platform"
tags = ["performance", "throughput"]
+++

## Throughput Metrics

Aggregated request and event-processing rates measured at the load balancer and at each downstream worker pool. Values reflect the trailing 24-hour window.

### HTTP Request Volume

| Endpoint | Requests/min | Peak | Error Rate |
|----------|--------------|------|------------|
| GET /api/users | 1,420 | 2,180 | 0.04% |
| POST /api/orders | 612 | 980 | 0.11% |
| GET /api/products | 2,840 | 4,210 | 0.02% |
| GET /api/search | 980 | 1,540 | 0.18% |
| POST /api/webhooks | 340 | 720 | 0.07% |

Total ingress is 6,192 requests per minute averaged over the window, with sustained peaks during the 13:00-15:00 UTC trading band.

### Message Queue Processing

The asynchronous worker pool drains four primary queues. Backlog stays under the alerting threshold of 5,000 unprocessed messages.

- **orders.created**: 540 msg/min processed, 12 in backlog
- **inventory.updated**: 880 msg/min processed, 0 in backlog
- **email.outbound**: 210 msg/min processed, 38 in backlog
- **webhook.dispatch**: 145 msg/min processed, 4 in backlog

### Capacity Headroom

Current utilization sits at 47% of provisioned worker capacity. Autoscaling triggers at 70% sustained for ten minutes, with a ceiling of twelve worker pods per pool. No scaling events fired in the last seven days.
