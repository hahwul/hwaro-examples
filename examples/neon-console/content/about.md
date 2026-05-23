+++
title = "System Specifications"
description = "Detailed specifications and architectural parameters of the Neon Console theme."
tags = ["cyber", "about"]
categories = ["meta"]
+++

Neon Console is a dark cybernetic showcase demonstrating the architectural capacity of the Hwaro compiler.

The design is created to resemble a high-performance command line environment, emphasizing raw speed, privacy, and visual focus.

## hardware and software spec sheet

* **SSG Engine**: Hwaro (v0.14.1), statically compiled in Crystal.
* **Layout Structure**: Responsive CSS Grid + Flexbox utilizing glassmorphic backdrop-blur overlays.
* **Typography**: Google Fonts Outfit (high-tech sans) and Fira Code (monospaced terminal logs).
* **Color Space**: Absolute flat void `#050507`, translucent panel overlay `rgba(18,18,24,0.75)`, and solid neon `#00E5FF` / `#39FF14`.

## compile telemetry

Our build chain compiles the complete static file hierarchy in under 10 milliseconds. The generated directory is composed of pure HTML and highly optimized Vanilla CSS, removing all client-side JavaScript requirements for content rendering.