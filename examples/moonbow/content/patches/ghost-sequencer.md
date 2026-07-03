+++
title = "Ghost Sequencer"
date = "2025-12-11"
description = "A sixteen-step sequencer where every step holds a probability of firing, so a fixed pattern plays itself differently on every pass."
tags = ["sequencer", "probability"]
[extra]
patch = "005"
+++

This is the patch the whole site borrows its look from. A sixteen-step
sequencer, but each step stores a *probability* rather than a plain on or off.
The pattern is fixed; the performance is not. Steps with high odds form the
skeleton you always hear; low-odds steps are ghosts that appear maybe one pass
in four, so the groove is recognisable yet never mechanically identical.

<!-- more -->

## The patch

```lua
local clock = tempo(110)

-- each step: { note, probability of firing }
local ghost = seq{
  steps = {
    { "C2", 1.0 }, { nil, 0.0 }, { "C2", 0.3 }, { nil, 0.0 },
    { "E2", 0.9 }, { nil, 0.0 }, { "C2", 0.25}, { "G2", 0.6 },
    { "C2", 1.0 }, { "C2", 0.4 }, { "E2", 0.8 }, { nil, 0.0 },
    { "G2", 0.7 }, { "C2", 0.2 }, { "E2", 0.5 }, { "D2", 0.35},
  },
}

local bass = voice{ source = "sub-square", glide = 0.02, decay = 0.5 }

ghost:on_step(function(note, chance)
  if note and rng() < chance then bass:play(note) end
end)
```

## The grid, exactly

Read the sequencer at the top of this entry the same way: each column is a step,
each lit square a firing — the same grid described in [the colophon](/about/).
The steps at probability 1.0 are the ones that anchor the bassline; everything
below about 0.5 is a ghost. Tuning the patch is really just moving those numbers
up and down until the groove has the right amount of doubt in it.

- Steps at **1.0** — the spine. Always present.
- Steps at **0.5 to 0.9** — the groove. Usually there.
- Steps at **0.2 to 0.4** — ghosts. Rare, and the reason it never bores.

## Listening log

- **All steps at 1.0**: a rigid sixteenth-note bassline, lifeless. Lowering the
  off-beats into ghost territory is the entire trick.
- **Glide.** A 20ms glide between notes smears the ghosts into the spine so they
  feel like performance slop rather than a separate voice.
- **Long run.** After an hour I tried to hum the pattern and could not — I knew
  the skeleton but never the ghosts. That gap is where the patch lives.
