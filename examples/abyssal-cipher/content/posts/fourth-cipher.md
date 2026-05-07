+++
title = "The Fourth Cipher"
date = "2024-05-22"
summary = "Whitespace as a design element, not the absence of one."
+++

The fourth cipher is whitespace. Not the lack of design — its load-bearing column.

## Negative Space Is Information

A page with generous margins reads as confident. A page packed edge to edge reads as anxious, regardless of how good the typography is. Designers reach for whitespace less than they should because it feels like *not designing*, when in fact it is the most expensive and considered move on the page.

### Practical Rules

- Match line-height to font size: serif body text wants `1.5` to `1.65`; geometric sans wants `1.4`.
- Section gaps should be at least twice the paragraph gap. The reader needs a clear cue when one idea ends and another begins.
- Don't fight the gutters. If your grid was set up at 24px, all spacing should resolve to multiples of 24 — 24, 48, 72, 96.

```css
.section { padding-block: 6rem; }
.paragraph + .paragraph { margin-top: 1.5rem; }
```

A well-spaced page reads more slowly. That is the point.
