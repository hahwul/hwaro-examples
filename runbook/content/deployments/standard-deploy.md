+++
title = "Standard Deployment"
weight = 1
template = "doc"
description = "Step-by-step procedure for a standard production deployment."
tags = ["info", "deployment"]
[extra]
severity = "info"
estimated_time = "20-40 min"
last_tested = "2024-09-01"
+++

## Pre-Deployment Checklist

1. All CI checks passing on the release branch
2. Staging environment tested and signed off
3. Release notes reviewed and approved
4. On-call engineer notified
5. Deployment window confirmed (avoid peak hours)

## Deployment Steps

### Step 1: Tag the release

```bash
git tag -a v1.2.3 -m "Release v1.2.3"
git push origin v1.2.3
```

### Step 2: Trigger the deployment pipeline

```bash
deploy-cli release --env production --tag v1.2.3 --dry-run
```

Review the dry-run output. If everything looks correct:

```bash
deploy-cli release --env production --tag v1.2.3 --confirm
```

### Step 3: Monitor the rollout

```bash
kubectl rollout status deployment/api-server -n production --timeout=300s
```

Watch error rates and latency on the monitoring dashboard for 15 minutes.

### Step 4: Verify health checks

```bash
curl -s https://api.example.com/health | jq .
```

Expected output should show `"status": "healthy"` for all services.

## Rollback Procedure

If issues are detected within 30 minutes of deployment:

```bash
deploy-cli rollback --env production --to v1.2.2 --confirm
```

Verify rollback success with health checks. File a post-incident report if rollback was necessary.
