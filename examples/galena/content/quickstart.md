+++
title = "Quickstart"
description = "Install Galena, define your first job, and watch a single node elect itself leader — in about five minutes."
toc = true
[extra]
kicker = "Getting started"
+++

This walks through a single-node Galena from an empty directory to a firing job. It uses the embedded file store, so there is nothing else to install. When you are ready for a cluster, the [operations chapter](/handbook/operations/) covers Postgres and leader election.

## 1. Install

Galena is a single static binary.

```bash
brew install galena
galena version
# galena 2.4.0 (dolostone)
```

## 2. Define a job

Jobs live in `galena.toml`. Each has a name, a five-field cron [schedule](/handbook/cron-syntax/), and a handler. Start with a heartbeat that prints the time.

```toml
[job.heartbeat]
schedule = "* * * * *"     # every minute
handler  = "shell:echo galena tick at $(date -u +%T)"
jitter   = "5s"
retries  = 2
```

## 3. Run the scheduler

Point the daemon at a state file and start it. On a fresh store the node acquires the lease immediately and becomes leader.

```bash
galena serve --config galena.toml --state ./galena.db
# lease acquired by node local-1
# scheduled 1 job, next tick 00:01:00Z
```

Within a minute you will see the heartbeat fire, offset by its small jitter window.

## 4. Verify

In a second terminal, ask the running scheduler what it has done and what is next.

```bash
galena status
# NODE     ROLE    LEASE_AGE  LAST_TICK
# local-1  leader  1.4s       00:01:00Z

galena runs --job heartbeat --since 5m
# FIRE_TIME         ORIGIN  STATUS  DURATION
# 00:01:00Z         live    ok      0.01s

galena explain "* * * * *"
# next 3 fires: 00:02:00Z, 00:03:00Z, 00:04:00Z
```

That is the whole loop: define, serve, verify. From here, read the [handbook](/handbook/) in order — it builds up jitter, backfills, and dead-letter queues on top of exactly this model.
