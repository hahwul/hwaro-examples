+++
title = "Drift Choir"
date = "2025-02-14"
description = "A granular choir whose filter is opened by an LFO that takes forty-eight bars to breathe once, with note choice left to a weighted table."
tags = ["lfo", "granular", "probability"]
[extra]
patch = "001"
+++

The first patch that felt like it was breathing on its own. A granular voice
holds a single sampled vowel; a very slow LFO opens and closes its filter over
forty-eight bars, so one full inhale-exhale takes almost three minutes at this
tempo. The pitches are not sequenced — a probability table picks them, weighted
toward the tonic so the choir keeps finding its way home. The same weighted table shows up later, wired
into a step grid, in [Ghost Sequencer](/patches/ghost-sequencer/).

<!-- more -->

## The patch

```lua
local clock = tempo(60)
local breath = lfo{ shape = "sine", period = bars(48) }   -- one cycle ~= 2m52s

local choir = voice{
  source  = "granular",
  sample  = "vowel-ah",
  grain   = 90,                        -- ms per grain
  spread  = 0.4,                       -- stereo scatter
  cutoff  = breath:range(320, 2400),   -- the LFO is the only hand on the filter
  gain    = breath:range(0.5, 0.9),
}

local pick = prob{
  ["D3"] = 5, ["F3"] = 3, ["A3"] = 3,  -- the D-minor spine, weighted home
  ["C4"] = 2, ["E4"] = 1, ["G4"] = 1,  -- colour tones, rarer
}

every(bars(2), function()
  choir:play(pick())                   -- a new grain-cloud note every two bars
end)
```

## Setting the odds

The whole character lives in the weights. A flat table wanders; this one keeps
returning to D and its fifth, so the ear reads a key even though nothing is
written down.

| Note | Weight | Share |
|------|-------:|------:|
| D3   | 5      | 33%   |
| F3   | 3      | 20%   |
| A3   | 3      | 20%   |
| C4   | 2      | 13%   |
| E4   | 1      | 7%    |
| G4   | 1      | 7%    |

## Listening log

- **Run 1 (overnight).** Left it for six hours. The forty-eight-bar breath is
  slow enough that you stop hearing it as motion and start hearing it as
  weather. Good.
- **Run 2.** Dropped the grain size to 60ms and it turned brittle and
  consonantal — too much *t* in the *ah*. Reverted.
- **Run 3.** Doubled the tonic weight to 10 and the piece lost its horizon; it
  just sat on D. Five is the right pull. Kept the table above.
