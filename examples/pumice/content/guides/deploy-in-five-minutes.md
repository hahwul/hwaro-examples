+++
title = "Deploy in five minutes"
description = "Install the agent, attach probes, and start shipping to an OTLP endpoint."
date = "2026-05-28"
weight = 1
toc = true
slug = "deploy-in-five-minutes"
+++

Pumice ships as one static binary with no runtime dependencies. The only
requirement is a Linux kernel with BTF (BPF Type Format) enabled, which covers
every mainstream distribution from 5.4 onward.

<!-- more -->

## Install

Fetch the release for your architecture. The installer verifies the binary
against its published checksum before placing it on your `PATH`.

```bash
curl -fsSL https://get.pumice.dev/install.sh | sh
pumice version
# pumice 0.5.0 (btf: yes, ringbuf: yes, kernel: 6.8.0)
```

## Attach and ship

Point the agent at any OpenTelemetry collector over gRPC. On start it loads its
probes, reads BTF to relocate them against the running kernel, and begins
exporting immediately.

```bash
pumice up \
  --endpoint otlp://collector.telemetry.svc:4317 \
  --service checkout-api \
  --sample adaptive
```

The `adaptive` sampler is the default. It opens at a fixed 1:64 ratio and then
adjusts continuously against a CPU budget you set with `--budget` (0.5% of one
core by default). When the host is quiet it samples more; when it is busy it
backs off before it can contend for a core — the full mechanism is covered in
[How adaptive sampling works](@/guides/how-adaptive-sampling-works.md).

## Verify

Confirm probes are attached and events are flowing without dropping:

```bash
pumice status --watch
# probes     attached   6/6
# ringbuf    0 dropped  (64 MiB)
# egress     3.1 KiB/s  1:64
```

If `dropped` climbs above zero, the ring buffer is undersized for your event
rate. Raise it with `--ringbuf 128MiB` or narrow the enabled collectors. In
most deployments the defaults hold steady well past 20k syscalls per second.

Once the agent is shipping, decide exactly which signals you want by reading
[Collectors and metrics](@/guides/collectors-and-metrics.md).
