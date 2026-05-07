+++
title = "Animating the Orbs"
description = "Soft, slow drift loops that give blurred glass surfaces something interesting to react to."
date = "2024-03-19"
template = "page"
tags = ["animation", "css", "design"]
+++

## The Backdrop Does the Work

Glass panels are only as interesting as what sits behind them. A static gradient gets boring within seconds; a slow drift of glowing orbs gives the blur something to refract and keeps the page feeling alive without distracting from the content.

### Keyframes

```css
@keyframes drift-1 {
  0%   { transform: translate(0, 0) scale(1); }
  50%  { transform: translate(40vw, 30vh) scale(1.15); }
  100% { transform: translate(0, 0) scale(1); }
}

.orb {
  position: fixed;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
  animation: drift-1 28s ease-in-out infinite;
}
```

### Tuning Parameters

- **Duration**: 20–40 seconds. Faster than 15s feels nervous; slower than 60s reads as broken.
- **Count**: Two or three orbs. Four already gets noisy through frosted glass.
- **Filter**: Heavy blur (60–100px) hides the circle shape so the eye sees a wash of light.

## Performance Note

`filter: blur()` plus `backdrop-filter: blur()` together is expensive. On low-end mobile, drop the orb count to one and reduce backdrop blur to 8px — most users won't notice the difference, but the frame rate will recover.
