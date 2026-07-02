+++
title = "Speleothem Ticker"
date = "2026-01-17"
description = "A clocked noise percussion patch where DRIP samples a fresh pitch for the resonant ping on every hit, the way a speleothem grows one mineral-laden drop at a time."
tags = ["percussion", "generative"]
toc = true
[extra]
family = "Percussion"
+++

Stalactites and stalagmites form one drip at a time, each drop leaving behind a fraction more mineral than the last, no two hits identical. `Speleothem Ticker` copies the process literally: `TERRACE` runs as a bare clock, and `DRIP` samples a new value from itself on every tick to retune `SINK`'s resonant peak before each hit lands.

<!-- more -->

<figure class="sf-figure">
  <svg class="sf-diagram" viewBox="0 0 650 258" role="img" aria-label="Signal flow diagram" focusable="false">
    <path class="sf-cable sf-cable-audio" d="M156,52 C173,38 173,66 190,52"/>
    <path class="sf-cable sf-cable-audio" d="M306,52 C323,38 323,66 340,52"/>
    <path class="sf-cable sf-cable-audio" d="M456,52 C473,38 473,66 490,52"/>
    <path class="sf-cable sf-cable-mod sf-cable-thin" d="M148,211 C148,211 198,211 198,211"/>
    <path class="sf-cable sf-cable-mod" d="M248,188 C248,133 248,133 248,78"/>
    <path class="sf-cable sf-cable-mod" d="M248,188 C248,133 398,133 398,78"/>
    <path class="sf-cable sf-cable-mod" d="M348,188 C348,133 248,133 248,78"/>
    <g class="sf-node sf-node-audio">
      <rect class="sf-block" x="40" y="26" width="116" height="52" rx="7"/>
      <text class="sf-label" x="98" y="50" text-anchor="middle">SCREE</text>
      <text class="sf-sub" x="98" y="65" text-anchor="middle">noise / grain</text>
      <circle class="sf-jack" cx="40" cy="52" r="3.5"/>
      <circle class="sf-jack" cx="156" cy="52" r="3.5"/>
      <circle class="sf-jack sf-jack-cv" cx="98" cy="78" r="3"/>
    </g>
    <g class="sf-node sf-node-audio">
      <rect class="sf-block" x="190" y="26" width="116" height="52" rx="7"/>
      <text class="sf-label" x="248" y="50" text-anchor="middle">SINK</text>
      <text class="sf-sub" x="248" y="65" text-anchor="middle">band-pass ping</text>
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
      <text class="sf-label sf-label-mod" x="98" y="209" text-anchor="middle">TERRACE</text>
      <text class="sf-sub" x="98" y="224" text-anchor="middle">clock</text>
      <circle class="sf-jack sf-jack-mod" cx="98" cy="188" r="3"/>
    </g>
    <g class="sf-node sf-node-mod">
      <rect class="sf-block sf-block-mod" x="198" y="188" width="100" height="46" rx="7"/>
      <text class="sf-label sf-label-mod" x="248" y="209" text-anchor="middle">STRATA</text>
      <text class="sf-sub" x="248" y="224" text-anchor="middle">env</text>
      <circle class="sf-jack sf-jack-mod" cx="248" cy="188" r="3"/>
    </g>
    <g class="sf-node sf-node-mod">
      <rect class="sf-block sf-block-mod" x="298" y="188" width="100" height="46" rx="7"/>
      <text class="sf-label sf-label-mod" x="348" y="209" text-anchor="middle">DRIP</text>
      <text class="sf-sub" x="348" y="224" text-anchor="middle">S&amp;H</text>
      <circle class="sf-jack sf-jack-mod" cx="348" cy="188" r="3"/>
    </g>
  </svg>
  <figcaption>TERRACE's clock triggers STRATA and DRIP together; STRATA shapes SINK and GATE while DRIP retunes SINK's cutoff before every hit.</figcaption>
</figure>

## Sources

`SCREE` set to its narrow grain mode, rather than smooth white noise, gives `SINK`'s band-pass something with enough high-frequency content to ring convincingly when the resonance is pushed close to self-oscillation.

```text
SCREE   mode   grain, narrow
SINK    mode   band-pass
```

## Modulation

`TERRACE` runs with no pitch output patched anywhere — it exists purely as a clock, firing both `STRATA` and `DRIP` on the same tick. `STRATA` gives the hit its percussive envelope on both the filter and the amplifier; `DRIP` samples `TIDE`'s free-running output at each clock pulse and adds that value on top of `SINK`'s cutoff, so the pitch of the ping wanders hit to hit instead of repeating.

```text
TERRACE  clock out  >  STRATA A trigger
TERRACE  clock out  >  DRIP sample trigger
STRATA A  env out    >  SINK cutoff CV    depth 60%
STRATA A  env out    >  GATE CV           depth 100%
DRIP      s&h out     >  SINK cutoff CV    depth 25%
```

## Settings

```ini
[TERRACE]
mode = clock only
tempo_source = internal, 140 bpm

[SCREE]
mode = grain
density = 70%

[SINK]
mode = band-pass
cutoff = 60
resonance = 88

[STRATA]
a_attack = 0.2ms
a_decay = 60ms
a_sustain = 0%

[DRIP]
source = TIDE B, free-running
```
