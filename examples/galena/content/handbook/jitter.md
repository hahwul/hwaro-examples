+++
title = "Jittered fire times"
description = "Spreading many jobs off the same instant so a shared schedule does not become a thundering herd."
date = "2025-10-21"
weight = 3
toc = true
[extra]
chapter = 3
cron_fields = ["*/5", "*", "*", "*", "*"]
cron_note = "every 5 minutes — the classic herd, tamed with jitter"
+++

Thousands of jobs pinned to `*/5 * * * *` will, without help, all fire at exactly `:00`, `:05`, `:10`. Downstream databases and rate-limited APIs feel that as a spike every five minutes. **Jitter** spreads each run across a window so the load flattens into a plateau.

<!-- more -->

## How the offset is chosen

Each run's delay is drawn deterministically from a hash of the job name and the fire time, then scaled to the job's jitter window. Determinism matters: a given run always resolves to the same offset, so a leader change does not move it, and two replicas compute an identical delay.

```toml
[job.push-metrics]
schedule = "*/5 * * * *"
jitter   = "45s"        # each run fires at fire_time + [0s, 45s)
```

With a 45-second window, runs land uniformly across the first three-quarters of every minute instead of piling onto the tick.

## Choosing a window

- Keep the window **shorter** than the interval — a 60-second jitter on a one-minute schedule can reorder runs.
- Size it to the downstream you are protecting. If a database absorbs 200 writes per second and 4,000 jobs share a schedule, spread them across at least 20 seconds.
- Leave latency-sensitive jobs at `jitter = "0s"`; a report due at exactly `09:00` should not drift.

```bash
galena describe push-metrics --at 2026-02-01T00:05:00Z
# fire_time  00:05:00
# jitter     +31.204s  (deterministic)
# effective  00:05:31.204Z
```

Jitter only shifts *when* a run starts. Timeouts, retries, and backfills all measure from the original fire time, so a jittered job is never charged for its own delay.
