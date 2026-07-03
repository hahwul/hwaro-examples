+++
title = "Metrics that cost less than they ship"
description = "Deploy a telemetry agent that costs less than the metrics it ships"
template = "home"
+++

Pumice is a single-binary observability agent built on eBPF. It reads
syscalls, sockets, and the scheduler straight from the kernel, then adapts its
own sampling in real time so the agent never spends more CPU than the signal is
worth. On an idle host it costs almost nothing; under load it tightens
sampling before it ever competes with your workload for a core.

No kernel module to compile, no per-language SDK to vendor, no sidecar per pod.
Point it at any OpenTelemetry collector and it begins shipping metrics and
low-cardinality traces within seconds.
