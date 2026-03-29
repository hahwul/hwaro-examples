+++
title = "Consumers"
weight = 3
tags = ["concepts", "consumers"]
+++

# Consumers

A consumer is a service or process that subscribes to one or more topics and processes incoming events. Consumers are organized into groups for load balancing and fault tolerance.

## Consumer Groups

A consumer group is a set of consumer instances that share the processing load for a topic. Each event is delivered to exactly one consumer within a group. Multiple groups can subscribe to the same topic independently.

```
Topic: user.events
  |
  +--> Group "analytics"
  |      +-- Consumer A (instance 1)
  |      +-- Consumer B (instance 2)
  |
  +--> Group "notifications"
         +-- Consumer C (instance 1)
```

In this example, each user event is delivered once to the analytics group and once to the notifications group. Within each group, events are distributed across available instances.

## Subscribing with Python

```python
from dispatch_mq import Client

client = Client("localhost:4222")

def handle_user_event(event):
    print(f"[{event.type}] user_id={event.data['user_id']}")
    event.ack()

client.subscribe(
    "user.events",
    group="analytics",
    handler=handle_user_event
)
client.listen()
```

## Subscribing with Go

```go
package main

import (
    "fmt"
    "github.com/dispatch-mq/dispatch-go"
)

func main() {
    client, err := dispatch.Connect("localhost:4222")
    if err != nil {
        panic(err)
    }
    defer client.Close()

    client.Subscribe("user.events", dispatch.SubscribeOpts{
        Group: "analytics",
        Handler: func(event dispatch.Event) error {
            fmt.Printf("[%s] user_id=%s\n", event.Type, event.Data["user_id"])
            return nil // returning nil sends ack
        },
    })

    client.Listen()
}
```

## Acknowledgment

After processing an event, the consumer must acknowledge it. If the consumer fails to acknowledge within the configured timeout, the event is redelivered to another consumer in the group.

| Outcome       | Behavior                                          |
|---------------|---------------------------------------------------|
| Ack           | Event marked as processed, removed from queue     |
| Nack          | Event immediately redelivered to another consumer |
| Timeout       | Event redelivered after ack timeout expires       |
| Max retries   | Event moved to the dead letter queue              |

## Dead Letter Queue

Events that exceed the maximum retry count are moved to a dead letter queue (DLQ). The DLQ is a separate topic that can be monitored and replayed.

```bash
# List events in the dead letter queue
dispatch dlq list user.events

# Replay a specific event
dispatch dlq replay user.events --event-id 01914f7c-8a3b-7d4e-b5c2-9f1e3a8d6c0b

# Replay all events
dispatch dlq replay user.events --all
```

## Delivery Guarantees

Dispatch provides **at-least-once** delivery. This means every event is guaranteed to be delivered at least one time, but may be delivered more than once in failure scenarios. Consumers must handle duplicate events using the event `id` field.

For more details on the event format, see [Events]({{ base_url }}/docs/concepts/events/). For schema definitions, see the [Message Schema]({{ base_url }}/docs/reference/message-schema/) reference.
