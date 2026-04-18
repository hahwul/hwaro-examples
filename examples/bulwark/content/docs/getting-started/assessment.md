+++
title = "Business Impact Assessment"
weight = 2
tags = ["assessment", "bia", "risk"]
+++

# Business Impact Assessment

A Business Impact Analysis (BIA) identifies critical business functions and quantifies the impact of their disruption. This assessment drives all downstream recovery planning decisions, including RPO/RTO targets, resource allocation, and failover architecture.

## Assessment Framework

### Step 1: Identify Critical Functions

Catalog all business functions and map them to the infrastructure components that support them.

| Business Function | Supporting Systems | Revenue Impact/Hour | Users Affected |
|---|---|---|---|
| Payment Processing | payment-api, payment-db, stripe-gateway | $45,000 | All customers |
| User Authentication | auth-service, user-db, redis-sessions | $12,000 | All customers |
| Order Management | order-api, order-db, inventory-service | $28,000 | All customers |
| Search | search-api, elasticsearch-cluster | $8,000 | Active browsers |
| Email Notifications | email-service, ses-integration | $500 | Transactional users |
| Analytics Dashboard | analytics-api, clickhouse, grafana | $200 | Internal staff |

### Step 2: Define Recovery Objectives

For each critical function, establish the Recovery Point Objective (RPO) and Recovery Time Objective (RTO).

- **RPO (Recovery Point Objective)** -- The maximum acceptable amount of data loss measured in time. An RPO of 15 minutes means you can afford to lose up to 15 minutes of data.
- **RTO (Recovery Time Objective)** -- The maximum acceptable downtime. An RTO of 1 hour means the service must be restored within 1 hour of failure detection.

### Step 3: Risk Assessment Matrix

Evaluate each risk by likelihood and impact to prioritize mitigation efforts.

| Risk Category | Likelihood | Impact | Risk Score | Mitigation Priority |
|---|---|---|---|---|
| Hardware failure (single node) | High | Low | Medium | Standard |
| Data center power outage | Low | Critical | High | Immediate |
| Network partition | Medium | High | High | Immediate |
| Database corruption | Low | Critical | High | Immediate |
| DNS provider failure | Low | High | Medium | Standard |
| Cloud region outage | Low | Critical | High | Immediate |
| Ransomware attack | Medium | Critical | Critical | Immediate |
| Configuration error | High | Medium | High | Immediate |

## Dependency Mapping

Map the dependencies between services to understand cascading failure patterns.

```
payment-api
  ├── payment-db (primary, read-replica)
  ├── stripe-gateway (external)
  ├── auth-service
  │   ├── user-db (primary, read-replica)
  │   └── redis-sessions (cluster)
  └── order-service
      ├── order-db (primary, read-replica)
      └── inventory-service
          └── inventory-db (primary)
```

## Recovery Tier Assignment

Based on the BIA results, assign each service to a recovery tier:

```yaml
# recovery-tiers.yaml
tiers:
  tier_1:
    name: "Critical"
    rpo: "0m"
    rto: "15m"
    failover: "automatic"
    services:
      - payment-api
      - payment-db
      - auth-service
      - user-db

  tier_2:
    name: "High"
    rpo: "15m"
    rto: "1h"
    failover: "semi-automatic"
    services:
      - order-api
      - order-db
      - inventory-service
      - redis-sessions

  tier_3:
    name: "Standard"
    rpo: "1h"
    rto: "4h"
    failover: "manual"
    services:
      - search-api
      - elasticsearch-cluster
      - email-service

  tier_4:
    name: "Low"
    rpo: "24h"
    rto: "24h"
    failover: "manual"
    services:
      - analytics-api
      - clickhouse
      - grafana
```

## Review Schedule

The BIA must be reviewed and updated on a regular cadence:

- **Quarterly** -- Review service tier assignments and RPO/RTO targets
- **After major incidents** -- Update risk scores and mitigation priorities
- **After infrastructure changes** -- Re-evaluate dependency mappings
- **Annually** -- Full BIA refresh including financial impact recalculation
