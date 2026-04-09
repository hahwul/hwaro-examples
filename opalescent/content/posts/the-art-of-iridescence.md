+++
title = "The Art of Iridescence"
date = "2026-03-25"
tags = ["design", "css"]
categories = ["tutorials"]
description = "How CSS gradients and animations create the illusion of light diffraction."
+++

Iridescence — the phenomenon where surfaces appear to change color as the angle of view changes — is one of nature's most captivating visual effects. From butterfly wings to soap bubbles, it never fails to mesmerize.

<!-- more -->

## Bringing Iridescence to the Web

Creating convincing iridescent effects with CSS requires layering multiple techniques:

### 1. Animated Gradients

The foundation of any iridescent effect is a moving gradient. By animating `background-position` on a gradient larger than its container, we create the illusion of shifting colors:

```css
.iridescent {
  background: linear-gradient(
    135deg,
    #ff6b9d, #c44dff, #6e8efb,
    #a8edea, #fed6e3, #ff6b9d
  );
  background-size: 300% 300%;
  animation: shimmer 8s ease infinite;
}
```

### 2. Glassmorphism Layers

Frosted glass effects add depth to the iridescent palette. Using `backdrop-filter: blur()` creates translucent surfaces that let the shifting colors show through:

```css
.glass-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}
```

### 3. Rainbow Borders

Conic gradients create seamless rainbow borders that complement the iridescent background:

```css
.rainbow-border {
  border-image: conic-gradient(
    from var(--angle),
    #ff6b9d, #c44dff, #6e8efb,
    #a8edea, #fed6e3, #ff6b9d
  ) 1;
}
```

## Performance Considerations

While these effects are visually stunning, they need to be applied thoughtfully. GPU-accelerated properties like `transform` and `opacity` are preferred over layout-triggering properties for animations.
