+++
title = "Doline Sequence"
date = "2025-05-14"
description = "An eight-step arpeggio that never quite lands where you expect, built around TERRACE driving SPRING through a filter that breathes on its own schedule."
tags = ["sequence", "melodic"]
toc = true
[extra]
family = "Sequences"
+++

A doline is a sinkhole that forms gradually, one small collapse at a time, until the ground gives way somewhere new. This patch works the same way: an eight-step sequence that sounds locked-in for a bar or two before `SINK`'s independent cutoff drift pulls a note under the filter's ceiling and the whole line seems to sink into itself.

<!-- more -->

<figure class="sf-figure">
  <svg class="sf-diagram" viewBox="0 0 800 258" role="img" aria-label="Signal flow diagram" focusable="false">
    <path class="sf-cable sf-cable-audio" d="M156,52 C173,38 173,66 190,52"/>
    <path class="sf-cable sf-cable-audio" d="M306,52 C323,38 323,66 340,52"/>
    <path class="sf-cable sf-cable-audio" d="M456,52 C473,38 473,66 490,52"/>
    <path class="sf-cable sf-cable-audio" d="M606,52 C623,38 623,66 640,52"/>
    <path class="sf-cable sf-cable-mod" d="M398,188 C398,133 398,133 398,78"/>
    <path class="sf-cable sf-cable-mod" d="M548,188 C548,133 548,133 548,78"/>
    <path class="sf-cable sf-cable-mod sf-cable-thin" d="M98,78 C98,133 548,133 548,188"/>
    <g class="sf-node sf-node-audio">
      <rect class="sf-block" x="40" y="26" width="116" height="52" rx="7"/>
      <text class="sf-label" x="98" y="50" text-anchor="middle">TERRACE</text>
      <text class="sf-sub" x="98" y="65" text-anchor="middle">8-step seq</text>
      <circle class="sf-jack" cx="40" cy="52" r="3.5"/>
      <circle class="sf-jack" cx="156" cy="52" r="3.5"/>
      <circle class="sf-jack sf-jack-cv" cx="98" cy="78" r="3"/>
    </g>
    <g class="sf-node sf-node-audio">
      <rect class="sf-block" x="190" y="26" width="116" height="52" rx="7"/>
      <text class="sf-label" x="248" y="50" text-anchor="middle">SPRING</text>
      <text class="sf-sub" x="248" y="65" text-anchor="middle">dual VCO</text>
      <circle class="sf-jack" cx="190" cy="52" r="3.5"/>
      <circle class="sf-jack" cx="306" cy="52" r="3.5"/>
      <circle class="sf-jack sf-jack-cv" cx="248" cy="78" r="3"/>
    </g>
    <g class="sf-node sf-node-audio">
      <rect class="sf-block" x="340" y="26" width="116" height="52" rx="7"/>
      <text class="sf-label" x="398" y="50" text-anchor="middle">SINK</text>
      <text class="sf-sub" x="398" y="65" text-anchor="middle">filter</text>
      <circle class="sf-jack" cx="340" cy="52" r="3.5"/>
      <circle class="sf-jack" cx="456" cy="52" r="3.5"/>
      <circle class="sf-jack sf-jack-cv" cx="398" cy="78" r="3"/>
    </g>
    <g class="sf-node sf-node-audio">
      <rect class="sf-block" x="490" y="26" width="116" height="52" rx="7"/>
      <text class="sf-label" x="548" y="50" text-anchor="middle">GATE</text>
      <text class="sf-sub" x="548" y="65" text-anchor="middle">VCA</text>
      <circle class="sf-jack" cx="490" cy="52" r="3.5"/>
      <circle class="sf-jack" cx="606" cy="52" r="3.5"/>
      <circle class="sf-jack sf-jack-cv" cx="548" cy="78" r="3"/>
    </g>
    <g class="sf-node sf-node-audio">
      <rect class="sf-block" x="640" y="26" width="116" height="52" rx="7"/>
      <text class="sf-label" x="698" y="50" text-anchor="middle">VENT</text>
      <text class="sf-sub" x="698" y="65" text-anchor="middle">mix out</text>
      <circle class="sf-jack" cx="640" cy="52" r="3.5"/>
      <circle class="sf-jack" cx="756" cy="52" r="3.5"/>
      <circle class="sf-jack sf-jack-cv" cx="698" cy="78" r="3"/>
    </g>
    <g class="sf-node sf-node-mod">
      <rect class="sf-block sf-block-mod" x="348" y="188" width="100" height="46" rx="7"/>
      <text class="sf-label sf-label-mod" x="398" y="209" text-anchor="middle">TIDE</text>
      <text class="sf-sub" x="398" y="224" text-anchor="middle">LFO</text>
      <circle class="sf-jack sf-jack-mod" cx="398" cy="188" r="3"/>
    </g>
    <g class="sf-node sf-node-mod">
      <rect class="sf-block sf-block-mod" x="498" y="188" width="100" height="46" rx="7"/>
      <text class="sf-label sf-label-mod" x="548" y="209" text-anchor="middle">STRATA</text>
      <text class="sf-sub" x="548" y="224" text-anchor="middle">env</text>
      <circle class="sf-jack sf-jack-mod" cx="548" cy="188" r="3"/>
    </g>
  </svg>
  <figcaption>TERRACE drives SPRING's pitch directly and triggers STRATA, which shapes GATE. TIDE runs free against SINK's cutoff, unrelated to the clock.</figcaption>
</figure>

## Sources

`SPRING` supplies the audible voice, patched directly from `TERRACE`'s pitch output so each of the eight steps plays a distinct note rather than a fixed interval pattern. Keep the second oscillator close to unison — this patch is about rhythm and filter movement, not a wide stereo spread.

```text
TERRACE  pitch out  >  SPRING osc A v/oct
TERRACE  pitch out  >  SPRING osc B v/oct   (offset +7 cents)
SPRING   osc A       triangle    root
SPRING   osc B       triangle    +7 cents, tracks A
```

## Modulation

The trick is that `TIDE`'s cycle length (11 seconds) shares no common factor with `TERRACE`'s eight steps, so the filter sweep and the note pattern drift in and out of phase across a run instead of repeating together. `STRATA` stays locked to the clock and gives every step a short percussive pluck.

```text
TERRACE  gate out  >  STRATA A trigger        (per-step pluck)
STRATA A env out   >  GATE CV                 depth 100%
TIDE A   LFO out    >  SINK cutoff CV          depth 42%,  rate 0.09 Hz
```

## Settings

```ini
[TERRACE]
steps = 8
gate_length = 35%
glide = 0
tempo_source = internal, 128 bpm

[SPRING]
waveform = triangle
detune = 7 cents

[SINK]
mode = lowpass
cutoff = 46
resonance = 58

[STRATA]
a_attack = 2ms
a_decay = 140ms

[TIDE]
a_rate = 0.09 Hz
a_shape = triangle

[GATE]
response = exponential
```
