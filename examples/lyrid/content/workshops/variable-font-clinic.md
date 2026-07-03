+++
title = "Variable Font Clinic"
date = "2026-04-25"
description = "Bring a family with a weight problem; leave with a working weight axis, real defaults, and named instances that behave."
[extra]
instructor = "Tobias Renner"
format = "Clinic · half day"
slot = "Sat 13:30–17:00"
level = "Bring a font in progress"
+++

A clinic, not a course: bring a typeface with at least two masters and a nagging problem, and we fix it in the room. Interpolation exposes every inconsistency you got away with in static masters — mismatched point counts, a `g` that swaps construction halfway, a weight axis that goes muddy at the middle. We triage yours and ship a variable file by the end of the afternoon.

<!-- more -->

## Bring this

- A source in Glyphs, FontForge, or `.ufo` with two or more compatible masters.
- One paragraph of real text you actually care about setting.
- A specific complaint. "It feels off" is where we start, not where we stay.

## The axis, defined

We set up a proper `fvar` table and sane defaults so browsers and apps do the right thing on day one:

```css
@font-face {
  font-family: "Zetterij Variable";
  src: url("zetterij.woff2") format("woff2-variations");
  font-weight: 300 800;   /* the wght axis range */
  font-display: swap;
}

h1 {
  font-family: "Zetterij Variable";
  font-variation-settings: "wght" 760, "opsz" 42;
}
```

## What we cover

Compatibility repair (matching outlines so they interpolate cleanly), designing an *intermediate* master to rescue the midpoint, an optical-size axis if your text sizes are drowning, and naming instances so `Regular` and `Bold` land exactly where a designer expects. You walk out with a tested `.woff2`, a proof PDF, and a checklist for the axes you did not have time to build.
