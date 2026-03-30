+++
title = "Scaling"
description = "Configure auto-scaling and concurrency limits for Dynamo functions"
tags = ["scaling", "concurrency", "dynamo"]
+++

# Scaling

Dynamo automatically scales function instances based on incoming event volume. Each function can be configured with concurrency limits, scaling policies, and provisioned capacity to control cost and performance.

## Scaling Model

Dynamo uses a concurrency-based scaling model. Each function instance handles one event at a time. When all instances are busy, Dynamo provisions new instances up to the configured maximum:

```
  Incoming Events
        |
        v
  +------------------+
  |  Concurrency     |
  |  Manager         |
  +------------------+
        |
        +--- Instance 1 (busy)
        +--- Instance 2 (busy)
        +--- Instance 3 (idle -> assigned)
        +--- Instance 4 (provisioning...)
        +--- ...
        +--- Instance N (max concurrency)
```

## Concurrency Configuration

Set concurrency limits in the function configuration:

```yaml
scaling:
  min_concurrency: 0
  max_concurrency: 100
  reserved_concurrency: 50
  provisioned_concurrency: 5
```

| Parameter | Default | Description |
|----------|---------|-------------|
| `min_concurrency` | `0` | Minimum instances to keep warm (scale-to-zero if 0) |
| `max_concurrency` | `1000` | Maximum concurrent instances |
| `reserved_concurrency` | none | Guaranteed capacity reserved from account pool |
| `provisioned_concurrency` | `0` | Pre-warmed instances (no cold start) |

## Scaling via CLI

View current scaling configuration and state:

```bash
dynamo scaling get process-order
```

```
Scaling: process-order

  Configuration:
    Min concurrency:          0
    Max concurrency:          100
    Reserved concurrency:     50
    Provisioned concurrency:  5

  Current State:
    Active instances:         12
    Provisioned (warm):       5
    Pending provision:        0
    Throttled (last 5m):      0
```

Update scaling parameters:

```bash
# Set maximum concurrency
dynamo scaling set process-order --max 200

# Set provisioned concurrency
dynamo scaling set process-order --provisioned 10

# Set reserved concurrency
dynamo scaling set process-order --reserved 75
```

## Scaling Policies

Define scaling behavior with policies that control how aggressively Dynamo adds and removes instances:

```yaml
scaling:
  max_concurrency: 200
  policies:
    scale_up:
      cooldown: 10
      step_size: 10
      utilization_target: 0.7
    scale_down:
      cooldown: 60
      step_size: 5
      stabilization_window: 300
```

| Policy Field | Description |
|-------------|-------------|
| `scale_up.cooldown` | Seconds to wait between scale-up actions |
| `scale_up.step_size` | Maximum instances to add per scaling action |
| `scale_up.utilization_target` | Target concurrency utilization (0.0-1.0) |
| `scale_down.cooldown` | Seconds to wait between scale-down actions |
| `scale_down.step_size` | Maximum instances to remove per scaling action |
| `scale_down.stabilization_window` | Seconds to observe before scaling down |

## Scheduled Scaling

Pre-scale for predictable traffic patterns using scheduled scaling rules:

```yaml
scaling:
  scheduled:
    - name: business-hours
      cron: "0 8 * * 1-5"
      min_concurrency: 20
      provisioned_concurrency: 20
    - name: off-hours
      cron: "0 18 * * 1-5"
      min_concurrency: 0
      provisioned_concurrency: 5
    - name: weekend
      cron: "0 0 * * 0,6"
      min_concurrency: 0
      provisioned_concurrency: 2
```

List scheduled scaling rules:

```bash
dynamo scaling schedules process-order
```

```
NAME              CRON             MIN    PROVISIONED   NEXT RUN
business-hours    0 8 * * 1-5      20     20            Mon 08:00 UTC
off-hours         0 18 * * 1-5     0      5             Today 18:00 UTC
weekend           0 0 * * 0,6      0      2             Sat 00:00 UTC
```

## Account-Level Limits

Dynamo enforces account-level concurrency limits to prevent runaway scaling:

```bash
dynamo account limits
```

```
Account Concurrency Limits:
  Total limit:        1000
  Reserved:           200 (across 4 functions)
  Unreserved:         800
  Currently used:     145
  Available:          855
```

## Scaling Best Practices

**Right-size memory allocation.** Higher memory allocations receive proportionally more CPU. A function that is CPU-bound may benefit from doubling memory even if it does not use the additional RAM:

```bash
# Compare execution time at different memory levels
dynamo benchmark process-order --memory 256,512,1024 --iterations 100
```

```
Memory    Avg Duration    Cost per 1M Invocations
256 MB    340ms           $2.84
512 MB    180ms           $2.98
1024 MB   95ms            $3.16
```

**Use reserved concurrency for critical functions.** Reserved concurrency guarantees capacity even when other functions in the account are scaling aggressively:

```yaml
# Critical payment function - always has capacity
scaling:
  reserved_concurrency: 100
  provisioned_concurrency: 20
```

**Monitor throttle metrics.** If a function is being throttled, increase `max_concurrency` or request an account limit increase:

```bash
dynamo metrics process-order --metric throttles --period 24h
```

> Functions with `min_concurrency` set to 0 will scale to zero after the idle timeout (default 15 minutes). Set `min_concurrency` to 1 or higher to eliminate cold starts for low-traffic functions at the cost of continuous billing.
