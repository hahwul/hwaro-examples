+++
title = "CSS Optical Illusions"
date = "2026-02-10"
tags = ["css", "tutorial"]
categories = ["tech"]
description = "Creating convincing optical illusion patterns using only CSS gradients and animations."
+++

Modern CSS provides everything needed to recreate classic Op Art effects in the browser. No images, no JavaScript, no canvas — just gradients and keyframes.

## Checkerboard Pattern

The foundation of many optical illusions is the checkerboard. CSS `conic-gradient` makes this trivial:

```css
.checkerboard {
  background:
    repeating-conic-gradient(
      #000 0% 25%,
      #fff 0% 50%
    ) 50% / 40px 40px;
}
```

Scale the pattern down to 10-15px tiles and the eye begins to see movement where there is none.

## Concentric Rings

Radial repetition creates a tunnel or vortex effect:

```css
.rings {
  background:
    repeating-radial-gradient(
      circle,
      #000 0px,
      #000 8px,
      #fff 8px,
      #fff 16px
    );
}
```

Add a slow CSS rotation and the static rings appear to pulse inward.

## Moiré Stripes

Overlapping stripe patterns at slightly different angles produce moiré interference:

```css
.moire {
  background:
    repeating-linear-gradient(
      0deg, #000 0px, #000 2px,
      transparent 2px, transparent 4px
    ),
    repeating-linear-gradient(
      3deg, #000 0px, #000 2px,
      transparent 2px, transparent 4px
    );
}
```

The slight angular difference creates shifting wave patterns as the viewer moves or scrolls.

## Performance Considerations

CSS gradient patterns are rendered by the GPU and have minimal performance impact. However, animating large gradient surfaces can cause repaints. Use `will-change: transform` and animate `transform` rather than `background-position` for smooth results.

> Start with monochrome. Once the illusion works in black and white, color is a bonus, not a requirement.
