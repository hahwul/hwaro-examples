+++
title = "Authentication"
weight = 3
description = "Add user authentication to your Acme application"
+++

Acme ships with a pluggable authentication module that supports password, OAuth, and API token strategies.

## Quick Setup

Enable the auth module in `acme.toml`:

```toml
[auth]
enabled = true
session_lifetime = "7d"
strategies = ["password", "oauth"]
```

## Password Strategy

Register a user from the CLI for local development:

```bash
acme auth register --email user@example.com
```

In application code, verify credentials with the helper:

```python
from acme.auth import login

session = login(email, password)
if session.valid:
    return session.token
```

## OAuth Providers

Configure providers under `[auth.oauth]`:

```toml
[auth.oauth.github]
client_id = "..."
client_secret_env = "GITHUB_OAUTH_SECRET"
redirect_uri = "/auth/callback/github"
```

Supported providers out of the box: GitHub, Google, GitLab. Additional providers can be registered through the plugin API.

## API Tokens

For machine-to-machine traffic, mint scoped tokens:

```bash
acme auth token create --scope "read:posts,write:comments" --ttl 30d
```

Tokens are stored hashed at rest and can be revoked individually from the dashboard or with `acme auth token revoke <id>`.

## Middleware

Protect routes by adding the middleware in your handler chain:

```python
@route("/admin", middleware=[require_auth(role="admin")])
def admin_dashboard(req):
    return render("admin/index.html")
```

The middleware reads the session cookie or the `Authorization: Bearer <token>` header and sets `req.user` for downstream handlers.
