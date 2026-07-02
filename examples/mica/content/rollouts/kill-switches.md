+++
title = "Kill switches"
description = "Flip a flag off globally in under a second, and wire an automatic trip so a bad metric rolls the release back before a human wakes up."
date = "2026-06-11"
weight = 3
toc = true
[extra]
tag = "safety"
status = "on"
+++

A kill switch is a flag you can turn off faster than you can open a deploy
pipeline. When a release goes wrong, the question is never *can we roll back* —
it is *how many minutes*. Mica's answer is one command, propagated to every
connected SDK in under a second.

<!-- more -->

## Manual kill

Every flag is its own kill switch. Setting the rollout to zero forces the
default variant for all traffic on the next evaluation — no redeploy, no cache
wait.

```bash
mica kill new-checkout
# → new-checkout forced OFF · propagated to 214 connected clients in 480ms
```

Under the hood, `kill` pins the flag off and records who did it and when, so
the incident timeline writes itself. Restore with `mica restore new-checkout`,
which returns the flag to its previous rollout state rather than a blank one.

## How fast "instant" is

SDKs hold a streaming connection to Mica's edge. A kill event is pushed, not
polled, so propagation is bounded by network latency rather than a refresh
interval. If the stream drops, the SDK falls back to polling every 15 seconds
and reconnects with backoff — a killed flag stays killed even offline, because
the last known ruleset is cached locally.

## Automatic trips

The strongest kill switch is the one that fires without you. Attach a guard to
a flag and Mica trips it when a metric crosses a threshold for a sustained
window.

```yaml
flag: new-checkout
guard:
  metric: checkout_error_rate
  op: greater_than
  threshold: 0.02        # 2%
  window: 5m
  action: kill
```

When `checkout_error_rate` holds above 2% for five minutes, Mica kills the
flag, posts to the incident channel, and freezes the rollout so a scheduled
widen cannot fight the trip.

> A guard should measure the thing the flag risks, not overall system health.
> Guarding a checkout flag on total CPU will miss the failure and trip on
> unrelated load.

## Test the switch before you need it

Run a game day: kill a low-stakes flag in production and confirm the fallback
path renders cleanly. A kill switch that drops users onto a broken legacy path
is not a safety net — it is a second outage waiting behind the first.
