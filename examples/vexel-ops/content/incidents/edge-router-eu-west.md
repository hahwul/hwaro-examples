+++
title = "edge-router eu-west-1 latency drift"
date = "2026-05-04"
description = "Two AZs in eu-west-1 added 12ms to the median because of a peering change at the upstream. We rerouted and notified the carrier."
tags = ["p4", "edge", "network"]
owners = ["platform"]
+++

The upstream changed peering on a Sunday and forgot to tell us. We saw the drift on the **edge-router** panel by Monday 13:58, paged the network on-call, and shifted eu-west-1 traffic to the secondary peer at 14:18. The latency snapped back to the baseline at 14:22.

## Why we saw it quickly

The console now shows a per-region row on the edge-router panel during EU business hours. The new row is what surfaced the drift; before May we only had a global median.

## What we are following up on

- Carrier credit for the 36 minutes of degraded routing.
- A signed change-window agreement: we expect 48h notice on peering rearrangements.
- A panel that *also* shows the route-by-route p95 for the top ten paths in eu-west-1. The drift was hiding inside a small set of routes, not the median.
