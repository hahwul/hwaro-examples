+++
title = "Team Workflows"
weight = 3
template = "doc"
description = "Setting up CI/CD and collaborative development workflows."
tags = ["ci-cd", "teams"]
[extra]
step = 3
total_steps = 3
estimated_time = "10 min"
+++

## CI/CD Integration

### GitHub Actions

```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install Compass
        run: curl -sSL https://get.compass-tool.dev | sh
      - name: Build
        run: compass build --env production
      - name: Deploy
        run: compass deploy --env production
        env:
          COMPASS_TOKEN: ${{ secrets.COMPASS_TOKEN }}
```

## Branch Previews

Enable preview deployments for pull requests:

```toml
# compass.toml
[deploy.preview]
enabled = true
prefix = "preview-"
```

Each pull request gets a unique preview URL:

```
https://preview-42.my-project.compass-tool.dev
```

## Access Control

Manage team permissions in `compass.toml`:

```toml
[[team.members]]
email = "dev@example.com"
role = "developer"

[[team.members]]
email = "lead@example.com"
role = "admin"
```

Roles: `viewer`, `developer`, `admin`.
