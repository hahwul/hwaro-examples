+++
title = "Designing the Synthetic Aurora"
date = "2024-05-15"
description = "A deep dive into the color science behind our ambient backgrounds."
tags = ["design", "color-theory", "css"]
+++

Creating an ambient background that doesn't distract from the core content requires a delicate balance of blur, opacity, and slow-moving animations.

### The Palette

Our primary colors consist of three vivid neon shades against a deep void background (`#03010a`):

1. **Cyan** (`#00f0ff`): Represents clarity and technology.
2. **Magenta** (`#ff0055`): Brings energy and contrast.
3. **Deep Purple** (`#8a2be2`): Bridges the gap between the dark void and the vibrant neon.

### Implementation

We use heavy CSS filters to achieve this effect.

```css
.ambient-purple {
    background: radial-gradient(circle, var(--aurora-purple) 0%, transparent 50%);
    filter: blur(120px);
    opacity: 0.4;
    animation: drift-slow 25s infinite alternate ease-in-out;
}
```

The result is a dynamic, living canvas that breathes life into the rigid glass panels resting above it.
