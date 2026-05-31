+++
title = "Why the console is phosphor green"
date = 2025-11-04
tags = ["design", "crt", "color"]
description = "The single-color console is not nostalgia. Monochrome phosphor is a legible, low-fatigue way to watch numbers for hours."
+++

People assume the green screen is a costume. It is not. A monochrome console is the most honest dashboard you can build, because color only ever means one of three things: running, caution, stopped.

## One hue, three states

When the whole interface is green, the eye treats every amber or red glyph as an alarm. There is no decorative color competing for attention, so a single `[FAIL]` tag is impossible to miss.

## The numbers that matter

- **Contrast**: dim green text on near-black holds a high contrast ratio without the glare of white-on-black.
- **Fatigue**: a narrow band of wavelengths is easy to stare at across a long shift.
- **Focus**: monochrome forces hierarchy through size and brackets, not paint.

> A dashboard that needs five colors to explain itself has already failed at hierarchy.

## What we deliberately avoided

```css
/* no smooth fades anywhere on the console — solid fills only */
.panel {
  background: var(--bg);
  border: 1px solid var(--phosphor-dim);
  box-shadow: 0 0 4px rgba(74, 246, 38, 0.35);
}
```

Every panel is a flat rectangle drawn with a 1px border. The only "depth" is a faint phosphor glow and a tiled scanline texture. The result reads like a real terminal, not a screenshot of one.
