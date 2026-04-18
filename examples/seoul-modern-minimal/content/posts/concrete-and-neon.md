+++
title = "Concrete and Neon"
date = "2025-04-25"
description = "On the aesthetic tension between Seoul's raw concrete and its late-night electric glow, and how to translate that contrast into UI."
tags = ["seoul", "color", "design"]
template = "page"
+++

## Two Cities in One Street

If you walk from Euljiro to Seongsu at dusk, you pass through two cities. The daytime city is concrete: unpainted walls, exposed rebar, tungsten-gray metal shutters. The nighttime city is neon: signage, screens, and the peculiar cold blue of late subway platforms.

Seoul's contemporary design identity lives in the tension between those two registers. Clean industrial surfaces as the base layer. A single saturated color as the voice.

## Translating It to Screens

You don't need a neon sign to get the effect. You need:

1. **A cool base.** Not pure white — pure white reads as sterile. Something like `#FCFCFD` with a gray undertone.
2. **One saturated accent.** Blue works. Pink works. Green can work. Yellow is harder. The accent must be bright enough that any element wearing it immediately draws the eye.
3. **Restraint.** The accent applies to interactive states, a single brand mark, and one structural element (a rule, a marker). Nowhere else.

## An Example

```css
:root {
  --base: #FCFCFD;
  --text: #1C1F23;
  --mute: #6E747C;
  --accent: #1D6BFF;
}

a:hover { color: var(--accent); }
.mark  { background: var(--accent); }
```

That's the entire system. Everything else — cards, buttons, metadata, tags — is rendered in the base and text colors with light borders. The accent does not appear until something is active or interactive.

## Why It Works

The eye is wired to notice color change. When a page only has one place where color appears, that place becomes load-bearing. The user does not need to be trained where to look. They look because the design tells them to.
