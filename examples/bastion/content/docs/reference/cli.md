+++
title = "CLI Reference"
description = "bastionctl command reference for operators and policy authors"
weight = 3
+++

# CLI Reference

`bastionctl` is the operator interface for the Bastion gateway. It manages identities, policies, sessions, and cluster state. Every command authenticates through the same identity provider used by the gateway, so operator actions are audited alongside user access decisions.

## Global Flags

| Flag | Description |
|------|-------------|
| `--config` | Path to the bastionctl configuration file |
| `--context` | Named cluster context to target |
| `--output` | Output format: `text`, `json`, or `yaml` |
| `--quiet` | Suppress informational output |

## Command Groups

### Identity

```bash
bastionctl identity list
bastionctl identity show user@example.com
bastionctl identity revoke session-3f2a
```

The identity group inspects active principals, lists their device posture, and revokes sessions immediately when a credential is compromised.

### Policy

```bash
bastionctl policy lint policies/network.toml
bastionctl policy apply policies/network.toml
bastionctl policy diff --since 24h
```

Policy commands validate, deploy, and audit changes. The `diff` subcommand surfaces every policy mutation in the last window, with the operator who authored each change.

### Cluster

```bash
bastionctl cluster status
bastionctl cluster drain gw-02
bastionctl cluster upgrade --channel stable
```

Cluster commands cover gateway lifecycle, drain operations, and upgrades. Use `status` to confirm quorum before any disruptive action.

## Exit Codes

Bastionctl uses exit code `0` on success, `1` on usage errors, `2` on policy validation failures, and `64` on authentication errors. Scripts that wrap bastionctl should branch on these codes rather than parsing stderr.
