+++
title = "Neon Gradient Techniques"
date = "2026-04-06"
tags = ["css", "techniques"]
categories = ["tutorial"]
description = "Mastering CSS gradients for electric, eye-catching web designs."
template = "post"
+++

Gradients are the backbone of any neon aesthetic. When done right, they create depth, motion, and that unmistakable electric energy.

## Linear vs Radial

For neon designs, both gradient types serve different purposes:

**Linear gradients** work best for:
- Navigation bars and headers
- Divider lines and borders
- Text underlines and highlights

**Radial gradients** excel at:
- Spotlight and glow effects
- Button hover states
- Background bloom effects

## The Electric Bloom Gradient Stack

Here's the approach used throughout this theme:

```css
/* Base glow layer */
background: radial-gradient(
  ellipse at center,
  rgba(255, 0, 128, 0.15) 0%,
  transparent 70%
);

/* Accent bloom */
background: radial-gradient(
  circle at 30% 50%,
  rgba(0, 255, 200, 0.1) 0%,
  transparent 50%
);
```

## Animating Gradients

Static gradients are beautiful. Animated gradients are mesmerizing. The key is subtlety — a slow, smooth shift that feels organic rather than mechanical.

The `@keyframes` approach with `background-position` creates smooth infinite loops without janky repaints.

## Layering for Depth

The secret to rich neon visuals is layering multiple semi-transparent gradients. Each layer adds depth:

1. **Base darkness** — the solid dark background
2. **Ambient glow** — a subtle radial gradient adding atmosphere
3. **Accent bloom** — positioned spots of color
4. **Interactive glow** — hover and focus state enhancements

Stack these layers and you get the Electric Bloom look — bold, deep, and alive with color.
