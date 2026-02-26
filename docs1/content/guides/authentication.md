+++
title = "Authentication"
weight = 1
description = "Learn how to authenticate your API requests"
tags = ["auth", "security"]
template = "doc"
toc = true
+++

## Overview

The Pulse API uses **Bearer token authentication**. Every request must include a valid API key in the `Authorization` header.

## Getting an API Key

1. Sign in to your [Pulse Dashboard](https://app.pulse.dev)
2. Navigate to **Settings > API Keys**
3. Click **Generate New Key**
4. Copy the key immediately — it won't be shown again

## Using Your API Key

Include the key in the `Authorization` header of every request:

```bash
curl -H "Authorization: Bearer pk_live_abc123def456" \
  https://api.pulse.dev/v1/users/me
```

## Key Types

| Type | Prefix | Permissions |
|------|--------|-------------|
| Live | `pk_live_` | Full access to production data |
| Test | `pk_test_` | Access to sandbox environment only |
| Read-only | `pk_read_` | GET requests only |

## Security Best Practices

- **Never expose keys in client-side code** — always make API calls from your server
- **Rotate keys regularly** — you can have up to 5 active keys per account
- **Use test keys for development** — avoid using live keys in staging environments
- **Set IP allowlists** — restrict key usage to known IP addresses in Settings

## Revoking Keys

To revoke a key, go to **Settings > API Keys** and click **Revoke** next to the key. Revoked keys stop working immediately.
