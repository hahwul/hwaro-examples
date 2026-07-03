+++
title = "About the Lab"
description = "What Alder is, where it lives, and what the power budget actually looks like."
tags = ["about", "power"]
toc = true
+++

Alder is the name of one rack, not a company. It lives in the corner of an unfinished basement, on a dedicated 15A/120V circuit shared with nothing else in the house — the previous owner ran it for a chest freezer that no longer exists, which is the only reason a home lab gets its own breaker without an electrician visit.

## What is actually in the rack

Four compute nodes, two switches, a UPS, and a 1U shelf of patch cables that will never be labeled as well as they should be. Everything is documented on the [hardware pages](/hardware/): hostname, role, CPU, RAM, and idle power draw for each device, formatted the same way on every page so the pattern becomes muscle memory after the third lookup.

## Power budget

The breaker is rated for 1800W continuous. Steady-state draw across the whole rack, UPS included, sits around 340W — plenty of headroom for a resilver or a cold boot of everything at once, which draws closer to 480W for the first ninety seconds.

| Device        | Idle watts | Peak watts |
|---------------|-----------:|-----------:|
| gw-edge       |         7W |        11W |
| node-01       |        38W |        95W |
| node-02       |         9W |        18W |
| node-03       |        42W |        88W |
| sw-access     |        14W |        14W |
| sw-core       |        19W |        19W |
| UPS overhead  |        12W |        15W |
| **Total**     |    **341W**|   **340W\***|

\* Peak total is lower than the sum of individual peaks because nodes rarely peak simultaneously; the UPS has never reported a load above 45%.

## House rules

Nothing production-critical lives here. If a service on this rack disappears for a weekend, the worst outcome is that a dashboard is stale — not that anything outside this basement notices. That constraint is deliberate: it is what makes it safe to test upgrades on a Tuesday night instead of scheduling a maintenance window.
