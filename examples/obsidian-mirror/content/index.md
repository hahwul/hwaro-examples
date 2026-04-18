+++
title = "The Obsidian Mirror"
description = "Reflections from the deep earth. A study in dark glassmorphism."
+++

Welcome to the **Obsidian Mirror**. This space explores an aesthetic inspired by volcanic glass—sharp, reflective, deep, and unyielding.

## Characteristics of Obsidian

Obsidian is a naturally occurring volcanic glass formed as an extrusive igneous rock. It is produced when felsic lava extruded from a volcano cools rapidly with minimal crystal growth.

> "A mirror of black glass, reflecting only what is true, stripping away the illusions of the light."

### Core Visual Principles

1.  **Deep Blacks**: The foundation is a profound, near-absolute black (`#050505`).
2.  **Reflective Surfaces**: Glassmorphism techniques simulate the reflective quality of polished obsidian.
3.  **Sharp Edges**: No rounded corners (`border-radius: 0`). Volcanic glass fractures with incredibly sharp, distinct edges.
4.  **Magma Accents**: Subtle hints of intense, subdued red (`#e04a3d`) evoke the molten origins of the stone.

## Code Example

Here is how the deep shadows are constructed:

```css
:root {
  --shadow-deep: 0 10px 30px rgba(0, 0, 0, 0.8);
  --shadow-sharp: 2px 2px 0px rgba(0, 0, 0, 1);
}

.glass-panel {
  box-shadow: var(--shadow-deep);
}
```

Explore the reflections and fractures.