+++
title = "Debugging Memory Leaks in Long-Running Processes"
date = "2025-06-08"
tags = ["debugging", "memory", "performance"]
description = "Techniques for finding and fixing memory leaks in server processes"
+++

Last week we hit a memory leak in production — the process grew from 200MB to 4GB over 48 hours. Here's how we tracked it down.

## Symptoms

- RSS memory climbed steadily with no plateau
- GC runs became more frequent but didn't reclaim memory
- No obvious large allocations in the code

## Investigation

### Step 1: Heap snapshots

We added a debug endpoint to dump heap statistics:

```crystal
get "/debug/heap" do
  stats = GC.stats
  {
    heap_size:  stats.heap_size,
    free_bytes: stats.free_bytes,
    total_bytes: stats.total_bytes,
  }.to_json
end
```

### Step 2: Bisect by time

By comparing snapshots, we found that `String` allocations were growing unbounded. The culprit was a logging buffer that was never flushed:

```crystal
# BUG: buffer grows forever
class Logger
  @buffer = [] of String

  def log(msg : String)
    @buffer << "[#{Time.utc}] #{msg}"
  end
end
```

### Step 3: The fix

We added a ring buffer with a fixed capacity:

```crystal
class Logger
  CAPACITY = 10_000
  @buffer = Deque(String).new

  def log(msg : String)
    @buffer.shift if @buffer.size >= CAPACITY
    @buffer << "[#{Time.utc}] #{msg}"
  end
end
```

{{< alert type="tip" message="Always set upper bounds on in-memory buffers. Unbounded collections are a common source of leaks." >}}

## Lessons learned

1. **Monitor RSS, not just GC stats** — GC may report low usage while the OS sees high RSS
2. **Add debug endpoints** — they cost almost nothing and save hours during incidents
3. **Set limits on all buffers** — if it can grow, it will grow

> The best time to add memory monitoring is before you need it.
