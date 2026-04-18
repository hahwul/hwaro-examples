+++
title = "Load Testing"
weight = 3
+++

# Load Testing

Load testing measures system behavior under expected and peak traffic conditions. This guide covers concurrent user simulation, throughput measurement, latency percentile analysis, and result interpretation.

## Load Testing Tools Comparison

| Tool | Protocol | Scripting | Distributed | Output |
|------|----------|-----------|-------------|--------|
| wrk | HTTP/1.1 | Lua | No | Text |
| hey | HTTP/1.1, HTTP/2 | None | No | Text |
| k6 | HTTP/1.1, HTTP/2, WS, gRPC | JavaScript | Yes | JSON, CSV |
| Gatling | HTTP, WS | Scala/Java | Yes | HTML |
| Locust | HTTP | Python | Yes | HTML |

## Test Design

### Load Profiles

Define the load pattern based on your production traffic:

```
Constant Load:    ████████████████████████████████
Ramp-Up:          ██▄▄████████████████████████████
Step Load:        ██  ████  ████████  ████████████
Spike:            ████████████████▓▓▓▓████████████
Soak:             ████████████████████████████████ (extended duration)
```

### Test Parameters

```yaml
load_test:
  scenarios:
    smoke:
      vus: 5
      duration: "1m"
      description: "Verify system works under minimal load"

    baseline:
      vus: 100
      duration: "10m"
      description: "Normal production traffic"

    stress:
      stages:
        - duration: "2m"
          target: 100
        - duration: "5m"
          target: 500
        - duration: "5m"
          target: 1000
        - duration: "2m"
          target: 0
      description: "Find breaking point"

    soak:
      vus: 200
      duration: "4h"
      description: "Detect memory leaks and degradation"
```

## Running Load Tests

### wrk

Basic throughput test:

```bash
# 4 threads, 200 connections, 60 seconds
wrk -t4 -c200 -d60s --latency http://localhost:8080/api/data
```

With a Lua script for custom requests:

```bash
wrk -t4 -c200 -d60s -s post.lua http://localhost:8080/api/events
```

```lua
-- post.lua
wrk.method = "POST"
wrk.headers["Content-Type"] = "application/json"
wrk.body = '{"event":"page_view","user_id":"u123","timestamp":1705334400}'

response = function(status, headers, body)
  if status ~= 200 then
    wrk.thread:stop()
  end
end
```

### k6

Stress test with ramping VUs:

```bash
k6 run stress-test.js
```

```go
// stress-test.js
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 100 },
    { duration: '5m', target: 500 },
    { duration: '5m', target: 1000 },
    { duration: '2m', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<200', 'p(99)<500'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const res = http.get('http://localhost:8080/api/data');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'latency < 200ms': (r) => r.timings.duration < 200,
  });
  sleep(0.1);
}
```

## Interpreting Results

### Latency Percentiles

Raw latency numbers from a load test:

| Percentile | Latency | Interpretation |
|-----------|---------|----------------|
| p50 | 12ms | Median user experience |
| p75 | 18ms | Most users see this or better |
| p90 | 35ms | Starting to see tail latency |
| p95 | 68ms | 1 in 20 requests |
| p99 | 145ms | 1 in 100 requests |
| p99.9 | 890ms | 1 in 1,000 requests (usually timeouts/retries) |
| Max | 2,340ms | Worst case (often an outlier) |

### Throughput vs. Latency

As concurrency increases, expect this pattern:

| Concurrent Users | Throughput (RPS) | p50 (ms) | p99 (ms) | Error Rate |
|-----------------|-----------------|----------|----------|------------|
| 10 | 4,500 | 2.1 | 5.3 | 0.00% |
| 50 | 18,200 | 2.6 | 8.1 | 0.00% |
| 100 | 32,400 | 3.0 | 12.4 | 0.00% |
| 200 | 48,100 | 4.1 | 28.7 | 0.00% |
| 500 | 52,300 | 9.5 | 95.2 | 0.02% |
| 1000 | 51,800 | 19.2 | 340.5 | 0.15% |
| 2000 | 43,200 | 46.3 | 1,250.0 | 2.80% |

Key observations:
- Throughput plateaus around 500 concurrent users (saturation point)
- p99 latency degrades sharply after saturation
- Error rate increases once the system is overloaded

## Before/After: Connection Pool Tuning

Load testing revealed database connection exhaustion under moderate load. After tuning the connection pool:

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Max throughput | 8,200 RPS | 34,500 RPS | +320.7% |
| p99 at 200 VUs | 890ms | 28ms | -96.9% |
| Error rate at 500 VUs | 12.4% | 0.02% | -99.8% |
| DB connection wait time | 340ms avg | 0.8ms avg | -99.8% |
| Connection pool exhaustion | Yes (at 150 VUs) | No (tested to 2000 VUs) | Resolved |

Configuration change:

```yaml
# Before: default pool settings
database:
  host: "db.internal:5432"
  max_connections: 10
  idle_timeout: "5m"

# After: tuned for load
database:
  host: "db.internal:5432"
  max_connections: 100
  min_idle: 20
  max_idle_time: "10m"
  max_lifetime: "30m"
  connect_timeout: "5s"
  health_check_interval: "30s"
```

## Before/After: Response Compression

Enabling gzip compression for API responses:

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Avg response size | 14.2KB | 2.8KB | -80.3% |
| Network throughput | 1.12Gbps | 228Mbps | -79.6% |
| p50 latency | 8.2ms | 9.1ms | +11.0% |
| p99 latency | 45ms | 48ms | +6.7% |
| Max sustainable RPS (network-bound) | 9,800 | 48,200 | +391.8% |

Trade-off: slight latency increase from compression CPU cost, but significantly higher throughput when network bandwidth is the bottleneck.

## Automating Load Tests

### CI/CD Integration

Run load tests as part of your deployment pipeline:

```bash
#!/bin/bash
# load-test-gate.sh

THRESHOLD_P99=200  # ms
THRESHOLD_ERROR=1  # percent

RESULT=$(k6 run --out json=results.json stress-test.js 2>&1)

P99=$(echo "$RESULT" | grep "http_req_duration.*p(99)" | awk '{print $NF}' | tr -d 'ms')
ERROR_RATE=$(echo "$RESULT" | grep "http_req_failed" | awk '{print $NF}' | tr -d '%')

echo "p99 latency: ${P99}ms (threshold: ${THRESHOLD_P99}ms)"
echo "Error rate: ${ERROR_RATE}% (threshold: ${THRESHOLD_ERROR}%)"

if (( $(echo "$P99 > $THRESHOLD_P99" | bc -l) )); then
  echo "FAIL: p99 latency exceeds threshold"
  exit 1
fi

if (( $(echo "$ERROR_RATE > $THRESHOLD_ERROR" | bc -l) )); then
  echo "FAIL: error rate exceeds threshold"
  exit 1
fi

echo "PASS: load test within thresholds"
```

## Best Practices

- Always warm up the target system before measuring (run 1-2 minutes of load before recording)
- Test from a separate machine to avoid resource contention between the load generator and the target
- Monitor system resources (CPU, memory, disk I/O, network) during load tests
- Test with realistic payloads and request patterns, not just simple GET requests
- Run soak tests (4+ hours) before major releases to catch slow leaks and degradation
- Store all results with timestamps and environment details for historical comparison
