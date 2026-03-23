+++
title = "About"
description = "About the Prism analytics platform"
tags = ["platform"]
+++

## What is Prism

Prism is a data analytics platform designed for teams that need real-time visibility into their data pipelines, quality metrics, and operational health. It consolidates information from multiple sources into a single, unified dashboard.

## Core Capabilities

| Capability | Description |
|---|---|
| Real-time Ingestion | Stream processing with sub-second latency for event data |
| Quality Monitoring | Automated data quality scoring across completeness, accuracy, and freshness |
| Schema Registry | Version-controlled schema management with backward compatibility checks |
| Anomaly Detection | Statistical anomaly detection with configurable alerting thresholds |
| Pipeline Orchestration | DAG-based workflow engine for ETL/ELT pipeline management |

## Architecture

Prism processes data through a layered architecture:

- **Ingestion Layer** -- Kafka-based event streaming with exactly-once semantics
- **Processing Layer** -- Apache Flink for real-time transformations and aggregations
- **Storage Layer** -- ClickHouse for analytical queries, S3 for raw data lake
- **Serving Layer** -- Materialized views and pre-computed aggregates for low-latency reads

## Data Sources

The platform currently ingests from the following sources:

| Source | Protocol | Volume | SLA |
|---|---|---|---|
| API Events | gRPC | 324/s | 99.99% |
| Web Analytics | HTTP/Webhook | 201/s | 99.95% |
| IoT Sensors | MQTT | 156/s | 99.90% |
| Log Streams | Syslog/TCP | 42/s | 99.99% |
| Batch Imports | SFTP/S3 | Daily | Best effort |

## Stack

- **Stream Processing**: Apache Flink 1.18
- **Message Queue**: Apache Kafka 3.7
- **Analytical DB**: ClickHouse 24.3
- **Orchestration**: Apache Airflow 2.8
- **Monitoring**: Prometheus + Grafana
- **Static Site**: Hwaro
