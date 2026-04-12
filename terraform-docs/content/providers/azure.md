---
title: "Azure Provider"
weight: 20
---

# Microsoft Azure

The Azure Resource Manager (AzureRM) provider allows you to manage resources in Azure.

## Configuration

```hcl
provider "azurerm" {
  features {}

  subscription_id = "..."
  tenant_id       = "..."
}
```

## Common Resources

- **App Service**: Web Apps, Functions
- **AKS**: Managed Kubernetes
- **CosmosDB**: Multi-model database
