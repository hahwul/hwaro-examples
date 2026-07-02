+++
title = "gw-edge"
date = "2025-02-14"
description = "Edge router and firewall — OPNsense on fanless, passively-cooled hardware."
tags = ["router", "network", "opnsense"]
toc = true

[extra]
host = "gw-edge"
kind = "node"
role = "router"
cpu = "Intel Celeron N5105 (4c/4t)"
ram = "8 GB DDR4"
watts = "7W"
+++

Everything else in the rack sits behind this box. gw-edge is a fanless mini appliance running OPNsense, terminating the ISP handoff, doing NAT, and trunking four VLANs down to sw-core over a single 2.5GbE link. It has no fan, no spinning disk, and draws less power at full routing load than the LED strip under the rack shelf.

<!-- more -->

## VLAN plan

Four VLANs cover everything the rack needs to segment: management, trusted compute, an isolated IoT segment for the handful of smart-home devices that share the basement, and a guest network that never touches anything else. The trunk hands off to [sw-core](/hardware/sw-core/), which fans it out to everything downstream.

| VLAN | ID  | Subnet          | Purpose            |
|------|-----|-----------------|---------------------|
| MGMT |  10 | 10.10.10.0/24   | IPMI, switch admin  |
| LAN  |  20 | 10.10.20.0/23   | nodes, containers   |
| IOT  |  30 | 10.10.30.0/24   | isolated, no LAN access |
| GUEST|  40 | 10.10.40.0/24   | internet-only       |

## Interface config

The parent interface stays untagged for MGMT; everything else rides tagged sub-interfaces down the same physical port to sw-core, which handles the fan-out.

```
# /conf/interfaces.xml (relevant excerpt, hand-transcribed)
igc1:
  description: "TRUNK to sw-core"
  vlans:
    - tag: 20
      descr: LAN
    - tag: 30
      descr: IOT
    - tag: 40
      descr: GUEST
  mtu: 1500
```

## WAN failover

A USB LTE modem sits in a drawer, plugged in only during ISP outages — there is no automatic failover configured on purpose. An always-on cellular gateway would cost more per year than the ISP outages have ever cost in inconvenience, and the manual failover takes about ninety seconds once the LTE stick is plugged in and the gateway group is flipped in the OPNsense UI.
