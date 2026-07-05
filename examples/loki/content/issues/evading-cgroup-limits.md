+++
title = "Evading Cgroup Resource Limits"
date = "2026-01-19"
description = "Investigating memory allocation gaps between user and kernel space in cgroup v1 and migrating to cgroup v2."
tags = ["cgroups", "evasion", "isolation"]
[extra]
file_size = "5.8K"
+++

Control groups (cgroups) are a core Linux kernel feature that limits, accounts for, and isolates the resource usage (CPU, memory, disk I/O, etc.) of process collections. In container runtimes, cgroups prevent a single container from consuming all host resources, which could lead to denial-of-service states on adjacent workloads. Despite their structural design, containers can sometimes exploit gaps in cgroup configurations or kernel-level memory management to exceed designated allocations.

<!-- more -->

This dispatch details the mechanisms used to bypass cgroup memory limits and how system administrators can configure robust resource isolation.

A common bypass method revolves around generating excessive kernel-space memory allocations, which in older cgroup v1 implementations were not accounted for with the same granularity as user-space anonymous memory. For instance, repeatedly opening sockets or invoking memory-mapped file allocations can allocate memory inside the kernel's slab caches, which might not be mapped directly to the container's cgroup limit. This allows a process to exhaust host physical memory, triggering the Out-Of-Memory (OOM) killer to terminate other critical host processes.

To prevent this type of resource evasion, operators must migrate to cgroup v2 (unified hierarchy), which integrates memory accounting across both user and kernel space, including slab caches, socket buffers, and page cache pages.

Here is a typical controller mount check to verify cgroup v2 status on a host:

```bash
# Check if the cgroup v2 unified controller is mounted
mount | grep cgroup2
# Expected output on a secure host:
# cgroup2 on /sys/fs/cgroup type cgroup2 (rw,nosuid,nodev,noexec,relatime,nsdelegate)
```
