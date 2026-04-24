+++
title = "Forging Neon Light"
date = "2025-01-20"
tags = ["neon", "css", "animation"]
categories = ["posts"]
template = "page"
+++

Static neon is fine, but moving neon is better. We use simple keyframe animations combined with radial gradients to create floating orbs of light.

### The CSS Setup

```css
@keyframes float {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0, 0) scale(1); }
}
```

Applying this to a `fixed` background element ensures the light moves smoothly beneath all content panels, creating dynamic reflections as the user scrolls.