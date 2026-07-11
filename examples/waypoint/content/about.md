+++
title = "About"
description = "What Waypoint is, why lazy pulls matter, and how to read these release notes."
+++

Waypoint is a rootless container runtime built around a single observation:
most containers read a small fraction of the image they ship. A service that
bundles a full language runtime, a package manager, and a debug toolchain often
touches only the interpreter and a handful of libraries before it starts serving
traffic. Downloading the rest before the first request is wasted time.

<!-- more -->

## Lazy pulls, briefly

Instead of pulling an entire image up front, Waypoint mounts it as a
content-addressed filesystem and fetches data on read. The image is split into
variable-length chunks; a table of contents maps each virtual path to the chunks
that back it. When the entrypoint opens a file, the snapshotter fetches exactly
the chunks that file needs, caches them, and lets the read complete. Everything
else stays remote until something asks for it.

The result is that cold-start latency scales with the *working set* of a
container, not the *size* of its image. A prefetch heuristic then hides most of
the remaining latency by reading ahead along the access pattern.

## Rootless by default

Waypoint never needs root. Containers run inside your own user namespace with a
curated seccomp profile and no ambient capabilities. There is no long-lived
daemon and no privileged socket — the runtime is one static binary that exits
when your container does.

```bash
# no sudo, no daemon, no bridge
waypoint run --net=userlink registry.example.com/api:1.4
```

## How to read these notes

The [full release history](../releases/) is listed newest first. Minor versions (1.3, 1.4) may change defaults
but never break a pinned digest; patch versions (1.2.1) carry only fixes. The
status line at the bottom of every page reports the current stable version, its
release date, and the first bytes of the digest it resolves to — the same digest
you would pin in production.

Waypoint is fictional software written to demonstrate the Hwaro static site
generator. The changelog voice, version history, and CVE numbers are invented,
but the lazy-pull design mirrors real on-demand image techniques.
