+++
title = "About Hematite"
description = "What Hematite is, how the pipeline is put together, and who keeps it running"
+++

Hematite is a small, self-hosted image processing service built by Iron Foundry Labs. Point it at a source — an S3 bucket, a Git LFS store, a plain file server — and it serves every derivative on demand: crops, format conversions, sharpening, palette work, grain, orientation fixes. Nothing is pre-rendered. Every response is computed the first time a filter chain is requested, then handed to your CDN to cache under one key.

The name comes from the mineral, not a metaphor we're proud of: hematite is iron ore that oxidizes to a particular reddish streak, and the pipeline's whole visual identity — the plates on every transform page, the accent color in this documentation — is built around that same warm rust. It seemed better than naming another service after a gemstone nobody has seen.

## How the docs are built

Every transform page on this site is generated the same way our regression tests run: a fixture image goes through the transform, both the source and the result are rendered as flat SVG plates, and the exact filter chain that produced the difference is printed between them. If the docs and the pipeline ever disagree, the docs are describing a version we haven't shipped yet.

{{ alert(type="tip", body="Chain order matters. Crop before resize, sharpen after — the reference for each transform notes where it expects to sit in the pipeline.") }}

## Who maintains it

Hematite is maintained by a three-person team inside Iron Foundry Labs: one person on the transform kernels, one on [format negotiation and delivery](/transforms/format-negotiation/), one on the documentation and fixture pipeline you're reading right now. Issues and filter-chain proposals go through the public tracker; nothing here is proprietary. Start with the [full transform reference](/transforms/) if you'd rather read code than history.
