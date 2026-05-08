+++
title = "Notes on a Twilight Palette"
date = "2025-02-04"
description = "Working notes on building a UI palette around the minutes between sunset and night."
tags = ["design", "color"]
+++

A twilight palette is not a dark palette. The mistake most teams make is to take a daytime UI, drop the lightness curve, and call the result "night mode." Twilight is the narrow interval where the sky still holds light but the ground has already gone dim. The eye reads two illuminations at once. A palette that reproduces that condition has to do the same.

## Two Light Sources

Pick a primary background that sits between indigo and slate. Anything below 12% lightness reads as flat black on most panels. Anything above 22% loses the sense of evening. Then choose a single accent that behaves like a residual sunset: muted rose, dusty amber, or pale apricot. The accent must be desaturated. A saturated sunset reads as a notification, not a horizon.

```css
:root {
  --sky-late:  hsl(232 28% 14%);
  --sky-near:  hsl(228 22% 22%);
  --ember:     hsl(18  46% 68%);
  --paper:     hsl(40  18% 92%);
}
```

## Contrast Without Harshness

Body text at full white burns the page. Pull it back to a warm off-white and the screen settles. Borders should be one or two steps lighter than the background, never gray. A neutral gray inside a tinted UI looks like a missing texture.

## What Twilight Refuses

No pure white. No pure black. No gradient that travels more than 20 degrees across the wheel. The palette is small on purpose. The shorter the list of colors, the more the eye trusts each one. Save spectacle for the content; let the chrome stay quiet.
