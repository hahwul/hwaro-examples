+++
title = "Logbook"
description = "Audit log and compliance documentation for enterprise observability and regulatory reporting"
tags = ["logbook", "audit", "compliance"]
+++

# Logbook

Logbook is an audit logging platform designed for enterprises that require tamper-evident event recording, regulatory compliance reporting, and long-term log retention. It captures structured audit events across distributed systems and provides a unified interface for compliance officers, security teams, and auditors.

## Core Capabilities

- **Structured Audit Events** -- Capture authentication, authorization, data access, and administrative actions in a normalized JSON format
- **Tamper-Evident Storage** -- Every log entry is cryptographically chained to prevent undetected modification or deletion
- **Compliance Reporting** -- Generate evidence packages for SOC 2, GDPR, and HIPAA audits with pre-built report templates
- **Retention Policies** -- Define granular retention rules by event type, data classification, and regulatory requirement

## Quick Navigation

| Section | Description |
|---------|-------------|
| [Getting Started](docs/getting-started/) | Install, configure, and emit your first audit event |
| [Audit Events](docs/audit-events/) | Event types, log format specification, and retention policies |
| [Compliance](docs/compliance/) | SOC 2, GDPR, and HIPAA compliance mapping and checklists |

## Supported Event Types

| Category | Events | Description |
|----------|--------|-------------|
| Authentication | `auth.login`, `auth.logout`, `auth.mfa_challenge` | User session lifecycle events |
| Authorization | `authz.grant`, `authz.deny`, `authz.role_change` | Permission evaluation and role modifications |
| Data Access | `data.read`, `data.write`, `data.delete`, `data.export` | Record-level data access tracking |
| Administration | `admin.config_change`, `admin.user_create`, `admin.policy_update` | System configuration and user management |
| System | `system.startup`, `system.shutdown`, `system.health_check` | Infrastructure lifecycle events |

## Architecture Overview

Logbook operates as an append-only log pipeline with three core components:

```
  Application SDKs
        |
        v
  +-------------+     +------------------+     +----------------+
  |   Ingester   | --> |  Chain Verifier  | --> |   Log Store    |
  +-------------+     +------------------+     +----------------+
        |                     |                        |
        v                     v                        v
   Event Buffer         Hash Chain Index        Query Interface
                                                       |
                                                       v
                                                Compliance Reports
```

The Ingester receives audit events over HTTPS or gRPC from application SDKs. The Chain Verifier appends each event to a cryptographic hash chain, ensuring tamper evidence. The Log Store persists events to durable storage and exposes a query interface for compliance reporting and forensic investigation.

## System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| CPU | 2 cores | 8 cores |
| Memory | 4 GB | 16 GB |
| Disk | 100 GB SSD | 1 TB SSD |
| Network | 100 Mbps | 1 Gbps |

> Logbook stores audit data locally by default using an embedded append-only database. For production deployments handling more than 10,000 events per second, use PostgreSQL or an S3-compatible object store as the backend.
