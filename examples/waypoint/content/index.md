+++
title = "Waypoint"
description = "Release notes for Waypoint, a rootless container runtime with lazy image pulls."
template = "home"
+++

Waypoint is a container runtime that runs entirely in user space — no root
daemon, no setuid helpers, no privileged socket. Every container lives inside
your own user namespace, so a compromised workload never starts with more than
you already have.

Its defining trick is **lazy image pulls**. Instead of downloading an entire
image before the first process runs, Waypoint mounts the image as a
content-addressed filesystem and fetches layers — and individual files —
on read. A 1.2 GB image whose entrypoint touches 40 MB starts in the time it
takes to fetch those 40 MB, and the rest streams in behind it.

- Rootless by default; user namespaces, seccomp, and no ambient capabilities.
- Lazy, content-addressed pulls with a FUSE snapshotter and prefetch heuristics.
- A small, auditable core: one static binary, one config file, no background daemon.

These notes track every tagged build, newest first. The status line below always
reports the current stable release and the digest it resolves to.
