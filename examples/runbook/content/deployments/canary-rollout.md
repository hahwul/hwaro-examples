+++
title = "Canary Rollout"
weight = 2
template = "doc"
description = "Procedure for releasing a new build to a small percentage of traffic before full rollout."
tags = ["info", "deployment"]
[extra]
severity = "info"
estimated_time = "45-90 min"
last_tested = "2024-09-15"
+++

## Pre-Rollout Checklist

1. Baseline metrics captured for the previous stable build (error rate, p99 latency, CPU, memory)
2. Canary dashboard URL distributed to the on-call channel
3. Feature flags reviewed; any kill-switches confirmed reachable
4. Traffic split target agreed: 1%, then 10%, then 50%, then 100%

## Rollout Steps

### Step 1: Deploy the canary instance

```bash
deploy-cli release --env production --tag v1.4.0 --canary --weight 1
```

The canary pod is tagged `release=canary` and receives one percent of incoming requests through the ingress controller.

### Step 2: Soak at one percent

Hold for fifteen minutes. During soak, watch:

- HTTP 5xx rate on canary versus stable
- p99 latency delta
- Memory growth on the canary pod (must stabilize within ten minutes)

```bash
kubectl logs -l release=canary -n production --tail=200 -f
```

### Step 3: Increment traffic

If canary metrics stay within two percent of stable:

```bash
deploy-cli canary advance --weight 10
deploy-cli canary advance --weight 50
deploy-cli canary advance --weight 100
```

Soak ten minutes between each step.

### Step 4: Promote and clean up

```bash
deploy-cli canary promote --tag v1.4.0
kubectl delete pods -l release=canary -n production
```

## Abort Procedure

If error rate on the canary exceeds the stable rate by more than two percentage points, abort:

```bash
deploy-cli canary abort
```

Traffic returns to the previous build within thirty seconds. File a post-rollout note describing the failure mode and the metrics that triggered the abort.
