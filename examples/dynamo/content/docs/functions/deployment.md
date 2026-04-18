+++
title = "Deployment"
description = "Deploy functions to Dynamo environments"
tags = ["deployment", "ci-cd", "dynamo"]
+++

# Deployment

Dynamo supports multiple deployment strategies for rolling out function changes safely. Deployments are immutable -- each deploy creates a new version that can be rolled back to at any time.

## Deployment Workflow

A typical deployment follows these stages:

```
  Build        Package       Upload       Route
  -----        -------       ------       -----
  Compile      Create        Push to      Shift traffic
  and test     artifact      registry     to new version
```

## Deploy a Single Function

Deploy a specific function to the default environment:

```bash
dynamo deploy process-order
```

```
Building process-order...
  Runtime: python311
  Handler: handler.main
  Memory: 512 MB
  Timeout: 60s

Packaging artifact... 2.4 MB
Uploading to registry... done
Creating version v14... done
Routing traffic to v14... done

Deployed process-order v14 in 8.2s
Endpoint: https://api.dynamo.dev/process-order
```

## Deploy All Functions

Deploy every function in the project:

```bash
dynamo deploy --all
```

## Deployment Strategies

Configure the deployment strategy in `dynamo.yaml`:

### Rolling (Default)

Immediately shifts all traffic to the new version:

```yaml
deploy:
  strategy: rolling
```

### Canary

Routes a percentage of traffic to the new version, then promotes after a validation period:

```yaml
deploy:
  strategy: canary
  canary_percentage: 10
  canary_duration: 300
  canary_health_check:
    error_rate_threshold: 0.05
    latency_p99_threshold: 2000
```

Monitor canary progress:

```bash
dynamo deploy status process-order
```

```
Function: process-order
Strategy: canary
Version: v14 (canary) / v13 (stable)
Traffic: 10% canary / 90% stable

Canary Metrics (last 5m):
  Invocations: 142
  Error rate: 0.7%
  P50 latency: 45ms
  P99 latency: 320ms

Status: HEALTHY (promoting in 4m 12s)
```

### Blue-Green

Deploys the new version alongside the current one, then switches traffic atomically:

```yaml
deploy:
  strategy: blue-green
  validation_timeout: 600
```

## Environment Targets

Deploy to specific environments:

```bash
# Deploy to staging
dynamo deploy process-order --env staging

# Deploy to production
dynamo deploy process-order --env production

# Deploy to a custom environment
dynamo deploy process-order --env feature-branch-42
```

## Version Management

List deployed versions:

```bash
dynamo versions list process-order
```

```
VERSION   STATUS     TRAFFIC   DEPLOYED             SIZE
v14       active     100%      2025-03-15 10:30:00  2.4 MB
v13       retained   0%        2025-03-14 16:45:00  2.3 MB
v12       retained   0%        2025-03-12 09:15:00  2.2 MB
v11       archived   0%        2025-03-10 11:00:00  2.1 MB
```

## Rollback

Roll back to a previous version instantly:

```bash
dynamo rollback process-order --version v13
```

```
Rolling back process-order from v14 to v13...
Traffic shifted to v13... done

Rollback complete in 1.4s
```

## CI/CD Integration

Integrate Dynamo deployments into your pipeline using CLI commands:

```yaml
# GitHub Actions example
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Install Dynamo CLI
        run: |
          curl -Lo dynamo https://releases.dynamo.dev/latest/dynamo-Linux-x86_64
          chmod +x dynamo
          sudo mv dynamo /usr/local/bin/

      - name: Configure credentials
        run: dynamo auth configure --token ${{ secrets.DYNAMO_TOKEN }}

      - name: Validate configuration
        run: dynamo config validate

      - name: Deploy all functions
        run: dynamo deploy --all --env production

      - name: Verify deployment
        run: dynamo deploy status --all --wait
```

## Deployment Hooks

Run custom commands before and after deployment:

```yaml
deploy:
  hooks:
    pre_build:
      - npm test
      - npm run lint
    post_deploy:
      - dynamo triggers test process-order --smoke
      - curl -f https://status.example.com/ping
```

> Use canary deployments for production releases. The automatic health check will roll back the deployment if error rates or latency exceed the configured thresholds.
