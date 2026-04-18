+++
title = "Message Schema"
weight = 1
tags = ["reference", "schema"]
+++

# Message Schema

Every event in Dispatch follows a structured envelope format. This page defines the complete schema used for publishing, delivery, and storage.

## Envelope Format

The event envelope wraps the application payload with routing and metadata fields.

```json
{
  "id": "string",
  "type": "string",
  "source": "string",
  "topic": "string",
  "timestamp": "string",
  "data": {},
  "metadata": {}
}
```

## Field Reference

| Field     | Type   | Required | Default     | Description                                         |
|-----------|--------|----------|-------------|-----------------------------------------------------|
| id        | string | no       | auto (UUIDv7) | Unique event identifier                           |
| type      | string | yes      | --          | Dot-notation event type (e.g. `user.signup`)        |
| source    | string | yes      | --          | URI or name identifying the producing service       |
| topic     | string | no       | auto        | Set by the server based on the publish target       |
| timestamp | string | no       | auto        | ISO 8601 timestamp, set by server if omitted        |
| data      | object | yes      | --          | Application payload, must be valid JSON             |
| metadata  | object | no       | `{}`        | Optional key-value pairs for tracing and filtering  |

## Type Naming Convention

Event types use dot-notation to establish a hierarchy. The recommended format is `<entity>.<action>` or `<entity>.<sub-entity>.<action>`.

```
user.signup
user.profile.updated
order.created
order.payment.completed
order.payment.refunded
inventory.stock.low
```

## Metadata Fields

The metadata object supports arbitrary key-value pairs. The following keys have conventional meanings.

| Key          | Description                                  |
|--------------|----------------------------------------------|
| trace_id     | Distributed tracing correlation ID           |
| span_id      | Tracing span identifier                      |
| region       | Origin region of the event                   |
| version      | Schema version of the data payload           |
| content_type | MIME type of the data field (default: json)   |

## Size Limits

| Constraint         | Limit    |
|--------------------|----------|
| Maximum event size | 1 MB     |
| Maximum type length| 256 chars|
| Maximum topic length| 256 chars|
| Maximum metadata keys | 32    |
| Maximum metadata value size | 4 KB |

## Validation

The server validates every incoming event against these rules before persisting it.

1. The `type` field must be a non-empty string containing only alphanumeric characters, dots, hyphens, and underscores
2. The `source` field must be a non-empty string
3. The `data` field must be a valid JSON object
4. The total serialized event size must not exceed 1 MB
5. If an `id` is provided, it must be unique within the retention window

Events that fail validation are rejected with an HTTP 400 response including a structured error body.

```json
{
  "error": "validation_failed",
  "details": [
    {"field": "type", "message": "must not be empty"},
    {"field": "data", "message": "must be a valid JSON object"}
  ]
}
```

For configuration options that control retention and delivery behavior, see [Configuration](../configuration/).
