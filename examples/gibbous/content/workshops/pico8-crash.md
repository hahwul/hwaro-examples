+++
title = "PICO-8: the whole game on one screen"
date = "2026-05-26"
description = "A fantasy console with hard limits, a built-in editor, and a cartridge you can share in one file."
[extra]
engine = "PICO-8"
+++

PICO-8 is a fantasy console: a fake little computer with a sixteen-colour palette, a 128-by-128 screen, and a token budget that stops you overbuilding. Everything lives in one cartridge file, editor and all, which makes it the most jam-friendly tool we know. If you want to ship something complete, this is the session.

<!-- more -->

## Why the limits help

You cannot get lost in a PICO-8 project the way you can in a big engine, because there is nowhere to get lost. Sprites, map, sound, and code share one window. The token limit (8192 of them) quietly forces scope down to something you can actually finish in a weekend.

## The core loop

Every PICO-8 cart is three functions. We type them in the first ten minutes and spend the rest making them interesting:

```lua
function _init()
  x = 64
end

function _update()
  if btn(0) then x -= 2 end
  if btn(1) then x += 2 end
end

function _draw()
  cls(1)
  circfill(x, 64, 4, 12)
end
```

`_init` sets up, `_update` runs sixty times a second, `_draw` paints. That is the entire model, and it never gets more complicated than that.

## What we build

A one-screen dodging game: a dot you steer, hazards that fall, a score that ticks up, and a sound when you lose. We draw the sprites together in the built-in editor and wire up a title screen so it feels like a real, tiny game.

## Bring

A PICO-8 licence and the app installed. It is a paid tool, but there is an education licence and a web version for the workshop if you would rather try before you buy. No coding experience assumed; Lua is small and we go one line at a time.
