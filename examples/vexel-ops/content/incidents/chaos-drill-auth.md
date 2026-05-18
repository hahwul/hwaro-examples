+++
title = "Chaos drill — auth-svc clean shutdown"
date = "2026-05-08"
description = "A clean shutdown drill on auth-svc finished 100/100, including the new token-cache hot replacement."
tags = ["drill", "auth", "chaos"]
owners = ["platform"]
+++

We took `auth-svc` through a one-hundred-iteration clean-shutdown drill. The drill kills a randomly selected pod once every six seconds and measures how long the cluster takes to drain it from the rotation, plus the number of requests rejected during the window.

## Numbers

- 100/100 clean shutdowns.
- 0 requests rejected during shutdown windows.
- Median drain time: **2.1s** (was 3.4s last quarter).
- Slowest drain: **3.8s** (was 5.6s last quarter).

The improvement is from the new token-cache hot-replacement code (PR-1041). The cache no longer needs to be rebuilt on a fresh pod — it warms from a sibling.

## Next drill

Same shape against `billing-api` on Friday. The new warm-pool policy will be in production by then, and we want to know whether the warm-pool change *also* improved drain time.
