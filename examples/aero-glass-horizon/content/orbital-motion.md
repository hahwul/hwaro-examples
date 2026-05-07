+++
title = "Orbital Motion"
description = "Slow drifting orbs that animate the negative space without distracting from the content."
date = "2024-04-03"
template = "page"
tags = ["animation", "design"]
+++

## Why Things Drift

Static glassmorphism reads as flat. Subtle background motion gives the blur something to refract — the page comes alive even when nothing is happening.

The trick is that the motion has to be slow enough to be ignored. If the user's eye keeps tracking the orbs, the motion is too fast or the orbs too sharp.

### Recipe

```css
.orb {
  position: fixed;
  width: 540px;
  height: 540px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.5;
  animation: drift 32s ease-in-out infinite;
}
```

Two orbs are usually plenty. Three is the upper limit before the page feels noisy. Keep their colors close in hue — variations within the same family read as atmosphere; clashing hues read as decoration.
