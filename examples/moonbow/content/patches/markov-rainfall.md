+++
title = "Markov Rainfall"
date = "2025-04-09"
description = "A rhythm that never repeats but always sounds like rain, driven by a first-order Markov chain over four percussion states."
tags = ["markov", "rhythm", "probability"]
[extra]
patch = "002"
+++

Rain is the perfect generative reference: irregular, but with a clear grammar.
You never hear the same pattern twice, yet it is unmistakably rain and not, say,
applause. This patch chases that with a first-order Markov chain over four
percussion states — the next hit depends only on the last one — and a transition
table tuned until the output stopped sounding like a drum machine.

<!-- more -->

## The patch

```lua
local clock = tempo(96)

-- states: tick (high), tap (mid), thud (low), rest
local rain = markov{
  start = "tap",
  table = {
    tick = { tap = 0.5, tick = 0.2, rest = 0.3 },
    tap  = { tick = 0.4, thud = 0.2, rest = 0.4 },
    thud = { rest = 0.7, tap = 0.3 },              -- a low hit clears the air
    rest = { tap = 0.5, tick = 0.3, rest = 0.2 },
  },
}

local kit = voice{ source = "noise-perc", decay = 0.12 }

every(bars(1) / 8, function()          -- an eighth-note grid
  local s = rain:next()
  if s ~= "rest" then kit:hit(s) end
end)
```

## Reading the table

Each row must sum to 1.0 — those are the odds of what follows a given hit. The
important cell is `thud -> rest = 0.7`: a low strike almost always leaves a gap
after it, which is what keeps the texture from clotting into a beat.

| From \ To | tick | tap | thud | rest |
|-----------|-----:|----:|-----:|-----:|
| tick      | 0.2  | 0.5 | 0.0  | 0.3  |
| tap       | 0.4  | 0.0 | 0.2  | 0.4  |
| thud      | 0.0  | 0.3 | 0.0  | 0.7  |
| rest      | 0.3  | 0.5 | 0.0  | 0.2  |

## Listening log

- **First pass.** With `thud -> rest` at only 0.3 it sounded like a broken
  breakbeat — too many low hits stacking up. Raising it to 0.7 was the whole fix.
- **Density.** Halving the grid to sixteenth notes turned drizzle into a
  downpour without touching the table. Tempo and grid do the weather; the table
  does the grammar.
- **Long run.** Forty minutes in, I still could not predict the next hit but
  never once thought "that is wrong." That is the bar I want every rhythm patch
  to clear.
