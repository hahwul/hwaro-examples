+++
title = "Cache Node Outage: ap-south-cache-01"
date = "2024-11-15T08:34:00Z"
tags = ["outage", "cache", "mumbai"]
+++

## Incident Report
The primary cache node in the Mumbai region became unresponsive at 08:34 UTC. Automated failover to secondary node `ap-south-cache-02` occurred within 45 seconds.

## Current Status
* Node is isolated.
* Operations team is investigating hardware failure on the host machine.
* Impact on end-users: Negligible, 45 seconds of elevated latency for 12% of requests in the region.

## Actions Taken
1. Hardware diagnostics initiated.
2. Replacing memory modules.
3. Node rebuild scheduled for 14:00 UTC.

Please monitor the dashboard for updates.
