---
title: "Module Design"
weight: 20
---

# Module Design

A well-designed Terraform module is small, opinionated, and treats its inputs as a stable contract. Most teams accumulate technical debt by inflating modules with toggles that exist only to support a single caller; resist this and split the module instead.

## Single Responsibility

Each module should manage one logical unit: a VPC, a service, a database cluster. Avoid composite modules that wire together unrelated resources. If a change to one resource forces a change to an unrelated one, the module is doing too much.

## Input Contracts

Inputs are part of the public API. Treat them with the same care as a library function signature.

```hcl
variable "instance_type" {
  description = "EC2 instance type for the worker pool."
  type        = string
  default     = "t3.medium"

  validation {
    condition     = can(regex("^[tcm][0-9]", var.instance_type))
    error_message = "Instance type must be from the t, c, or m families."
  }
}
```

Avoid `any` types. Avoid optional inputs that change resource topology; prefer separate modules for distinct topologies.

## Output Stability

Outputs are consumed by other modules and root configurations. Renaming or removing an output is a breaking change. When deprecating an output, keep both the old and new names for at least one release cycle and document the migration path in the module's CHANGELOG.

## Versioning

Pin module sources by tag, not branch. A `ref=v1.4.2` reference in the source URL guarantees that re-running `terraform init` produces the same module, even if the upstream repository moves forward.

## Testing

Every module should ship with at least one example under `examples/` that runs end-to-end with `terraform plan`. Integration tests with Terratest catch regressions in resource graphs that pure plan-time checks miss.
