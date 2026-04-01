+++
title = "Device Trust"
description = "Configure device posture checks and compliance requirements"
weight = 3
+++

# Device Trust

Device trust policies verify that connecting devices meet security requirements before access is granted. Even with a valid identity, a non-compliant device will be denied access to protected resources.

## Posture Checks

Bastion evaluates device posture using signals from the endpoint agent:

| Check | Description | Default |
|-------|-------------|---------|
| `os_version` | Minimum OS version required | Enabled |
| `disk_encryption` | Full-disk encryption must be active | Enabled |
| `firewall` | Host firewall must be enabled | Enabled |
| `screen_lock` | Screen lock must be configured | Enabled |
| `endpoint_agent` | Bastion endpoint agent must be running | Enabled |
| `antivirus` | Antivirus software must be active and updated | Optional |
| `jailbreak` | Device must not be jailbroken or rooted | Enabled |
| `os_updates` | Critical OS updates must be installed within N days | Optional |

## Device Policy Configuration

Define device requirements per resource sensitivity level:

```yaml
apiVersion: bastion.io/v1
kind: DevicePolicy
metadata:
  name: standard-device-trust
  description: Baseline device requirements for all access
spec:
  requirements:
    os_version:
      macos: "14.0"
      windows: "10.0.22621"
      linux: "6.1"
      ios: "17.0"
      android: "14"
    disk_encryption:
      enabled: true
      algorithms:
        - AES-256
        - XTS-AES-128
    firewall:
      enabled: true
    screen_lock:
      enabled: true
      max_timeout: 5m
    endpoint_agent:
      enabled: true
      min_version: "2.1.0"
    jailbreak:
      deny: true
```

## High-Security Device Policy

For access to sensitive resources, enforce stricter requirements:

```yaml
apiVersion: bastion.io/v1
kind: DevicePolicy
metadata:
  name: high-security-device-trust
spec:
  match:
    resources:
      labels:
        sensitivity: high
        environment: production
  requirements:
    os_version:
      macos: "14.2"
      windows: "10.0.22631"
    disk_encryption:
      enabled: true
    firewall:
      enabled: true
    screen_lock:
      enabled: true
      max_timeout: 2m
    endpoint_agent:
      enabled: true
      min_version: "2.4.0"
      heartbeat_interval: 60s
    antivirus:
      enabled: true
      max_definition_age: 24h
    os_updates:
      max_pending_critical: 0
      max_pending_age: 72h
    managed_device:
      required: true
      mdm_enrolled: true
```

## Compliance Matrix

The following matrix shows which checks apply at each trust level:

| Check | Low | Standard | High | Critical |
|-------|-----|----------|------|----------|
| OS version minimum | -- | Yes | Yes | Yes |
| Disk encryption | -- | Yes | Yes | Yes |
| Firewall enabled | -- | Yes | Yes | Yes |
| Screen lock | -- | Yes | Yes (2m) | Yes (1m) |
| Endpoint agent | -- | Yes | Yes | Yes |
| Antivirus active | -- | -- | Yes | Yes |
| OS updates current | -- | -- | Yes (72h) | Yes (24h) |
| MDM enrolled | -- | -- | Yes | Yes |
| Hardware key required | -- | -- | -- | Yes |

## Endpoint Agent

The Bastion endpoint agent runs on managed devices and reports posture data to the gateway:

### Installation

```bash
# macOS
brew install bastion-io/tap/bastion-agent

# Linux
curl -fsSL https://pkg.bastion.io/agent/install.sh | sudo bash

# Windows (PowerShell)
irm https://pkg.bastion.io/agent/install.ps1 | iex
```

### Agent Configuration

```yaml
# /etc/bastion/agent.yaml
agent:
  gateway: "gateway.bastion.example.com:8443"
  enrollment_token_env: "BASTION_ENROLLMENT_TOKEN"
  heartbeat_interval: 300s
  posture_check_interval: 60s
  tls:
    ca: /etc/bastion/certs/ca.pem
    verify: true
  logging:
    level: info
    output: /var/log/bastion/agent.log
```

### Agent Status

```bash
$ bastion-agent status

Agent:          running (pid 2847)
Version:        2.4.1
Gateway:        gateway.bastion.example.com:8443 (connected)
Last heartbeat: 12s ago
Device ID:      dev_a8f3c291e47b

Posture:
  OS:             macOS 14.3.1 (ok)
  Disk encrypt:   FileVault enabled (ok)
  Firewall:       enabled (ok)
  Screen lock:    5m timeout (ok)
  Antivirus:      XProtect v2194 (ok)
  Compliance:     PASS
```

## Device Registration

Devices must be registered before they can be used to access protected resources:

```bash
# Register a new device
$ bastion device register \
    --name "alice-macbook" \
    --owner alice@example.com \
    --enrollment-token "$TOKEN"

Device registered:
  ID:       dev_a8f3c291e47b
  Name:     alice-macbook
  Owner:    alice@example.com
  Status:   pending-verification
```

## Remediation Actions

When a device fails a posture check, Bastion can take the following actions:

| Action | Description |
|--------|-------------|
| `deny` | Block access immediately |
| `warn` | Allow access but notify the user and log a warning |
| `quarantine` | Allow access only to remediation resources |
| `notify_admin` | Send an alert to the security team |

```yaml
remediation:
  on_failure:
    default: deny
    overrides:
      - check: os_updates
        action: warn
        message: "Your device has pending OS updates. Please update within 48 hours."
      - check: antivirus
        action: quarantine
        allowed_resources:
          - update-server
          - help-desk
```
