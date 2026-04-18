+++
title = "Welcome"
+++

# Furnace

A performance engineering toolkit for benchmarking, profiling, and optimizing software systems. Furnace provides structured documentation for measuring, analyzing, and improving application performance across CPU, memory, I/O, and network dimensions.

## Key Performance Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| Latency (p50) | Median response time | < 50ms |
| Latency (p99) | 99th percentile response time | < 200ms |
| Throughput | Requests per second | > 10,000 RPS |
| CPU Usage | Average CPU utilization under load | < 70% |
| Memory RSS | Resident set size at steady state | < 512MB |
| GC Pause | Maximum garbage collection pause | < 10ms |

## Core Workflow

```
  Measure -> Profile -> Analyze -> Optimize -> Validate
     |                                            |
     +--------------------------------------------+
                   (iterate)
```

1. **Measure** -- Establish baseline metrics with reproducible benchmarks
2. **Profile** -- Identify hotspots using CPU and memory profilers
3. **Analyze** -- Interpret flame graphs, allocation traces, and execution profiles
4. **Optimize** -- Apply targeted fixes to bottlenecks
5. **Validate** -- Confirm improvements with before/after comparison

## Getting Started

Navigate the sidebar to explore benchmarking techniques, profiling tools, and optimization strategies. Start with the [Installation](docs/getting-started/installation/) guide to set up your profiling environment, or jump to [Quick Start](docs/getting-started/quickstart/) to run your first benchmark.

## Tool Stack

```yaml
profiling:
  cpu: "pprof, perf, async-profiler"
  memory: "heaptrack, valgrind, pprof"
  tracing: "jaeger, zipkin"

benchmarking:
  http: "wrk, hey, k6"
  micro: "go test -bench, criterion, JMH"

monitoring:
  metrics: "prometheus, grafana"
  apm: "datadog, new relic"
```
