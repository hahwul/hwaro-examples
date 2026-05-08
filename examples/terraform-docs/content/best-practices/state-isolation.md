---
title: "State Isolation"
weight: 30
---

# State Isolation

A single monolithic state file is the most common cause of long plan times and merge conflicts in Terraform repositories. Splitting state by blast radius gives you faster iteration and limits the scope of any single mistake.

## Layers

Organize root configurations into layers ordered by change frequency:

1. **Foundation** — accounts, organizations, IAM roots. Changes rarely.
2. **Network** — VPCs, transit gateways, DNS zones. Changes monthly.
3. **Platform** — Kubernetes clusters, databases, shared queues. Changes weekly.
4. **Workload** — application deployments, autoscaling groups. Changes daily.

Each layer has its own state file. Lower layers expose outputs through `terraform_remote_state` data sources or, preferably, through a parameter store such as SSM or Consul.

## Workspace Boundaries

Avoid Terraform workspaces for environment separation. They share a backend configuration, which means a misconfigured `terraform workspace select` can destroy production while you intended to touch staging. Use separate root modules per environment with distinct backend configs.

## Backend Locking

Always enable remote state locking. For S3 backends, this means a DynamoDB table with `LockID` as the partition key. Without locking, concurrent applies will silently corrupt state.

```hcl
terraform {
  backend "s3" {
    bucket         = "infra-state-prod"
    key            = "platform/eks/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "tf-state-locks"
    encrypt        = true
  }
}
```

## Drift Detection

Run `terraform plan` on a schedule against every state file. Surface drift as a metric, not just a CI failure. Drift that goes undetected for weeks usually means the resource is being managed manually and should either be imported or removed from state.
