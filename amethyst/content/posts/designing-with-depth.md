+++
title = "Designing with Depth"
date = "2026-04-01"
tags = ["css", "design"]
categories = ["tutorial"]
description = "How layered gradients and glow effects create visual depth in web design."
+++

Great visual design often comes down to one thing: **depth**. Flat designs have their place, but when you want to create something truly immersive, you need layers.

## The Three Layers of Depth

### 1. Background Layer

The foundation sets the mood. In this theme, we use a deep purple-to-black gradient that establishes the dark canvas:

```css
background: linear-gradient(135deg, #0a0015 0%, #1a0030 50%, #0d0020 100%);
```

### 2. Surface Layer

Cards and content areas sit above the background with subtle transparency and border glows:

```css
background: rgba(30, 10, 60, 0.6);
border: 1px solid rgba(168, 85, 247, 0.2);
backdrop-filter: blur(10px);
```

### 3. Accent Layer

Interactive elements pop with vivid colors and glow effects that draw the eye:

```css
text-shadow: 0 0 10px rgba(192, 132, 252, 0.8),
             0 0 30px rgba(168, 85, 247, 0.4);
```

## Putting It All Together

When these three layers work in harmony, the result feels three-dimensional — as if you're peering into a crystal formation. The key is restraint: not every element needs to glow, and not every surface needs a gradient.

The best glamorous designs know when to be quiet, letting the bold moments shine even brighter by contrast.
