+++
title = "Configuration"
section = "docs"
+++

# SYSTEM_CONFIGURATION_TUNING

Turret nodes can be configured using a standard YAML format. Below are the key configuration blocks for rate limiting and IP blocking.

## RATE_LIMIT_SETTINGS

```yaml
# turret_config.yaml
rate_limiting:
  enabled: true
  strategy: leaky_bucket
  thresholds:
    - path: /api/*
      limit: 100
      window: 60s
      action: block
    - path: /static/*
      limit: 500
      window: 60s
      action: allow
  custom_headers:
    - X-Turret-RateLimit-Remaining
    - X-Turret-RateLimit-Reset
```

## IP_REPUTATION_&_BLOCKING

```yaml
# ip_reputation_config.yaml
ip_blocking:
  enabled: true
  auto_block_severity: 8 # Scale of 1-10
  block_duration: 3600s
  whitelist:
    - 192.168.1.0/24
    - 10.0.0.0/8
  external_feeds:
    - https://threatintel.turret.com/v1/feed.json
    - https://reputation.example.org/blacklist.txt
```

## DEPLOYMENT_STATUS_CHECK

Use the following CLI command to verify the current configuration status of a node.

```bash
turretctl status --node=node-01 --check-sync
```
