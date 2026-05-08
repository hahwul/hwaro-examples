---
title: "Database Module"
weight: 20
---

# Database Module

A managed Postgres cluster with sensible production defaults: encrypted storage, automated backups, and a parameter group tuned for OLTP workloads.

## Features

- Aurora Postgres 15 with reader autoscaling
- KMS-encrypted storage and snapshots
- Automated minor version upgrades during maintenance window
- Performance Insights enabled for the writer
- IAM database authentication for application roles
- Daily snapshots retained for 30 days

## Usage

```hcl
module "orders_db" {
  source = "git::https://github.com/org/terraform-modules.git//database?ref=v2.1.0"

  identifier         = "orders-prod"
  database_name      = "orders"
  master_username    = "orders_admin"
  instance_class     = "db.r6g.xlarge"
  reader_count       = 2
  subnet_ids         = module.network.private_subnet_ids
  security_group_ids = [module.network.db_sg_id]

  backup_retention_days = 30
  deletion_protection   = true
}
```

## Outputs

- `cluster_endpoint` — writer endpoint for application connections
- `reader_endpoint` — load-balanced reader endpoint
- `port` — TCP port the cluster listens on
- `secret_arn` — Secrets Manager ARN holding the master credentials

## Maintenance Window

The default maintenance window is `Sun 06:00-07:00 UTC`. Override with the `maintenance_window` input if your traffic pattern conflicts. Failover during maintenance typically completes within 60 seconds.
