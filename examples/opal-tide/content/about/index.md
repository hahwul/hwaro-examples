+++
title = "About Opal Tide"
description = "Discover the design philosophy behind Opal Tide."
+++

# The Philosophy of Opal Tide

**Opal Tide** is designed to feel ethereal and modern. By blending deep dark backgrounds with vibrant, soft glows, it creates a sense of depth and mystery.

## The Glass Effect

The core of this aesthetic is the `backdrop-filter: blur()` CSS property. This allows the background animations to subtlely bleed through the content areas, creating a frosted glass effect that is both beautiful and functional.

### Code Example

Here is a quick look at how the glass panels are styled:

```css
.glass-panel {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}
```

Enjoy building with Hwaro!