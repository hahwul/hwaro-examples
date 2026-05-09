+++
title = "Design Notes"
date = "2025-10-04"
tags = ["design", "glassmorphism", "typography"]
categories = ["pages"]
+++

# Design Notes

The Stellar Nexus look comes from three layered ideas: a deep field of cosmic void, a slow drift of distant orbs, and frosted glass surfaces that hold the actual content.

## Backdrop and depth

The void is not pure black. A faint gradient between two near-black tones gives the eye somewhere to settle, and the drifting orbs are only a handful of large, low-opacity radial gradients animated with long durations. They feel slow on purpose so they never compete with reading.

## Glass surfaces

Every panel uses a translucent fill, a thin border, and a `backdrop-filter` blur. The trick is restraint: only one level of transparency, only one blur radius, and a single shadow definition reused across panels. When every glass element behaves the same way, the layout reads as one coherent system instead of a stack of effects.

## Typography pairing

Space Grotesk handles headings at heavier weights, Inter carries body text at 300 and 400. The contrast in stroke and rhythm gives the headers presence without crowding the prose underneath, and both faces hold up well at small sizes for footers and meta lines.

## What to avoid

Saturated accent colors, multiple competing blurs, and animated transitions on text. The whole point of this aesthetic is calm distance, not motion design.
