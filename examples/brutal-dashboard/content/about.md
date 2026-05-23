+++
title = "Telemetry Spec Sheet"
description = "Specifications and layout details of the Brutal Dashboard telemetry console."
tags = ["monitors", "specs"]
categories = ["meta"]
+++

The Brutal Dashboard telemetry console is designed to showcase metric card components and structured data tables.

## telemetry capabilities

- **Responsive Grid Cards**: Status counters resize based on viewport width, using fluid CSS margins.
- **Visual Alert States**: Important markers toggle to deep Safety Orange (`#FF5E00`) blockages during spikes.
- **Zero Decors**: Zero color gradients and zero emojis are used to guarantee high data processing speed and clean reading flow.

## system specs

- **Host Engine**: Hwaro SSG compiled in Crystal.
- **Style Delivery**: Raw Vanilla CSS (under 250 lines).
- **Page Compilation Speed**: Under 10 milliseconds.