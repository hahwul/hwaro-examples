+++
title = "Tidal Bells"
date = "2025-06-21"
description = "Euclidean rhythms spread three bell voices across the bar, with a probability gate deciding which strikes actually sound."
tags = ["euclidean", "rhythm", "probability"]
[extra]
patch = "003"
+++

Euclidean rhythms distribute a number of hits as evenly as possible across a
number of steps — the maths behind a lot of world percussion. Here three bell
voices each get their own Euclidean pattern, deliberately coprime so they drift
in and out of phase over a long cycle. A probability gate then mutes some
strikes at random, so the interlocking pattern is implied more than stated.

<!-- more -->

## The patch

```lua
local clock = tempo(84)

-- euclid(hits, steps): the classic even distribution
local low  = seq{ pattern = euclid(3, 8),  note = "C3" }
local mid  = seq{ pattern = euclid(5, 12), note = "G3" }
local high = seq{ pattern = euclid(7, 16), note = "D4" }

local gate = prob{ [true] = 0.72, [false] = 0.28 }   -- 28% of strikes drop out

local bell = voice{ source = "fm-bell", ratio = 3.5, decay = 2.4 }

for _, line in ipairs({ low, mid, high }) do
  line:on_step(function(note)
    if gate() then bell:strike(note) end
  end)
end
```

## Why coprime lengths

Eight, twelve, and sixteen share factors, so those lines relock quickly. Using
8, 12, and 16 as *step counts* but with hit counts 3, 5, and 7 — all prime —
means the full pattern only truly repeats after their least common multiple.
Long enough that no listening session hears the loop.

- `euclid(3, 8)` -> `x . . x . . x .`
- `euclid(5, 12)` -> `x . x . x . x . x . . .`
- `euclid(7, 16)` -> `x . x . x . x . x . x . x . . .`

## Listening log

- **Gate at 1.0** (no dropouts): mechanical, too obviously a machine counting.
  The 0.28 dropout is what makes it sound played.
- **Decay.** Pushed the bell decay to 2.4s so tails overlap; the piece grew a
  harmony it was never told to make, just from ringing strikes stacking up.
- **Twenty-minute run.** The three lines pulled apart around minute four and did
  not realign for the rest of the session. Exactly the drift I wanted.
