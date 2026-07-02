+++
title = "The scheduling model"
description = "How Galena turns a cron table into a leased, cluster-wide tick loop."
date = "2025-09-18"
weight = 1
toc = true
[extra]
chapter = 1
cron_fields = ["*", "*", "*", "*", "*"]
cron_note = "the tick — every minute, every node agrees on the time"
+++

Galena is a single logical scheduler spread across many processes. At any moment one process holds the **lease** and is the *scheduler of record*; the others are warm replicas replaying the same state. The lease is a short-lived record in the shared store, renewed every few seconds. If the holder stops renewing — a crash, a long GC pause, a partition — another node acquires it and continues from the last durable checkpoint.

<!-- more -->

## The tick loop

Time advances in fixed **ticks**, one per minute by default. On each tick the leader asks a single question of every schedule: *should this job have fired since the last tick I durably recorded?* Because the question is phrased against recorded time rather than wall-clock time, a leader that takes over mid-minute does not skip or double-fire — it resumes from the checkpoint and works forward.

```text
last_checkpoint = 12:03:00
leader dies at   12:03:41   (tick 12:04 never recorded)
new leader loads 12:03:00, evaluates 12:04, 12:05, ... forward
```

## Jobs and runs

A **job** is the definition: a name, a cron expression, a handler, and a policy. A **run** is one attempt to execute that job for one fire time. Runs are the unit everything else operates on — jitter delays them, backfills create them for past fire times, and the dead-letter queue holds the ones that exhausted their retries.

```toml
[job.reindex-search]
schedule = "*/15 * * * *"
handler  = "search.reindex"
timeout  = "90s"
retries  = 4
jitter   = "30s"
```

Keep handlers idempotent. Galena guarantees a run is *attempted* at least once per fire time, not that it is attempted *exactly* once — a leader change at the wrong instant can produce a duplicate, and a well-behaved handler simply no-ops the second time.
