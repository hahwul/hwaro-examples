+++
title = "Writing a Scheduler That Doesn't Panic Under Load"
date = "2026-03-14"
weight = 5
description = "Closing keynote: the failure modes of a scheduler written from scratch, and the invariants that turned out to matter more than throughput."
[extra]
kind = "keynote"
time = "10:00"
duration = "45 min"
speaker = "Halvard Skei"
speaker_role = "Distinguished engineer, Nordkil Systems"
room = "Main Hall"
day = "Day 03 — 14 March"
+++

The closing keynote is a scheduler post-mortem told forward instead of
backward: what it took to write one from nothing, ship it in a production
hypervisor, and keep it from panicking when every one of its assumptions
about workload shape turned out to be wrong within the first quarter.

<!-- more -->

## Start with the invariant, not the algorithm

Nordkil's scheduler began, like most, as an algorithm — weighted round
robin over per-core run queues. It became reliable only after the team
stopped optimizing the algorithm and started writing down invariants that
had to hold no matter what a guest VM did:

```text
INVARIANT 1: no runnable task waits longer than 2x its quantum,
             regardless of how many tasks are runnable.
INVARIANT 2: a single misbehaving task cannot starve migration,
             even if it never voluntarily yields.
INVARIANT 3: the run-queue lock is never held across a context switch.
```

Invariant 3 sounds obvious until you see the bug it prevented: an early
version held the lock across the switch to save a re-acquire, which
worked perfectly until a guest's task list grew past the point where the
switch itself became slow enough for a watchdog on another core to fire
mid-lock and deadlock the box. The fix was two lines. Finding the
invariant that made the bug impossible by construction took a redesign.

## What actually broke in production

The talk covers three incidents in order of how much they changed the
design: a thundering-herd wakeup storm from a networking driver that
batched interrupts more aggressively than the scheduler expected, a
priority-inversion case triggered only by a specific guest kernel's futex
implementation, and a slow memory leak in scheduling statistics that took
four months to page a host.

Each incident is presented as it was actually debugged — dead ends
included — because the useful lesson is rarely the fix, it is the
reasoning that got discarded on the way to the fix. The talk closes
Syzygy with Nordkil's current invariant list, published for the first
time, and an argument that a scheduler's specification is worth more than
its benchmark numbers.
