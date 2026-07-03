+++
title = "Aurora Bloom"
date = "2025-09-30"
description = "A three-layer pad that crossfades between two scales on a slow LFO, so the harmony slowly modulates without ever landing a key change."
tags = ["lfo", "harmony", "pads"]
[extra]
patch = "004"
+++

Most generative harmony patches pick a key and stay there. This one refuses to.
Two probability tables hold two different scales; a slow LFO crossfades the odds
between them over sixty-four bars. When the LFO is at one extreme you are firmly
in Lydian; at the other, in Aeolian; in between, the pad is quietly borrowing
from both, and the modulation never announces itself as a change.

<!-- more -->

## The patch

```lua
local clock = tempo(52)
local morph = lfo{ shape = "triangle", period = bars(64) }

local bright = prob{ ["F4"]=3, ["G4"]=2, ["B4"]=2, ["C5"]=3 }   -- F Lydian
local dark   = prob{ ["F4"]=3, ["Ab4"]=2, ["Bb4"]=2, ["C5"]=3 } -- F Aeolian

local pad = voice{ source = "wavetable", table = "glass", attack = 4.0, release = 8.0 }

every(bars(4), function()
  local m = morph:value()              -- 0.0 .. 1.0
  local note = (rng() < m) and bright() or dark()
  pad:swell(note)                      -- long attack, long release
end)
```

## The crossfade

`morph:value()` returns a number from 0 to 1. Comparing it against a random draw
means the *probability* of choosing the bright scale rises and falls with the
LFO — no hard switch, just a shifting bias. Around the midpoint the pad picks
freely from both scales, which is where the most interesting, unresolved chords
appear.

> The best chord in the whole patch is one neither table can make alone: a
> lingering overlap where an `Ab` from the dark table sounds under a `B` still
> ringing from the bright one.

## Listening log

- **Attack time.** At 1.0s the swells were too eager and the crossfade read as
  arpeggiation. Four seconds of attack blurs the individual notes into a single
  moving cloud.
- **LFO shape.** A sine spent too long at the extremes. The triangle gives even
  time to every mix ratio, so the ambiguous middle gets its fair share.
- **Two-hour run.** Never resolved, never repeated, never sat still. This is the
  patch I leave on while working.
