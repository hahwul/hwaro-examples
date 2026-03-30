+++
title = "NAT Rules"
description = "Configure NAT translation rules in Garrison"
tags = ["firewall-rules", "nat"]
+++

# NAT Rules

Network Address Translation (NAT) rules in Garrison handle address and port translation for traffic crossing zone boundaries. Garrison supports Source NAT (SNAT), Destination NAT (DNAT), and bidirectional static NAT.

## NAT Types

| Type | Direction | Use Case |
|------|-----------|----------|
| SNAT | Outbound | Internal hosts use a shared public IP for external access |
| DNAT | Inbound | External traffic is forwarded to internal service addresses |
| Static NAT | Bidirectional | One-to-one mapping between public and private addresses |
| Masquerade | Outbound | Dynamic SNAT using the outgoing interface address |

## Source NAT (SNAT)

SNAT rewrites the source address of outgoing packets. Use SNAT when internal hosts need to reach external services through a shared public address:

```yaml
nat:
  - name: snat-internal-outbound
    type: snat
    source:
      zone: internal
      addresses: ["10.200.0.0/16"]
    destination:
      zone: external
    translate_to:
      address: "203.0.113.10"
    logging: true
    comment: "Internal hosts use public IP for outbound traffic"
```

## Destination NAT (DNAT)

DNAT rewrites the destination address of incoming packets. Use DNAT to expose internal services on public-facing addresses:

```yaml
nat:
  - name: dnat-web-https
    type: dnat
    source:
      zone: external
    destination:
      zone: dmz
      addresses: ["203.0.113.20"]
      ports: [443]
    translate_to:
      address: "10.100.1.10"
      port: 443
    logging: true
    comment: "Forward HTTPS to internal web server"

  - name: dnat-mail-smtp
    type: dnat
    source:
      zone: external
    destination:
      zone: dmz
      addresses: ["203.0.113.21"]
      ports: [25]
    translate_to:
      address: "10.100.1.20"
      port: 25
    logging: true
    comment: "Forward SMTP to internal mail relay"
```

## Static NAT

Static NAT creates a one-to-one bidirectional mapping between an external address and an internal address:

```yaml
nat:
  - name: static-nat-vpn-gateway
    type: static
    external_address: "203.0.113.30"
    internal_address: "10.100.2.1"
    zone_pair:
      external: external
      internal: dmz
    logging: true
    comment: "VPN gateway static mapping"
```

## Port Forwarding

DNAT rules can map external ports to different internal ports:

```yaml
nat:
  - name: dnat-alt-ssh
    type: dnat
    source:
      zone: external
    destination:
      addresses: ["203.0.113.20"]
      ports: [2222]
    translate_to:
      address: "10.100.1.10"
      port: 22
    logging: true
    comment: "External port 2222 to internal SSH port 22"
```

## NAT Rule Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | yes | Unique identifier for the NAT rule |
| `type` | string | yes | `snat`, `dnat`, `static`, or `masquerade` |
| `source.zone` | string | yes | Source zone for the original traffic |
| `source.addresses` | list | no | Source address filter |
| `destination.zone` | string | conditional | Destination zone |
| `destination.addresses` | list | no | Original destination address filter |
| `destination.ports` | list | no | Original destination ports |
| `translate_to.address` | string | yes | Translated address |
| `translate_to.port` | integer | no | Translated port |
| `logging` | boolean | no | Enable translation logging |

## NAT and Firewall Rule Interaction

NAT translation occurs before firewall rule evaluation for DNAT and after evaluation for SNAT. This ordering affects how you write your firewall rules:

```
Inbound traffic:  DNAT -> Firewall Rules -> Routing
Outbound traffic: Routing -> Firewall Rules -> SNAT
```

For DNAT rules, your inbound firewall rules must reference the translated (internal) destination address, not the original public address.

## Compile and Validate

```bash
# Validate NAT rules for conflicts
garrison compile --validate --policy /etc/garrison/policies/nat.yaml

# Check for overlapping translations
garrison nat check --policy /etc/garrison/policies/nat.yaml
```

Example validation output:

```
NAT policy validation:
  Rules: 5
  SNAT: 1
  DNAT: 3
  Static: 1
  Conflicts: 0
  Warnings: 0
  Status: PASS
```
