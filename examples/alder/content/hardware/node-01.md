+++
title = "node-01"
date = "2025-01-08"
description = "Primary Proxmox VE hypervisor — the node everything else assumes is up."
tags = ["proxmox", "compute", "virtualization"]
toc = true

[extra]
host = "node-01"
kind = "node"
role = "hypervisor"
cpu = "AMD Ryzen 5 5600G (6c/12t)"
ram = "64 GB DDR4"
watts = "38W"
+++

node-01 is the oldest and best-provisioned box in the rack, and it shows: it was bought as a desktop, not a server, so it has integrated graphics it will never use and a case that does not fit the rack rails without an aftermarket bracket. It runs Proxmox VE bare metal and hosts the majority of the rack's VMs and LXC containers.

<!-- more -->

## What runs here

A single-node Proxmox cluster (there is no HA — a two-node cluster with no real quorum device is worse than no cluster) hosting a mix of long-running services and short-lived test VMs.

| Guest            | Type | vCPU | RAM  | Notes                     |
|------------------|------|------|------|----------------------------|
| pihole-01        | LXC  | 1    | 512M | primary DNS/adblock       |
| docker-host      | VM   | 4    | 16G  | compose stacks, monitoring |
| homeassistant    | VM   | 2    | 4G   | supervised install         |
| scratch          | VM   | 2    | 8G   | rebuilt weekly, disposable  |

## Backup schedule

Proxmox Backup Server runs as a container on [node-03](/hardware/node-03/) and pulls from node-01 nightly. The job definition is deliberately conservative — daily incrementals, weekly full verification, four weeks of retention.

```ini
# /etc/pve/jobs.cfg (excerpt)
vzdump: backup-node-01-nightly
    schedule 03:00
    exclude-path /mnt/scratch
    mode snapshot
    storage pbs-node03
    mailto ops@localhost
    notes-template "{{guestname}} - nightly"
```

## Why it stays a single point of failure

Every service that matters enough to need real redundancy — DNS, the reverse proxy, backups — either runs replicated across node-01 and node-02, or is intentionally allowed to be down for the twenty minutes a reboot takes. That trade was made explicitly rather than discovered the hard way.
