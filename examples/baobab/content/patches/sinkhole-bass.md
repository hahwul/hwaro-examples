+++
title = "Sinkhole Bass"
date = "2025-11-03"
description = "A sequenced sub-heavy bassline with a filter envelope tuned hard enough to feel like the floor dropping out on the downbeat of every second bar."
tags = ["bass", "sequence"]
toc = true
[extra]
family = "Basslines"
+++

Named for the moment the ground simply is not there anymore, `Sinkhole Bass` pairs `TERRACE`'s eight steps with a single `STRATA` envelope fanned into both the filter and the amplifier, so every note starts closed and punches open in the space of a few milliseconds. It is the busiest patch in the encyclopedia to build and the fastest to get old on.

<!-- more -->

<figure class="sf-figure">
  <svg class="sf-diagram" viewBox="0 0 800 258" role="img" aria-label="Signal flow diagram" focusable="false">
    <path class="sf-cable sf-cable-audio" d="M156,52 C173,38 173,66 190,52"/>
    <path class="sf-cable sf-cable-audio" d="M306,52 C323,38 323,66 340,52"/>
    <path class="sf-cable sf-cable-audio" d="M456,52 C473,38 473,66 490,52"/>
    <path class="sf-cable sf-cable-audio" d="M606,52 C623,38 623,66 640,52"/>
    <path class="sf-cable sf-cable-mod sf-cable-thin" d="M98,78 C98,133 398,133 398,188"/>
    <path class="sf-cable sf-cable-mod" d="M398,188 C398,133 398,133 398,78"/>
    <path class="sf-cable sf-cable-mod" d="M398,188 C398,133 548,133 548,78"/>
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
      <text class="sf-sub" x="248" y="65" text-anchor="middle">VCO + sub</text>
      <circle class="sf-jack" cx="190" cy="52" r="3.5"/>
      <circle class="sf-jack" cx="306" cy="52" r="3.5"/>
      <circle class="sf-jack sf-jack-cv" cx="248" cy="78" r="3"/>
    </g>
    <g class="sf-node sf-node-audio">
      <rect class="sf-block" x="340" y="26" width="116" height="52" rx="7"/>
      <text class="sf-label" x="398" y="50" text-anchor="middle">SINK</text>
      <text class="sf-sub" x="398" y="65" text-anchor="middle">hi-res lowpass</text>
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
      <text class="sf-label sf-label-mod" x="398" y="209" text-anchor="middle">STRATA</text>
      <text class="sf-sub" x="398" y="224" text-anchor="middle">env</text>
      <circle class="sf-jack sf-jack-mod" cx="398" cy="188" r="3"/>
    </g>
  </svg>
  <figcaption>TERRACE's gate output triggers STRATA directly; STRATA fans out to both SINK's cutoff and GATE, so the punch and the pitch move together.</figcaption>
</figure>

## Sources

`SPRING` and `BASIN` mix before the filter, giving the low end both an oscillator with harmonic content and a clean sub underneath it — `SINK`'s high resonance setting means the harmonic content matters, since it gets pushed hard enough to color the tone on every accented step.

```text
TERRACE  pitch out  >  SPRING osc A v/oct
TERRACE  pitch out  >  BASIN sub v/oct
SPRING   osc A       square    root
BASIN    sub          square    root, -1 octave
```

## Modulation

A single `STRATA` envelope, triggered directly by `TERRACE`'s gate output, is patched into both `SINK`'s cutoff and `GATE`'s level. The short decay on the filter side is what produces the characteristic downward pitch-feeling pluck on every note — the pitch itself never moves, only the harmonic content closing rapidly after the attack.

```text
TERRACE  gate out  >  STRATA A trigger
STRATA A  env out   >  SINK cutoff CV   depth 85%
STRATA A  env out   >  GATE CV          depth 100%
```

## Settings

```ini
[TERRACE]
steps = 8
gate_length = 55%
tempo_source = internal, 122 bpm

[SPRING]
waveform = square

[BASIN]
octave = -1

[SINK]
mode = lowpass
cutoff = 22
resonance = 82

[STRATA]
a_attack = 0.5ms
a_decay = 95ms
a_sustain = 0%

[GATE]
response = exponential
```
