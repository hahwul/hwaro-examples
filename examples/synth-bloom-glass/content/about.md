+++
title = "About"
description = "About the Synth Bloom Glass design."
+++

The Synth Bloom Glass design was created to demonstrate the aesthetic possibilities of the Hwaro static site generator. By combining a few CSS properties—specifically `backdrop-filter`, `radial-gradient`, and keyframe animations—we can construct a deep, atmospheric UI.

### Design Elements

1. **The Void**: A background color of `#05020a` provides a nearly black canvas that lets the bright colors pop.
2. **The Blooms**: Three large, highly blurred `radial-gradient` circles that move independently using CSS keyframes, creating a dynamic backlight.
3. **The Glass**: Semi-transparent containers with a `blur(16px)` backdrop filter, subtle white borders, and an inner pseudo-element for an edge-highlight effect.

---

### Code Example

Here is a snippet showing how the bloom animation is achieved:

```css
.bloom {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  animation: float 20s infinite ease-in-out alternate;
}

@keyframes float {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(5%, 5%) scale(1.1); }
  100% { transform: translate(-5%, 10%) scale(0.9); }
}
```

This simple setup, when combined with Hwaro's fast rendering, yields a stunning result perfect for portfolios, landing pages, or digital experiments.
