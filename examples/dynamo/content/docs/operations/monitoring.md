+++
title = "Monitoring"
description = "Monitor function execution and platform health in Dynamo"
tags = ["monitoring", "observability", "dynamo"]
+++

# Monitoring

Dynamo emits structured metrics, logs, and traces for every function invocation. No additional instrumentation is required -- the platform captures execution data automatically.

## Built-in Metrics

Every function reports the following metrics:

| Metric | Type | Description |
|--------|------|-------------|
| `invocations` | Counter | Total number of function invocations |
| `errors` | Counter | Invocations that returned an error or timed out |
| `duration` | Histogram | Handler execution time in milliseconds |
| `cold_starts` | Counter | Invocations that required a new instance |
| `cold_start_duration` | Histogram | Time to initialize a new instance |
| `concurrent_executions` | Gauge | Currently executing instances |
| `throttles` | Counter | Invocations rejected due to concurrency limits |
| `memory_used` | Gauge | Peak memory usage during execution |

## Viewing Metrics

Query metrics from the CLI:

```bash
dynamo metrics process-order --period 1h
```

```
Metrics: process-order (last 1h)

  Invocations:     2,847
  Errors:          12 (0.42%)
  Throttles:       0

  Duration:
    P50:           34ms
    P95:           120ms
    P99:           285ms
    Max:           892ms

  Cold Starts:     23 (0.81%)
  Avg Cold Start:  178ms

  Memory:
    Allocated:     512 MB
    Avg Used:      128 MB
    Peak Used:     340 MB

  Concurrency:
    Current:       8
    Peak:          42
```

## Structured Logs

Function logs are captured automatically from stdout and stderr. Dynamo enriches each log entry with invocation metadata:

```json
{
  "timestamp": "2025-03-15T10:30:15.234Z",
  "level": "info",
  "message": "Order processed successfully",
  "request_id": "req_a1b2c3d4e5",
  "function": "process-order",
  "version": "v14",
  "duration_ms": 45,
  "memory_mb": 142,
  "region": "us-east-1"
}
```

Query logs from the CLI:

```bash
# Tail live logs
dynamo logs process-order --follow

# Search logs with filters
dynamo logs process-order --period 1h --filter "level=error"

# Search by request ID
dynamo logs process-order --request-id req_a1b2c3d4e5
```

## Distributed Tracing

Dynamo generates trace spans for each invocation and propagates trace context across function-to-function calls:

```bash
# View a trace for a specific invocation
dynamo traces get req_a1b2c3d4e5
```

```
Trace: req_a1b2c3d4e5

  [gateway]        0ms  ----
  [dispatch]       2ms  --
  [cold-start]     4ms  --------  (skipped if warm)
  [init]          12ms  ---
  [handler]       15ms  -----------------
    [db-query]    18ms  ------
    [serialize]   31ms  ---
  [response]      35ms  --
                  37ms  total
```

## Alerting

Configure alerts based on metric thresholds:

```yaml
# alerts.yaml
alerts:
  - name: high-error-rate
    function: process-order
    metric: error_rate
    threshold: 0.05
    period: 5m
    channels:
      - slack:platform-alerts
      - pagerduty:critical

  - name: high-latency
    function: process-order
    metric: duration_p99
    threshold: 2000
    period: 5m
    channels:
      - slack:platform-alerts

  - name: cold-start-spike
    function: process-order
    metric: cold_start_rate
    threshold: 0.10
    period: 15m
    channels:
      - slack:platform-alerts
```

Apply alert configuration:

```bash
dynamo alerts apply -f alerts.yaml
```

List active alerts:

```bash
dynamo alerts list
```

```
NAME               FUNCTION        METRIC         THRESHOLD   STATUS
high-error-rate    process-order   error_rate     > 5%        OK
high-latency       process-order   duration_p99   > 2000ms    OK
cold-start-spike   process-order   cold_start_%   > 10%       OK
```

## External Integrations

Export metrics to external monitoring systems:

```yaml
# dynamo.yaml
monitoring:
  export:
    - type: prometheus
      endpoint: /metrics
      port: 9090
    - type: datadog
      api_key_env: DD_API_KEY
      site: datadoghq.com
    - type: otlp
      endpoint: https://otel.example.com:4317
      protocol: grpc
```

> Set up alerts for both error rate and cold start rate. A sudden spike in cold starts often indicates that provisioned concurrency is insufficient or that a deployment triggered a fleet-wide restart.
