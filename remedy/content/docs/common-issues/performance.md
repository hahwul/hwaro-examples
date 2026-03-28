+++
title = "Performance Degradation"
weight = 2
description = "Identifying and resolving slow response times, high resource usage, and throughput bottlenecks"
+++

## Overview

Performance degradation manifests as increased latency, reduced throughput, or elevated resource consumption. This guide provides a systematic approach to identifying the bottleneck.

---

## High Response Latency

### Symptom

API response times increase from the normal baseline of 50-100ms to 2-5 seconds or more. Users report slow page loads.

```
2026-03-16 14:22:18 WARN  SlowRequestDetected
  endpoint=/api/v2/users
  duration_ms=4832
  threshold_ms=500
  request_id=req-a1b2c3d4
```

### Cause

- Database queries lacking proper indexes
- N+1 query patterns in application code
- Downstream service latency propagating upstream
- Thread pool exhaustion causing request queuing

### Solution

1. Enable slow query logging to identify expensive database operations:

```sql
-- PostgreSQL: log queries slower than 200ms
ALTER SYSTEM SET log_min_duration_statement = 200;
SELECT pg_reload_conf();
```

2. Check for missing indexes on frequently queried columns:

```sql
-- Find sequential scans on large tables
SELECT relname, seq_scan, seq_tup_read, idx_scan, idx_tup_fetch
FROM pg_stat_user_tables
WHERE seq_scan > 100
ORDER BY seq_tup_read DESC
LIMIT 10;
```

3. Monitor thread pool utilization:

```bash
# Check active connections on the application server
curl -s http://localhost:8080/actuator/metrics/http.server.requests | jq '.measurements'
```

4. Profile a specific slow request using distributed tracing:

```bash
# Query traces for slow requests
curl -s "http://jaeger:16686/api/traces?service=api-gateway&minDuration=2s&limit=10" | \
  jq '.data[0].spans[] | {operationName, duration}'
```

---

## High CPU Usage

### Symptom

CPU utilization remains consistently above 90%. System load average exceeds the number of available cores.

```
2026-03-16 15:10:42 ALERT HighCPU
  host=app-server-03
  cpu_percent=97.2
  load_avg_1m=12.4
  cores=4
```

### Cause

- Infinite loops or busy-wait patterns in application code
- Excessive garbage collection pressure
- Runaway background processes
- Unoptimized regular expressions causing catastrophic backtracking

### Solution

1. Identify the top CPU-consuming processes:

```bash
top -bn1 -o %CPU | head -20
```

2. For Java applications, capture a thread dump to find busy threads:

```bash
jstack $(pgrep -f myapp) > /tmp/thread_dump.txt
# Look for RUNNABLE threads
grep -A 5 "RUNNABLE" /tmp/thread_dump.txt
```

3. Check garbage collection activity:

```bash
# JVM GC log analysis
jstat -gcutil $(pgrep -f myapp) 1000 10
```

4. Profile the application to find hot methods:

```bash
# Using async-profiler
./profiler.sh -d 30 -f /tmp/flamegraph.html $(pgrep -f myapp)
```

---

## Memory Exhaustion

### Symptom

The application crashes with out-of-memory errors. The OOM killer terminates the process.

```
2026-03-16 16:45:00 FATAL OutOfMemoryError: Java heap space
  heap_used=3891MB
  heap_max=4096MB
  gc_overhead_percent=98
```

System log entry:

```
Mar 16 16:45:01 app-server-03 kernel: Out of memory: Killed process 14523 (java)
  total-vm:8421376kB, anon-rss:4194304kB, file-rss:0kB
```

### Cause

- Memory leaks in application code (unclosed resources, growing caches)
- Heap size configured too low for the workload
- Large result sets loaded entirely into memory
- Too many concurrent sessions holding state

### Solution

1. Check current memory usage:

```bash
free -h
ps aux --sort=-%mem | head -10
```

2. Capture a heap dump for analysis:

```bash
jmap -dump:live,format=b,file=/tmp/heap_dump.hprof $(pgrep -f myapp)
```

3. Analyze the heap dump to find the largest object groups:

```bash
# Using Eclipse MAT or jhat
jhat -port 7000 /tmp/heap_dump.hprof
# Then open http://localhost:7000 in a browser
```

4. As an immediate mitigation, increase heap allocation and add GC tuning:

```bash
# In the service configuration
JAVA_OPTS="-Xms4g -Xmx8g -XX:+UseG1GC -XX:MaxGCPauseMillis=200"
```

---

## Disk I/O Bottleneck

### Symptom

Write operations become slow. The iowait percentage is elevated. Database commits take longer than expected.

```
2026-03-16 17:30:22 WARN  SlowDiskWrite
  path=/var/lib/postgresql/data
  write_latency_ms=850
  expected_max_ms=50
```

### Cause

- Disk throughput or IOPS limits reached
- Write-ahead log (WAL) on the same volume as data files
- Insufficient filesystem cache
- Background processes (backups, vacuum) competing for I/O

### Solution

1. Check disk I/O statistics:

```bash
iostat -xz 1 5
```

2. Identify processes performing the most I/O:

```bash
iotop -ob -n 5
```

3. Check filesystem utilization (full disks cause severe slowdowns):

```bash
df -h
# Also check inode usage
df -ih
```

4. If the disk is near capacity, identify large files and directories:

```bash
du -sh /var/lib/postgresql/data/*/ | sort -rh | head -10
```
