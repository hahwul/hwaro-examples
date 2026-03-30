+++
title = "Dynamo"
description = "Serverless functions-as-a-service platform documentation"
tags = ["dynamo", "serverless", "faas"]
+++

# Dynamo

Dynamo is a serverless functions-as-a-service platform that lets you deploy event-driven code without provisioning or managing infrastructure. Define your function, attach a trigger, and Dynamo handles execution, scaling, and lifecycle management.

## Core Capabilities

- **Function Execution** -- Deploy functions in multiple runtimes with automatic resource allocation and isolation
- **Event Triggers** -- Connect functions to HTTP endpoints, message queues, scheduled timers, and storage events
- **Auto-Scaling** -- Scale from zero to thousands of concurrent instances based on incoming event volume
- **Deployment Pipelines** -- Roll out new versions with canary deployments, traffic splitting, and instant rollback

## Quick Navigation

| Section | Description |
|---------|-------------|
| [Getting Started](/docs/getting-started/) | Install the CLI, configure your project, and deploy your first function |
| [Functions](/docs/functions/) | Define triggers, configure runtimes, and manage deployments |
| [Operations](/docs/operations/) | Optimize cold starts, monitor execution, and configure scaling policies |

## Architecture Overview

Dynamo routes events through a dispatch layer that manages function lifecycle and execution:

```
  Event Sources
  (HTTP / Queue / Timer / Storage)
        |
        v
  +-------------+     +------------------+     +----------------+
  |  Gateway     | --> |  Dispatch Engine | --> |  Runtime Pool  |
  +-------------+     +------------------+     +----------------+
        |                     |                        |
        v                     v                        v
   Request Router       Placement Scheduler      Function Instances
                              |
                              v
                        Metrics Collector
```

The Gateway receives inbound events and normalizes them into a common envelope format. The Dispatch Engine determines placement across the Runtime Pool based on available warm instances and resource constraints. Function Instances execute in isolated containers with configurable memory and timeout limits.

## Trigger Mapping

| Trigger Type | Source | Invocation Model |
|-------------|--------|------------------|
| HTTP | API Gateway endpoint | Synchronous request/response |
| Queue | Message broker topic | Asynchronous, at-least-once delivery |
| Timer | Cron schedule expression | Periodic, single invocation |
| Storage | Object store events | Asynchronous, event-driven |
| Stream | Change data capture | Ordered, partition-based |

## System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| CPU | 2 cores | 8 cores |
| Memory | 4 GB | 16 GB |
| Disk | 40 GB SSD | 200 GB SSD |
| Network | 100 Mbps | 1 Gbps |

> Dynamo runs a local emulator for development. Production deployments use a distributed control plane with replicated state across availability zones.
