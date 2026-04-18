+++
title = "Outbound Rules"
description = "Configure outbound firewall rules in Garrison"
tags = ["firewall-rules", "outbound"]
+++

# Outbound Rules

Outbound rules govern traffic leaving a network zone toward external or less-restricted destinations. In a defense-in-depth architecture, outbound filtering prevents compromised hosts from establishing unauthorized external connections, exfiltrating data, or participating in botnet activity.

## Rule Structure

Outbound rules follow the same YAML format as inbound rules, with the direction reversed:

```yaml
outbound:
  - name: allow-dns-external
    action: accept
    protocol: udp
    source:
      zone: internal
      addresses: ["10.200.0.0/16"]
    destination:
      zone: external
      addresses: ["8.8.8.8", "8.8.4.4"]
      ports: [53]
    logging: false
    comment: "Allow DNS resolution to Google DNS"

  - name: allow-https-updates
    action: accept
    protocol: tcp
    source:
      zone: internal
    destination:
      zone: external
      ports: [443]
    logging: true
    comment: "Allow HTTPS for package updates"
```

## Egress Filtering Strategy

A strict egress policy limits outbound access to only the services required by each zone. The following table shows a recommended baseline:

| Source Zone | Destination | Ports | Protocol | Purpose |
|-------------|-------------|-------|----------|---------|
| Internal | External | 53 | UDP/TCP | DNS resolution |
| Internal | External | 443 | TCP | HTTPS (updates, APIs) |
| Internal | External | 123 | UDP | NTP time sync |
| DMZ | External | 443 | TCP | Outbound API calls |
| DMZ | Internal | 5432, 3306 | TCP | Database access |
| DMZ | External | 25, 587 | TCP | SMTP relay |

## Deny by Default

Like inbound rules, outbound rule sets use an implicit deny-all as the final rule. This ensures that any traffic not explicitly permitted is blocked and logged:

```yaml
outbound:
  - name: default-deny-outbound
    action: drop
    protocol: any
    source:
      zone: any
    destination:
      zone: any
    logging: true
    comment: "Default deny all outbound traffic"
```

## Rate Limiting

Outbound rules support rate limiting to prevent abuse or resource exhaustion:

```yaml
outbound:
  - name: rate-limit-smtp
    action: accept
    protocol: tcp
    source:
      zone: dmz
      addresses: ["10.100.1.20"]
    destination:
      zone: external
      ports: [25, 587]
    rate_limit:
      max_connections: 100
      per_interval: "1m"
    logging: true
    comment: "Rate-limited SMTP from mail relay"
```

## Connection Tracking

Garrison uses stateful connection tracking for outbound rules. When an outbound connection is established, return traffic is automatically allowed without requiring a separate inbound rule:

```yaml
outbound:
  - name: allow-established-return
    action: accept
    protocol: any
    source:
      zone: any
    destination:
      zone: any
    state: established,related
    logging: false
    comment: "Allow return traffic for established connections"
```

> Place the established/related rule near the top of your outbound policy. This reduces the number of rules evaluated for return traffic and improves throughput.

## Compile and Deploy

Compile the outbound policy and deploy to all agents:

```bash
# Validate the policy
garrison compile --validate --policy /etc/garrison/policies/outbound.yaml

# Deploy to all agents in the internal zone
garrison deploy --zone internal --policy outbound

# Check deployment status
garrison status --zone internal
```

Output:

```
Zone: internal
Agents: 4/4 synced
Last deploy: 2026-03-29T14:22:00Z
Policy version: v47
Status: active
```
