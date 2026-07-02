+++
title = "sw-access"
date = "2025-11-03"
description = "24-port PoE access switch — every VLAN's last hop before a device."
tags = ["switch", "network", "poe"]
toc = true

[extra]
host = "sw-access"
kind = "switch"
role = "access switch"
cpu = "Realtek RTL8380M (management plane)"
ram = "128 MB"
watts = "14W"
+++

sw-access is the switch every non-rack device actually plugs into: the two basement wireless access points, a PoE camera over the workbench, and a scattering of wired IoT devices that were not trusted enough to go on Wi-Fi. It uplinks to sw-core over a single tagged trunk and does not route anything itself.

<!-- more -->

## Port map

```
Port  1-4    VLAN 20 (LAN)     — wired workbench devices
Port  5-6    VLAN 10 (MGMT)    — wireless access points, PoE
Port  7      VLAN 10 (MGMT)    — PoE camera
Port  8-20   VLAN 30 (IOT)     — smart plugs, sensors
Port 21-23   VLAN 40 (GUEST)   — unused, reserved
Port 24      trunk             — uplink to sw-core, all VLANs tagged
```

## PoE budget

The switch itself idles at 14W excluding PoE draw; the two access points and the camera together pull another 22W under load, well inside the 65W PoE budget this model ships with. PoE is disabled by default on every port that is not explicitly listed above — an unused port with PoE live is one of the easier ways to let an unexpected device join the network.

## VLAN config

```
# switch CLI, paraphrased from the running-config
vlan 10,20,30,40
interface GigabitEthernet1/0/24
  switchport mode trunk
  switchport trunk allowed vlan 10,20,30,40
interface GigabitEthernet1/0/8-20
  switchport mode access
  switchport access vlan 30
  poe disable
```

Configuration changes go through the switch's local CLI over the MGMT VLAN only — there is no cloud controller for this hardware class, which is exactly what a two-switch home lab wants.
