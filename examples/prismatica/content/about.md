+++
title = "About Prismatica"
description = "Information about this glowing theme."
date = "2024-05-01"
+++

Prismatica is designed to make your content pop out of the darkness. By relying on CSS `backdrop-filter` and carefully placed radial gradients, it provides an immersive, elegant, and highly unique viewing experience.

### Technical Details

The background glow is created using a fixed pseudo-element (or div) with multiple layered `radial-gradient` backgrounds. These gradients are animated using a simple CSS `@keyframes` scale animation, causing the "light" to pulse softly behind the content.

The cards use an RGBA background with very low opacity combined with a subtle white border, effectively creating the popular "glass" look.

```css
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

Enjoy building with Prismatica!