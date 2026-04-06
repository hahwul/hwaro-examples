+++
title = "The Physics of Light in CSS"
date = "2025-01-28"
tags = ["css", "design", "physics"]
+++

Simulating physical light phenomena in a 2D browser environment is a challenge. By layering box shadows and manipulating text shadows, we can approximate the look of chromatic aberration and refraction.

<!-- more -->

### The Chromatic Effect

By using standard offset coordinates for text shadow, we separate the colors.

```css
.site-title {
    text-shadow: 
        3px 0 0 var(--prism-red),
        -3px 0 0 var(--prism-cyan);
    mix-blend-mode: screen;
}
```

This creates an illusion that the white text is being split at its edges into component wavelengths. We use a dark background so `mix-blend-mode: screen` works nicely.

### Glassmorphism

To complete the prism effect, the cards need to look like physical objects that light passes through.

```css
.prism-card {
    background: rgba(25, 25, 30, 0.4);
    backdrop-filter: blur(20px) saturate(150%);
}
```

When floating abstract light shapes pass underneath these cards, they become blurred and vibrant, acting as the light source that the prism then refracts at its edges.