+++
title = "Presets"
description = "420 factory patches across pads, basses, leads, and generative textures, plus a browser built for sound design."
+++

Impulse ships with 420 factory presets, all built in-house by four sound designers who were told to break the engine before they polished it. The browser tags every patch by category, character, and how heavily it leans on the chaos core, so you can filter for "calm" when a session needs to sit still.

## Banks

The factory library is organized into six banks, each with a distinct brief.

<ul class="spec-grid">
<li><strong>Terra</strong>Warm, slow pads and drones. The attractor is dialed low, adding drift rather than motion.</li>
<li><strong>Voltage</strong>Basses and plucks with tight envelopes and self-oscillating filter stabs.</li>
<li><strong>Flux</strong>Generative textures where the chaos core is the lead instrument. Hold one note and listen.</li>
<li><strong>Signal</strong>Leads and arps for pop and film cues, cleaner and more playable.</li>
<li><strong>Static</strong>Percussion, noise beds, and glitch material built from the ring modulator.</li>
<li><strong>Proto</strong>Init patches and building blocks for your own designs.</li>
</ul>

<!-- more -->

## Designing your own

Every patch is a plain-text file. A minimal init patch is small enough to read at a glance, which makes it easy to keep a personal library under version control:

```toml
name = "Init Saw"
voices = 16
[osc.1]
shape = 0.75   # saw
drift = 0.12
[filter]
type = "lowpass"
cutoff = 0.6
resonance = 0.2
[matrix.1]
source = "attractor.x"
dest = "filter.cutoff"
depth = 0.35
```

The **Randomize** button does not scramble everything at once. It offers three strengths, and each respects locks, so you can freeze the oscillators you like and roll the dice only on modulation. Most of the Flux bank started life as a locked filter and a randomized matrix.

## Sharing

Patches export as a single file that carries its own attractor seed, so a texture you found by accident will sound identical on someone else's machine. Third-party expansion banks install by dropping a folder into the user library; Impulse indexes it on the next scan. Ready to commit? Check the [specs](/specs/) or head to [buy](/buy/).
