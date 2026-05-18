+++
title = "Quickstart"
description = "From zero to a running node in under two minutes."
date = "2026-02-01"
weight = 1
tags = ["getting-started"]
+++

## Two-minute install

The fastest way to get a node up. Suitable for a development machine. Not
suitable for production — see chapter 04 for that.

```bash
curl -fsSL https://prism.example/install.sh | sh -
prism init ./scratch
cd scratch && prism start
```

The default configuration listens on `:8400` and persists state to `./data`.
Both are tuneable.

## Verify

```bash
prism ping
# nodes:      1
# leader:     localhost:8400
# status:     ready
# build:      2.7.1 (revision a8c1f29)
```

## Stop, start, and the lifecycle

```bash
prism start          # foreground
prism start --daemon # background, writes pid to ./prism.pid
prism stop           # graceful, fsyncs the journal
prism stop --hard    # immediate, journal must replay on next start
```

A graceful stop is always preferable. The hard stop is reserved for the
rare case where the process is wedged and a stack dump is more valuable
than a clean shutdown.
