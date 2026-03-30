+++
title = "Relay"
description = "Webhook and integration documentation for event-driven workflows"
tags = ["relay", "webhooks", "integrations"]
+++

# Relay

Relay is a webhook delivery and integration platform for building event-driven workflows. It receives events from your applications, transforms payloads, verifies signatures, and routes notifications to external services with reliable delivery guarantees.

## Core Capabilities

- **Webhook Management** -- Register endpoints, configure retry policies, and monitor delivery status across all your event sources
- **Event Routing** -- Define rules that match events by type, source, or payload content and route them to the appropriate handlers
- **Signature Verification** -- Secure every webhook delivery with HMAC-SHA256 signatures that receivers can validate independently
- **Integration Hub** -- Connect to Slack, GitHub, Jira, and other services through pre-built adapters with minimal configuration

## Quick Navigation

| Section | Description |
|---------|-------------|
| [Getting Started](/docs/getting-started/) | Install Relay, configure your first endpoint, and send a test event |
| [Webhooks](/docs/webhooks/) | Event types, payload formats, signature verification, and delivery mechanics |
| [Integrations](/docs/integrations/) | Connect Relay to Slack, GitHub, Jira, and other external services |

## Architecture Overview

Relay operates as a pipeline with four stages:

```
  Event Sources
       |
       v
  +-----------+     +-------------+     +------------+     +---------------+
  |  Ingester  | --> |  Router     | --> |  Signer    | --> |  Dispatcher   |
  +-----------+     +-------------+     +------------+     +---------------+
       |                  |                   |                    |
       v                  v                   v                    v
   Event Store       Rule Engine        Key Store          Delivery Log
```

The Ingester accepts event payloads over HTTP. The Router evaluates routing rules and selects target endpoints. The Signer computes HMAC signatures using per-endpoint secrets. The Dispatcher delivers webhooks with automatic retries on failure.

## Supported Event Types

| Event | Trigger | Payload |
|-------|---------|---------|
| `repository.push` | Code pushed to a repository | Commit list, author, branch |
| `issue.created` | New issue opened | Issue title, body, labels |
| `deployment.completed` | Deployment finished | Environment, status, duration |
| `alert.fired` | Monitoring alert triggered | Alert name, severity, metric value |
| `user.signup` | New user registration | User ID, email domain, plan |
| `invoice.paid` | Payment processed | Invoice ID, amount, currency |

> Relay delivers events with at-least-once semantics. Design your webhook receivers to be idempotent by checking the `X-Relay-Delivery-ID` header for duplicate detection.
