+++
title = "Quick Start"
description = "Set up Bastion with a basic zero-trust configuration"
weight = 2
+++

# Quick Start

This guide walks through a minimal Bastion deployment with identity verification, a basic network policy, and audit logging enabled.

## Initialize Configuration

Generate a default configuration:

```bash
bastion init --dir /etc/bastion
```

This creates the following structure:

```
/etc/bastion/
  config.yaml
  policies/
    default.yaml
  certs/
    ca.pem
```

## Configure the Identity Provider

Edit `/etc/bastion/config.yaml` to connect your identity provider:

```yaml
gateway:
  listen: "0.0.0.0:8443"
  tls:
    cert: /etc/bastion/certs/server.pem
    key: /etc/bastion/certs/server-key.pem
    ca: /etc/bastion/certs/ca.pem

identity:
  provider: oidc
  issuer: "https://auth.example.com"
  client_id: "bastion-gateway"
  client_secret_env: "BASTION_OIDC_SECRET"
  scopes:
    - openid
    - profile
    - groups

audit:
  enabled: true
  output: file
  path: /var/log/bastion/audit.json
  format: json
```

## Define a Basic Policy

Create a policy in `/etc/bastion/policies/web-access.yaml`:

```yaml
apiVersion: bastion.io/v1
kind: AccessPolicy
metadata:
  name: web-team-access
  description: Allow web team to access staging services
spec:
  subjects:
    groups:
      - web-developers
      - web-leads
  resources:
    services:
      - name: "staging-api"
        ports: [443, 8080]
      - name: "staging-frontend"
        ports: [443]
  conditions:
    require_mfa: true
    allowed_hours: "06:00-22:00"
    allowed_locations:
      - US
      - EU
  effect: allow
```

## Start the Gateway

```bash
# Start with systemd
sudo systemctl enable --now bastion-gateway

# Or run directly
bastion gateway --config /etc/bastion/config.yaml
```

## Verify the Deployment

Check the gateway status:

```bash
$ bastion status
Gateway:    running (pid 4821)
Uptime:     2m 15s
Policies:   3 loaded, 0 errors
Identity:   connected (oidc: auth.example.com)
Audit:      enabled (file: /var/log/bastion/audit.json)
```

Test a policy evaluation:

```bash
$ bastion eval \
    --subject user:alice@example.com \
    --resource staging-api:443 \
    --action connect

Decision: ALLOW
Policy:   web-team-access
Reason:   Subject matches group "web-developers", MFA verified, location: US
Latency:  1.2ms
```

## Next Steps

- Define [Identity Policies]({{ base_url }}/docs/policies/identity/) for SSO and certificate-based authentication
- Configure [Network Policies]({{ base_url }}/docs/policies/network/) for micro-segmentation
- Set up [Device Trust]({{ base_url }}/docs/policies/device/) posture checks
- Review the [Configuration Reference]({{ base_url }}/docs/reference/configuration/) for all available options
