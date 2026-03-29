+++
title = "Welcome"
+++

# Dispatch

A lightweight, high-throughput event bus and message queue for distributed systems. Dispatch provides reliable event delivery with at-least-once semantics, topic-based routing, and a simple API for building event-driven architectures.

## Why Dispatch

- **Simple Event Model** -- Publish structured events to named topics with automatic schema validation
- **Reliable Delivery** -- At-least-once delivery guarantees with configurable retry policies
- **Topic Routing** -- Route events to consumers using pattern-matched topic subscriptions
- **Horizontal Scaling** -- Consumer groups distribute load across multiple instances
- **Language Agnostic** -- Native SDKs for Python, Go, and any language via the HTTP API

## Quick Start

Get up and running in under five minutes. Install the Dispatch server, publish your first event, and consume it with a subscriber.

```bash
dispatch server start --port 4222
dispatch topic create user.events
dispatch publish user.events '{"action": "signup", "user_id": "u-100"}'
```

Read the full [Getting Started]({{ base_url }}/docs/getting-started/) guide to begin building with Dispatch.

## Event Flow

```
Producer --> [Topic: user.events] --> Consumer Group A
                                  --> Consumer Group B
Producer --> [Topic: order.events] --> Consumer Group C
```

## Documentation

Browse the sidebar to explore concepts, configuration, and API reference material. Start with the [Installation]({{ base_url }}/docs/getting-started/installation/) page or jump to [Events]({{ base_url }}/docs/concepts/events/) to understand the core data model.
