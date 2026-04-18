+++
title = "Event-Driven Communication"
weight = 3
description = "Asynchronous messaging patterns and event bus architecture"
+++

## Overview

While the service mesh handles synchronous request-response communication, Nexus also supports event-driven patterns for asynchronous workflows. The event bus decouples services, enabling reliable message delivery without tight temporal coupling between producer and consumer.

## Event Bus Architecture

The Nexus event bus is built on a distributed message broker with topic-based pub/sub semantics. Services publish domain events to named topics, and interested consumers subscribe to receive those events.

### Broker Configuration

```yaml
# nexus-event-bus.yaml
apiVersion: nexus.io/v1
kind: EventBus
metadata:
  name: production-bus
spec:
  broker:
    type: kafka
    bootstrapServers:
      - kafka-0.nexus.internal:9092
      - kafka-1.nexus.internal:9092
      - kafka-2.nexus.internal:9092
    replicationFactor: 3
    partitions: 12
  schema:
    registry: https://schema.nexus.internal
    compatibility: BACKWARD
  retention:
    default: 7d
    maxSize: 50GB
```

## Event Schema

All events follow a standardized envelope format with CloudEvents-compatible headers:

```json
{
  "specversion": "1.0",
  "id": "evt_a1b2c3d4e5f6",
  "source": "nexus://user-service",
  "type": "io.nexus.user.created",
  "datacontenttype": "application/json",
  "time": "2026-03-28T10:15:30Z",
  "data": {
    "userId": "usr_7k8m9n0p",
    "email": "engineer@example.com",
    "tier": "enterprise",
    "createdAt": "2026-03-28T10:15:30Z"
  }
}
```

## Topic Registry

The following topics are registered in the production event bus:

| Topic | Producer | Consumers | Partitions | Avg Throughput |
|-------|----------|-----------|------------|----------------|
| user.events | user-service | notification-service, analytics-service, billing-service | 12 | 850 msg/s |
| order.events | order-service | inventory-service, notification-service, fulfillment-service | 24 | 2,400 msg/s |
| payment.events | payment-service | order-service, accounting-service, audit-service | 12 | 600 msg/s |
| auth.events | auth-service | audit-service, security-monitor | 6 | 1,200 msg/s |
| inventory.events | inventory-service | order-service, warehouse-service | 12 | 1,800 msg/s |

## Messaging Patterns

### Publish / Subscribe

The default pattern for broadcasting domain events to all interested consumers:

```python
from nexus.events import EventProducer

producer = EventProducer(topic="user.events")

await producer.publish(
    event_type="io.nexus.user.created",
    data={
        "userId": "usr_7k8m9n0p",
        "email": "engineer@example.com",
        "tier": "enterprise"
    },
    headers={
        "x-correlation-id": correlation_id,
        "x-source-version": "v3.1.2"
    }
)
```

### Request / Reply

For asynchronous request-response workflows where the caller needs a result but does not require immediate response:

```python
from nexus.events import EventClient

client = EventClient()

# Send request and get a future
future = await client.request(
    topic="inventory.commands",
    command="check-availability",
    data={"sku": "PROD-2847", "quantity": 5},
    timeout=30
)

# Result arrives asynchronously
result = await future
print(result.data)
# {"available": true, "warehouse": "us-east-1", "estimatedShip": "2026-03-30"}
```

### Event Sourcing

For services that require a complete audit trail, Nexus supports event-sourced aggregates:

```python
from nexus.events import EventStore

store = EventStore(stream="orders")

# Append events to the stream
await store.append(
    stream_id=f"order-{order_id}",
    events=[
        {"type": "OrderCreated", "data": {"items": items, "total": total}},
        {"type": "PaymentAuthorized", "data": {"transactionId": tx_id}},
    ],
    expected_version=0
)

# Rebuild state from events
events = await store.read(stream_id=f"order-{order_id}")
order = Order.from_events(events)
```

## Dead Letter Queue

Failed messages are routed to a dead letter queue (DLQ) after exhausting retry attempts:

```json
{
  "deadLetterPolicy": {
    "maxRetries": 5,
    "backoff": {
      "initial": "1s",
      "multiplier": 2,
      "max": "60s"
    },
    "dlqTopic": "nexus.dlq",
    "alertThreshold": 100,
    "alertChannel": "ops-alerts"
  }
}
```

Monitor the DLQ through the Nexus dashboard. Messages in the DLQ can be inspected, replayed, or discarded through the admin API.

## Consumer Groups

Consumers within the same group share the load of processing messages from a topic. Each partition is assigned to exactly one consumer in the group:

```yaml
apiVersion: nexus.io/v1
kind: Consumer
metadata:
  name: notification-consumer
spec:
  topic: user.events
  group: notification-service
  concurrency: 4
  offset: latest
  processing:
    mode: at-least-once
    ackTimeout: 30s
    maxInFlight: 100
```

Scaling the consumer group horizontally automatically rebalances partition assignments across instances.
