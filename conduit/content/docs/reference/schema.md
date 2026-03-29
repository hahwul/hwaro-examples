+++
title = "Schema"
weight = 1
tags = ["reference", "schema"]
+++

# Schema

Schemas define the structure of data flowing through a pipeline. They enforce type safety, validate records, and enable Conduit to optimize data processing.

## Schema Definition Format

Schemas are defined in `.schema` files using a declarative syntax:

```toml
[schema]
name = "user_events"
version = "2.1"
namespace = "analytics"

[[fields]]
name = "event_id"
type = "uuid"
required = true
description = "Unique event identifier"

[[fields]]
name = "user_id"
type = "integer"
required = true
description = "Foreign key to users table"

[[fields]]
name = "event_type"
type = "string"
required = true
enum = ["click", "view", "purchase", "signup"]
description = "Type of user action"

[[fields]]
name = "payload"
type = "json"
required = false
description = "Event-specific metadata"

[[fields]]
name = "amount"
type = "decimal"
required = false
precision = 10
scale = 2
description = "Transaction amount in USD"

[[fields]]
name = "created_at"
type = "timestamp"
required = true
timezone = "UTC"
description = "When the event occurred"
```

## Using Schemas in Pipelines

Reference a schema file in your pipeline configuration:

```toml
[pipeline]
name = "user-events"
schema = "schemas/user_events.schema"

[source]
type = "kafka"
brokers = ["broker:9092"]
topics = ["raw-events"]
```

## Schema Enforcement Modes

| Mode | Behavior |
|------|----------|
| `strict` | Reject records that do not match the schema |
| `coerce` | Attempt to cast mismatched types before rejecting |
| `permissive` | Accept all records, log warnings for mismatches |
| `drop_extra` | Accept known fields, silently drop unknown fields |

Configure the mode in your pipeline:

```toml
[pipeline]
name = "user-events"
schema = "schemas/user_events.schema"
schema_mode = "coerce"
```

{{ hint(type="info", message="Coerce mode handles common type mismatches like string-to-integer conversion automatically.") }}

## Schema Evolution

Conduit supports backward-compatible schema changes without pipeline restarts.

### Compatible Changes

- Adding a new optional field
- Widening a type (e.g., `integer` to `long`)
- Removing a field constraint (e.g., dropping `required`)
- Adding a new value to an `enum` list

### Incompatible Changes

- Removing or renaming an existing field
- Narrowing a type (e.g., `long` to `integer`)
- Adding `required` to an existing optional field
- Removing a value from an `enum` list

{{ alert(type="danger", message="Incompatible schema changes require a new schema version and pipeline redeployment.") }}

## Schema Inference

When no schema is specified, Conduit infers types from the first batch of records:

```bash
conduit infer-schema --source data/sample.csv --output schemas/inferred.schema
```

Output:

```
Inferring schema from data/sample.csv (1000 sample records)...

  event_id:    uuid       (1000/1000 non-null)
  user_id:     integer    (1000/1000 non-null)
  event_type:  string     (1000/1000 non-null, 4 distinct)
  payload:     json       (834/1000 non-null)
  amount:      decimal    (612/1000 non-null)
  created_at:  timestamp  (1000/1000 non-null)

Schema written to schemas/inferred.schema
```

## Nested Schemas

For complex data structures, schemas support nested fields:

```toml
[[fields]]
name = "address"
type = "record"

[[fields.fields]]
name = "street"
type = "string"

[[fields.fields]]
name = "city"
type = "string"

[[fields.fields]]
name = "zip"
type = "string"
pattern = "^[0-9]{5}(-[0-9]{4})?$"
```
