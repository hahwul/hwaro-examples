---
title: "GCP Provider"
weight: 30
---

# Google Cloud Platform (GCP)

The Google provider manages resources across Compute Engine, Cloud Storage, GKE, and the rest of the Google Cloud surface. Use the `google-beta` provider alongside `google` when you need access to features that have not yet reached general availability.

## Configuration

```hcl
provider "google" {
  project = var.project_id
  region  = "us-central1"
  zone    = "us-central1-a"

  default_labels = {
    environment = var.environment
    managed_by  = "terraform"
  }
}

provider "google-beta" {
  project = var.project_id
  region  = "us-central1"
}
```

## Authentication

In CI, prefer Workload Identity Federation over long-lived service account keys. The provider reads `GOOGLE_APPLICATION_CREDENTIALS` automatically when set, but a federated token from your CI provider is the safer default.

## Supported Resources

- **Compute Engine**: instances, instance templates, managed instance groups
- **GKE**: regional and zonal clusters, node pools, Workload Identity bindings
- **Cloud Storage**: buckets, IAM policies, lifecycle rules
- **Cloud SQL**: Postgres, MySQL, and SQL Server instances with private IP
- **Pub/Sub**: topics, subscriptions, schema registry
- **IAM**: custom roles, service accounts, conditional bindings

## Quotas

Most projects hit quota limits before they hit billing limits. The `google_project_service_quota` resource is in beta and lets you raise quotas declaratively rather than through the console. Track quota usage as a CI gate to catch slow leaks.
