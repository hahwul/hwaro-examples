+++
title = "CDN Edge Node Outage"
date = "2026-03-10"
tags = ["cdn", "outage"]

[extra]
severity = "major"
status = "resolved"
duration = "2 hours 15 minutes"
affected = "CDN / Static Assets"
+++

## Summary

A subset of CDN edge nodes in the EU-West region became unreachable, causing degraded asset delivery for users in Western Europe.

## Timeline

- **09:12 UTC** -- Automated checks detected failures on 3 of 12 EU-West edge nodes.
- **09:18 UTC** -- Traffic automatically rerouted to healthy nodes. Partial degradation persisted due to increased load.
- **09:30 UTC** -- CDN provider confirmed a network issue at the Frankfurt datacenter.
- **10:15 UTC** -- Provider applied a network path fix. Two of three nodes recovered.
- **11:27 UTC** -- Final node restored. Full capacity confirmed across all regions.

## Root Cause

A BGP route leak from a third-party transit provider caused packet loss on the path to three edge nodes in Frankfurt. The CDN provider's automatic failover mitigated most impact, but residual latency persisted until the route was corrected.

## Corrective Actions

- CDN provider added route leak detection and automatic filtering.
- Increased edge node redundancy in EU-West from 12 to 16 nodes.
- Added synthetic monitoring probes for each individual edge node.
