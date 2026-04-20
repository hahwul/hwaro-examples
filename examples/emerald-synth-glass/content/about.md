+++
title = "About the Core"
description = "Information about the Emerald Synth Glass theme and its origins."
date = "2023-11-01"
template = "page"
+++

The **Emerald Synth Glass** theme is a manifestation of deep-sea bioluminescence meeting futuristic cyberpunk aesthetics. It leverages the power of `backdrop-filter` and advanced CSS gradients to create a sense of depth and energy.

## Architecture

This theme is built specifically for [Hwaro](https://hwaro.hahwul.com/), a lightning-fast static site generator.

### Core Features

* **Glassmorphism Panels:** Translucent containers that blur the vibrant background elements.
* **Ambient Animation:** Slow-pulsing background orbs that bring the void to life.
* **Typographic Excellence:** Utilizing **Space Grotesk** for impactful headings and **Inter** for highly readable body text.
* **Semantic HTML:** Clean and structured markup for better accessibility and SEO.

> "The void is not empty; it is filled with potential and emerald light."

### Usage

To use this theme, simply structure your templates according to the standard Hwaro specifications. Ensure your `config.toml` includes the necessary pagination and search configurations if those features are desired.

```css
/* Example of the core glass effect */
.glass-panel {
    background: rgba(3, 20, 26, 0.45);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(0, 242, 254, 0.15);
    border-radius: 16px;
}
```

Dive deeper into the void and explore the glowing possibilities.
