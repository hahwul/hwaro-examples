+++
title = "Garrison"
description = "Firewall and network security policy documentation"
tags = ["garrison", "firewall", "security"]
+++

# Garrison

Garrison is a firewall management and network security policy platform designed for organizations that operate segmented network architectures. It provides centralized rule management, zone-based access control, and auditable policy enforcement across distributed perimeter infrastructure.

## Core Capabilities

- **Rule Management** -- Define, version, and deploy firewall rules across multiple enforcement points from a single policy source
- **Zone Architecture** -- Organize network segments into security zones with explicit trust boundaries and inter-zone traffic policies
- **NAT Translation** -- Configure source and destination NAT policies with connection tracking and session persistence
- **Audit Logging** -- Record all policy changes, rule modifications, and deployment events with tamper-evident logging

## Quick Navigation

| Section | Description |
|---------|-------------|
| [Getting Started](docs/getting-started/) | Install, configure, and deploy your first policy set |
| [Firewall Rules](docs/firewall-rules/) | Define inbound, outbound, and NAT translation rules |
| [Network Zones](docs/network-zones/) | Configure DMZ, internal, and external security zones |

## Architecture Overview

Garrison operates as a policy management layer above the network enforcement plane:

```
  Policy Console
       |
       v
  +--------------+     +----------------+     +----------------+
  | Policy Store  | --> | Rule Compiler  | --> | Zone Enforcer  |
  +--------------+     +----------------+     +----------------+
       |                      |                      |
       v                      v                      v
  Version Control       Rule Validation       Firewall Agents
```

The Policy Store maintains the canonical set of security rules in a version-controlled format. The Rule Compiler validates rule sets for conflicts, shadowed entries, and syntax errors. The Zone Enforcer distributes compiled policies to firewall agents running on perimeter devices.

## System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| CPU | 2 cores | 4 cores |
| Memory | 2 GB | 8 GB |
| Disk | 10 GB SSD | 50 GB SSD |
| Network | 100 Mbps | 1 Gbps |

## Default Ports

| Service | Port | Protocol | Purpose |
|---------|------|----------|---------|
| Policy API | 8443 | TCP/TLS | Management interface |
| Agent Sync | 8444 | TCP/TLS | Agent policy distribution |
| Syslog Receiver | 5514 | UDP | Log ingestion |
| Health Check | 8080 | TCP | Readiness and liveness probes |

> Garrison requires TLS certificates for all management and agent communication channels. Self-signed certificates are supported for development environments, but a proper PKI is recommended for production deployments.
