+++
title = "R-178 · MFU climbed to 54% after the pipeline rework"
date = "2026-05-02"
description = "Pipeline parallelism rework added eight points of MFU. Wall-clock per epoch fell by 14%."
tags = ["mfu", "pipeline-parallel", "shipped"]
models = ["nm-6b"]
+++

The pipeline parallelism rework that we shipped last week paid for itself on R-178. Model FLOPs utilisation climbed from forty-six percent to fifty-four. Wall-clock per epoch fell by fourteen percent.

The win came from two places. First, the rework reduced bubble time during the warmup phase by interleaving the second micro-batch into the first stage's idle slot. Second, the activation recomputation policy is now layer-aware — we recompute attention but cache the FFN, which trades a small amount of memory for a meaningful throughput gain at this scale.

- **MFU before:** 46.2%
- **MFU after:** 54.1%
- **Memory headroom:** 9.4% (was 14.2%)

The memory headroom is now within our normal operating band. We are not going to chase further MFU at the cost of additional memory until we have run R-186 and R-187 — both planned to use the freed cycles for longer sequence lengths rather than larger batch sizes.
