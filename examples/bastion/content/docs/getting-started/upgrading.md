+++
title = "Upgrading"
description = "Upgrade Bastion gateways and agents safely with zero downtime"
weight = 3
+++

# Upgrading

Bastion is designed for in-place upgrades with no interruption to active sessions. Each release is shipped with the same package channels described in the installation guide, and gateways can be rolled forward one at a time behind a load balancer.

## Release Channels

| Channel | Cadence | Recommended For |
|---------|---------|------------------|
| `stable` | Monthly | Production gateways and SaaS deployments |
| `lts` | Quarterly | Regulated environments with change windows |
| `edge` | Weekly | Staging clusters and feature previews |

Pin a channel in `/etc/bastion/release.toml` to lock a fleet to a release line.

## Rolling Upgrade

A rolling upgrade replaces gateways one at a time. The new instance joins the cluster, drains traffic from the old instance, and reports a healthy status before the next gateway is touched.

```bash
bastionctl cluster drain gw-01
bastionctl cluster upgrade gw-01 --channel stable
bastionctl cluster verify gw-01
```

Repeat the sequence for each gateway. Sessions established before the upgrade continue without reconnection because Bastion preserves session state in the cluster store.

## Schema Migrations

Policy and audit schemas are versioned. The gateway refuses to start when the on-disk schema is newer than the binary, which prevents an accidental downgrade. Run `bastionctl schema migrate --dry-run` before any major version bump to preview the changes.

## Rollback

If a release introduces a regression, pin the previous version in `release.toml` and run the upgrade procedure in reverse. Audit logs from the new release remain readable to the older binary because the audit schema is append-only.
