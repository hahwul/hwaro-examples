+++
title = "Dead-letter queues"
description = "Where runs go when retries are exhausted, and how to inspect, fix, and replay them."
date = "2026-01-09"
weight = 5
toc = true
[extra]
chapter = 5
cron_fields = ["*/30", "*", "*", "*", "*"]
cron_note = "every 30 minutes — a job worth watching for failures"
+++

A run that fails is retried according to its policy. When the last retry fails, Galena does not drop it — it moves the run to the job's **dead-letter queue** (DLQ) with the full context needed to understand and recover it: the payload, every attempt's error, and the timestamps.

<!-- more -->

## Retry then park

Retries use exponential backoff with a ceiling. Once the attempt count is spent, the run is parked rather than retried again forever.

```toml
[job.charge-invoices]
schedule = "0 6 * * *"
retries  = 5
backoff  = "exponential"   # 1s, 4s, 16s, 64s, 256s
[job.charge-invoices.dead_letter]
enabled  = true
ttl      = "30d"           # parked runs expire after 30 days
```

## Inspecting the queue

The DLQ is queryable per job. Each entry keeps the last error and the number of attempts that led there:

```bash
galena dlq list --job charge-invoices
# ID        FIRE_TIME            ATTEMPTS  LAST_ERROR
# r_8fa21   2026-01-08T06:00Z    5         upstream 503: billing gateway
# r_8fb07   2026-01-09T06:00Z    5         timeout after 90s

galena dlq show r_8fa21 --with-payload
```

## Replaying

Once the cause is fixed, replay a single entry or drain the whole queue. Replayed runs re-enter the normal pipeline — including retries — and are removed from the DLQ only after they succeed:

```bash
galena dlq replay r_8fa21          # one run
galena dlq drain --job charge-invoices --rate 5/s
```

Treat a growing DLQ as a first-class signal. Alert on its depth, not just on error rate: a job can fail every attempt and still look healthy on a throughput graph while quietly filling the dead-letter queue.
