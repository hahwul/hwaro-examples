+++
title = "Queue Backpressure: events-ingest"
date = "2024-11-18T14:12:00Z"
tags = ["warning", "queue", "ingest"]
+++

## Incident Report
Consumer lag on the `events-ingest` topic crossed the 250k message threshold at 14:12 UTC. The autoscaler added two consumer pods; lag began trending downward at 14:18 UTC.

## Current Status
* Lag at peak: 312,480 messages.
* Lag at 14:25 UTC: 184,200 messages and decreasing.
* No producer throttling applied. Upstream services are unaffected.

## Suspected Cause
The hourly batch job from `analytics-worker-03` produced a 4x burst of events between 14:05 and 14:11 UTC. The consumer group was sized for the steady-state rate of approximately 8k messages per second.

## Actions Taken
1. Scaled the consumer group from 6 to 8 pods.
2. Pinned the new pods until lag returns to under 5k messages.
3. Filed a follow-up to add predictive scaling tied to the analytics job schedule.

## Recovery Window
Estimated time to drain: 22 minutes at the current consumption rate. The on-call engineer will mark the incident resolved once lag holds below 5k messages for ten consecutive minutes.
