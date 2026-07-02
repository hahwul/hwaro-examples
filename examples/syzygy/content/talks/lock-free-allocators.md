+++
title = "Lock-Free Allocators at the Edge of Cache Coherence"
date = "2026-03-12"
weight = 2
description = "A correct lock-free free-list is not the same thing as a fast one. What MESI actually costs you per bucket, measured, not guessed."
[extra]
kind = "talk"
time = "10:45"
duration = "45 min"
speaker = "Teodor Vance"
speaker_role = "Allocator maintainer, project ossuary"
room = "Main Hall"
day = "Day 01 — 12 March"
+++

Compare-and-swap is not free. It is not even close to free once two
sockets are involved, and most lock-free allocator designs are tuned
against a single-socket benchmark that never surfaces the cost. This talk
measures that cost directly, bucket by bucket, on real NUMA hardware.

<!-- more -->

## The naive free-list

A textbook lock-free stack pops and pushes with one atomic instruction:

```c
typedef struct node { struct node *next; } node;

void push(_Atomic(node *) *head, node *n) {
    node *old = atomic_load_explicit(head, memory_order_relaxed);
    do {
        n->next = old;
    } while (!atomic_compare_exchange_weak_explicit(
        head, &old, n,
        memory_order_release, memory_order_relaxed));
}
```

This is correct. It is also the slowest possible implementation the moment
two threads on different cores contend for the same `head` pointer,
because every failed CAS forces a cache-line round trip through the
coherence fabric. On a two-socket box, that round trip crosses the
interconnect, and the interconnect is an order of magnitude slower than
L3.

## What ossuary does instead

ossuary — the allocator this talk is drawn from — replaces the single
global free-list with per-core free-lists and a coherence-aware
"stealing" protocol that only crosses socket boundaries when a core's
local list is provably empty, not merely low. The talk derives the
threshold analytically from measured interconnect latency rather than
picking a magic number, then shows the derivation holding up (and briefly
not holding up, on an older Opteron box brought specifically to break it)
across four generations of hardware.

Expect a spreadsheet's worth of `perf c2c` output, a live flame graph of a
false-sharing bug introduced on purpose, and the actual bucket-size
table ossuary ships with, annotated with which sizes are cache-line
aligned by design and which are aligned by luck.

Bring a laptop if you want to run the benchmark harness during the Q&A —
it is a single static binary, no dependencies, and it prints its own
methodology as a header comment so nobody has to trust the slides.
