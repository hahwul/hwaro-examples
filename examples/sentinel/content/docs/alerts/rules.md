+++
title = "Alert Rules"
description = "Define alert rules and conditions in Sentinel"
tags = ["alerts", "rules", "metrics"]
+++

# Alert Rules

Alert rules define the conditions under which Sentinel fires a notification. Each rule consists of a metric query, an evaluation condition, and a set of labels that control routing.

## Rule Definition

Rules are defined in YAML files under the `rules/` directory:

```yaml
rules:
  - name: "high_cpu_usage"
    description: "CPU usage exceeds threshold for sustained period"
    metric: "system.cpu.usage_percent"
    condition: "avg > 85"
    window: "5m"
    severity: "warning"
    labels:
      team: "platform"
      service: "compute"

  - name: "disk_space_critical"
    description: "Disk usage above 95 percent"
    metric: "system.disk.usage_percent"
    condition: "max > 95"
    window: "2m"
    severity: "critical"
    labels:
      team: "platform"
      service: "storage"
```

## Built-in Rules

Sentinel ships with a set of default rules for common infrastructure metrics:

| Rule Name | Severity | Condition | Window | Description |
|-----------|----------|-----------|--------|-------------|
| `cpu_high` | warning | avg > 85% | 5m | Sustained high CPU usage |
| `cpu_critical` | critical | avg > 95% | 2m | CPU saturation |
| `memory_high` | warning | avg > 80% | 5m | High memory usage |
| `memory_critical` | critical | avg > 95% | 2m | Memory exhaustion risk |
| `disk_warning` | warning | max > 80% | 1m | Disk space running low |
| `disk_critical` | critical | max > 95% | 1m | Disk space nearly full |
| `network_errors` | warning | sum > 100 | 5m | Network error rate elevated |
| `service_down` | critical | last == 0 | 1m | Service health check failing |

## Metric Query Syntax

The `metric` field supports a query language for selecting and transforming time-series data:

```
system.cpu.usage_percent{host="web-*", env="production"}
```

### Selectors

- **Exact match** -- `env="production"` matches only the value `production`
- **Glob match** -- `host="web-*"` matches any host starting with `web-`
- **Negation** -- `env!="staging"` excludes the value `staging`
- **Regex** -- `host=~"web-[0-9]+"` matches using a regular expression

### Aggregation Functions

Use aggregation functions in the `condition` field:

| Function | Description |
|----------|-------------|
| `avg` | Mean value over the window |
| `min` | Minimum value over the window |
| `max` | Maximum value over the window |
| `sum` | Sum of values over the window |
| `count` | Number of data points in the window |
| `last` | Most recent value |
| `p50` | 50th percentile |
| `p95` | 95th percentile |
| `p99` | 99th percentile |
| `rate` | Per-second rate of change |
| `stddev` | Standard deviation over the window |

## Rule States

Each rule transitions through the following states:

```
                  condition met
  INACTIVE ----------------------> PENDING
      ^                               |
      |                               | for_duration elapsed
      |         condition cleared     v
      +--------------------------- FIRING
```

- **INACTIVE** -- The condition is not met. No notifications are sent.
- **PENDING** -- The condition is met but the `for` duration has not elapsed. Used to prevent flapping.
- **FIRING** -- The condition has been met for the required duration. Notifications are dispatched.

## Disabling Rules

To temporarily disable a rule without removing it from configuration:

```yaml
rules:
  - name: "high_cpu_usage"
    enabled: false
    # ... rest of rule definition
```

Disabled rules are still loaded and validated but are skipped during evaluation cycles.
