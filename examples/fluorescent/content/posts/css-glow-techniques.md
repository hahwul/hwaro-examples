+++
title = "CSS Glow Techniques"
date = "2026-03-01"
tags = ["css", "tutorial"]
categories = ["dev"]
description = "A practical guide to creating convincing glow effects with pure CSS."
template = "post"
+++

Glow effects are the heart of any fluorescent design. Here's how to create convincing, performant glows using nothing but CSS.

## Text Glow

The secret is stacking multiple `text-shadow` values at increasing blur radii:

```css
h1 {
  color: #ff6ec7;
  text-shadow:
    0 0 7px #ff6ec7,
    0 0 10px #ff6ec7,
    0 0 21px #ff6ec7,
    0 0 42px #ff1493,
    0 0 82px #ff1493;
}
```

Each layer adds depth. The inner layers (small blur) create definition, while the outer layers (large blur) create the ambient glow.

## Box Glow

For containers and cards, use `box-shadow`:

```css
.card:hover {
  box-shadow:
    0 0 5px #39ff14,
    0 0 15px #39ff1488,
    0 0 30px #39ff1444;
  transition: box-shadow 0.3s ease;
}
```

## Border Glow

Combine a solid border with matching box-shadow:

```css
.element {
  border: 2px solid #00f5ff;
  box-shadow:
    inset 0 0 10px #00f5ff44,
    0 0 10px #00f5ff44;
}
```

## Performance Tips

- Avoid animating `box-shadow` directly — use `opacity` on a pseudo-element instead
- Limit glow to interactive states (hover, focus) for better performance
- Use `will-change: transform` sparingly on animated elements
