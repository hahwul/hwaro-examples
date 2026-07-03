+++
title = "How adaptive sampling works"
description = "The feedback loop that keeps agent overhead inside a fixed CPU budget."
date = "2026-04-12"
weight = 2
toc = true
slug = "how-adaptive-sampling-works"
+++

Fixed-rate sampling forces an impossible choice: set the rate high enough for a
quiet host and you drown a busy one; set it low enough for peak load and you
throw away detail exactly when nothing is happening. Pumice removes the choice
by treating the sample rate as the output of a control loop rather than a
constant.

<!-- more -->

## The budget, not the rate, is the knob

You configure a **CPU budget** — the fraction of one core the agent is allowed
to spend — and let the agent solve for the rate that fits. The default is
strict:

```toml
[sampling]
mode   = "adaptive"
budget = "0.5%"     # of a single core, measured per 250 ms window
floor  = "1:4096"   # never coarser than this
ceil   = "1:8"      # never finer than this
```

## The loop

Every 250 ms the agent measures its own on-CPU time from a `sched` probe and
compares it to the budget. A proportional controller nudges the divisor up or
down:

```
error   = measured_cpu - budget
divisor = clamp(divisor * (1 + k * error), ceil, floor)
```

Because the measurement comes from the same eBPF machinery the agent uses for
everything else, the feedback is honest: the cost it accounts for includes the
cost of accounting. There is no separate profiler to drift out of sync.

## What survives sampling

Sampling only ever drops **individual events**, never aggregates. Counters such
as `syscall.count` and `tcp.retransmits` are maintained in kernel maps and
exported in full regardless of the current divisor. What the divisor governs is
how many *traced* events — with stack, latency, and arguments — reach userspace.

The practical result: your rate graphs stay exact under any load, while the
expensive high-cardinality detail thins out gracefully precisely when the host
has no cycles to spare for it. Which counters and traced events each collector
produces is documented in [Collectors and metrics](@/guides/collectors-and-metrics.md).
