+++
title = "Producing Messages"
description = "Partitioning strategies, batching, and acknowledgment levels for producers that cannot afford to lose a write."
date = "2025-03-11"
toc = true
weight = 2

[extra]
topic = "guides/producing"
+++

A producer's job looks simple — append a value to a topic — but three choices determine whether Basalt can actually keep its at-least-once promise for that write: which partition it lands on, how long the client waits before acknowledging, and how the broker confirms the write is durable.

<!-- more -->

## Partitioning

Every message carries an optional key. If you supply one, Basalt hashes it to pick a partition, so the same key always lands in the same partition and therefore keeps its relative order:

```python
producer.send("orders.created", key=order.customer_id, value=payload)
```

Omit the key and Basalt round-robins across partitions for even load, but you give up ordering between messages entirely — two events for the same customer can arrive out of sequence to different consumers. Key by whatever entity needs its history read in order: a customer, an account, a device. Do not key by something with only a handful of distinct values, like a status enum — you will pin most of your traffic to one or two partitions.

## Batching

Producers buffer outgoing messages briefly and send them as a batch rather than one request per message:

```toml
[producer]
batch_size = 16384     # bytes, per partition
linger_ms = 5           # max wait before flushing a partial batch
compression = "zstd"
```

`linger_ms` trades a few milliseconds of added latency for dramatically fewer, larger requests under load. Five milliseconds is a reasonable default; push it higher for bulk-loading jobs where throughput matters more than tail latency.

## Acknowledgment levels

`acks` controls how durable "sent" actually means:

- `acks=0` — fire and forget. Fastest, and the only mode where Basalt cannot guarantee at-least-once, because a dropped request looks identical to success.
- `acks=leader` — the partition leader has written the message to its own log. Survives a broker crash on any other replica, not the leader itself.
- `acks=all` — every in-sync replica has the write. This is the mode that makes the at-least-once guarantee real; pair it with `min_insync_replicas` set above 1 so a single lagging replica cannot silently drop your durability floor.

Production producers should run `acks=all` with retries enabled and an idempotent producer ID, which lets Basalt de-duplicate a retried batch on the broker side instead of writing it twice.

{% alert(type="warning") %}
`acks=0` is not compatible with any delivery guarantee Basalt makes. Reach for it only on metrics or logging topics where an occasional dropped point is genuinely fine.
{% endalert %}
