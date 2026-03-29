+++
title = "Transforms"
weight = 2
tags = ["pipelines", "transforms"]
+++

# Transforms

Transforms process data between source and sink. A pipeline can have zero or more transforms, applied in sequence. Each transform receives a stream of records and outputs a modified stream.

## Transform Pipeline

```
  Record In -> [Filter] -> [Map] -> [Enrich] -> [Aggregate] -> Record Out
```

## Available Transforms

| Transform | Type Key | Description |
|-----------|----------|-------------|
| Filter | `filter` | Remove records that do not match a condition |
| Map | `map` | Rename, reshape, or compute new fields |
| Enrich | `enrich` | Add fields from an external lookup |
| Aggregate | `aggregate` | Group and summarize records |
| Deduplicate | `deduplicate` | Remove duplicate records by key |
| Sample | `sample` | Randomly sample a percentage of records |
| Route | `route` | Split records into multiple output branches |
| Validate | `validate` | Enforce schema constraints |

## Filter

Remove records that do not match a boolean expression.

```toml
[[transforms]]
type = "filter"
condition = "status == 'active' AND amount > 0"
```

### Filter Operators

| Operator | Example | Description |
|----------|---------|-------------|
| `==` | `status == 'active'` | Equality |
| `!=` | `type != 'internal'` | Inequality |
| `>`, `<`, `>=`, `<=` | `amount > 100` | Comparison |
| `AND`, `OR` | `a > 1 AND b < 10` | Logical |
| `IN` | `region IN ('us', 'eu')` | Set membership |
| `IS NULL` | `email IS NULL` | Null check |
| `LIKE` | `name LIKE 'John%'` | Pattern match |

## Map

Rename fields, compute derived values, or reshape records.

```toml
[[transforms]]
type = "map"
fields = { full_name = "first_name + ' ' + last_name", year = "extract(created_at, 'year')" }
drop = ["first_name", "last_name", "internal_id"]
```

## Enrich

Add fields by joining against an external lookup table or API.

```toml
[[transforms]]
type = "enrich"
lookup_type = "postgresql"
connection = "${LOOKUP_DB_URL}"
query = "SELECT country, timezone FROM users WHERE id = :user_id"
join_key = "user_id"
cache_ttl = "5m"
```

{{ hint(type="info", message="Enrich lookups are cached in memory. Set cache_ttl to control freshness vs. performance.") }}

## Aggregate

Group records by key fields and compute summary statistics.

```toml
[[transforms]]
type = "aggregate"
group_by = ["region", "product_id"]
window = "1h"

[transforms.metrics]
total_revenue = { function = "sum", field = "amount" }
order_count = { function = "count" }
avg_amount = { function = "avg", field = "amount" }
max_amount = { function = "max", field = "amount" }
```

### Aggregate Functions

| Function | Description |
|----------|-------------|
| `count` | Number of records in the group |
| `sum` | Sum of a numeric field |
| `avg` | Average of a numeric field |
| `min` | Minimum value |
| `max` | Maximum value |
| `first` | First value in the window |
| `last` | Last value in the window |
| `collect` | Collect values into an array |

## Deduplicate

Remove duplicate records based on one or more key fields.

```toml
[[transforms]]
type = "deduplicate"
key = ["user_id", "event_type"]
window = "24h"
strategy = "keep_first"
```

{{ alert(type="warning", message="Deduplication requires holding state in memory. For high-cardinality keys, ensure sufficient memory or use a shorter window.") }}

## Chaining Transforms

Transforms are applied in the order they appear. The output of one transform becomes the input of the next.

```toml
[[transforms]]
type = "filter"
condition = "event_type != 'heartbeat'"

[[transforms]]
type = "map"
fields = { user_id = "user.id", action = "event_type" }

[[transforms]]
type = "deduplicate"
key = ["user_id", "action"]
window = "1h"

[[transforms]]
type = "aggregate"
group_by = ["action"]
window = "15m"
[transforms.metrics]
count = { function = "count" }
```
