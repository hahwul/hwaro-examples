+++
title = "About Moonbow"
description = "The tools, the vocabulary, and the one rule behind a generative music practice."
tags = ["about", "practice"]
+++

Moonbow is the notebook for a solo generative music practice. I do not
compose finished pieces so much as build machines that compose, set their
odds, and let them run. Every entry in [the patches](/patches/) is a
**patch** — a small system described in enough detail that you could rebuild
it — paired with a **listening log** of what actually happened when it ran
overnight.

<!-- more -->

## The runtime

Everything is written for a tiny fictional scripting layer called `moonbow`,
a thin wrapper over a modular synth. It gives me four primitives and gets out
of the way:

- `lfo{...}` — a low-frequency oscillator, usually measured in *bars* rather
  than hertz. A period of forty-eight bars is normal here.
- `prob{...}` — a weighted probability table. Give it choices and weights and
  it returns one each time it is asked.
- `seq{...}` — a step sequencer, the same grid that heads every entry on this
  site. Each step can hold a note, a rest, or a probability table.
- `voice{...}` — a sound source with parameters that the LFOs and tables can
  reach into and modulate.

```lua
-- the shape of every patch
local clock = tempo(72)                 -- beats per minute
local tide  = lfo{ shape = "sine", period = bars(32) }

voice{
  source = "granular",
  pitch  = scale("dorian", root = "D2"),
  cutoff = tide:range(400, 2600),       -- the LFO opens the filter
}
```

## The one rule

**The system decides; I only decide the odds.** Once a patch is running I do
not reach in and play it. If the result is wrong, I change a weight or an LFO
period and let it run again. The listening logs are honest about the runs that
went nowhere — most of them do, and the failures are where the good weights
come from.

## Colophon

The grid at the top of each entry is a real step sequencer, seeded from the
patch's slug: each letter lights a four-step column, and the hyphens between
words fall silent as rests. Two patches never draw the same pattern. The site
is set in Sora, Inter, and Fira Code, and built with Hwaro.
