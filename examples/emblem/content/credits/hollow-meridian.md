+++
title = "Hollow Meridian"
date = "2025-09-14"
description = "An open-world survival game running a dozen concurrent music states across biome, faction, and threat — as lead music systems designer."

[extra]
studio = "Longmarch Games"
role = "Lead Music Systems Designer"
engine = "Wwise 2023.1 · Unreal Engine 5.3"
sample_rate = "48kHz / 24-bit"
status = "shipped"
platform = "PC, PS5, Xbox Series X|S"
+++

Hollow Meridian ships with roughly forty square kilometers of open world, six climate regions, four rival factions, and a day/night cycle that all needed to coexist in the mix at once without turning into noise. This was the largest music-systems build of my career, and the first time I brought in a state-machine architecture instead of a flat set of triggered stingers.

<!-- more -->

The core of the system is a priority-ducking state machine: region ambience sits at the bottom, faction-conflict layers duck it when hostiles are near, and combat states duck both when a fight actually starts. Region transitions at biome borders use horizontal re-sequencing quantized to four bars, so crossing from tundra into the ashlands never produces an audible splice even at a dead sprint.

```
State priority (highest wins the bus):
  1. Combat        (RTPC: EnemiesEngaged > 0)
  2. FactionAlert   (RTPC: NearbyHostility)
  3. RegionAmbient  (biome + daypart, horizontal re-seq)
  4. Silence        (deep cave interiors, opt-in)
```

Day/night and threat both apply as vertical layers within whichever state currently owns the bus, which is what let a single region theme cover roughly six hours of in-game time without repeating identically. Onboarding two additional composers onto the world's remaining biomes meant writing an internal spec for how stems needed to be delivered — stem count, loop points, RMS targets — so their work would slot into the state machine without a rebuild.

It is still the system I get asked about most in interviews, mostly because "the mix has an org chart" is an easy thing to remember.
