+++
title = "About Milepost"
description = "What Milepost is, how the plugin API is versioned, and how to read this release log."
+++

Milepost is a dedicated server for a voxel sandbox game — the kind where the
world is an endless grid of cubic blocks that players mine, stack, redstone into
contraptions, and occasionally blow up. The server keeps the world authoritative,
streams chunks to connected clients, and exposes everything a community operator
needs to run a persistent shard: permissions, backups, region protection, and a
first-class plugin API.

The plugin API is the reason Milepost exists. Most sandbox servers bolt scripting
on as an afterthought; Milepost treats it as the primary interface. Plugins are
sandboxed WebAssembly or TypeScript modules that subscribe to typed events, mutate
the world through a transactional block buffer, and register commands, scheduled
tasks, and network handlers. The runtime, not the plugin, owns the tick budget —
a misbehaving plugin gets throttled, never the whole server.

## How this log is organized

Every marker on [the strip](/releases/) is a release, newest first. The version
sits on the plate; the notes below it are grouped into **Added**, **Changed**, and
**Fixed**, plus **Upgrade notes** whenever an update needs a hand.

- **Major** markers (`x.0.0`) change the plugin API contract. Read the upgrade
  notes before you bump.
- **Minor** markers (`2.x.0`) add capabilities. Existing plugins keep working.
- **Patch** markers (`2.2.x`) fix bugs and tighten the road surface. Safe to
  apply on sight.

## The status board

The homepage carries a live-styled status board — shard health, plugin registry
version, and relay latency. It is illustrative here, but on a running deployment
it is wired to the same telemetry the `milepost status` command reads.

This is a fictional project written for the Hwaro examples gallery. The commands,
config, and API shapes are plausible but invented; no real server ships behind
this signpost.
