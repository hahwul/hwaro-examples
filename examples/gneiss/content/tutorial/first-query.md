+++
title = "Your First Continuous Query"
description = "Connect a stream, write a MATCH clause, and watch a Gneiss query keep running as new events arrive."
date = "2025-01-14"
weight = 10
toc = true
+++

Most query languages assume the data holds still while you ask about it. Gneiss doesn't get that luxury: the graph it queries is being built out of events as they arrive, and a query is expected to keep an answer current for as long as it runs. This chapter writes the smallest possible version of that — one query, one stream, one live result set.

<!-- more -->

## Connecting a stream

Every Gneiss deployment starts with an event source: a Kafka topic, a Kinesis stream, or, for this tutorial, the built-in file source that replays a JSON log at real time speed. Point it at a log of node and edge events and that log becomes the graph a query sees.

```json
{"op": "upsert_node", "label": "Sensor", "id": "sn-14", "props": {"threshold": 90}}
{"op": "upsert_node", "label": "Reading", "id": "rd-8841", "props": {"value": 42}}
{"op": "upsert_edge", "label": "REPORTS", "from": "sn-14", "to": "rd-8841"}
```

`upsert_node` and `upsert_edge` are the only two event types a source needs to emit. Gneiss folds each one into an in-memory graph, keyed by the `id` you provide, and every `MATCH` in every running query re-evaluates against that graph as it changes.

## Writing the query

A query with no `WINDOW` or `EMIT` is legal, but its result table only grows — useful for debugging, wrong for production. The version below adds both: it groups readings per sensor into one-minute tumbling windows and streams out a row every time a match changes within the current window.

```sql
MATCH (s:Sensor)-[:REPORTS]->(r:Reading)
WHERE r.value > s.threshold
WINDOW TUMBLING (INTERVAL '1' MINUTE)
GROUP BY s.id
EMIT CHANGES
```

## Running it

```
$ gneiss run alerts.gql --watch
window_start           sensor_id   count
2025-01-14T09:41:00Z    sn-14       1
2025-01-14T09:41:00Z    sn-14       2
2025-01-14T09:42:00Z    sn-14       1
```

Each line is a new emission, not a new window — `count` for `sn-14` climbed from 1 to 2 inside the same sixty-second bucket because a second over-threshold reading arrived before the window closed. That's `EMIT CHANGES` doing its job: every update to the match set becomes a row, immediately, instead of waiting for the window to finish.

## What's next

The query above works because the incoming events already look like a graph. The next chapter looks at what Gneiss actually does with `upsert_node` and `upsert_edge` under the hood, and why that matters once your patterns get more specific than "any sensor, any reading."
