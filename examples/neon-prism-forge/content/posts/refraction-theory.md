+++
title = "The Refraction Theory"
date = "2025-01-24"
tags = ["design", "theory", "glassmorphism"]
categories = ["posts"]
template = "page"
+++

When light passes through a prism, it separates into its constituent colors. In the digital realm, we simulate this using calculated `blur` and `opacity`.

### Creating the Illusion

By layering a semi-transparent dark background (`rgba(20, 20, 30, 0.4)`) over a brightly animated gradient and applying a backdrop filter, we achieve a look that feels both futuristic and tactile.

```css
.glass-panel {
  background: rgba(20, 20, 30, 0.4);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

The subtle border acts as the edge of the glass, catching the simulated ambient light.