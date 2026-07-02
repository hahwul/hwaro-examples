+++
title = "Phreatic Drone"
date = "2025-01-22"
description = "A drone with no VCA in its signal path at all — the phreatic zone never stops being full, and this patch never stops sounding, just changes shape."
tags = ["drone", "long-form"]
toc = true
[extra]
family = "Drones"
+++

Below the water table, the phreatic zone is permanently saturated — there is no tap you can close. This is the one patch in the encyclopedia with no `GATE` in the chain at all: once `VENT` is unmuted, the drone simply exists, and everything you hear happening to it is `SINK`'s resonant peak and two independent `TIDE` cycles working on the source.

<!-- more -->

<figure class="sf-figure">
  <svg class="sf-diagram" viewBox="0 0 500 258" role="img" aria-label="Signal flow diagram" focusable="false">
    <path class="sf-cable sf-cable-audio" d="M156,52 C173,38 173,66 190,52"/>
    <path class="sf-cable sf-cable-audio" d="M306,52 C323,38 323,66 340,52"/>
    <path class="sf-cable sf-cable-mod" d="M98,188 C98,133 98,133 98,78"/>
    <path class="sf-cable sf-cable-mod" d="M248,188 C248,133 248,133 248,78"/>
    <g class="sf-node sf-node-audio">
      <rect class="sf-block" x="40" y="26" width="116" height="52" rx="7"/>
      <text class="sf-label" x="98" y="50" text-anchor="middle">SPRING</text>
      <text class="sf-sub" x="98" y="65" text-anchor="middle">dual VCO + sub</text>
      <circle class="sf-jack" cx="40" cy="52" r="3.5"/>
      <circle class="sf-jack" cx="156" cy="52" r="3.5"/>
      <circle class="sf-jack sf-jack-cv" cx="98" cy="78" r="3"/>
    </g>
    <g class="sf-node sf-node-audio">
      <rect class="sf-block" x="190" y="26" width="116" height="52" rx="7"/>
      <text class="sf-label" x="248" y="50" text-anchor="middle">SINK</text>
      <text class="sf-sub" x="248" y="65" text-anchor="middle">band-pass</text>
      <circle class="sf-jack" cx="190" cy="52" r="3.5"/>
      <circle class="sf-jack" cx="306" cy="52" r="3.5"/>
      <circle class="sf-jack sf-jack-cv" cx="248" cy="78" r="3"/>
    </g>
    <g class="sf-node sf-node-audio">
      <rect class="sf-block" x="340" y="26" width="116" height="52" rx="7"/>
      <text class="sf-label" x="398" y="50" text-anchor="middle">VENT</text>
      <text class="sf-sub" x="398" y="65" text-anchor="middle">mix out</text>
      <circle class="sf-jack" cx="340" cy="52" r="3.5"/>
      <circle class="sf-jack" cx="456" cy="52" r="3.5"/>
      <circle class="sf-jack sf-jack-cv" cx="398" cy="78" r="3"/>
    </g>
    <g class="sf-node sf-node-mod">
      <rect class="sf-block sf-block-mod" x="48" y="188" width="100" height="46" rx="7"/>
      <text class="sf-label sf-label-mod" x="98" y="209" text-anchor="middle">TIDE 2</text>
      <text class="sf-sub" x="98" y="224" text-anchor="middle">LFO</text>
      <circle class="sf-jack sf-jack-mod" cx="98" cy="188" r="3"/>
    </g>
    <g class="sf-node sf-node-mod">
      <rect class="sf-block sf-block-mod" x="198" y="188" width="100" height="46" rx="7"/>
      <text class="sf-label sf-label-mod" x="248" y="209" text-anchor="middle">TIDE 1</text>
      <text class="sf-sub" x="248" y="224" text-anchor="middle">LFO</text>
      <circle class="sf-jack sf-jack-mod" cx="248" cy="188" r="3"/>
    </g>
  </svg>
  <figcaption>SPRING and BASIN mix straight into SINK's resonant band-pass, then to VENT — no amplifier stage anywhere in the chain.</figcaption>
</figure>

## Sources

`SPRING`'s two oscillators sit a fifth apart rather than in unison, and `BASIN` doubles the lower one an octave down. The three voices mixed together, before the filter, already sound like a chord rather than a note.

```text
SPRING  osc A  triangle    root
SPRING  osc B  triangle    +7 semitones
BASIN   sub    square      root, -1 octave
```

## Modulation

`SINK`'s resonance sits high enough that the band-pass peak is audibly present as a second pitch on top of the source material. `TIDE 1` moves that peak slowly across the harmonic series of the drone; `TIDE 2` detunes `SPRING` by a few cents on an unrelated cycle, so the beating between the two oscillators never fully settles.

```text
TIDE 1  LFO out  >  SINK cutoff CV         depth 55%,  rate 0.03 Hz
TIDE 2  LFO out  >  SPRING osc B pitch CV  depth 4%,   rate 0.07 Hz
```

## Settings

```ini
[SPRING]
osc_a = triangle, root
osc_b = triangle, +7 semitones

[BASIN]
waveform = square
octave = -1

[SINK]
mode = band-pass
cutoff = 52
resonance = 78

[TIDE]
a_rate = 0.03 Hz
b_rate = 0.07 Hz

[VENT]
level = -6 dB
```
