+++
title = "sw-core"
date = "2026-03-17"
description = "10GbE core switch — the one piece of hardware the rest of the rack cannot route around."
tags = ["switch", "network", "10gbe"]
toc = true

[extra]
host = "sw-core"
kind = "switch"
role = "core switch"
cpu = "Marvell Prestera (management plane)"
ram = "256 MB"
watts = "19W"
+++

sw-core is the newest thing in the rack and the reason node-03 stopped being the bottleneck on backup jobs. Eight 2.5GbE ports and two SFP+ uplinks, wired so that node-01 and node-03 both get a dedicated 10GbE path to each other for storage traffic, with everything else riding the shared 2.5GbE fabric.

<!-- more -->

## Uplinks

```
SFP+ 1   →  node-01, 10GbE, dedicated storage/backup path
SFP+ 2   →  node-03, 10GbE, dedicated storage/backup path
Port 1   →  gw-edge, 2.5GbE trunk, all VLANs tagged
Port 2   →  sw-access, 1GbE trunk, all VLANs tagged
Port 3   →  node-02, 2.5GbE, VLAN 20 access
Port 4-8 →  reserved
```

## Why a dedicated storage path

Before sw-core existed, Proxmox Backup Server jobs from node-01 to node-03 shared the same 1GbE fabric as everything else, and a nightly backup window would visibly slow down anything else touching the network. Splitting storage traffic onto its own SFP+ pair removed the contention entirely without needing to touch VLAN policy — it is a physically separate path, not a QoS promise.

## LACP

The two SFP+ uplinks are not bonded to each other; each goes to a different node, so there is nothing to aggregate. If a third 10GbE-capable node is ever added, the plan is a two-port LACP bond back to sw-core rather than adding a third dedicated SFP+ run, once there is a second core switch to make that redundant.

```
# running-config excerpt
interface TenGigabitEthernet1/0/1
  description "10G to node-01"
  switchport mode trunk
  switchport trunk allowed vlan 10,20
```
