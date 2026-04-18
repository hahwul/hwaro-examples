+++
title = "Thresholds"
description = "Configure static and dynamic alert thresholds"
tags = ["alerts", "thresholds", "configuration"]
+++

# Thresholds

Thresholds define the boundary values that trigger alert state transitions. Sentinel supports static thresholds, multi-level severity thresholds, and dynamic thresholds based on historical data.

## Static Thresholds

The simplest threshold type compares a metric against a fixed value:

```yaml
rules:
  - name: "response_time_high"
    metric: "http.response_time_ms"
    condition: "p95 > 500"
    window: "5m"
    severity: "warning"
```

## Multi-Level Thresholds

Define multiple severity levels for the same metric to create tiered alerting:

```yaml
thresholds:
  - metric: "system.cpu.usage_percent"
    levels:
      - severity: "info"
        condition: "avg > 70"
        window: "10m"
      - severity: "warning"
        condition: "avg > 85"
        window: "5m"
      - severity: "critical"
        condition: "avg > 95"
        window: "2m"
```

The rule engine evaluates levels from highest severity to lowest. Only the highest matching level fires.

## Severity Reference

| Level | Color | Use Case | Default Behavior |
|-------|-------|----------|------------------|
| critical | Red | Service down, data loss risk | Page on-call immediately |
| warning | Yellow | Degraded performance, approaching limits | Notify team channel |
| info | Blue | Informational, non-urgent conditions | Log only |

## Dynamic Thresholds

Dynamic thresholds compute baselines from historical metric data. Instead of fixed values, they detect anomalies relative to expected behavior:

```yaml
thresholds:
  - metric: "http.request_count"
    type: "dynamic"
    baseline:
      lookback: "7d"
      seasonality: "1d"
      sensitivity: 3.0
    severity: "warning"
```

### Configuration Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `baseline.lookback` | duration | `7d` | Historical window for computing baseline |
| `baseline.seasonality` | duration | `1d` | Expected periodic pattern length |
| `baseline.sensitivity` | float | `3.0` | Number of standard deviations from baseline |
| `baseline.min_data_points` | int | `100` | Minimum data points required to compute baseline |

## Rate-of-Change Thresholds

Alert on rapid changes rather than absolute values:

```yaml
thresholds:
  - metric: "system.memory.usage_bytes"
    type: "rate"
    condition: "rate > 500MB/min"
    window: "5m"
    severity: "warning"
    description: "Memory usage increasing rapidly"
```

## Composite Thresholds

Combine multiple conditions using boolean logic:

```yaml
thresholds:
  - name: "service_degraded"
    type: "composite"
    conditions:
      - metric: "http.error_rate"
        condition: "avg > 5"
        window: "5m"
      - metric: "http.response_time_ms"
        condition: "p95 > 1000"
        window: "5m"
    operator: "AND"
    severity: "critical"
```

Supported operators:

- **AND** -- All conditions must be true
- **OR** -- At least one condition must be true

## Threshold Validation

Validate threshold configuration before applying:

```bash
sentinel threshold validate --file thresholds.yaml
```

The validator checks for:

- Valid metric references
- Logical consistency between severity levels
- Sufficient historical data for dynamic baselines
- Circular dependency detection in composite rules
