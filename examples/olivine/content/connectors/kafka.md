+++
title = "Kafka source and sink"
description = "Read and write Kafka topics with offset-committed checkpoints and consumer-group backpressure."
date = "2025-04-02"
weight = 1
toc = true
[extra]
minutes = 8
role = "Source and sink"
+++

Kafka is the most common way records enter and leave an Olivine pipeline. The
connector works as both a source and a transactional sink, and it wires its
offset handling into the checkpoint system so restarts never skip or double a
message.

<!-- more -->

## As a source

Point the source at a broker set and a topic. Olivine joins a consumer group,
tracks partitions, and commits offsets on each checkpoint barrier rather than on
a timer — so the committed offset always matches durable downstream state:

```python
from olivine import sources

orders = sources.kafka(
    brokers=["kafka-1:9092", "kafka-2:9092"],
    topic="orders",
    group="olivine-orders",
    start="earliest",   # or "latest", or a timestamp
)
```

Partition assignment feeds directly into backpressure: each partition is an
independent lane with its own credit, so a hot partition cannot starve the
others, and a slow downstream throttles every lane evenly.

## As an exactly-once sink

The sink uses Kafka transactions. Records for a checkpoint are produced inside a
transaction that commits when the barrier completes:

```python
from olivine import sinks

pipe.sink(
    sinks.kafka(
        brokers=["kafka-1:9092"],
        topic="orders.enriched",
        delivery="exactly_once",
        transactional_id="olivine-orders-enriched",
    )
)
```

Give each pipeline a stable `transactional_id`. On restart Olivine fences the
previous producer with that id, aborting any transaction left open by the crash
so no partial batch is ever read by a downstream consumer.

## Serialization

Bring your own codec, or use the built-ins for JSON and Avro with a schema
registry:

```python
sources.kafka(topic="orders", value="avro", registry="http://registry:8081")
```

## Tuning

Set `max_poll_records` to shape batch size and `fetch_max_bytes` to cap memory.
Both interact with channel capacity — larger fetches want larger channels so a
poll does not stall waiting for credit. Start with the defaults and adjust only
after `olivine top` shows the source lane starved.
