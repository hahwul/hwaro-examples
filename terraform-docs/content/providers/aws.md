---
title: "AWS Provider"
weight: 10
---

# Amazon Web Services (AWS)

The AWS provider is used to interact with the many resources supported by Amazon Web Services.

## Configuration

```hcl
provider "aws" {
  region = "us-west-2"

  default_tags {
    tags = {
      Environment = var.environment
      Project     = "TerraformDocs"
      ManagedBy   = "Terraform"
    }
  }
}
```

## Supported Resources

- **EC2**: Instances, Autoscaling, Load Balancers
- **S3**: Buckets, Object versioning
- **RDS**: Aurora, Postgres, MySQL
- **Lambda**: Serverless functions
