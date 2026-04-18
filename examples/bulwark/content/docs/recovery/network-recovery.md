+++
title = "Network Recovery"
weight = 3
tags = ["network", "bgp", "vpn", "cdn", "dns"]
+++

# Network Recovery

Network-layer recovery procedures covering BGP failover, VPN tunnel restoration, CDN bypass, and DNS infrastructure recovery.

## Network Topology Overview

```
                     ┌──────────────┐
                     │   Internet   │
                     └──────┬───────┘
                            │
                   ┌────────┴────────┐
                   │   CDN (Edge)    │
                   └────────┬────────┘
                            │
              ┌─────────────┼─────────────┐
              │                           │
     ┌────────┴────────┐       ┌─────────┴────────┐
     │  us-east-1       │       │  us-west-2        │
     │  BGP AS 65001   │       │  BGP AS 65002     │
     │  VPN Tunnel A   │       │  VPN Tunnel B     │
     └────────┬────────┘       └─────────┬────────┘
              │                           │
     ┌────────┴────────┐       ┌─────────┴────────┐
     │  Internal LB    │       │  Internal LB      │
     │  10.0.0.0/16    │       │  10.1.0.0/16      │
     └─────────────────┘       └──────────────────┘
```

## Scenario 1: BGP Failover

When the primary BGP session drops, traffic must reroute through the secondary path.

### Detection

```bash
# Check BGP session status
bulwark network bgp status --router edge-router-01

# Expected output when healthy:
# Neighbor: 203.0.113.1  AS: 65001  State: Established  Uptime: 45d 12h
# Neighbor: 203.0.113.2  AS: 65002  State: Established  Uptime: 45d 12h
```

### Recovery Steps

```bash
# 1. Verify BGP session is down
bulwark network bgp status --router edge-router-01 --neighbor 203.0.113.1

# 2. Check if secondary path is active and carrying traffic
bulwark network bgp routes --router edge-router-01 --prefix 10.0.0.0/16

# 3. If automatic failover did not occur, force route update
bulwark network bgp withdraw --router edge-router-01 --prefix 10.0.0.0/16 --neighbor 203.0.113.1
bulwark network bgp announce --router edge-router-01 --prefix 10.0.0.0/16 --neighbor 203.0.113.2 --prepend 1

# 4. Verify traffic is flowing through secondary path
bulwark network trace --from edge-router-01 --to 10.0.1.50 --protocol tcp --port 443
```

### BGP Configuration Reference

```
# /etc/frr/bgpd.conf
router bgp 65001
  bgp router-id 10.0.0.1
  bgp bestpath as-path multipath-relax
  neighbor 203.0.113.1 remote-as 64512
  neighbor 203.0.113.1 description "Primary Transit"
  neighbor 203.0.113.1 timers 10 30
  neighbor 203.0.113.2 remote-as 64513
  neighbor 203.0.113.2 description "Secondary Transit"
  neighbor 203.0.113.2 timers 10 30
  address-family ipv4 unicast
    network 10.0.0.0/16
    neighbor 203.0.113.1 route-map PRIMARY-IN in
    neighbor 203.0.113.1 route-map PRIMARY-OUT out
    neighbor 203.0.113.2 route-map SECONDARY-IN in
    neighbor 203.0.113.2 route-map SECONDARY-OUT out
```

## Scenario 2: VPN Tunnel Recovery

Site-to-site VPN tunnels connect the primary and secondary data centers. When a tunnel drops, inter-region traffic is disrupted.

### Recovery Steps

```bash
# 1. Check tunnel status
bulwark network vpn status --tunnel dc-east-to-west

# 2. Attempt tunnel restart
bulwark network vpn restart --tunnel dc-east-to-west

# 3. If restart fails, re-establish with fresh keys
bulwark network vpn rekey --tunnel dc-east-to-west --confirm

# 4. Verify connectivity through the tunnel
bulwark network ping --source 10.0.1.1 --target 10.1.1.1 --count 10

# 5. Check tunnel metrics
bulwark network vpn metrics --tunnel dc-east-to-west --duration 5m
```

### IPsec Configuration

```yaml
# /etc/bulwark/vpn/dc-east-to-west.yaml
tunnel:
  name: "dc-east-to-west"
  type: "ipsec"
  local:
    endpoint: "198.51.100.1"
    subnet: "10.0.0.0/16"
  remote:
    endpoint: "198.51.100.2"
    subnet: "10.1.0.0/16"
  ipsec:
    ike_version: 2
    phase1:
      encryption: "aes256"
      hash: "sha256"
      dh_group: 14
      lifetime: 28800
    phase2:
      encryption: "aes256"
      hash: "sha256"
      pfs_group: 14
      lifetime: 3600
  monitoring:
    dpd_interval: 10
    dpd_timeout: 30
    dpd_action: "restart"
```

## Scenario 3: CDN Bypass

When the CDN provider experiences an outage, route traffic directly to origin servers.

```bash
# 1. Confirm CDN outage
bulwark network cdn status --provider cloudfront

# 2. Update DNS to bypass CDN and point directly to origin
bulwark dns update --record www.bulwark.io --type A --target 198.51.100.10 --ttl 60
bulwark dns update --record api.bulwark.io --type A --target 198.51.100.11 --ttl 60

# 3. Enable origin rate limiting (CDN was handling this)
bulwark firewall enable-rule --name origin-rate-limit --threshold 1000/min

# 4. Monitor origin server load
bulwark metrics query 'sum(rate(http_requests_total{layer="origin"}[1m]))'
```

## DNS Infrastructure Recovery

If the primary DNS provider fails, switch to the secondary provider.

| DNS Provider | Role | Records | TTL Policy |
|---|---|---|---|
| Provider A (primary) | Active | All zones | 60s for failover, 3600s for static |
| Provider B (secondary) | Standby | All zones (synced) | Mirrors primary |
| Internal DNS | Internal only | *.internal zones | 30s |

```bash
# 1. Verify DNS resolution is failing
dig @ns1.provider-a.com api.bulwark.io A +short

# 2. Activate secondary DNS provider at the registrar
bulwark dns activate-secondary --provider provider-b --zones bulwark.io

# 3. Verify resolution through secondary
dig @ns1.provider-b.com api.bulwark.io A +short

# 4. Monitor propagation
bulwark dns propagation --record api.bulwark.io --check-interval 30s --duration 10m
```
