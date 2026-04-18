+++
title = "Memory Analysis"
weight = 2
+++

# Memory Analysis

Memory profiling identifies allocation hotspots, detects leaks, and measures heap pressure. This guide covers heap snapshots, allocation tracking, and leak detection across runtimes.

## Memory Metrics

| Metric | Description | Tool |
|--------|-------------|------|
| RSS | Resident Set Size -- physical memory used | `ps`, `top`, `/proc/pid/status` |
| VSZ | Virtual memory size -- total address space | `ps`, `top` |
| Heap In-Use | Bytes actively allocated on the heap | pprof, heaptrack |
| Heap Idle | Heap memory returned to the runtime but not the OS | pprof |
| Alloc Rate | Bytes allocated per second | pprof, async-profiler |
| GC Pause | Time spent in garbage collection | runtime metrics |

## Go Memory Profiling with pprof

### Heap Profile

Capture current heap allocations:

```bash
# In-use memory (what is currently allocated)
go tool pprof http://localhost:6060/debug/pprof/heap

# Allocation counts (total allocations since start)
go tool pprof -alloc_objects http://localhost:6060/debug/pprof/heap
```

### Analyzing Heap Profiles

```bash
(pprof) top20 -inuse_space
Showing nodes accounting for 245.12MB, 89.3% of 274.56MB total
      flat  flat%   sum%        cum   cum%
  112.50MB 40.99% 40.99%   112.50MB 40.99%  bytes.(*Buffer).grow
   48.25MB 17.58% 58.57%    48.25MB 17.58%  encoding/json.(*decodeState).literalStore
   32.00MB 11.66% 70.23%    32.00MB 11.66%  runtime.mallocgc
   18.75MB  6.83% 77.06%    18.75MB  6.83%  compress/gzip.NewReader
   15.12MB  5.51% 82.57%   163.62MB 59.60%  myapp/internal.ProcessBatch
   10.50MB  3.83% 86.40%    10.50MB  3.83%  bufio.NewReaderSize
    8.00MB  2.91% 89.31%     8.00MB  2.91%  net/http.(*Transport).dialConn
```

### Comparing Heap Snapshots

Take two snapshots and diff them to find leaks:

```bash
# Capture baseline
curl -o heap-base.prof http://localhost:6060/debug/pprof/heap

# Wait, then capture again
sleep 300
curl -o heap-after.prof http://localhost:6060/debug/pprof/heap

# Compare
go tool pprof -base heap-base.prof heap-after.prof
(pprof) top20 -inuse_space
```

Growing allocations between snapshots indicate a potential leak.

## Leak Detection Patterns

### Goroutine Leaks

Monitor goroutine count over time:

```go
import "runtime"

func reportGoroutines() {
    ticker := time.NewTicker(10 * time.Second)
    for range ticker.C {
        log.Printf("goroutines: %d", runtime.NumGoroutine())
    }
}
```

A steadily increasing goroutine count signals a leak. Common causes:

- Blocked channel reads with no sender
- HTTP clients without timeout or context cancellation
- Ticker/Timer not stopped

### Heap Growth Analysis

```bash
# Watch RSS over time
while true; do
  ps -o rss= -p $(pidof myapp) | awk '{printf "%s MB\n", $1/1024}'
  sleep 10
done
```

## C/C++ Memory Profiling

### Valgrind Massif

```bash
valgrind --tool=massif --pages-as-heap=yes ./myapp
ms_print massif.out.<pid>
```

### heaptrack

```bash
heaptrack ./myapp
heaptrack_print heaptrack.myapp.<pid>.zst

# Summary output:
# total runtime: 45.23s
# bytes allocated in total: 2.34GB
# calls to allocation functions: 12,345,678
# peak heap memory: 256.00MB
# peak RSS: 312.00MB
# total memory leaked: 1.23MB
```

## Before/After: Fixing a Memory Leak

A service processing webhook events was leaking memory due to unbounded map growth:

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| RSS after 1 hour | 1,240MB | 256MB | -79.4% |
| RSS after 24 hours | 8,900MB (OOM) | 258MB | -97.1% |
| Heap in-use (steady state) | Growing 50MB/hr | 180MB stable | Leak fixed |
| GC pause p99 | 45ms | 3.2ms | -92.9% |
| Allocation rate | 890MB/s | 340MB/s | -61.8% |

The fix involved adding TTL-based eviction to an in-memory cache:

```go
// Before: unbounded map growth
var cache = make(map[string]*Event)

func processEvent(e *Event) {
    cache[e.ID] = e  // never evicted
}

// After: TTL-based eviction with sync.Map
type ttlEntry struct {
    event   *Event
    expires time.Time
}

var cache sync.Map

func processEvent(e *Event) {
    cache.Store(e.ID, &ttlEntry{
        event:   e,
        expires: time.Now().Add(15 * time.Minute),
    })
}

func evictExpired() {
    ticker := time.NewTicker(1 * time.Minute)
    for range ticker.C {
        now := time.Now()
        cache.Range(func(key, value interface{}) bool {
            if entry := value.(*ttlEntry); now.After(entry.expires) {
                cache.Delete(key)
            }
            return true
        })
    }
}
```

## Runtime GC Tuning

### Go GOGC

```bash
# Default: GC triggers when heap doubles (GOGC=100)
GOGC=50 ./myapp    # GC at 50% growth (lower latency, more CPU)
GOGC=200 ./myapp   # GC at 200% growth (less CPU, more memory)
GOMEMLIMIT=512MiB ./myapp  # Hard memory limit (Go 1.19+)
```

### GC Tuning Results

| GOGC | Peak RSS | GC Pauses/sec | p99 Latency | CPU Overhead |
|------|----------|---------------|-------------|-------------|
| 50 | 180MB | 45 | 2.1ms | 12% |
| 100 | 256MB | 22 | 3.8ms | 7% |
| 200 | 410MB | 11 | 6.2ms | 4% |
| GOMEMLIMIT=512M | 490MB | 8 | 4.5ms | 5% |

## Best Practices

- Take heap snapshots at regular intervals under steady-state load
- Always compare at least two snapshots to distinguish leaks from normal allocation
- Monitor RSS alongside heap metrics -- RSS includes memory-mapped files and stack space
- Set memory limits (GOMEMLIMIT, container limits) as a safety net in production
- Profile allocation rate, not just total heap size -- high allocation rates increase GC pressure
