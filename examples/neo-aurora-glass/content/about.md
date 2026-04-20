+++
title = "About Neo Aurora Glass"
description = "Learn more about the design and philosophy behind Neo Aurora Glass."
tags = ["about", "info", "design"]
categories = ["pages"]
+++

# The Philosophy of Light and Glass

The **Neo Aurora Glass** theme is born from a desire to combine the natural wonder of the aurora borealis with the sleek, synthetic aesthetics of futuristic UI design.

## Design Language

We use a deep void background (`#030508`) as a canvas. On top of this, we project large, blurred orbs of cyan, magenta, and purple that slowly orbit, creating an ambient glow.

The foreground elements are suspended in this space, encased in translucent "glass" panels utilizing `backdrop-filter: blur(16px)` to refract the light behind them.

### Code Example

Here's a glimpse of the CSS that powers the glass effect:

```css
.glass-panel {
  background: rgba(10, 14, 23, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}
```

This simple combination of properties is what gives the theme its signature look.
