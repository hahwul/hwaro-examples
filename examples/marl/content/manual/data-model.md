+++
title = "The data model"
description = "Series, tags, points, and how Marl identifies the thing you are measuring."
date = "2025-02-11"
weight = 1
toc = true
[extra]
band = "foundations"
tier = "Foundations"
+++

Everything in Marl is a **point**: a single measurement pinned to a moment in
time. Points that share an identity form a **series**, and series are the unit
that retention, downsampling, and indexing all operate on. Get the identity
right and the rest of the system behaves; get it wrong and you will fight
cardinality forever.

<!-- more -->

## Series identity

A series is identified by its measurement name plus its full set of tag
key/value pairs. These two writes belong to *different* series:

```
cpu.load,host=quarry-1,region=west 0.42
cpu.load,host=quarry-1,region=east 0.42
```

Tags are indexed dimensions — you filter and group by them. Values are the
numbers you aggregate. A good rule: if you will ever put it in a `WHERE` or
`GROUP BY`, it is a tag; if you will only ever do math on it, it is a value.

## Cardinality is a budget

Because each unique tag combination is its own series, high-cardinality tags
(request IDs, raw user IDs, timestamps-as-tags) explode your series count.
Marl surfaces this directly:

```sql
SELECT cardinality() FROM cpu.load
-- 1 measurement, 2 tag keys, 128 series
```

Keep unbounded identifiers in the value or in a separate log store, never in a
tag. When you genuinely need per-entity series, cap them with a retention tier
that expires aggressively — see [Tiered retention](/manual/tiered-retention/).

## Timestamps

Timestamps are nanoseconds since the Unix epoch, stored as signed 64-bit
integers. Marl never rewrites a timestamp: a late-arriving point lands in
whatever tier owns its moment, even if that tier has already downsampled. The
[Ingestion](/manual/ingestion/) chapter covers how out-of-order writes are
absorbed without a full rewrite.
