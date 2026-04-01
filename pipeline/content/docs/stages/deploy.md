+++
title = "Deploy Stage"
weight = 3
+++

# Deploy Stage

The deploy stage delivers built artifacts to target environments. Pipeline supports multiple deployment strategies, automatic rollbacks, and environment-specific configuration.

## Basic Configuration

```yaml
stages:
  - name: deploy
    image: alpine/kubectl:latest
    depends_on: [build, test]
    environment: production
    secrets:
      - KUBE_TOKEN
      - KUBE_SERVER
      - KUBE_CA_CERT
    commands:
      - kubectl config set-cluster production --server=$KUBE_SERVER --certificate-authority=/tmp/ca.crt
      - kubectl config set-credentials deployer --token=$KUBE_TOKEN
      - kubectl config set-context production --cluster=production --user=deployer
      - kubectl config use-context production
      - kubectl apply -f k8s/
      - kubectl rollout status deployment/app --timeout=300s
    when:
      branch: main
```

## Deployment Targets

### Kubernetes

```yaml
stages:
  - name: deploy-k8s
    image: alpine/kubectl:latest
    environment: production
    deploy:
      type: kubernetes
      namespace: production
      manifests: k8s/
      wait: true
      timeout: 300s
```

### Cloud Providers

#### AWS ECS

```yaml
stages:
  - name: deploy-ecs
    image: amazon/aws-cli:latest
    secrets:
      - AWS_ACCESS_KEY_ID
      - AWS_SECRET_ACCESS_KEY
    commands:
      - aws ecs update-service --cluster production --service app --force-new-deployment
      - aws ecs wait services-stable --cluster production --services app
```

#### Google Cloud Run

```yaml
stages:
  - name: deploy-cloudrun
    image: google/cloud-sdk:alpine
    secrets:
      - GCP_SERVICE_KEY
    commands:
      - echo $GCP_SERVICE_KEY | gcloud auth activate-service-account --key-file=-
      - gcloud run deploy app --image=$REGISTRY/app:$CI_COMMIT_SHA --region=us-central1 --platform=managed
```

#### Static Sites (S3 + CloudFront)

```yaml
stages:
  - name: deploy-static
    image: amazon/aws-cli:latest
    secrets:
      - AWS_ACCESS_KEY_ID
      - AWS_SECRET_ACCESS_KEY
    commands:
      - aws s3 sync dist/ s3://my-bucket --delete
      - aws cloudfront create-invalidation --distribution-id $CF_DIST_ID --paths "/*"
```

## Deployment Strategies

### Rolling Update

The default strategy. Pods are gradually replaced with new versions:

```yaml
stages:
  - name: deploy
    deploy:
      strategy: rolling
      max_surge: 25%
      max_unavailable: 0
```

### Blue-Green Deployment

Maintain two identical environments and switch traffic after verification:

```yaml
stages:
  - name: deploy
    deploy:
      strategy: blue-green
      active: blue
      commands:
        deploy:
          - kubectl apply -f k8s/ -l env=green
          - kubectl rollout status deployment/app-green --timeout=300s
        verify:
          - curl -sf http://app-green.internal/health
        switch:
          - kubectl patch service app -p '{"spec":{"selector":{"env":"green"}}}'
        cleanup:
          - kubectl delete deployment app-blue
```

### Canary Deployment

Gradually shift traffic to the new version:

```yaml
stages:
  - name: deploy
    deploy:
      strategy: canary
      steps:
        - weight: 10
          pause: 5m
        - weight: 30
          pause: 5m
        - weight: 60
          pause: 5m
        - weight: 100
      analysis:
        metric: error_rate
        threshold: 0.01
        abort_on_failure: true
```

## Rollback Strategies

### Automatic Rollback

Pipeline can automatically roll back when a deployment fails health checks:

```yaml
stages:
  - name: deploy
    deploy:
      rollback:
        enabled: true
        on_failure: true
        health_check:
          url: https://app.example.com/health
          interval: 10s
          timeout: 5s
          threshold: 3
```

### Manual Rollback

Roll back to a previous version using the CLI:

```bash
# List recent deployments
pipeline deployments list --environment production

# Roll back to a specific version
pipeline rollback --environment production --to v1.2.3

# Roll back to the previous deployment
pipeline rollback --environment production --previous
```

## Conditional Deployment

Control when deployments run using the `when` directive:

```yaml
stages:
  - name: deploy-staging
    environment: staging
    when:
      branch: develop

  - name: deploy-production
    environment: production
    when:
      branch: main
      manual: true
```

| Condition | Description |
|---|---|
| `branch` | Run only on the specified branch |
| `tag` | Run only when a Git tag matches the pattern |
| `manual` | Require manual approval before execution |
| `schedule` | Run only on scheduled pipeline triggers |
| `variable` | Run when a variable matches a value |

## Environment Protection

Define approval requirements and deployment windows:

```yaml
environments:
  production:
    approvers:
      - team-leads
    required_approvals: 2
    deploy_window:
      timezone: UTC
      days: [monday, tuesday, wednesday, thursday]
      start: "09:00"
      end: "17:00"
    freeze_periods:
      - start: "2025-12-20"
        end: "2026-01-02"
        reason: "Holiday code freeze"
```

## Troubleshooting

### Deployment times out

Increase the timeout or check that health checks pass:

```bash
# Check pod status
kubectl get pods -l app=myapp -n production

# Check recent events
kubectl get events -n production --sort-by='.lastTimestamp' | tail -20

# Check rollout status
kubectl rollout status deployment/myapp -n production
```

### Rollback fails with "no previous revision"

Ensure at least one successful deployment exists. Check the revision history:

```bash
pipeline deployments list --environment production --limit 10
```

### Permission denied during deployment

Verify that the service account has the necessary permissions and that secrets are correctly configured. Check the [Environment Variables]({{ base_url }}/docs/reference/environment-variables/) page for secret management details.
