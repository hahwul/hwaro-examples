+++
title = "Reading on a Black Field"
date = "2026-04-19"
description = "Tuning typography for dark-default surfaces so paragraphs do not strain the eye over long reads."
tags = ["typography", "dark-mode"]
categories = ["technique"]
+++

Pure white text on pure black is a common default and a poor one. The high contrast looks crisp on the home page and turns hostile after two paragraphs.

## The Adjustments That Matter

- **Drop the white**. Body text should sit around `rgba(255, 255, 255, 0.86)`. The page still reads as bright, but the glare is gone.
- **Lift the background a hair**. `#0a0a0a` reads as black to the eye but produces less ghosting on OLED panels than absolute `#000000`.
- **Loosen the leading**. Dark backgrounds make line-height feel tighter than it is. Bump body text from 1.5 to 1.6 or 1.65 and the paragraphs breathe.

## Hierarchy in Reverse

On a light page, hierarchy is built by darkening type. On a dark page, the equivalent is *reducing* opacity. The brightest text should be reserved for the highest-priority element on the screen — usually the title — and everything else steps down by 10–20% opacity at each tier.

```css
h1            { color: rgba(255, 255, 255, 1.0); }
h2            { color: rgba(255, 255, 255, 0.92); }
body          { color: rgba(255, 255, 255, 0.86); }
.muted, time  { color: rgba(255, 255, 255, 0.6); }
```

## A Final Note

Antimatter is a high-contrast theme, but high contrast is not the same as maximum contrast. The goal is enough difference to read comfortably for ten minutes — not the most aggressive contrast a screen can produce.
