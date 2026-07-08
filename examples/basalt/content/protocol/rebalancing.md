+++
title = "Consumer Group Rebalancing"
description = "The generation-id protocol that reassigns partitions across a consumer group without double-processing more than necessary."
date = "2025-06-18"
toc = true
weight = 3

[extra]
topic = "protocol/rebalancing"
+++

Membership in a consumer group changes constantly — a deploy rolls a new instance in while draining an old one, a process crashes, autoscaling adds capacity for a traffic spike. Every one of those events triggers a rebalance: the group re-divides its partitions among whoever is currently a member.

<!-- more -->

## Join and sync

A rebalance runs as a two-round handshake against a broker elected as the group's coordinator:

```text
JoinGroup    every member sends its subscription; coordinator picks a leader member
SyncGroup    the leader computes the assignment, coordinator fans it out to all members
```

Only one member — the "leader" of the group, an ordinary consumer promoted for this round only — actually computes who gets which partitions. Everyone else just waits for `SyncGroup` to tell them their share. This keeps assignment logic in one place per rebalance instead of requiring every member to agree independently.

## Generation IDs

Every completed rebalance increments the group's generation ID. Each member includes its known generation ID on every `Heartbeat` and `Commit` request; if the coordinator sees a stale generation, it rejects the request with `REBALANCE_IN_PROGRESS`, which tells the member it is operating on an assignment that no longer exists and must rejoin.

```text
generation=4  member consumer-a  owns partitions [0, 1]
              -- consumer-b joins --
generation=5  member consumer-a  owns partitions [0]
              member consumer-b  owns partitions [1]
```

This is what prevents a "zombie" consumer — one that missed the rebalance because of a long GC pause or network partition — from committing offsets or processing messages under a partition assignment that has already moved to someone else.

## Assignment strategies

- **Range** — partitions are assigned in contiguous blocks per topic. Simple and predictable, but can concentrate load unevenly across topics with different partition counts.
- **Round-robin** — partitions across all subscribed topics are dealt one at a time across members. Better balance, but a rebalance can reassign nearly every partition even for a single member joining.
- **Cooperative-sticky** — the default. Computes the minimal set of partition moves needed to reach a balanced assignment, leaving unaffected members' partitions untouched, and lets members keep processing their retained partitions during the rebalance instead of stopping the world.

Cooperative-sticky is why adding one consumer to a busy group does not pause the other nine — see [Consuming with Groups](../../guides/consuming-groups/) for how this looks from the client side.
