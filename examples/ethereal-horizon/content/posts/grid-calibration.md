+++
title = "Grid Calibration"
description = "Tuning the baseline grid to match the type scale."
date = 2024-05-18
template = "page"
[taxonomies]
tags = ["grid", "typography", "layout"]
categories = ["logs"]
+++

## Baseline Sync

The baseline grid was running at four pixels. The body type was set at sixteen pixels with a line height of twenty-four. The two were not aligned.

We rebased the grid to eight pixels. Every vertical rhythm value now divides cleanly by the type leading. Section spacing, paragraph spacing, and list spacing all snap to multiples of eight. The drift that had been visible at the bottom of long pages is gone.

### Token Adjustments

```css
:root {
    --grid-unit: 8px;
    --space-1: calc(var(--grid-unit) * 1);
    --space-2: calc(var(--grid-unit) * 2);
    --space-3: calc(var(--grid-unit) * 3);
    --space-6: calc(var(--grid-unit) * 6);
}
```

The horizontal grid was untouched. Twelve columns at seventy-two pixels with twenty-four pixel gutters continues to handle the layout requirements without strain.

### Verification

Three reference pages were measured before and after the change. The cumulative vertical drift over a two-thousand-pixel scroll dropped from eleven pixels to zero. The change is inexpensive and improves the perceived stability of the site.

The grid is now the source of truth. Any future spacing token must derive from `--grid-unit` directly. We are deleting the legacy spacing tokens that hardcoded pixel values in the next cleanup pass.
