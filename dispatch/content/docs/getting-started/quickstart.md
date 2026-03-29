+++
title = "Quickstart"
weight = 2
tags = ["getting-started", "quickstart"]
+++

# Quickstart

This guide walks you through starting a Dispatch server, creating a topic, publishing an event, and consuming it -- all in under five minutes.

## Start the Server

Launch the Dispatch server with default settings. It will listen on port 4222 and store data in a local directory.

```bash
dispatch server start --port 4222 --data-dir ./dispatch-data
```

You should see output indicating the server is ready.

```
[INFO] Dispatch server listening on :4222
[INFO] Data directory: ./dispatch-data
[INFO] Ready to accept connections
```

## Create a Topic

Topics are named channels that events flow through. Create one for user-related events.

```bash
dispatch topic create user.events
dispatch topic create order.events
```

## Publish an Event

Send a structured event to the topic using the CLI.

```bash
dispatch publish user.events '{
  "type": "user.signup",
  "data": {
    "user_id": "u-100",
    "email": "alice@example.com"
  }
}'
```

## Consume Events

Subscribe to the topic and process incoming events. The consumer group flag ensures load balancing when multiple consumers are active.

```bash
dispatch subscribe user.events --group analytics
```

## Using the Python SDK

The same flow in Python.

```python
from dispatch_mq import Client

client = Client("localhost:4222")

# Publish
client.publish("user.events", {
    "type": "user.signup",
    "data": {"user_id": "u-100", "email": "alice@example.com"}
})

# Subscribe
def handler(event):
    print(f"Received: {event.type} - {event.data}")

client.subscribe("user.events", group="analytics", handler=handler)
client.listen()
```

## Event Flow Diagram

```
CLI / SDK                    Dispatch Server              Consumer
  |                               |                         |
  |-- publish user.events ------->|                         |
  |                               |-- persist to disk ----->|
  |                               |-- route to group ------>|
  |                               |                         |-- handler()
  |                               |<-- ack -----------------|
```

Next, read about [Events]({{ base_url }}/docs/concepts/events/) to understand the data model in detail.
