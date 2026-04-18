+++
title = "Data Types"
weight = 2
tags = ["reference", "data-types"]
+++

# Data Types

Conduit supports a rich set of data types for schema definitions. Every field in a schema must have a declared type. Types determine how data is validated, stored, and transformed.

## Primitive Types

| Type | Description | Size | Example |
|------|-------------|------|---------|
| `boolean` | True or false | 1 bit | `true`, `false` |
| `integer` | 32-bit signed integer | 4 bytes | `42`, `-100` |
| `long` | 64-bit signed integer | 8 bytes | `9223372036854775807` |
| `float` | 32-bit IEEE 754 | 4 bytes | `3.14`, `-0.001` |
| `double` | 64-bit IEEE 754 | 8 bytes | `3.141592653589793` |
| `string` | UTF-8 text | Variable | `"hello world"` |
| `bytes` | Raw byte sequence | Variable | `\x00\x01\x02` |

## Logical Types

| Type | Base Type | Description | Example |
|------|-----------|-------------|---------|
| `uuid` | `string` | RFC 4122 UUID | `"550e8400-e29b-41d4-a716-446655440000"` |
| `date` | `integer` | Days since epoch | `"2025-03-15"` |
| `time` | `long` | Microseconds since midnight | `"14:30:00"` |
| `timestamp` | `long` | Microseconds since epoch | `"2025-03-15T14:30:00Z"` |
| `decimal` | `bytes` | Arbitrary precision decimal | `"12345.67"` |
| `json` | `string` | Arbitrary JSON value | `{"key": "value"}` |

## Complex Types

### Record

A structured type containing named fields. Used for nested objects.

```toml
[[fields]]
name = "user"
type = "record"

[[fields.fields]]
name = "id"
type = "integer"
required = true

[[fields.fields]]
name = "email"
type = "string"
required = true
```

### Array

An ordered collection of elements of the same type.

```toml
[[fields]]
name = "tags"
type = "array"
items = "string"
```

### Map

A set of key-value pairs where keys are always strings.

```toml
[[fields]]
name = "metadata"
type = "map"
values = "string"
```

## Type Constraints

Each type supports optional constraints for validation:

### String Constraints

| Constraint | Description | Example |
|------------|-------------|---------|
| `min_length` | Minimum character count | `min_length = 1` |
| `max_length` | Maximum character count | `max_length = 255` |
| `pattern` | Regex pattern | `pattern = "^[a-z]+$"` |
| `enum` | Allowed values | `enum = ["a", "b", "c"]` |
| `format` | Semantic format | `format = "email"` |

### Numeric Constraints

| Constraint | Description | Example |
|------------|-------------|---------|
| `min` | Minimum value (inclusive) | `min = 0` |
| `max` | Maximum value (inclusive) | `max = 100` |
| `exclusive_min` | Minimum value (exclusive) | `exclusive_min = 0` |
| `exclusive_max` | Maximum value (exclusive) | `exclusive_max = 1000` |
| `multiple_of` | Must be a multiple | `multiple_of = 5` |

### Decimal Constraints

| Constraint | Description | Example |
|------------|-------------|---------|
| `precision` | Total digits | `precision = 10` |
| `scale` | Digits after decimal | `scale = 2` |

### Timestamp Constraints

| Constraint | Description | Example |
|------------|-------------|---------|
| `timezone` | Expected timezone | `timezone = "UTC"` |
| `format` | Parsing format | `format = "%Y-%m-%dT%H:%M:%SZ"` |
| `after` | Must be after date | `after = "2020-01-01"` |
| `before` | Must be before date | `before = "2030-01-01"` |

## Type Coercion Rules

When schema mode is set to `coerce`, Conduit attempts to convert mismatched types automatically:

| From | To | Rule |
|------|-----|------|
| `string` | `integer` | Parse numeric string |
| `string` | `float` | Parse decimal string |
| `string` | `boolean` | `"true"/"false"`, `"1"/"0"` |
| `string` | `timestamp` | Auto-detect ISO 8601 formats |
| `integer` | `long` | Widen without loss |
| `integer` | `float` | Cast (possible precision loss) |
| `float` | `string` | Format as decimal string |
| `boolean` | `integer` | `true=1`, `false=0` |

{{ alert(type="warning", message="Type coercion from float to integer truncates the decimal portion without rounding.") }}

## Null Handling

All types support null values unless the field is marked `required = true`. Null handling behavior is controlled per-field:

```toml
[[fields]]
name = "middle_name"
type = "string"
required = false
default = ""
```

| Setting | Behavior |
|---------|----------|
| `required = true` | Reject null values |
| `required = false` | Accept null values (default) |
| `default = value` | Replace null with default |

{{ hint(type="info", message="Fields without a default value will pass through as null in the output when not required.") }}
