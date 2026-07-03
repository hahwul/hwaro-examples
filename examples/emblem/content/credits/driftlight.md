+++
title = "Driftlight"
date = "2026-05-18"
description = "A cozy exploration game whose ambient score re-layers itself by biome, weather, and time of day without a single hard cut."

[extra]
studio = "Tidewell Games"
role = "Composer, Adaptive Systems"
engine = "FMOD Studio 2.03 · Unity 6"
sample_rate = "48kHz / 24-bit"
status = "shipped"
platform = "PC, Switch 2"
+++

Driftlight is a slow, non-violent exploration game about repairing a lighthouse network along a drowned coastline. There is no combat and almost no urgency, which meant the score had one job: never announce itself, and never repeat in a way the player could clock.

<!-- more -->

The solution was a continuous horizontal re-sequencing system built around three axes — biome (tide pools, kelp forest, open water, lighthouse interior), weather (clear, drizzle, storm), and time of day (dawn, day, dusk, night). Each axis owns its own multitrack loop region in FMOD, quantized to an eight-bar grid, so a transition always lands on a downbeat regardless of which axis triggered it.

```csharp
// Unity side: push continuous state into FMOD as game parameters
instance.setParameterByName("biome", currentBiome.paramValue);
instance.setParameterByName("weather", weatherSystem.intensity);
instance.setParameterByName("daypart", clock.normalizedDayPart);
```

Birdsong and wind-chime stingers are layered separately, triggered by proximity RTPCs rather than scripted events, so two players exploring the same tide pool five minutes apart hear a related but never identical passage. Early playtests flagged the dusk-to-night transition as too abrupt; the fix was widening its crossfade window from two bars to a full eight, which is now the default crossfade length across every axis.

The result reviewers kept describing as "the game breathing" — which is the adaptive-music version of a compliment I will take every time.
