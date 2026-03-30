+++
title = "Inbound Rules"
description = "Configure inbound firewall rules in Garrison"
tags = ["firewall-rules", "inbound"]
+++

# Inbound Rules

Inbound rules control traffic entering a network zone from external or less-trusted sources. Rules are evaluated in order from top to bottom. The first matching rule determines the action; subsequent rules are not evaluated for that connection.

## Rule Structure

Each inbound rule is defined in a YAML policy file:

```yaml
inbound:
  - name: allow-https-web
    action: accept
    protocol: tcp
    source:
      zone: external
      addresses: ["0.0.0.0/0"]
    destination:
      zone: dmz
      addresses: ["10.100.1.0/24"]
      ports: [443]
    logging: true
    comment: "Allow HTTPS to web servers in DMZ"

  - name: allow-ssh-admin
    action: accept
    protocol: tcp
    source:
      zone: internal
      addresses: ["10.200.0.0/16"]
    destination:
      zone: dmz
      addresses: ["10.100.1.0/24"]
      ports: [22]
    logging: true
    comment: "Allow SSH from admin network to DMZ"
```

## Rule Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | yes | Unique identifier for the rule |
| `action` | string | yes | `accept`, `drop`, or `reject` |
| `protocol` | string | yes | `tcp`, `udp`, `icmp`, or `any` |
| `source.zone` | string | yes | Source security zone |
| `source.addresses` | list | no | Source CIDR ranges (default: any) |
| `source.ports` | list | no | Source port ranges |
| `destination.zone` | string | yes | Destination security zone |
| `destination.addresses` | list | no | Destination CIDR ranges (default: any) |
| `destination.ports` | list | no | Destination ports |
| `logging` | boolean | no | Enable connection logging (default: false) |
| `comment` | string | no | Human-readable description |
| `state` | string | no | Connection state: `new`, `established`, `related` |

## Common Patterns

### Web Server Access

Allow public HTTP and HTTPS traffic to a DMZ web tier:

```yaml
inbound:
  - name: allow-http-public
    action: accept
    protocol: tcp
    source:
      zone: external
    destination:
      zone: dmz
      addresses: ["10.100.1.10", "10.100.1.11"]
      ports: [80, 443]
    state: new
    logging: true
```

### Database Access from Application Tier

Allow application servers to reach database servers on specific ports:

```yaml
inbound:
  - name: allow-postgres-app
    action: accept
    protocol: tcp
    source:
      zone: dmz
      addresses: ["10.100.1.0/24"]
    destination:
      zone: internal
      addresses: ["10.200.10.50"]
      ports: [5432]
    state: new
    logging: true
    comment: "App servers to PostgreSQL"
```

### ICMP for Monitoring

Allow ICMP echo requests from the monitoring subnet:

```yaml
inbound:
  - name: allow-icmp-monitoring
    action: accept
    protocol: icmp
    source:
      zone: internal
      addresses: ["10.200.50.0/24"]
    destination:
      zone: dmz
    logging: false
    comment: "Monitoring health checks"
```

## Default Deny

All inbound rule sets must end with an implicit deny rule. Garrison appends this automatically during compilation:

```yaml
# This rule is auto-generated -- do not add manually
inbound:
  - name: default-deny-inbound
    action: drop
    protocol: any
    source:
      zone: any
    destination:
      zone: any
    logging: true
    comment: "Default deny all inbound traffic"
```

## Rule Validation

The rule compiler checks for the following conditions:

| Check | Severity | Description |
|-------|----------|-------------|
| Shadowed rule | warning | A rule that can never match because a broader rule precedes it |
| Duplicate name | error | Two rules share the same name |
| Invalid zone | error | A referenced zone does not exist in the zone configuration |
| Port conflict | warning | Overlapping port ranges in rules with different actions |
| Missing protocol | error | A rule specifies ports but no protocol |

Run the compiler with validation:

```bash
garrison compile --validate --policy /etc/garrison/policies/inbound.yaml
```
