+++
title = "Slow Weather"
date = "2026-03-18"
description = "A long-form ambient system where LFOs modulate the periods of other LFOs, so the whole piece has no stable tempo of change."
tags = ["lfo", "ambient", "generative"]
[extra]
patch = "006"
+++

The newest patch, and the one meant to run for days. Its idea is simple and a
little vertiginous: an LFO does not modulate a sound directly, it modulates the
*period* of another LFO, which modulates a third, which finally reaches the
voices. Nothing changes at a fixed rate, because the rate of change is itself
always changing. It is less a piece of music than a small climate.

<!-- more -->

## The patch

```lua
local clock = tempo(40)

-- a chain of LFOs, each bending the next one's period
local season = lfo{ shape = "sine", period = bars(512) }
local weather = lfo{
  shape  = "sine",
  period = season:range(bars(24), bars(160)),   -- period is itself modulated
}
local gust = lfo{
  shape  = "triangle",
  period = weather:range(bars(2), bars(20)),
}

local field = voice{ source = "additive", partials = 12, spread = gust:range(0, 0.6) }
local drone = voice{ source = "bowed", note = "A1", gain = weather:range(0.2, 0.7) }

field:hold(chord("Am add9"))
drone:hold()
```

## Nested modulation

The trick is that `season:range(...)` returns a *live value*, not a fixed number,
and it is handed to `weather` as its period. So `weather` speeds up and slows
down over the 512-bar season, and `gust` inherits that instability one layer
further down. The result has texture at every timescale from seconds to hours.

- `season` — the slowest hand, one cycle every 512 bars (~51 minutes here).
- `weather` — breathes between 24 and 160 bars depending on the season.
- `gust` — the fastest, from 2 to 20 bars, riding on the weather.

## Listening log

- **Cold start.** For the first few minutes it sounds static; you have to give a
  nested-LFO patch time before the deeper layers reveal themselves.
- **Partials.** Twelve additive partials was the ceiling before it turned harsh;
  eight sounded thin. Twelve, with the drone underneath, fills the room.
- **Three-day run.** Left it going over a long weekend. Came back to a chord I am
  fairly sure it had never played before. That is the whole point.
