+++
title = "Never drop a message."
description = "Basalt is a topic-partitioned log broker that guarantees at-least-once delivery across consumer groups, with per-partition ordering and cooperative rebalancing."
template = "home"

[extra]
topic = "cluster/overview"
+++

Basalt is a log broker for systems that would rather process a message twice than lose it once. Topics are split into ordered partitions, every write is replicated before it is acknowledged, and consumer groups track their own offsets so a crashed worker resumes exactly where it left off — not from zero.

```python
producer.send("orders.created", key=order.id, value=payload)
consumer.subscribe("orders.created", group="billing-svc")
for msg in consumer.poll(): commit(msg.offset)
```

That is the whole contract: producers append to a partition, consumer groups pull and commit, and Basalt guarantees every committed message reaches every group at least once — even across broker restarts, leader elections, and rebalances.

| Setting | Default |
|---|---|
| Delivery guarantee | At-least-once, per partition |
| Ordering | Guaranteed within a partition, not across |
| Replication | Configurable factor, leader plus in-sync replica set |
| Rebalance | Cooperative and incremental, no stop-the-world pause |
