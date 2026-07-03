+++
title = "Gap-aware queries"
description = "Telling a real zero from an absent sample, and choosing how to fill the holes."
date = "2025-10-03"
weight = 5
toc = true
[extra]
band = "queries"
tier = "Queries"
+++

Most time-series bugs are gap bugs. A sensor goes quiet, a scraper misses a
window, a host reboots — and a naive query paints that silence as zero,
flattening a real outage into a calm-looking line. Marl treats gaps as
first-class: absence is `null`, and you decide, per query, how to handle it.

<!-- more -->

## Null is not zero

By default, a window with no samples returns `null`. This is deliberate: `0`
means "we measured, and it was zero"; `null` means "we did not measure."

```sql
SELECT sum(value)
FROM requests.count
WHERE time > now() - 10m
GROUP BY time(1m)
FILL none
```

```
time                 sum
2025-10-03T12:00:00  1420
2025-10-03T12:01:00  null   -- scraper missed this minute
2025-10-03T12:02:00  1388
```

## Fill policies

When a downstream needs a continuous line, apply a `FILL` policy. Marl keeps
the distinction in the engine, so filling is a read-time decision you can
change without rewriting data.

| Policy | Behavior |
|---|---|
| `none` | Emit `null` for empty windows (default) |
| `zero` | Emit `0` — only when absence truly means zero |
| `previous` | Carry the last observed value forward |
| `linear` | Interpolate linearly between neighbors |

```sql
SELECT mean(value)
FROM cpu.temp
WHERE host = 'quarry-1' AND time > now() - 1h
GROUP BY time(1m)
FILL previous
```

## Gaps across downsampling

A rolled tier stores a `count` alongside each aggregate, so gaps survive
compaction: a downsampled bucket with `count = 0` is still a genuine gap, not a
zero. Queries that reach into [cold, rolled data](/manual/downsampling/) get the
same `null`-vs-zero fidelity as queries over raw points.

You can also require coverage. `MIN COVERAGE` rejects a bucket as `null` unless
enough of its interval actually reported:

```sql
SELECT mean(value)
FROM cpu.temp
WHERE time > now() - 6h
GROUP BY time(5m)
FILL linear
MIN COVERAGE 0.5
```

Any five-minute bucket that saw fewer than half its expected samples comes back
as `null` and is then interpolated, rather than being trusted on thin data. The
full grammar for these clauses is in the [Query language](/manual/query-language/).
