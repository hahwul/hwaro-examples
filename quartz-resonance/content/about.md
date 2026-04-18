+++
title = "About the Resonance"
description = "Information about the Quartz Resonance design and its implementation."
+++

Quartz Resonance represents a deliberate exploration into high-contrast, modern web aesthetics. It leverages the latest CSS features to create an immersive environment without relying on heavy JavaScript or WebGL.

## Technical Details

The background effect is achieved purely through CSS:
- A static `radial-gradient` provides the deep void base.
- Absolutely positioned `div` elements with `border-radius: 50%` and intense `filter: blur(80px)` act as the light sources.
- CSS `@keyframes` animations slowly translate and scale these elements to simulate drifting energy orbs.

### Typography

Typography is crucial to the Quartz Resonance aesthetic:

1. **Space Grotesk**: Used for headings and strong display text. Its geometric yet slightly quirky nature fits the futuristic vibe perfectly.
2. **Outfit**: Used for body copy. It is clean, legible, and pairs exceptionally well with Space Grotesk.

```css
:root {
  --font-sans: 'Outfit', sans-serif;
  --font-display: 'Space Grotesk', sans-serif;
}
```

The design ensures that text remains highly readable despite the complex background by housing all major content within frosted glass panels.
