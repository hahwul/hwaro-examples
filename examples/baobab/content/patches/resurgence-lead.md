+++
title = "Resurgence Lead"
date = "2025-09-30"
description = "A single mono voice that snaps into the light through a bright lowpass — named for the point where an underground stream finally resurfaces."
tags = ["lead", "melodic"]
toc = true
[extra]
family = "Leads"
+++

A resurgence is where a stream that has been running underground for kilometers finally reaches daylight, usually at a spring, often forcefully. This patch is built around the same kind of sudden clarity: one oscillator, one filter envelope that snaps the cutoff open on every note, and nothing softening the attack.

<!-- more -->

<figure class="sf-figure">
  <svg class="sf-diagram" viewBox="0 0 650 258" role="img" aria-label="Signal flow diagram" focusable="false">
    <path class="sf-cable sf-cable-audio" d="M156,52 C173,38 173,66 190,52"/>
    <path class="sf-cable sf-cable-audio" d="M306,52 C323,38 323,66 340,52"/>
    <path class="sf-cable sf-cable-audio" d="M456,52 C473,38 473,66 490,52"/>
    <path class="sf-cable sf-cable-mod" d="M98,188 C98,133 98,133 98,78"/>
    <path class="sf-cable sf-cable-mod" d="M248,188 C248,133 248,133 248,78"/>
    <path class="sf-cable sf-cable-mod" d="M248,188 C248,133 398,133 398,78"/>
    <g class="sf-node sf-node-audio">
      <rect class="sf-block" x="40" y="26" width="116" height="52" rx="7"/>
      <text class="sf-label" x="98" y="50" text-anchor="middle">SPRING</text>
      <text class="sf-sub" x="98" y="65" text-anchor="middle">mono VCO</text>
      <circle class="sf-jack" cx="40" cy="52" r="3.5"/>
      <circle class="sf-jack" cx="156" cy="52" r="3.5"/>
      <circle class="sf-jack sf-jack-cv" cx="98" cy="78" r="3"/>
    </g>
    <g class="sf-node sf-node-audio">
      <rect class="sf-block" x="190" y="26" width="116" height="52" rx="7"/>
      <text class="sf-label" x="248" y="50" text-anchor="middle">SINK</text>
      <text class="sf-sub" x="248" y="65" text-anchor="middle">bright lowpass</text>
      <circle class="sf-jack" cx="190" cy="52" r="3.5"/>
      <circle class="sf-jack" cx="306" cy="52" r="3.5"/>
      <circle class="sf-jack sf-jack-cv" cx="248" cy="78" r="3"/>
    </g>
    <g class="sf-node sf-node-audio">
      <rect class="sf-block" x="340" y="26" width="116" height="52" rx="7"/>
      <text class="sf-label" x="398" y="50" text-anchor="middle">GATE</text>
      <text class="sf-sub" x="398" y="65" text-anchor="middle">VCA</text>
      <circle class="sf-jack" cx="340" cy="52" r="3.5"/>
      <circle class="sf-jack" cx="456" cy="52" r="3.5"/>
      <circle class="sf-jack sf-jack-cv" cx="398" cy="78" r="3"/>
    </g>
    <g class="sf-node sf-node-audio">
      <rect class="sf-block" x="490" y="26" width="116" height="52" rx="7"/>
      <text class="sf-label" x="548" y="50" text-anchor="middle">VENT</text>
      <text class="sf-sub" x="548" y="65" text-anchor="middle">mix out</text>
      <circle class="sf-jack" cx="490" cy="52" r="3.5"/>
      <circle class="sf-jack" cx="606" cy="52" r="3.5"/>
      <circle class="sf-jack sf-jack-cv" cx="548" cy="78" r="3"/>
    </g>
    <g class="sf-node sf-node-mod">
      <rect class="sf-block sf-block-mod" x="48" y="188" width="100" height="46" rx="7"/>
      <text class="sf-label sf-label-mod" x="98" y="209" text-anchor="middle">TIDE</text>
      <text class="sf-sub" x="98" y="224" text-anchor="middle">LFO</text>
      <circle class="sf-jack sf-jack-mod" cx="98" cy="188" r="3"/>
    </g>
    <g class="sf-node sf-node-mod">
      <rect class="sf-block sf-block-mod" x="198" y="188" width="100" height="46" rx="7"/>
      <text class="sf-label sf-label-mod" x="248" y="209" text-anchor="middle">STRATA</text>
      <text class="sf-sub" x="248" y="224" text-anchor="middle">env</text>
      <circle class="sf-jack sf-jack-mod" cx="248" cy="188" r="3"/>
    </g>
  </svg>
  <figcaption>One STRATA envelope fans out to both SINK's cutoff and GATE's level, so filter and amplitude snap open together on every note.</figcaption>
</figure>

## Sources

`SPRING` runs a single detuned pair collapsed to near-unison — full oscillator complexity, but voiced as one line rather than a chord. `BASIN` and `SCREE` are unpatched.

```text
SPRING  osc A  saw    root
SPRING  osc B  saw    +2 cents, tracks A
SINK    mode   lowpass  4-pole
```

## Modulation

`STRATA A` is patched twice from the same envelope output — once into `SINK`'s cutoff, once into `GATE` — so the brightness snap and the amplitude snap are locked to the same curve rather than shaped independently. `TIDE` adds a small, slow vibrato on top so sustained notes are not perfectly static.

```text
gate in    external   >  STRATA A trigger
STRATA A   env out    >  SINK cutoff CV     depth 70%
STRATA A   env out    >  GATE CV            depth 100%
TIDE A     LFO out    >  SPRING pitch CV    depth 3%,  rate 5.2 Hz
```

## Settings

```ini
[SPRING]
waveform = saw
detune = 2 cents

[SINK]
mode = lowpass
cutoff = 28
resonance = 40

[STRATA]
a_attack = 1ms
a_decay = 210ms
a_sustain = 60%
a_release = 90ms

[TIDE]
a_rate = 5.2 Hz
a_shape = sine

[GATE]
response = exponential
```
