+++
title = "Quickstart"
description = "Get up and running with Manifold in 5 minutes"
tags = ["quickstart", "guide", "getting-started"]
+++

# Quickstart

This guide will walk you through setting up your first tenant and testing the integration.

## 1. Create a Tenant

Once your Manifold instance is running, use the CLI to create your first tenant:

```bash
manifold tenant create --name "Acme Corp" --slug "acme" --plan "starter"
```

This will automatically provision the database schema and initialize the tenant environment.

## 2. Issue an API Key

Generate an API key for the newly created tenant:

```bash
manifold api-key create --tenant "acme" --description "Development Key"
```

Save the output token securely. It will only be shown once.

## 3. Test the Connection

Use the tenant API to verify your setup:

```bash
curl -H "Authorization: Bearer <your-token>" http://localhost:3000/v1/tenant/info
```

You should receive a response containing the tenant details:

```json
{
  "id": "tn_01H...",
  "name": "Acme Corp",
  "slug": "acme",
  "plan": "starter",
  "status": "active"
}
```

## Next Steps

Now that your platform is up and running, you can explore the [Admin API](../api/admin-api/) to automate tenant provisioning or configure your [Isolation Settings](../../tenants/isolation/) for production use.
