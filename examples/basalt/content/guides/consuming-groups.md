+++
title = "Consuming with Groups"
description = "How consumer groups divide partitions, track offsets, and recover after a rebalance without reprocessing more than necessary."
date = "2025-04-22"
toc = true
weight = 3

[extra]
topic = "guides/consuming-groups"
+++

A consumer group is Basalt's unit of parallel, coordinated reading. Every consumer that joins a group with the same name is assigned a disjoint set of partitions, and the group as a whole tracks one shared cursor per partition — the committed offset.

<!-- more -->

## Joining a group

```python
consumer = Consumer(topic="orders.created", group="billing-svc")
for batch in consumer.poll(max_records=200):
    for msg in batch:
        apply_charge(msg)
    consumer.commit()
```

When `billing-svc` has one consumer running, that consumer owns all four partitions of `orders.created`. Start a second process with the same group name and Basalt rebalances: two partitions move to the new consumer. Nothing is lost in transit — the moving partitions resume from their last committed offset on the new owner.

## Commit strategy

Committing after every message is safe but slow; committing only at the end of a long batch is fast but widens the redelivery window if the process dies mid-batch. Two common strategies:

- **Auto-commit on an interval** — simplest, but a crash between commits redelivers everything processed since the last one. Fine for idempotent handlers.
- **Manual commit after the batch is durably applied** — commit only after your own side effects (a database write, a downstream publish) have succeeded, so a crash never commits work that did not happen.

Basalt never commits on your behalf unless you enable auto-commit explicitly. The default is manual, on the theory that a broker should not guess when your side effects are safe to acknowledge.

## What "at-least-once" costs you

Because commits happen after processing, not before, a crash between "processed" and "committed" causes Basalt to redeliver that message to whichever consumer picks up the partition next. Your handler must tolerate seeing the same message twice — usually by keying side effects on the message's idempotency key rather than assuming poll order implies exactly-once delivery. This is the one requirement Basalt cannot lift for you; partitioned, replicated, at-least-once delivery is the broker's job, and idempotent handling is the consumer's.

See [Operating in Production](../operating/) for how to watch consumer lag before it becomes an incident, and [Consumer Group Rebalancing](../../protocol/rebalancing/) for the wire-level mechanics behind the handoff described above.
