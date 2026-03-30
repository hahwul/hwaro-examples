+++
title = "External Zone"
description = "External zone configuration in Garrison"
tags = ["network-zones", "external"]
+++

# External Zone

The external zone represents all untrusted networks, including the public internet and any network segments outside the organization's administrative control. The external zone has a trust level of zero. All traffic originating from the external zone is subject to strict inbound filtering before entering any other zone.

## Zone Definition

```yaml
zones:
  external:
    trust_level: 0
    description: "Untrusted external networks (internet)"
    interfaces:
      - name: eth3
        addresses: ["0.0.0.0/0"]
    default_action: drop
    logging: true
```

## Threat Model

Traffic from the external zone is assumed to be adversarial. The following threats are addressed through zone-level policy:

| Threat | Mitigation | Implementation |
|--------|------------|----------------|
| Port scanning | Rate limiting and connection throttling | Agent-level rate limiter |
| Brute force | Connection limits per source IP | `max_connections_per_source` |
| DDoS | Upstream filtering and SYN proxy | Provider-level scrubbing |
| Data exfiltration | Egress filtering on internal/DMZ zones | Outbound deny-by-default |
| Unauthorized access | Inbound deny-by-default with explicit allows | Firewall rule policy |

## External Interface Configuration

```yaml
interfaces:
  eth3:
    zone: external
    addresses:
      - "203.0.113.0/24"
    mtu: 1500
    options:
      rp_filter: strict
      log_martians: true
      accept_redirects: false
      accept_source_route: false
      tcp_syncookies: true
```

## Anti-Spoofing Rules

Garrison automatically generates anti-spoofing rules for external interfaces. These rules drop packets with source addresses that should not appear on the external interface:

```yaml
anti_spoofing:
  - name: drop-rfc1918-external
    action: drop
    interface: eth3
    source_addresses:
      - "10.0.0.0/8"
      - "172.16.0.0/12"
      - "192.168.0.0/16"
    logging: true
    comment: "Drop RFC1918 addresses on external interface"

  - name: drop-loopback-external
    action: drop
    interface: eth3
    source_addresses:
      - "127.0.0.0/8"
    logging: true
    comment: "Drop loopback addresses on external interface"

  - name: drop-link-local-external
    action: drop
    interface: eth3
    source_addresses:
      - "169.254.0.0/16"
    logging: true
    comment: "Drop link-local addresses on external interface"
```

## Geo-Blocking

Garrison supports country-level IP blocking for the external zone:

```yaml
geo_block:
  enabled: true
  database: "/var/lib/garrison/geoip/GeoLite2-Country.mmdb"
  blocked_countries:
    - "CN"
    - "RU"
    - "KP"
  action: drop
  logging: true
  update_interval: "7d"
```

> Geo-blocking is a supplementary control and should not be relied upon as a primary security mechanism. IP geolocation databases are not perfectly accurate, and motivated attackers use proxy infrastructure in non-blocked countries.

## Rate Limiting

Apply rate limits to external-facing interfaces to mitigate scanning and brute force attacks:

```yaml
rate_limits:
  - name: limit-ssh-attempts
    interface: eth3
    protocol: tcp
    destination_ports: [22]
    max_rate: "5/minute"
    burst: 10
    action: drop
    logging: true

  - name: limit-icmp
    interface: eth3
    protocol: icmp
    max_rate: "10/second"
    burst: 20
    action: drop
    logging: false
```

## Monitoring External Traffic

```bash
# View top external source IPs by connection count
garrison top --zone external --by source_ip --limit 20

# View blocked connections from external zone
garrison logs --zone external --action drop --since 1h --format table

# Generate threat summary
garrison report --zone external --type threat --period 24h
```

Example threat summary:

```
External Zone Threat Summary (last 24h)
=================================================================
Total inbound attempts:    2,847,291
Blocked by policy:         2,701,445 (94.9%)
Blocked by rate limit:        89,234 (3.1%)
Blocked by geo-filter:        41,882 (1.5%)
Accepted:                     14,730 (0.5%)
Top blocked port:          22/tcp (1,204,882 attempts)
Top blocked country:       CN (892,447 attempts)
Unique source IPs:         31,204
```
