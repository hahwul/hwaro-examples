+++
title = "Internal Zone"
description = "Internal zone configuration in Garrison"
tags = ["network-zones", "internal"]
+++

# Internal Zone

The internal zone is the highest-trust network segment, containing critical infrastructure such as databases, application servers, management systems, and employee workstations. Access to the internal zone from lower-trust zones is strictly controlled.

## Zone Definition

```yaml
zones:
  internal:
    trust_level: 100
    description: "Trusted internal network"
    interfaces:
      - name: eth0
        addresses: ["10.200.0.0/16"]
    default_action: drop
    logging: true
```

## Subnet Allocation

The internal zone uses the `10.200.0.0/16` address space, divided into functional subnets:

| Subnet | CIDR | Purpose | VLAN |
|--------|------|---------|------|
| Server | 10.200.10.0/24 | Database and application servers | 10 |
| Management | 10.200.20.0/24 | Infrastructure management (Garrison, monitoring) | 20 |
| Workstation | 10.200.30.0/24 | Employee workstations | 30 |
| Build | 10.200.40.0/24 | CI/CD and build infrastructure | 40 |
| Monitoring | 10.200.50.0/24 | Monitoring and logging collectors | 50 |

## Access Control

### Inbound to Internal

Traffic entering the internal zone must pass through explicit firewall rules. The following table summarizes the baseline inbound policy:

| Source Zone | Allowed Ports | Protocol | Condition |
|-------------|---------------|----------|-----------|
| DMZ | 5432, 3306 | TCP | App servers to databases only |
| DMZ | 514 | UDP | Syslog forwarding |
| VPN | Any | Any | Authenticated VPN users |
| External | None | -- | No direct external access |

### Outbound from Internal

Internal hosts have broader outbound access but are still subject to egress filtering:

```yaml
outbound:
  - name: internal-dns
    action: accept
    protocol: udp
    source:
      zone: internal
    destination:
      zone: external
      addresses: ["8.8.8.8", "8.8.4.4"]
      ports: [53]

  - name: internal-https
    action: accept
    protocol: tcp
    source:
      zone: internal
    destination:
      zone: external
      ports: [443]
    comment: "Package updates, API calls"

  - name: internal-ntp
    action: accept
    protocol: udp
    source:
      zone: internal
    destination:
      zone: external
      ports: [123]
```

## Internal Security Controls

### Micro-segmentation

Within the internal zone, use subnet-level rules to limit lateral movement:

```yaml
internal_rules:
  - name: deny-workstation-to-db
    action: drop
    protocol: tcp
    source:
      subnet: "10.200.30.0/24"
    destination:
      subnet: "10.200.10.0/24"
      ports: [5432, 3306]
    logging: true
    comment: "Workstations cannot directly access databases"

  - name: allow-mgmt-to-all
    action: accept
    protocol: any
    source:
      subnet: "10.200.20.0/24"
    destination:
      subnet: "10.200.0.0/16"
    logging: true
    comment: "Management subnet has full internal access"
```

### Service Discovery

Internal services register with Garrison for automated policy generation:

```bash
# List registered services in the internal zone
garrison services --zone internal

# Output:
# NAME            ADDRESS         PORT    PROTOCOL  STATUS
# postgresql-01   10.200.10.50    5432    tcp       active
# postgresql-02   10.200.10.51    5432    tcp       active
# redis-01        10.200.10.60    6379    tcp       active
# syslog-01       10.200.50.10    514     udp       active
# prometheus-01   10.200.50.20    9090    tcp       active
```

### Compliance

Internal zone configurations must satisfy the following compliance requirements:

| Requirement | Description | Verification |
|-------------|-------------|--------------|
| No default allow | All inter-subnet traffic requires explicit rules | `garrison audit --zone internal --check default-action` |
| Logging enabled | All drop and reject actions must be logged | `garrison audit --zone internal --check logging` |
| Annual review | All rules must be reviewed within 365 days | `garrison audit --zone internal --check review-date` |
| Least privilege | Rules must specify ports, not use port ranges | `garrison audit --zone internal --check port-specificity` |
