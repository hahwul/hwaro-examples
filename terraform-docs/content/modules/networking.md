---
title: "Networking Module"
weight: 10
---

# Networking Module

Standardized VPC and Subnet configuration.

## Features

- Multi-AZ Deployment
- Public/Private Subnets
- NAT Gateway Integration
- VPC Peering Support

## Usage

```hcl
module "network" {
  source = "git::https://github.com/org/terraform-modules.git//networking"

  vpc_cidr             = "10.0.0.0/16"
  availability_zones   = ["us-east-1a", "us-east-1b"]
  private_subnet_cidrs = ["10.0.1.0/24", "10.0.2.0/24"]
}
```
