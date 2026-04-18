+++
title = "Environments"
weight = 2
template = "doc"
description = "Managing development, staging, and production environments."
tags = ["config", "environments"]
[extra]
step = 2
total_steps = 3
estimated_time = "5 min"
+++

## Environment Files

Create environment-specific overrides:

```
compass.toml              # Base config (shared)
compass.development.toml  # Development overrides
compass.staging.toml      # Staging overrides
compass.production.toml   # Production overrides
```

## Example Override

```toml
# compass.staging.toml
[build]
target = "staging"

[deploy]
url = "https://staging.my-project.dev"
```

## Using Environments

```bash
# Development (default)
compass serve

# Staging
compass build --env staging

# Production
compass build --env production
compass deploy --env production
```

## Environment Variables

Access environment values in your source files:

```html
<script>
  const API_URL = "COMPASS_API_URL";
</script>
```

Compass replaces these placeholders at build time based on the active environment configuration.
