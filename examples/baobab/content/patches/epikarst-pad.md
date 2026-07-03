+++
title = "Epikarst Pad"
date = "2025-02-08"
description = "A slow-swelling pad that drifts in pitch the way water lingers in the epikarst before finding its way down — four modules, two of them barely doing anything fast."
tags = ["pad", "ambient"]
toc = true
[extra]
family = "Pads"
+++

The epikarst is the weathered zone just under the surface where rainwater pools before it finds a crack down into the rock proper — slow, patient, always slightly in motion. This pad chases that feeling with the sparsest signal path in the encyclopedia: four modules, one slow LFO on pitch, one slower envelope on volume, nothing else patched.

<!-- more -->

<figure class="sf-figure">
  <svg class="sf-diagram" viewBox="0 0 650 258" width="650" height="258" role="img" aria-label="Signal flow diagram" focusable="false">
    <path class="sf-cable sf-cable-audio" d="M156,52 C173,38 173,66 190,52"/>
    <path class="sf-cable sf-cable-audio" d="M306,52 C323,38 323,66 340,52"/>
    <path class="sf-cable sf-cable-audio" d="M456,52 C473,38 473,66 490,52"/>
    <path class="sf-cable sf-cable-mod" d="M98,188 C98,133 98,133 98,78"/>
    <path class="sf-cable sf-cable-mod" d="M398,188 C398,133 398,133 398,78"/>
    <g class="sf-node sf-node-audio">
      <rect class="sf-block" x="40" y="26" width="116" height="52" rx="7"/>
      <text class="sf-label" x="98" y="50" text-anchor="middle">SPRING</text>
      <text class="sf-sub" x="98" y="65" text-anchor="middle">dual VCO, detune</text>
      <circle class="sf-jack" cx="40" cy="52" r="3.5"/>
      <circle class="sf-jack" cx="156" cy="52" r="3.5"/>
      <circle class="sf-jack sf-jack-cv" cx="98" cy="78" r="3"/>
    </g>
    <g class="sf-node sf-node-audio">
      <rect class="sf-block" x="190" y="26" width="116" height="52" rx="7"/>
      <text class="sf-label" x="248" y="50" text-anchor="middle">SINK</text>
      <text class="sf-sub" x="248" y="65" text-anchor="middle">gentle lowpass</text>
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
      <rect class="sf-block sf-block-mod" x="348" y="188" width="100" height="46" rx="7"/>
      <text class="sf-label sf-label-mod" x="398" y="209" text-anchor="middle">STRATA</text>
      <text class="sf-sub" x="398" y="224" text-anchor="middle">slow env</text>
      <circle class="sf-jack sf-jack-mod" cx="398" cy="188" r="3"/>
    </g>
  </svg>
  <figcaption>SPRING's two oscillators run detuned against each other; TIDE nudges their pitch, STRATA opens GATE over several seconds.</figcaption>
</figure>

## Sources

Both `SPRING` oscillators run triangle waves, detuned enough to beat slowly against each other without ever resolving. `BASIN` and `SCREE` stay unpatched — any texture here comes from the detune beating and the filter, not from layered sources.

```text
SPRING  osc A  triangle    root
SPRING  osc B  triangle    +11 cents, tracks A
SINK    mode   lowpass     2-pole
```

## Modulation

`TIDE` is patched to `SPRING`'s shared pitch CV at a shallow depth, so the whole pad drifts by a few cents rather than wobbling audibly — closer to a chorus than vibrato. `STRATA`'s attack is long enough that the pad has no discernible onset; press a gate and the sound simply becomes present, several seconds later.

```text
TIDE A    LFO out    >  SPRING pitch CV (both osc)   depth 6%,  rate 0.05 Hz
gate in   external    >  STRATA A trigger
STRATA A  env out     >  GATE CV                       depth 100%
```

## Settings

```ini
[SPRING]
waveform = triangle
detune = 11 cents

[SINK]
mode = lowpass
cutoff = 34
resonance = 12

[TIDE]
a_rate = 0.05 Hz
a_shape = triangle

[STRATA]
a_attack = 3.4s
a_release = 5.0s

[GATE]
response = linear
```
