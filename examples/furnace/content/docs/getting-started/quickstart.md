+++
title = "Quick Start"
weight = 2
+++

# Quick Start: Run Your First Benchmark

This guide walks through running a basic HTTP benchmark and collecting a CPU profile to validate your tooling setup.

## Step 1: Start a Test Server

Create a minimal Go HTTP server for benchmarking:

```go
package main

import (
    "fmt"
    "net/http"
    _ "net/http/pprof"
)

func main() {
    http.HandleFunc("/api/data", func(w http.ResponseWriter, r *http.Request) {
        // Simulate work
        sum := 0
        for i := 0; i < 10000; i++ {
            sum += i
        }
        fmt.Fprintf(w, `{"result": %d}`, sum)
    })

    fmt.Println("Server listening on :8080")
    http.ListenAndServe(":8080", nil)
}
```

```bash
go run server.go &
```

## Step 2: Run a Baseline Benchmark

Use `wrk` to measure baseline throughput and latency:

```bash
wrk -t4 -c100 -d30s http://localhost:8080/api/data
```

Expected output:

```
Running 30s test @ http://localhost:8080/api/data
  4 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.23ms  345.12us  15.67ms   89.45%
    Req/Sec    20.34k     1.12k   24.56k    72.31%
  2436821 requests in 30.01s, 312.45MB read
Requests/sec:  81200.12
Transfer/sec:     10.41MB
```

Record these baseline numbers:

| Metric | Baseline |
|--------|----------|
| Avg Latency | 1.23ms |
| p99 Latency | 4.56ms |
| Throughput | 81,200 RPS |
| Errors | 0 |

## Step 3: Collect a CPU Profile

While the server is running, capture a 30-second CPU profile:

```bash
go tool pprof -http=:6060 http://localhost:8080/debug/pprof/profile?seconds=30
```

This opens an interactive flame graph in your browser at `http://localhost:6060`. Alternatively, save the profile for later analysis:

```bash
curl -o cpu.prof http://localhost:8080/debug/pprof/profile?seconds=30
go tool pprof -top cpu.prof
```

Sample `pprof -top` output:

```
Showing nodes accounting for 28.50s, 95.2% of 29.94s total
      flat  flat%   sum%        cum   cum%
    18.20s 60.79% 60.79%     18.20s 60.79%  main.main.func1
     5.30s 17.70% 78.49%      5.30s 17.70%  runtime.mallocgc
     2.10s  7.01% 85.50%      2.10s  7.01%  net/http.(*conn).serve
     1.50s  5.01% 90.51%      1.50s  5.01%  syscall.syscall
     1.40s  4.68% 95.19%      1.40s  4.68%  runtime.gcBgMarkWorker
```

## Step 4: Collect a Memory Profile

Capture heap allocations:

```bash
curl -o heap.prof http://localhost:8080/debug/pprof/heap
go tool pprof -top -inuse_space heap.prof
```

## Step 5: Record Results

Create a structured record of your benchmark:

```yaml
benchmark:
  name: "api-data-baseline"
  date: "2025-01-15"
  server:
    cpu: "AMD Ryzen 9 7950X"
    memory: "64GB DDR5"
    os: "Ubuntu 24.04"
    go_version: "1.22.0"
  parameters:
    threads: 4
    connections: 100
    duration: "30s"
  results:
    avg_latency_ms: 1.23
    p99_latency_ms: 4.56
    throughput_rps: 81200
    errors: 0
    cpu_peak_percent: 45
    memory_rss_mb: 128
```

## Next Steps

With baseline measurements established, explore:

- [CPU Profiling](../../benchmarking/cpu-profiling/) for detailed flame graph analysis
- [Memory Analysis](../../benchmarking/memory-analysis/) for heap and allocation profiling
- [Load Testing](../../benchmarking/load-testing/) for comprehensive load test design
