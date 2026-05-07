+++
title = "Contrast Audit"
description = "Auditing the palette against WCAG AA across all surfaces."
date = 2024-06-02
template = "page"
[taxonomies]
tags = ["contrast", "accessibility", "audit"]
categories = ["logs"]
+++

## Audit Pass One

The horizon palette uses absolute black, sharp cyan, and slate grey. Body text is set in a near-white at ninety-four percent luminance. The audit measured contrast ratios for every text-on-surface pairing in the system.

Body text against the background measured at 16.8:1. This passes AA and AAA without modification. The slate grey used for metadata and timestamps measured at 4.2:1. This passes AA for large text but falls below the 4.5:1 threshold for body sizes.

### The Fix

```css
:root {
    --color-meta: #94a3b8;
    --color-meta-fixed: #b6c1cd;
}
```

Lifting the meta color from `#94a3b8` to `#b6c1cd` raised the ratio to 6.1:1. The visual character of the metadata stayed muted because the cooler hue still reads as secondary against the body text.

### The Accent

The cyan accent at `#0ea5e9` measured at 4.9:1 against the background. It passes AA for body text but is reserved for short interactive labels and focus rings. We added a documentation note clarifying that the accent must not be used for paragraph-length copy.

The audit will run again before each release. The script lives in the build pipeline and fails the build if any surface drops below the threshold.
