---
title: "Best Practices"
description: "Guidelines for writing maintainable HCL."
---

# Best Practices

Follow these guidelines to ensure our infrastructure remains robust and easy to manage.

## 1. State Management

Always use a remote backend with locking.

```hcl
terraform {
  backend "s3" {
    bucket         = "tf-state-storage"
    key            = "global/s3/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "tf-state-locks"
    encrypt        = true
  }
}
```

## 2. Variables and Outputs

- Use descriptive names.
- Always include a `description` for variables.
- Mark sensitive data with `sensitive = true`.

## 3. Resource Naming

Follow the `[project]-[env]-[resource]` naming convention.
