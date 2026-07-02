+++
title = "Windows, Joins, and Late Data"
description = "Combine WINDOW with a second pattern leg to correlate two events, and control how Gneiss handles data that arrives after the watermark."
date = "2025-03-25"
weight = 30
toc = true
+++

A single `MATCH` pattern is really a join already — Gneiss connects nodes through edges the same way a relational join connects rows through keys. This chapter uses that fact to correlate two kinds of events inside one window, then looks at what happens when one side of the correlation arrives late.

<!-- more -->

## A pattern is a join

To flag a sensor that reports two over-threshold readings from *different* devices within the same five-minute span, extend the pattern rather than writing a separate join clause — the shared `Alert` node is what ties the two legs together:

```sql
MATCH (s1:Sensor)-[:REPORTS]->(r1:Reading)-[:TRIGGERED]->(a:Alert),
      (s2:Sensor)-[:REPORTS]->(r2:Reading)-[:TRIGGERED]->(a)
WHERE s1.id != s2.id
WINDOW HOPPING (INTERVAL '5' MINUTE, INTERVAL '1' MINUTE)
EMIT CHANGES
```

`HOPPING` here overlaps windows every minute across a five-minute span, so a pair of alerts four minutes apart is still caught by whichever hop contains both. A `TUMBLING` window with the same five-minute size would miss that pair if it happened to straddle a boundary.

## Choosing a window shape

- `TUMBLING` windows never overlap — each event belongs to exactly one window, which makes counts and sums easy to reason about.
- `HOPPING` windows overlap by design, trading some duplicate computation for the ability to catch patterns that span a tumbling boundary.
- `SESSION` windows have no fixed size at all; a session stays open as long as matching events keep arriving within the configured gap, and closes the first time that gap passes with nothing new.

Session windows suit bursty correlation problems well — a flurry of readings from a failing sensor should be one incident, not an arbitrary number of fixed-size buckets:

```sql
MATCH (s:Sensor)-[:REPORTS]->(r:Reading)
WHERE r.value > s.threshold
WINDOW SESSION (INTERVAL '2' MINUTE)
GROUP BY s.id
EMIT AFTER WINDOW CLOSE
```

## Watermarks and late data

Gneiss advances a watermark for each stream using the timestamp field you designate when you register it. Events whose timestamp falls before `watermark - allowed_lateness` are dropped before they ever reach a `MATCH` — they're treated as too late to be worth reopening a closed window for. `allowed_lateness` is a stream-level setting, not a query clause, because it reflects how unreliable a given source's clock and delivery really are rather than anything specific to one query.

Choosing `EMIT CHANGES` versus `EMIT AFTER WINDOW CLOSE` interacts directly with lateness. `CHANGES` gives you the lowest latency but can revise a count downward if you already emitted before a late-but-still-valid event arrived; `AFTER WINDOW CLOSE` waits out the full allowed lateness before emitting once, trading latency for a number that will not be revised. The reference page for `EMIT` covers the third option, `FINAL`, and exactly how it differs from both.
