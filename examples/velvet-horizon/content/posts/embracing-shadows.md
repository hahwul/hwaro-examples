+++
title = "Embracing the Shadows"
date = "2025-10-24"
description = "A short post about the use of shadows and dark themes in UI."
tags = ["design", "glassmorphism"]
+++

Dark themes are more than just inverted colors. When combined with carefully considered shadows and glows, a dark UI can create depth and focus that light themes sometimes struggle to achieve.

## The Glow

By allowing warm and cool radial gradients to bleed through translucent background panels, we give the interface a sense of life—a gentle breathing rhythm.

### Code Example

```css
.glass-panel {
  background: var(--glass-bg);
  backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border);
}
```

This simple combination of properties is what gives the "frosted glass" effect.
