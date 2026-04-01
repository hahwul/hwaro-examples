+++
title = "Authentication"
weight = 2
tags = ["authentication", "security", "api-key", "oauth"]
+++

# Authentication

The Anthology SDK supports two authentication methods: API keys for server-to-server communication and OAuth 2.0 for user-delegated access.

## API Key Authentication

The simplest way to authenticate. Generate an API key from the Anthology dashboard under **Settings > API Keys**.

### Python

```python
from anthology import Client

client = Client(api_key="ak_live_abc123def456")
```

### JavaScript

```javascript
import { Client } from '@anthology/sdk';

const client = new Client({ apiKey: 'ak_live_abc123def456' });
```

### Go

```go
client := anthology.NewClient("ak_live_abc123def456")
```

## Environment Variables

Instead of passing the key directly, you can set the `ANTHOLOGY_API_KEY` environment variable. The SDK reads it automatically when no key is provided in the constructor.

```bash
export ANTHOLOGY_API_KEY=ak_live_abc123def456
```

```python
# No key argument needed -- reads from environment
client = Client()
```

## OAuth 2.0

For applications that act on behalf of users, use the OAuth 2.0 flow.

### Step 1: Redirect to Authorization

```python
from anthology import OAuth

auth_url = OAuth.authorization_url(
    client_id="your-client-id",
    redirect_uri="https://yourapp.com/callback",
    scopes=["resources:read", "resources:write"]
)
# Redirect the user to auth_url
```

### Step 2: Exchange the Code

```python
token = OAuth.exchange_code(
    client_id="your-client-id",
    client_secret="your-client-secret",
    code=request.params["code"],
    redirect_uri="https://yourapp.com/callback"
)
```

### Step 3: Use the Access Token

```python
client = Client(access_token=token.access_token)
```

## Token Refresh

Access tokens expire after 1 hour. Use the refresh token to obtain a new access token without requiring user interaction.

```python
new_token = OAuth.refresh_token(
    client_id="your-client-id",
    client_secret="your-client-secret",
    refresh_token=token.refresh_token
)
```

## Token Parameters

| Parameter       | Type     | Required | Description                              |
|-----------------|----------|----------|------------------------------------------|
| `client_id`     | `string` | Yes      | Your application's client ID             |
| `client_secret` | `string` | Yes      | Your application's client secret         |
| `code`          | `string` | Yes      | The authorization code from the callback |
| `redirect_uri`  | `string` | Yes      | Must match the registered redirect URI   |
| `grant_type`    | `string` | No       | Defaults to `authorization_code`         |

## Available Scopes

| Scope              | Description                        |
|--------------------|------------------------------------|
| `resources:read`   | Read access to resources           |
| `resources:write`  | Create, update, delete resources   |
| `webhooks:read`    | Read webhook configurations        |
| `webhooks:write`   | Manage webhook endpoints           |
| `account:read`     | Read account and billing info      |

> Keep your API keys and client secrets secure. Never expose them in client-side code or commit them to version control.

Next, learn how to configure the client in [Configuration]({{ base_url }}/docs/client-sdk/configuration/).
