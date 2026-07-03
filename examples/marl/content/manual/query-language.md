+++
title = "Query language"
description = "The full MarlQL reference: selection, grouping, fill, coverage, and retention control."
date = "2026-01-15"
weight = 6
toc = true
[extra]
band = "queries"
tier = "Queries"
+++

MarlQL is a small SQL-flavored language for reading and shaping time series. It
is deliberately narrow: it selects, aggregates, groups by time and tags, and
controls gaps and retention. This chapter is the reference; earlier chapters
show it in context.

<!-- more -->

## Shape of a query

```sql
SELECT <aggregate>(<field>) [, meta.<attr>]
FROM <measurement>
[WHERE <tag/time predicates>]
[GROUP BY time(<interval>) [, <tag> ...]]
[FILL none | zero | previous | linear]
[MIN COVERAGE <fraction>]
[LIMIT <n>]
```

Clauses are evaluated top to bottom. Only `SELECT` and `FROM` are required; a
bare `SELECT value FROM cpu.load LIMIT 5` returns raw points.

## Aggregates

| Function | Notes |
|---|---|
| `mean` / `sum` | Standard reductions over the window |
| `min` / `max` | Preserved through downsampling when declared |
| `count` | Also powers gap detection and `MIN COVERAGE` |
| `p50` / `p95` / `p99` | Backed by mergeable sketches in rolled tiers |
| `rate` | Per-second change for monotonic counters |

An aggregate that a tier did not roll up is unavailable once raw data has aged
out — Marl returns an explicit error rather than a wrong number:

```
error  p99 not stored in tier 'cold' for cpu.load (rolled: mean, max, count)
```

## Time predicates

`now()` anchors relative ranges; durations use `s`, `m`, `h`, `d`, `w`, `y`.

```sql
SELECT max(value)
FROM disk.used
WHERE region = 'west' AND time BETWEEN now() - 7d AND now() - 1d
GROUP BY time(1h), host
FILL previous
```

## Retention statements

Retention is editable at query time as well as in `strata.toml`
(see [Tiered retention](/manual/tiered-retention/)):

```sql
ALTER RETENTION ON debug.trace SET strata = ['hot'];
SHOW RETENTION ON cpu.load;
```

```
measurement  strata                keep
cpu.load     hot, warm, cold       48h / 30d / 5y
```

## Inspecting the plan

Prefix any read with `EXPLAIN` to see which tiers it will touch before you run
it — useful for confirming a dashboard query is not accidentally scanning raw
`hot` data for a year-long range:

```sql
EXPLAIN SELECT mean(value) FROM cpu.load WHERE time > now() - 1y GROUP BY time(1d)
```

```
scan cold (rolled 1h)  ~8760 buckets
merge warm (rolled 1m) ~0 buckets   (outside keep window)
fill previous · coverage default
```

That is the whole language. If you have read this far, you have reached the
deep store — the [quickstart](/quickstart/) is the fastest way back to the
surface to try it.
