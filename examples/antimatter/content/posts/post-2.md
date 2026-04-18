+++
title = "Matter and Antimatter Annihilation in CSS"
date = "2026-03-18"
description = "How collision-inspired animations and blend modes simulate particle annihilation on the web."
tags = ["css", "animation", "experimental"]
categories = ["technique"]
+++

When a particle meets its antiparticle, they annihilate each other and release energy proportional to their combined mass. This is one of the most dramatic events in physics. Can we capture even a fraction of that drama in a stylesheet?

## The Collision Border

The most visible expression of this concept in the Antimatter theme is the collision border animation. When you hover over a post entry, the border oscillates between two complementary colors -- red and blue, matter and antimatter -- creating a visual pulse that suggests contained energy.

```css
@keyframes collision-pulse {
  0%, 100% {
    border-color: #ff3333;
    box-shadow: 0 0 0 1px #ff3333;
  }
  50% {
    border-color: #3333ff;
    box-shadow: 0 0 0 1px #3333ff;
  }
}
```

The animation is deliberately simple. Real annihilation produces photons -- pure electromagnetic radiation. The oscillation between red and blue suggests the moment just before annihilation, when the two particles are close enough to interact but have not yet made contact.

## Blend Mode as Physics

The `mix-blend-mode: difference` property performs a mathematical operation on overlapping pixels. For each color channel, it subtracts the darker value from the lighter one. The result is that:

- White on black produces white (maximum difference)
- Black on white produces white (maximum difference)
- Any color on itself produces black (zero difference, annihilation)

This last case is the most interesting. When identical values meet, they cancel out completely. This is the CSS equivalent of matter-antimatter annihilation: two identical but opposite entities producing nothing.

## The Invert Filter

The `filter: invert(1)` property is the most direct tool for creating antimatter. It maps every pixel to its complementary value. Black becomes white. Red becomes cyan. Every assumption about the visual identity of an element is reversed.

In the Antimatter theme, images are displayed inverted by default and revert to their original state on hover. This creates a moment of recognition -- the viewer sees the negative first and must interact to discover the positive.

```css
img {
  filter: invert(1);
  transition: filter 0.5s;
}

img:hover {
  filter: invert(0);
}
```

## Energy Release

The energy released in real annihilation follows Einstein's equation: E = mc squared. In design, the "energy" of an interaction is measured in attention. The more surprising or dramatic a visual transition, the more cognitive energy the viewer expends processing it.

The Antimatter theme uses this sparingly. Not every element needs to annihilate. The collision borders, the inverted images, the blend-mode text -- these are concentrated points of energy in an otherwise calm, dark field. The contrast between stillness and activity is what makes each interaction meaningful.
