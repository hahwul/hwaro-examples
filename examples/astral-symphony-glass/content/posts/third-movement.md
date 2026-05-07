+++
title = "Third Movement: Texture and Restraint"
date = "2024-07-18"
description = "Why the most readable glass surfaces are the ones with the least decoration applied to them."
tags = ["design", "texture"]
+++

The third movement of Astral Symphony Glass is restraint. The first movement teaches you to layer translucency; the second teaches you to add light. The third teaches you to stop.

## What to Cut First

- **Drop shadows on glass.** A blurred panel already sits *above* the background. Adding a shadow underneath flattens that effect by making the elevation explicit.
- **Inner highlights stronger than 1px.** A 2px or 3px highlight on a glass edge stops reading as a refraction and starts reading as a chrome trim.
- **Decorative noise textures.** They never survive at small sizes and clog up the blur on large ones.

## What to Keep

A single thin highlight along the top edge — 1px, white at 8% opacity. That is the only ornament a glass panel actually needs. Everything else competes with the content.

```css
.glass {
  background: rgba(255, 255, 255, 0.04);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
}
```

The result reads as quieter, but the page becomes easier to scan. Glassmorphism done well is glassmorphism the user does not consciously notice.
