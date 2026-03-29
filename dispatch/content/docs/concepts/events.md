+++
title = "Events"
weight = 1
tags = ["concepts", "events"]
+++

# Events

An event is the fundamental unit of data in Dispatch. Every event is a structured message published to a topic and delivered to one or more consumers.

## Event Structure

Each event contains a header and a payload. The header holds metadata used for routing and deduplication. The payload contains the application-specific data.

| Field         | Type   | Required | Description                          |
|---------------|--------|----------|--------------------------------------|
| id            | string | auto     | Unique identifier (UUID v7)          |
| type          | string | yes      | Dot-notation event type              |
| source        | string | yes      | URI identifying the producer         |
| topic         | string | auto     | Topic the event was published to     |
| timestamp     | string | auto     | ISO 8601 timestamp                   |
| data          | object | yes      | Application payload                  |
| metadata      | object | no       | Optional key-value pairs             |

## Event Lifecycle

An event passes through several stages from creation to final delivery.

```
Created --> Published --> Persisted --> Routed --> Delivered --> Acknowledged
                                                      |
                                                      +--> Retried (on failure)
                                                      |
                                                      +--> Dead Letter Queue
```

1. **Created** -- The producer constructs the event with a type and data payload
2. **Published** -- The event is sent to the Dispatch server on a named topic
3. **Persisted** -- The server writes the event to durable storage before acknowledging the publish
4. **Routed** -- The server matches the topic to subscribed consumer groups
5. **Delivered** -- The event is pushed to a consumer in each matching group
6. **Acknowledged** -- The consumer confirms successful processing

## Event Types

Event types use dot-notation to create a hierarchy. This enables pattern-based subscriptions.

```
user.signup
user.profile.updated
order.created
order.payment.completed
order.shipped
```

Consumers can subscribe to specific types or use wildcards.

```
user.*              # All user events
order.payment.*     # All payment events
```

## Example Event

A complete event as seen by a consumer.

```json
{
  "id": "01914f7c-8a3b-7d4e-b5c2-9f1e3a8d6c0b",
  "type": "user.signup",
  "source": "auth-service",
  "topic": "user.events",
  "timestamp": "2026-03-15T10:30:00Z",
  "data": {
    "user_id": "u-100",
    "email": "alice@example.com",
    "plan": "starter"
  },
  "metadata": {
    "trace_id": "abc123",
    "region": "us-east-1"
  }
}
```

## Idempotency

Every event carries a unique `id` field. Consumers should use this ID to detect and discard duplicate deliveries. Dispatch guarantees at-least-once delivery, which means the same event may be delivered more than once in failure scenarios.

Next, learn about [Producers]({{ base_url }}/docs/concepts/producers/) to understand how events are published.
