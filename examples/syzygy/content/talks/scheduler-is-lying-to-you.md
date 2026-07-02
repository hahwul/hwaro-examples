+++
title = "The Scheduler Is Lying to You"
date = "2026-03-12"
weight = 1
description = "Opening keynote: why load average, run queues, and CFS fairness are simplifications built for a machine that stopped existing around 2014."
[extra]
kind = "keynote"
time = "09:30"
duration = "45 min"
speaker = "Mira Kessler"
speaker_role = "Kernel engineer, Corvid Systems"
room = "Main Hall"
day = "Day 01 — 12 March"
+++

Load average is a lie. Not a useful approximation with sharp edges — an
outright fabrication, smoothed with an exponential decay constant chosen in
1993 for a machine with one core. This talk opens Syzygy by taking the
Linux, FreeBSD, and a from-scratch toy scheduler apart on stage to show
what "fair" actually means to each of them, and why none of the three
agree.

<!-- more -->

## The claim

Every scheduler makes a promise: give it a set of runnable tasks and it
will share the CPU among them according to some policy — round robin,
weighted fair queueing, priority bands. The promise is usually kept. What
is not kept is the story the scheduler tells you about *why*, through
`/proc/loadavg`, `top`, and a dozen dashboards built on both.

```c
/* CFS, simplified to the load-bearing line. */
struct sched_entity {
    u64 vruntime;   /* virtual runtime — the only number that matters */
    u32 weight;     /* derived from nice value, not priority */
};

/* pick_next: the task with the smallest vruntime runs next. */
static struct sched_entity *pick_next(struct rb_root *tree) {
    return rb_entry(rb_first(tree), struct sched_entity, run_node);
}
```

CFS does not track "fairness" as most engineers imagine it — there is no
running tally of CPU-seconds owed to each task. There is only vruntime,
a virtual clock that advances faster for low-priority tasks and slower for
high-priority ones, and a red-black tree that always serves the leftmost
node. Fairness is an emergent property of that one comparison, not a
design goal enforced anywhere directly.

## What this means for you

If your service has ever shown a suspiciously smooth latency graph that
falls apart the moment a neighbor container gets busy, this is why: the
scheduler's idea of fairness operates on virtual time, and virtual time
does not know about your SLA. The talk walks through three production
incidents — a noisy-neighbor postmortem, a mis-tuned `nice` hierarchy, and
a cgroup CPU quota that silently reduced a p99 to a p50 — and rebuilds
each one from the vruntime math up.

We close with a live demo: a 40-line scheduler in Zig, run against a
synthetic workload, next to CFS running the same workload under `perf
sched record`. The two traces do not agree, and the talk explains exactly
where they diverge and why that divergence is the whole point of having a
scheduler at all.
