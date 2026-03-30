+++
title = "DMZ"
description = "DMZ zone configuration in Garrison"
tags = ["network-zones", "dmz"]
+++

# DMZ Zone

The DMZ (Demilitarized Zone) is a semi-trusted network segment that hosts services accessible from the external network. The DMZ acts as a buffer between untrusted external networks and trusted internal networks.

## Zone Definition

```yaml
zones:
  dmz:
    trust_level: 50
    description: "Demilitarized zone for public-facing services"
    interfaces:
      - name: eth1
        addresses: ["10.100.1.0/24"]
      - name: eth2
        addresses: ["10.100.2.0/24"]
    default_action: drop
    logging: true
```

## Trust Model

The DMZ operates at a middle trust level between external (untrusted) and internal (trusted) zones:

| Zone | Trust Level | Access to DMZ |
|------|-------------|---------------|
| External | 0 | Limited (specific ports only) |
| DMZ | 50 | Self (inter-host within DMZ) |
| Internal | 100 | Full (management and data access) |

Traffic from a lower trust zone to a higher trust zone requires explicit allow rules. Traffic from higher to lower trust zones is permitted by default but can be restricted with explicit deny rules.

## Typical DMZ Services

The following services are commonly deployed in the DMZ:

| Service | Address | Ports | Protocol |
|---------|---------|-------|----------|
| Web Server (HTTPS) | 10.100.1.10 | 443 | TCP |
| Web Server (HTTP redirect) | 10.100.1.10 | 80 | TCP |
| Mail Relay (SMTP) | 10.100.1.20 | 25, 587 | TCP |
| DNS Resolver | 10.100.1.30 | 53 | UDP/TCP |
| VPN Gateway | 10.100.2.1 | 1194 | UDP |
| Reverse Proxy | 10.100.1.40 | 443 | TCP |

## DMZ Security Requirements

### Host Hardening

All hosts in the DMZ must meet the following baseline:

- No direct access to internal database servers without explicit firewall rules
- Local firewall (host-based) enabled with minimal open ports
- Automated patch management with a maximum 72-hour patch window
- Log forwarding to the central syslog collector in the internal zone
- File integrity monitoring enabled on critical system files

### Network Segmentation

The DMZ can be further divided into sub-zones for isolation:

```yaml
zones:
  dmz-web:
    trust_level: 50
    parent: dmz
    interfaces:
      - name: eth1
        addresses: ["10.100.1.0/25"]
    description: "Web tier within DMZ"

  dmz-services:
    trust_level: 45
    parent: dmz
    interfaces:
      - name: eth1
        addresses: ["10.100.1.128/25"]
    description: "Service tier within DMZ (mail, DNS)"
```

### Monitoring

Monitor DMZ traffic patterns for anomalies:

```bash
# View active connections in the DMZ zone
garrison connections --zone dmz --state established

# Check for denied connections in the last hour
garrison logs --zone dmz --action drop --since 1h

# Generate a traffic summary report
garrison report --zone dmz --format table --period 24h
```

Example output:

```
DMZ Traffic Summary (last 24h)
=================================================================
Total connections:      142,387
Accepted:              138,201 (97.1%)
Dropped:                 4,186 (2.9%)
Top source zone:       external (89,422 connections)
Top destination port:  443/tcp (112,304 connections)
Unique source IPs:     8,291
```
