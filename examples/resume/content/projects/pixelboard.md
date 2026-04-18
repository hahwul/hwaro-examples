+++
title = "PixelBoard"
description = "Real-time collaborative pixel art canvas with multiplayer support"
weight = 2
tags = ["frontend", "web", "creative"]
skills = ["TypeScript", "React", "WebSocket"]
template = "project"
year = 2023
status = "Live"
github_url = "https://github.com/janedoe/pixelboard"
tech_stack = "TypeScript, React, WebSocket"
+++

## Overview

PixelBoard is a real-time collaborative pixel art canvas where multiple users can draw simultaneously. Think r/place but as a standalone, self-hostable application.

## Key Features

- **Real-time sync** via WebSocket with conflict resolution
- **Zoom & pan** canvas with infinite scrolling
- **Color palette** with custom color picker
- **Undo/redo** with per-user history stack
- **Export** to PNG at any resolution

## Technical Highlights

The rendering layer uses an OffscreenCanvas for smooth 60fps performance even with thousands of pixels being updated simultaneously. The WebSocket server implements a custom CRDT-based state merge for conflict-free updates.

```typescript
const canvas = new PixelCanvas({
  width: 1000,
  height: 1000,
  pixelSize: 8,
  wsEndpoint: 'wss://pixelboard.app/ws',
});

canvas.on('pixel:place', ({ x, y, color }) => {
  console.log(`Pixel placed at (${x}, ${y}): ${color}`);
});
```

## Stats

- 2.4k GitHub stars
- Featured on Hacker News front page
- Used by 5 online communities
