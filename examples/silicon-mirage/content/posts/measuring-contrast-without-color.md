+++
title = "Measuring Contrast Without Color"
date = 2024-07-21
description = "Tonal hierarchy in a palette restricted to charcoal and cream."
taxonomies = { tags = ["color", "contrast", "accessibility"] }
+++

Contrast in a restricted palette is a problem of luminance, not hue. When a design rejects gradients and limits itself to two or three solid tones, the only lever left is the gap between those tones on the lightness axis.

The WCAG guideline of 4.5:1 contrast for body text is a floor, not a target. For long-form reading on a charcoal background, a contrast ratio closer to 7:1 reduces eye strain over a ten-minute session. The cream tone used here, hex value f5f0e6, sits at roughly 94 in lightness; the charcoal background, hex 1a1a1a, sits at 7. The resulting ratio of about 13:1 is comfortable even on a dim screen.

### Building Hierarchy

With only two tones, hierarchy must come from weight, size, and spacing rather than color. A heading at 2.5 rem with a weight of 700 will read as primary even when it shares the exact same color as the body text. Reducing the body weight to 400 and the body size to 1 rem opens the gap. Subheadings sit between, at 1.5 rem and weight 600, anchored to the same baseline grid as the body.

Muted tones, used sparingly for metadata or quotes, must clear the contrast floor on their own. A medium gray that looks fine against white will fail against charcoal. The accent gray used for post dates, hex a8a8a0, sits at lightness 67 and clears 9:1 against the background. It reads as secondary because it is smaller and lighter, not because it is washed out.

### When to Add a Third Tone

A third tone is justified only when the second cannot do its job. An accent for links, for callouts, or for active states often needs its own value to avoid blending into the body. The accent in this design, a desaturated rust, was chosen for its luminance distance from both the cream and the charcoal. It is identifiable in peripheral vision but does not pull focus during reading.

Restraint is the discipline. Every additional tone is a decision the reader will absorb whether or not they notice it.
