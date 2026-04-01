+++
title = "Setup and Prerequisites"
weight = 1
tags = ["setup", "installation", "prerequisites"]
+++

# Setup and Prerequisites

Before implementing disaster recovery procedures, you need to install and configure the core DR tooling stack. This guide covers the prerequisites and installation steps for all required components.

## System Requirements

| Component | Minimum | Recommended |
|---|---|---|
| CPU | 2 cores | 4 cores |
| Memory | 4 GB | 8 GB |
| Storage | 50 GB | 200 GB |
| Network | 100 Mbps | 1 Gbps |
| OS | Ubuntu 20.04+ / RHEL 8+ | Ubuntu 22.04 / RHEL 9 |

## Install DR Toolkit

The Bulwark CLI provides commands for health checks, failover orchestration, and recovery validation.

```bash
# Add the repository
curl -fsSL https://packages.bulwark.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/bulwark.gpg
echo "deb [signed-by=/usr/share/keyrings/bulwark.gpg] https://packages.bulwark.io/apt stable main" | sudo tee /etc/apt/sources.list.d/bulwark.list

# Install
sudo apt update
sudo apt install bulwark-cli bulwark-agent
```

## Configure the Agent

The Bulwark agent runs on each monitored host and reports health status to the central controller.

```yaml
# /etc/bulwark/agent.yaml
controller:
  endpoint: "https://bulwark-ctrl.internal:8443"
  tls:
    ca_cert: "/etc/bulwark/ca.pem"
    client_cert: "/etc/bulwark/agent.pem"
    client_key: "/etc/bulwark/agent-key.pem"

agent:
  id: "node-prod-web-01"
  region: "us-east-1"
  tier: 1
  heartbeat_interval: 10s
  checks:
    - name: "disk_space"
      type: "threshold"
      target: "/dev/sda1"
      warning: 80
      critical: 95
    - name: "service_health"
      type: "http"
      target: "http://localhost:8080/health"
      timeout: 5s
      interval: 15s
```

## Verify Installation

Run the following commands to confirm the toolkit is operational:

```bash
# Check CLI version
bulwark version

# Verify agent connectivity
bulwark agent status

# Run initial health check
bulwark check --all --verbose

# Validate configuration
bulwark config validate /etc/bulwark/agent.yaml
```

## Network Prerequisites

Ensure the following ports are open between your DR components:

| Source | Destination | Port | Protocol | Purpose |
|---|---|---|---|---|
| Agent | Controller | 8443 | TCP/TLS | Health reporting |
| Controller | Agent | 9100 | TCP | Metrics scraping |
| Controller | DNS | 53 | TCP/UDP | DNS failover |
| Agent | Agent | 7946 | TCP/UDP | Gossip protocol |
| Controller | SMTP | 587 | TCP/TLS | Alert notifications |

## Next Steps

Once the toolkit is installed and verified, proceed to the [Business Impact Assessment](../assessment/) to identify critical systems and define recovery targets.
