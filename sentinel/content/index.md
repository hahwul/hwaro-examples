+++
title = "Sentinel"
description = "Monitoring and alerting documentation for infrastructure observability"
tags = ["sentinel", "monitoring", "observability"]
+++

# Sentinel

Sentinel is a monitoring and alerting platform built for infrastructure observability at scale. It collects metrics from distributed systems, evaluates alert rules in real time, and routes notifications through configurable escalation policies.

## Core Capabilities

- **Metric Collection** -- Ingest time-series data from agents, exporters, and push gateways
- **Alert Evaluation** -- Continuously evaluate rules against incoming metric streams
- **Escalation Routing** -- Route alerts through multi-tier escalation policies with on-call schedules
- **Dashboard Visualization** -- Build operational dashboards with composable widget layouts

## Quick Navigation

| Section | Description |
|---------|-------------|
| [Getting Started](/docs/getting-started/) | Install, configure, and run your first health check |
| [Alerts](/docs/alerts/) | Define rules, set thresholds, and configure escalation |
| [Dashboards](/docs/dashboards/) | Build monitoring dashboards with widgets and layouts |

## Architecture Overview

Sentinel operates as a pipeline with three stages:

```
  Agents/Exporters
        |
        v
  +-------------+     +----------------+     +--------------+
  |  Collector   | --> |  Rule Engine   | --> |  Dispatcher  |
  +-------------+     +----------------+     +--------------+
        |                    |                       |
        v                    v                       v
   Time-Series DB      Alert State Store      Notification Channels
```

The Collector receives metric payloads over HTTP or gRPC. The Rule Engine evaluates alert conditions against buffered metric windows. The Dispatcher delivers notifications to configured channels when alerts fire or resolve.

## System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| CPU | 2 cores | 4 cores |
| Memory | 2 GB | 8 GB |
| Disk | 20 GB SSD | 100 GB SSD |
| Network | 100 Mbps | 1 Gbps |

> Sentinel stores metric data locally by default. For production deployments, use an external time-series database such as InfluxDB or VictoriaMetrics.
