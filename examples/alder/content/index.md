+++
title = "Alder"
description = "One basement rack, documented like it might have to run itself."
template = "home"

[extra]
user = "op"
hostname = "alder"
uptime_days = 214
nodes_online = 4
nodes_total = 4
switches_online = 2
switches_total = 2
power_draw = 341
power_budget = 1800
rack_temp = 27
load_avg = "0.18, 0.12, 0.09"
+++

Alder is not a company and it is not a product. It is a 12U rack wedged between the water heater and a shelf of paint cans, running four compute nodes and two switches on a single 15A circuit. This wiki is the only documentation that rack will ever get, and it is written the way I would want to find it if I had to rebuild the thing from a cold boot at 2 a.m. with no memory of why any of it is configured the way it is.

Every page under `./hardware` follows the same shape: a spec strip at the top formatted like the output of a status command, then whatever configuration actually matters — VLAN tags, service files, ZFS layout, the things that are easy to forget and expensive to re-derive. Nothing here is aspirational. If a page says a service is running, it is running; if a page says a fan is loud, ask me how I know.

The rack breaker is rated for 1800W and idles well under half of that, which is the entire point of this exercise: home labs die from surprise power draw and undocumented dependencies, not from bad hardware. See the [full power budget](/about/) for the per-device breakdown, or start in the sidebar and press Ctrl+K to jump straight to a hostname.
