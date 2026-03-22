+++
title = "Elevation and Shadow in UI Design"
date = "2026-03-20"
description = "Understanding how elevation creates visual hierarchy through shadow, and how Origami implements Material Design's depth system."
tags = ["design", "material", "css"]
categories = ["design"]
+++

In Material Design, surfaces exist at different elevations. Higher surfaces cast larger shadows, and this shadow language communicates structure without words.

## The Elevation Scale

Origami uses four elevation levels:

- **Level 1** -- Resting cards, list items. A subtle shadow that lifts the surface just above the canvas.
- **Level 2** -- Active cards, the app bar. Clearly floating above the background.
- **Level 3** -- Hovered cards. The surface rises to meet the user's cursor.
- **Level 4** -- Focused elements. Maximum depth for the most prominent surfaces.

Each level is defined with two shadow layers: a key light (from above) and ambient light (all around). This dual-shadow approach mimics real-world lighting.

## Shadows in CSS

The shadow values are defined as CSS custom properties:

```css
--elevation-1: 0 1px 3px rgba(0,0,0,0.12),
               0 1px 2px rgba(0,0,0,0.14);
--elevation-2: 0 3px 6px rgba(0,0,0,0.12),
               0 2px 4px rgba(0,0,0,0.10);
```

The first value in each pair is the key shadow (sharp, directional). The second is the ambient shadow (soft, diffused). Together, they create convincing depth.

## Transition and Motion

When a card's elevation changes -- on hover, for example -- the shadow transition uses Material Design's standard easing curve:

```css
transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
```

This curve starts fast and decelerates, matching the physics of a surface moving through space. The effect is quick enough to feel responsive but smooth enough to register as deliberate.

## The Fold Corner

Origami adds one detail that isn't in standard Material Design: the folded corner. It's a CSS-only effect using `::before` and `::after` pseudo-elements that creates the illusion of a page corner turning up.

On hover, the fold grows slightly larger, as if the reader is about to peel the card open. It's a small touch, but it bridges the gap between digital Material Design and the physical art of paper folding.

> Good design is as little design as possible. -- Dieter Rams

The fold corner earns its place because it reinforces the theme without adding complexity to the reading experience.
