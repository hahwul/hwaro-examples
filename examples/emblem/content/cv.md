+++
title = "CV"
description = "Full curriculum vitae for Marin Osei, independent game audio designer specializing in adaptive music systems."
+++

## Summary

Independent game audio designer, ten years in, with a practice focused specifically on adaptive music — scores that respond to gameplay state through engine-native systems rather than a fixed set of triggered cues. I work with studios ranging from five-person indie teams to full production houses, usually joining during pre-production to architect the music system alongside the audio lead, then composing and implementing the content myself.

## Core competencies

`Wwise` `FMOD Studio` `Unreal Engine` `Unity` `RTPC design` `Vertical layering` `Horizontal re-sequencing` `Granular synthesis` `State-machine music systems` `Stem delivery pipelines` `Orchestral & synthetic composition`

## Experience

**Independent Composer & Music Systems Designer — Emblem**
*2019 — present, remote*

Engaged by development teams to design and implement adaptive music systems, from single-parameter tension beds to multi-axis state machines spanning dozens of concurrent variables. Selected outcomes:

- Designed a five-state priority-ducking music architecture for an open-world survival title covering six biomes and four factions, and wrote the stem-delivery spec that let two additional composers work inside it.
- Replaced a single looping battle theme with an RTPC-driven vertical layering system for a tactics RPG, tuned so combat pacing reads correctly across fights from four minutes to forty.
- Built a three-axis horizontal re-sequencing system (biome, weather, time of day) for a cozy exploration title, quantized so transitions never produce an audible splice.
- Delivered a full score and sound design pass for a five-person horror studio on a fixed budget, using granular synthesis on four source recordings in place of a traditional stem library.

**Music Implementation Contractor — Various studios**
*2016 — 2019, remote and on-site*

Short-term engagements implementing composers' delivered stems into Wwise and FMOD projects, focused on parameter design and mix integration rather than composition. First exposure to the gap between "the cue sounds right in isolation" and "the cue sounds right during a fight."

**Assistant Sound Designer — Marrow Point Studio**
*2014 — 2016*

Foley, ambience, and UI sound for two shipped mobile titles. Learned to work fast inside small, fixed audio budgets.

## A parameter, before and after

The shape of the work rarely changes even when the genre does. A representative before-and-after from a recent engagement:

```
# before: a single looping battle_theme.ogg, 3:40, triggered on combat start
PlaySound("battle_theme")

# after: RTPC-driven vertical layering, five stems, tuned per-fight
instance.setParameterByName("Threat", threatSystem.currentValue)
instance.setParameterByName("PhaseHold", phaseTimer.barsHeld)
```

The mechanical change is small — a trigger becomes a continuous parameter. The organizational change, that the score can now cover four minutes or forty without repeating identically or losing tension, is the actual deliverable.

## Certifications

- Audiokinetic Wwise 301: Interactive Music (2021)
- FMOD Certified Sound Designer (2020)

## Speaking

- "Five States, One Bus: Priority Ducking for Open Worlds" — Northgate Audio Summit, 2025
- "Granular Tension on a Five-Person Budget" — Regional Indie Audio Meetup, 2024
- "RTPCs Are Not Just Volume Knobs" — Ashgrove Studio Guild Talk, 2023

## Education

B.A. Music Technology, Fenwick Conservatory, 2014

## References

Available on request once we're past the scoping call — see [credits](/credits/) for recent, verifiable work with named studios and shipped titles.
