+++
title = "Graphs Are Event Logs"
description = "How Gneiss treats node and edge upserts as an append-only log, and what MATCH actually sees when it walks a pattern."
date = "2025-02-18"
weight = 20
toc = true
+++

There is no table behind a Gneiss graph. What exists is an append-only log of `upsert_node`, `upsert_edge`, and `expire_edge` events, and an in-memory index that folds that log into "the graph as of right now." Understanding that fold is the difference between a `MATCH` that behaves the way you expect and one that quietly misses events.

<!-- more -->

## Identity and versioning

Every node and edge upsert carries an `id`. When a new event arrives for an `id` Gneiss has already seen, its properties are merged, not replaced — a `Sensor` upsert with only `{"threshold": 95}` updates the threshold and leaves every other property untouched. If you need to clear a property, send it explicitly as `null`.

```json
{"op": "upsert_node", "label": "Sensor", "id": "sn-14", "props": {"threshold": 95}}
```

Edges carry identity too, defaulting to a composite of `label`, `from`, and `to` when you don't supply one explicitly. That default is almost always what you want, since it means re-sending the same logical edge is idempotent rather than creating a duplicate.

## Expiry

Graphs built from streams need a way to say an edge no longer holds. `expire_edge` removes an edge from the live graph without deleting the nodes it connected:

```json
{"op": "expire_edge", "label": "REPORTS", "from": "sn-14", "to": "rd-8841"}
```

A running `MATCH` that depended on that edge stops matching it on the very next evaluation — Gneiss doesn't wait for a window boundary to notice an expiry, only to decide when to emit about it.

## What MATCH actually walks

When a query evaluates, `MATCH` doesn't scan the raw event log — it walks the folded graph as of the current watermark, the same structure every other running query shares. Two consequences follow from that:

- Order between unrelated events doesn't matter, only their timestamps relative to the watermark. A `Sensor` and a `Reading` can arrive in either order and a pattern connecting them will still match once both exist.
- A pattern can only match combinations of nodes and edges that are simultaneously live. If an edge expires between two evaluations, rows that depended on it stop being produced — they are not retroactively deleted from anything you've already emitted.

One current limitation worth knowing early: Gneiss patterns match fixed-length paths only. There is no `*1..3`-style variable-length hop yet, so a three-edge chain has to be written as three explicit edges in the pattern, each with its own variable.

```sql
MATCH (s:Sensor)-[:REPORTS]->(r:Reading)-[:TRIGGERED]->(a:Alert)
WHERE a.severity = 'critical'
EMIT CHANGES
```

## What's next

Fixed windows and single patterns get you a long way, but real alerting usually means correlating two things that happen close together in time — a reading and the alert it triggers, or two sensors that both crossed a threshold within the same minute. That's the subject of the next chapter.
