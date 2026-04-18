+++
title = "About"
description = "About the analytics dashboard platform"
tags = ["settings"]
+++

## About This Dashboard

This analytics platform provides real-time insights into your website performance, user behavior, and infrastructure health.

### Features

- **KPI Tracking** -- Monitor key performance indicators at a glance with large, readable metric cards
- **Traffic Analysis** -- Understand where your visitors come from and which pages they visit
- **Infrastructure Monitoring** -- Keep tabs on server health, database performance, and service uptime
- **Event Logging** -- Track system events, deployments, and incidents in a unified timeline

### Data Sources

The dashboard aggregates data from multiple sources:

| Source | Type | Refresh Rate |
|--------|------|-------------|
| Web Analytics | Page views, sessions | Real-time |
| Application Logs | Errors, warnings | 30 seconds |
| Infrastructure | CPU, memory, disk | 60 seconds |
| Business Metrics | Revenue, conversions | Hourly |

### Stack

Built with a modern observability stack:

- **Collection**: OpenTelemetry SDK for distributed tracing
- **Storage**: TimescaleDB for time-series data
- **Processing**: Apache Kafka for event streaming
- **Visualization**: Custom dashboard built with Hwaro
