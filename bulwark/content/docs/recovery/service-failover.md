+++
title = "Service Failover"
weight = 2
tags = ["failover", "services", "health-checks", "dns"]
+++

# Service Failover

Application-layer failover procedures covering active-passive deployments, active-active configurations, health check tuning, and DNS-based traffic shifting.

## Failover Architecture

### Active-Passive

One primary instance handles all traffic. A standby instance is kept warm and ready to take over if the primary fails. Used for services that cannot handle split-brain scenarios.

```
                  ┌─────────────────┐
                  │   Load Balancer  │
                  └────────┬────────┘
                           │
              ┌────────────┼────────────┐
              │                         │
     ┌────────┴────────┐    ┌──────────┴────────┐
     │  Primary (active) │    │ Standby (passive)  │
     │  payment-api-01  │    │  payment-api-02    │
     │  Status: SERVING │    │  Status: STANDBY   │
     └──────────────────┘    └────────────────────┘
```

### Active-Active

Both instances serve traffic simultaneously behind a load balancer. Used for stateless services that can safely run in parallel.

```
                  ┌─────────────────┐
                  │   Load Balancer  │
                  └────────┬────────┘
                           │
              ┌────────────┼────────────┐
              │                         │
     ┌────────┴────────┐    ┌──────────┴────────┐
     │  Instance A       │    │  Instance B        │
     │  order-api-01    │    │  order-api-02      │
     │  Status: SERVING │    │  Status: SERVING   │
     └──────────────────┘    └────────────────────┘
```

## Health Check Configuration

Health checks determine when failover should trigger. Configure thresholds carefully to avoid false positives.

```yaml
# /etc/bulwark/health-checks.yaml
checks:
  payment-api:
    endpoint: "http://payment-api:8080/health"
    interval: 5s
    timeout: 3s
    healthy_threshold: 2
    unhealthy_threshold: 3
    expected_status: 200
    expected_body_contains: '"status":"ok"'

  auth-service:
    endpoint: "http://auth-service:8080/health"
    interval: 10s
    timeout: 5s
    healthy_threshold: 2
    unhealthy_threshold: 3
    expected_status: 200

  order-api:
    endpoint: "http://order-api:8080/health"
    interval: 10s
    timeout: 5s
    healthy_threshold: 2
    unhealthy_threshold: 5
    expected_status: 200
```

## DNS-Based Failover

For cross-region failover, use weighted DNS records to shift traffic between regions.

### Pre-conditions

- Services deployed in both us-east-1 and us-west-2
- DNS TTL set to 60 seconds for failover records
- Health check endpoints accessible from DNS provider

### Failover Steps

```bash
# 1. Confirm the failing region
bulwark check region us-east-1 --services payment-api,auth-service,order-api

# 2. Update DNS weights to shift traffic to healthy region
bulwark dns failover \
  --record api.bulwark.io \
  --from us-east-1 \
  --to us-west-2 \
  --mode weighted \
  --weight-primary 0 \
  --weight-secondary 100

# 3. Monitor traffic shift (wait for TTL expiry)
bulwark dns monitor --record api.bulwark.io --duration 5m

# 4. Verify healthy region is handling all traffic
bulwark metrics query 'sum(rate(http_requests_total{region="us-west-2"}[1m]))'
```

### Failback Procedure

Once the primary region is restored, gradually shift traffic back:

```bash
# Step 1: 10% traffic to restored region
bulwark dns failover --record api.bulwark.io --weight-primary 10 --weight-secondary 90

# Step 2: Monitor for 15 minutes, then increase
bulwark dns failover --record api.bulwark.io --weight-primary 50 --weight-secondary 50

# Step 3: Full failback
bulwark dns failover --record api.bulwark.io --weight-primary 100 --weight-secondary 0
```

## Kubernetes Failover

For services running on Kubernetes, use pod disruption budgets and readiness gates.

```yaml
# pod-disruption-budget.yaml
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: payment-api-pdb
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app: payment-api
---
# horizontal-pod-autoscaler.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: payment-api-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: payment-api
  minReplicas: 3
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
```

## Failover Decision Matrix

| Failure Type | Detection Time | Failover Mode | Expected RTO |
|---|---|---|---|
| Single pod crash | Immediate | Automatic (K8s) | < 30 seconds |
| Node failure | 30-60 seconds | Automatic (K8s) | 1-2 minutes |
| Service degradation | 15-45 seconds | Semi-automatic | 2-5 minutes |
| AZ outage | 1-3 minutes | Semi-automatic | 5-15 minutes |
| Region outage | 2-5 minutes | Manual DNS shift | 10-30 minutes |
