+++
title = "CPU Profiling"
weight = 1
+++

# CPU Profiling

CPU profiling identifies where your application spends execution time. This guide covers sampling profilers, instrumentation techniques, and flame graph interpretation.

## Profiling Methods

| Method | Overhead | Accuracy | Use Case |
|--------|----------|----------|----------|
| Sampling | Low (1-5%) | Statistical | Production-safe profiling |
| Instrumentation | High (10-50%) | Exact | Development debugging |
| Tracing | Medium (5-15%) | Exact for traced paths | Distributed systems |

## Sampling with pprof

### Collecting a CPU Profile

Enable pprof in your Go application:

```go
import _ "net/http/pprof"

func main() {
    go func() {
        http.ListenAndServe("localhost:6060", nil)
    }()
    // application code
}
```

Collect a 30-second profile:

```bash
go tool pprof http://localhost:6060/debug/pprof/profile?seconds=30
```

### Analyzing with pprof

Interactive mode commands:

```bash
# Top functions by CPU time
(pprof) top20

# Show call graph for a specific function
(pprof) web handleRequest

# List source code with CPU annotations
(pprof) list handleRequest

# Focus on a specific package
(pprof) top -cum -nodecount=20 myapp/internal
```

### Reading Flame Graphs

Generate an interactive flame graph:

```bash
go tool pprof -http=:8081 cpu.prof
```

Flame graph interpretation:

- **Width** represents cumulative time spent in a function and its callees
- **Vertical depth** shows the call stack depth
- **Color** is typically random; ignore it for analysis
- Look for **wide plateaus** -- these are the hotspots

## Linux perf

### System-Wide CPU Profiling

```bash
# Record CPU events for 30 seconds
sudo perf record -g -F 99 -a -- sleep 30

# Generate a report
sudo perf report --stdio
```

### Process-Specific Profiling

```bash
# Profile a specific process
sudo perf record -g -F 99 -p $(pidof myapp) -- sleep 30

# Generate a flame graph with Brendan Gregg's tools
sudo perf script | ./stackcollapse-perf.pl | ./flamegraph.pl > flame.svg
```

### perf stat for Quick Metrics

```bash
sudo perf stat -d ./myapp --benchmark-mode

# Output:
#  Performance counter stats for './myapp --benchmark-mode':
#
#       12,345.67 msec  task-clock
#            2,451      context-switches
#               89      cpu-migrations
#           34,567      page-faults
#   45,678,901,234      cycles
#   32,456,789,012      instructions      #    0.71 insn per cycle
#    5,678,901,234      branches
#       89,012,345      branch-misses     #    1.57% of all branches
```

## JVM Profiling with async-profiler

```bash
# Attach to a running JVM process
asprof -d 30 -f profile.html <pid>

# Profile specific events
asprof -e cpu -d 30 -f cpu.html <pid>
asprof -e alloc -d 30 -f alloc.html <pid>

# Generate flame graph in collapsed format
asprof -d 30 -o collapsed -f profile.txt <pid>
```

## Profiling Results: Before/After Example

After identifying a hot path in JSON serialization and switching to a streaming encoder:

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| CPU time in serializeJSON | 34.2% | 8.1% | -76.3% |
| Avg request latency | 12.4ms | 4.8ms | -61.3% |
| Throughput (RPS) | 8,050 | 20,800 | +158.4% |
| Allocations per request | 847 | 312 | -63.2% |

The key optimization was replacing `json.Marshal` (which allocates a new buffer per call) with a pooled `json.Encoder` writing directly to the response:

```go
// Before: allocates per request
func handleBefore(w http.ResponseWriter, r *http.Request) {
    data := buildResponse()
    bytes, _ := json.Marshal(data)
    w.Write(bytes)
}

// After: pooled encoder, zero-copy
var encoderPool = sync.Pool{
    New: func() interface{} { return json.NewEncoder(nil) },
}

func handleAfter(w http.ResponseWriter, r *http.Request) {
    data := buildResponse()
    enc := encoderPool.Get().(*json.Encoder)
    enc.Reset(w)
    enc.Encode(data)
    encoderPool.Put(enc)
}
```

## Best Practices

- Profile in an environment that matches production hardware and load patterns
- Always warm up the application before collecting profiles (discard the first 60 seconds)
- Collect profiles under realistic load, not idle or synthetic micro-benchmarks
- Compare profiles across releases to catch regressions early
- Store profiles in version control alongside benchmark results for historical comparison
