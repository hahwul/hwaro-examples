+++
title = "Parallel Builds"
weight = 2
date = 2025-06-11
+++

# Parallel Builds

Mortar automatically parallelizes compilation to take advantage of multi-core processors. The scheduler respects target dependencies and resource constraints.

## Worker Count

By default, Mortar uses the number of available CPU cores:

```toml
[build]
parallel = true
jobs = 8          # Explicit worker count
```

Override from the command line:

```bash
mortar build --jobs 4
mortar build -j 16
```

## Job Scheduling

Mortar uses a dependency-aware scheduler. Given this target graph:

```
     libcore
    /       \
  libnet   libutil
    \       /
      app
```

Mortar schedules `libcore` first, then runs `libnet` and `libutil` in parallel, and finally links `app`.

Build output shows parallel execution:

```
[mortar] Building with 8 workers
[1/4] Compiling libcore (12 files)        ... done (1.2s)
[2/4] Compiling libnet (8 files)          ... done (0.9s)
[3/4] Compiling libutil (5 files)         ... done (0.6s)
[4/4] Linking app                         ... done (0.3s)
[mortar] Build completed in 2.1s (4 targets, 25 files)
```

## Resource Limits

For builds that consume significant memory, you can set resource constraints:

```toml
[build.resources]
max_memory = "4GB"         # Per-job memory limit
max_total_memory = "16GB"  # Total memory for all jobs
io_threads = 4             # Concurrent disk I/O threads
```

When a job exceeds its memory limit, Mortar automatically reduces parallelism to prevent out-of-memory conditions.

## Build Profiling

Analyze where time is spent during builds:

```bash
mortar build --profile-build
```

This generates a `build-profile.json` file with timing data for each compilation unit:

```bash
mortar profile show
# Top 5 slowest compilation units:
#   src/parser.c       4.2s  (34%)
#   src/codegen.c      2.8s  (23%)
#   src/optimizer.c    1.9s  (15%)
#   src/lexer.c        1.4s  (11%)
#   src/main.c         0.8s  (6%)
```

## Distributed Builds

For very large projects, Mortar supports distributing compilation across multiple machines:

```toml
[build.distributed]
enabled = true
coordinator = "https://mortar-coord.internal:9090"
workers = ["build01:9091", "build02:9091", "build03:9091"]
```

> Start with the default parallelism settings. Only adjust `jobs` and resource limits if you observe memory pressure or want to reserve cores for other tasks during builds.
