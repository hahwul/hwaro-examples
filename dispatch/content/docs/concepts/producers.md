+++
title = "Producers"
weight = 2
tags = ["concepts", "producers"]
+++

# Producers

A producer is any service or process that publishes events to the Dispatch server. Producers are decoupled from consumers and do not need to know which services will process their events.

## Publishing Events

Producers connect to the Dispatch server and publish events to named topics. The server acknowledges the publish only after the event has been persisted to durable storage.

```
Producer                     Dispatch Server
  |                               |
  |-- PUBLISH user.events ------->|
  |                               |-- write to disk
  |<-- ACK (event_id) ------------|
```

## Python SDK

The Python SDK provides a simple interface for publishing events.

```python
from dispatch_mq import Client

client = Client("localhost:4222")

# Publish a single event
event_id = client.publish("user.events", {
    "type": "user.signup",
    "source": "auth-service",
    "data": {
        "user_id": "u-100",
        "email": "alice@example.com"
    }
})
print(f"Published: {event_id}")
```

## Go SDK

The Go SDK follows a similar pattern.

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

    eventID, err := client.Publish("user.events", dispatch.Event{
        Type:   "user.signup",
        Source: "auth-service",
        Data: map[string]any{
            "user_id": "u-100",
            "email":   "alice@example.com",
        },
    })
    if err != nil {
        panic(err)
    }
    fmt.Printf("Published: %s\n", eventID)
}
```

## Batch Publishing

For high-throughput scenarios, batch multiple events into a single publish call to reduce network overhead.

```python
events = [
    {"type": "order.created", "data": {"order_id": "o-1"}},
    {"type": "order.created", "data": {"order_id": "o-2"}},
    {"type": "order.created", "data": {"order_id": "o-3"}},
]

results = client.publish_batch("order.events", events)
for event_id in results:
    print(f"Published: {event_id}")
```

## Error Handling

If the server cannot persist the event, the publish call returns an error. Producers should implement retry logic with exponential backoff for transient failures.

```python
from dispatch_mq import Client, PublishError
import time

client = Client("localhost:4222")

for attempt in range(5):
    try:
        client.publish("user.events", {"type": "user.signup", "data": {}})
        break
    except PublishError:
        time.sleep(2 ** attempt)
```

Next, learn about [Consumers]({{ base_url }}/docs/concepts/consumers/) to understand how events are received and processed.
