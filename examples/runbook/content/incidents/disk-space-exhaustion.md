+++
title = "Disk Space Exhaustion"
weight = 3
template = "doc"
description = "Steps to diagnose and recover from a host or container running out of disk space."
tags = ["warning", "infrastructure"]
[extra]
severity = "warning"
estimated_time = "10-30 min"
last_tested = "2024-08-22"
+++

## Symptoms

- Application logs report `ENOSPC` or `No space left on device`
- Database write queries fail intermittently
- Container restarts in a crash loop with filesystem errors
- Monitoring alert: disk usage above 90 percent on one or more nodes

## Diagnosis

### Step 1: Identify the affected host

```bash
df -h
kubectl get nodes -o custom-columns=NAME:.metadata.name,DISK:.status.allocatable.ephemeral-storage
```

### Step 2: Locate the largest consumers

```bash
sudo du -h --max-depth=1 / | sort -hr | head -20
sudo find /var/log -type f -size +100M -exec ls -lh {} \;
```

For container workloads, inspect ephemeral storage per pod:

```bash
kubectl top pods --all-namespaces --sort-by=memory
```

## Recovery Steps

### Step 1: Free immediate space

Rotate or truncate large logs that are safe to discard:

```bash
sudo truncate -s 0 /var/log/application.log
sudo journalctl --vacuum-size=200M
```

For Docker hosts:

```bash
docker system prune --volumes --force
```

### Step 2: Address the root cause

- Logs growing without rotation: install or fix `logrotate` config
- Core dumps accumulating: configure `ulimit -c` or `/proc/sys/kernel/core_pattern`
- Cache directory unbounded: set a size limit in the application config
- Database write-ahead logs not archived: verify the archiver process is running

### Step 3: Verify and monitor

```bash
df -h
```

Confirm usage drops below 70 percent. Add or adjust alerting thresholds so the next incident triggers earlier. File a follow-up ticket if the underlying growth pattern needs a permanent fix.
