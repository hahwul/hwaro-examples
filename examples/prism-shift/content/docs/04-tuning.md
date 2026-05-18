+++
title = "Tuning"
description = "Configuration knobs, what they do, and when to touch them."
date = "2026-02-12"
weight = 4
tags = ["ops"]
+++

## Cardinal rule

Do not tune what you have not measured. The defaults are chosen for a
mid-sized workload and are almost always the right starting point. The
runtime ships a built-in profiler; use it before you touch the config.

```bash
prism profile --duration 5m --output prof.json
prism profile inspect prof.json
```

## Knobs that matter

These five settings account for the majority of useful tuning. Everything
else is either a debugging aid or an escape hatch for a pathological
workload.

```toml
[runtime]
workers          = 0          # 0 = auto, one per core
journal_buffer   = "16MiB"    # in-memory journal staging area

[storage]
segment_size_max = "64MiB"    # journal rollover threshold
compact_after    = "7d"       # retention before compaction
fsync_policy     = "always"   # always | batched | none
```

## When to touch them

- **workers**: bump only if you have measured contention on the worker
  queue. Adding workers past the core count almost always hurts.
- **journal_buffer**: enlarge if `journal.spill_count` is non-zero in
  the profiler output.
- **segment_size_max**: lower for very small workloads (faster compaction);
  do not raise above 256 MiB.
- **fsync_policy**: never use `none` outside of a benchmark. `batched`
  trades a window of unrecoverable writes for ≈3× throughput; you must
  accept that trade in writing before enabling it.

> **Warning** — `fsync_policy = "none"` is a knob for benchmark
> reproducibility. Engaging it in production is a way to lose data, full
> stop.
