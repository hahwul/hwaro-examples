+++
title = "Patterns, Surfaces, and the Art of the Decorated Plane"
date = "2024-10-08"
description = "The flat surface is not a blank canvas to be respected — it is a field to be conquered. A guide to the patterns that made Memphis interiors look like the inside of a jukebox."
tags = ["pattern", "surface-design", "techniques"]
authors = ["The Editors"]
+++

Nathalie Du Pasquier was the pattern genius of the Memphis Group. While Sottsass handled the big sculptural statements, Du Pasquier was covering every available surface in squiggles, terrazzo flecks, polka dots, and zigzags rendered in colors that had absolutely no intention of getting along.

She understood something fundamental: **the decorated surface is not decoration. It is architecture.**

---

## The Memphis Pattern Vocabulary

Memphis used a limited but explosive vocabulary of pattern motifs. Learning to deploy them is like learning a dialect — once you know the words, you can say almost anything.

### The Polka Dot

The oldest of all patterns, radical in the Memphis application because of its *scale* and *color*. Memphis polka dots are not the gentle dots of a ladybug. They are:

- Large — often a quarter of the total pattern repeat
- Solid filled — no outlines, no shading, just a flat disc of pure color
- Offset on a contrasting field — pink dots on black, cyan dots on white, yellow dots on hot pink

> "Repeat is not boring. Repeat is a rhythm. And rhythm is how you make someone feel something." — Nathalie Du Pasquier (attributed)

### The Squiggle

The squiggle is the Memphis motif most immediately associated with the 1980s. It appears on everything from furniture laminate to wallpaper to — inevitably — corporate stationery by 1989.

In its pure Memphis form, the squiggle is:

- A loose, organic **S-curve** or wave
- Rendered in a single color against a contrasting field
- Repeated at irregular intervals so the pattern never quite tiles predictably

### Terrazzo and Confetti

Before terrazzo became the default material of every artisan coffee shop, it was a Memphis obsession. The terrazzo pattern — irregular shards of stone in a cement field — translates to graphic pattern as **confetti**: small, irregular, multi-colored shapes scattered across a white field.

The graphic terrazzo pattern is three things:
1. **Unpredictable** — no two areas look quite the same
2. **Inclusive** — it uses every color in the palette simultaneously
3. **Alive** — the eye keeps moving, finding new clusters and gaps

---

## Applying Patterns to the Digital Surface

The challenge of bringing Memphis patterns to the web is that the web is made of rectangles, and Memphis was made of chaos. Here is how to bridge the gap.

### Tiled SVG Backgrounds

The correct approach for solid-color patterns on the web is the tiled SVG data URI. This lets you create a precisely crafted repeating unit using solid fills — no raster compression artifacts, no gradient cheating, no external file requests.

A simple polka dot tile:

```css
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Ccircle cx='10' cy='10' r='4' fill='%23ff3b81'/%3E%3C/svg%3E");
background-size: 40px 40px;
```

For a squiggle pattern, define a `path` element with a smooth bezier curve. For terrazzo, scatter multiple small `rect` and `polygon` elements at varied rotations within the tile.

### The Border as Pattern

One underused technique: the border *itself* becomes pattern. A `3px solid #141414` border on a card creates an outline that reads as a deliberate graphic choice rather than an interface convention. Vary the `border-radius` asymmetrically — say `border-radius: 0 16px 0 16px` — and the shape itself becomes a pattern element.

---

## The Hierarchy of Surface Decisions

When approaching any Memphis-inflected layout, decide in this order:

- **What does the background do?** It should never be neutral. Even white needs *texture* — a dot pattern at low contrast, a faint squiggle at a warm tint.
- **What do the cards do?** They should interrupt the background with a hard edge and a hard shadow.
- **What do the headings do?** They should be large enough to read as shapes, not just words.
- **What do the accents do?** They should surprise — a rotated element, an unexpected color block, a stripe that goes the wrong direction.

---

The decorated plane is not a distraction from content. At its best, it *is* the content — a statement about what kind of place this is, what kind of thinking happens here, and whether beige was ever an option.

It was not. It never is.
