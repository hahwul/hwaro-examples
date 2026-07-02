+++
title = "Replication & ISR"
description = "How the leader, followers, and the in-sync replica set agree on what is safely committed before acknowledging a write."
date = "2025-05-28"
toc = true
weight = 2

[extra]
topic = "protocol/replication-isr"
+++

Every partition has exactly one leader at a time; all writes and reads for that partition go through it. Followers do nothing but replicate — they pull new entries from the leader's log and apply them in order, the same way a consumer would, except their offset is tracked by the broker itself rather than a client.

<!-- more -->

## The in-sync replica set

The ISR is the set of replicas — leader included — that have fully caught up to the leader's log within a bounded lag window. A follower falls out of the ISR when it stops fetching or falls too far behind; it rejoins automatically once it catches back up.

```text
partition 2   leader=broker-1   isr=[broker-1, broker-2, broker-3]
partition 2   broker-3 lag exceeds threshold
partition 2   leader=broker-1   isr=[broker-1, broker-2]
```

`acks=all` on a producer means the leader waits for every member currently in the ISR to acknowledge the write — not every replica that nominally owns the partition, only the ones caught up enough to matter. This is what keeps a temporarily slow replica from stalling every producer on the topic: it drops out of the ISR, writes proceed against the remaining members, and it rejoins once it has replayed the gap.

## High watermark

The high watermark is the offset up to which every replica in the ISR has confirmed the write. Consumers can only fetch up to the high watermark, never past it — this is what prevents a consumer from reading a message that could still be lost if the leader died right now, before replication finished.

```text
log:            [0 1 2 3 4 5 6 7]
replicated to isr: up through 5
high watermark: 6          (exclusive — offsets 0-5 are fetchable)
```

## Leader election

When a leader fails, Basalt elects a new one from the current ISR, never from outside it — electing a replica that was not caught up would silently drop the messages it never received. If the entire ISR is unavailable, the partition becomes unwritable rather than falling back to an out-of-date replica; this is a deliberate choice to prefer unavailability over silent data loss, and it can be relaxed per-topic with `unclean_leader_election = true` for workloads where staying up matters more than a rare gap.

{% alert(type="note") %}
Unclean leader election is scoped per topic, not cluster-wide. Enable it only on the specific topics where availability outranks completeness — never as a blanket default.
{% endalert %}
