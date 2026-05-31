+++
title = "Reading the load graph without lying to yourself"
date = 2026-03-18
tags = ["load", "monitoring", "ops"]
description = "Load average is three numbers, and most operators only ever look at the first one. Here is how to read all three."
+++

The console paints three load lines for a reason. The 1-minute average is loud and twitchy; the 15-minute average is the one that tells you whether you have a real problem.

## The three windows

- **1m** — what is happening right now. Spikes here are normal during a build burst.
- **5m** — the trend. If this climbs while 1m falls, the burst is clearing.
- **15m** — the baseline. A rising 15m line on a quiet fleet is the early warning.

{{ alert(type="warning", body="A 1-minute load of 8.0 on a 12-core node is not an incident. The same number sustained across the 15-minute window is.") }}

## Rule of thumb

Divide the 15-minute load by your core count. Under 0.7 is comfortable, 0.7 to 1.0 is busy, and above 1.0 means jobs are queuing for CPU.

```sh
$ uptime
 14:02:11 up 417 days,  load average: 1.42, 1.18, 0.96
```

Twelve cores, a 15-minute figure of 0.96 — that is 0.08 per core. The fleet is barely awake. Trust the slow line.
