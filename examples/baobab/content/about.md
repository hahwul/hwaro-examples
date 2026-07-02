+++
title = "About"
description = "What the Karst-6 is, how this encyclopedia is organized, and the module vocabulary every patch page assumes you already know."
+++

Baobab catalogues patches for the Karst-6, the semi-modular desktop synthesizer built by Vadose Instruments. It exists because the Karst-6's manual documents what each module does in isolation but says almost nothing about how the modules combine — and the interesting sounds all live in the combinations. Every entry here is a complete, reproducible patch: what feeds what, what modulates what, and the exact settings to get back to the sound described.

## The instrument

The Karst-6 is the sixth and, so far, final revision of Vadose Instruments' Karst line, discontinued in production but still widely patched. It ships with ten fixed voice and modulation modules wired to a normalled default signal path, but two dozen 3.5mm patch points break every one of those connections, so nothing about the default routing is mandatory. The case is walnut-sided with a single row of illuminated jacks; there is no MIDI input and no preset memory, which is exactly why an encyclopedia of written-down patches is useful rather than redundant.

## Module glossary

Every patch page assumes the reader already knows these ten modules by name:

| Module | Role |
| --- | --- |
| `SPRING` | Dual complex oscillator — triangle, saw, and pulse cores with cross-modulation between the two voices |
| `BASIN` | Sub oscillator, one or two octaves below `SPRING`, square or sine |
| `SCREE` | Noise and grain source, from smooth white noise to coarse granular texture |
| `SINK` | Resonant multimode filter — lowpass, band-pass, or highpass, self-oscillating past 90% resonance |
| `STRATA` | Dual envelope generator, AD or ADSR per side |
| `TIDE` | Dual low-frequency oscillator, 0.02 Hz to audio rate |
| `TERRACE` | 8-step sequencer with per-step pitch, gate length, and glide |
| `DRIP` | Sample and hold, clockable from any gate or LFO |
| `GATE` | Voltage-controlled amplifier, linear or exponential response |
| `VENT` | Output mixer and final stage, feeds the unit's main outputs |

## How this encyclopedia is organized

The [Patches](/patches/) section holds one page per catalogued patch, sorted alphabetically and grouped in the sidebar by family — Drones, Basslines, Sequences, Pads, Leads, and Percussion. Each page opens with a signal-flow diagram: outlined blocks for the modules in play, curved strokes for the cables between them, audio-rate connections drawn heavier than control-voltage ones. Below the diagram, three sections cover Sources, Modulation, and Settings in that order, because that is the order you should patch a cold Karst-6 in.

Press Ctrl+K (or Cmd+K on a Mac keyboard) anywhere on the site to jump straight to a patch by name without touching the sidebar.

## Reading the settings blocks

The closing settings block on every page is a flat snapshot, module by module, in the same left-to-right order as the diagram above it. A line like `cutoff = 38` means the `SINK` cutoff knob sits at 38 on its 0–100 dial; a line like `> SINK.cutoff depth 35%` in a modulation block means that source is patched into `SINK`'s cutoff CV input at 35% attenuation. Anything not mentioned is left at its default center position.
