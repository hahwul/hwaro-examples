+++
title = "Hardware"
description = "Every node and switch in the rack, one page each, sorted by hostname."
sort_by = "title"
template = "section"
+++

Six devices, six pages, one format. Every page opens with a spec strip — CPU, RAM, and idle watts, printed like the output of a status command — followed by whatever a future 2 a.m. rebuild would actually need: VLAN assignments, service files, ZFS layout, join tokens redacted but the shape of the command left intact.

Hostnames follow a fixed prefix scheme: `gw-` for the edge router, `node-` for compute and storage, `sw-` for switches. The prefix is not decoration — it is how the DHCP reservations, the Ansible inventory, and this wiki all agree on what a box is without anyone having to remember.
