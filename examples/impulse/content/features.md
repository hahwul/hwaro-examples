+++
title = "Features"
description = "Three oscillators, a self-oscillating filter, and a 16-slot modulation matrix wired to a chaos attractor."
+++

Impulse is a sixteen-voice virtual-analog polysynth. Every voice runs the same signal path, and every stage on that path is a modulation destination. The difference from a typical software synth is not the block diagram; it is what you are allowed to route into it.

## The modulation matrix

Sixteen assignable slots sit between sources and destinations. Sources include four envelopes, four LFOs, velocity, aftertouch, the mod wheel, MPE per-note dimensions, and the three outputs of the chaos attractor described in the [sound engine](/sound-engine/). Destinations are anything with a knob. Each slot has its own bipolar depth and an optional side-chain source that scales the depth in real time, so you can make the attractor fade in only when you press harder.

<!-- more -->

## What the attractor changes

Ordinary modulation is periodic: an LFO comes back to where it started, an envelope resets on each note. The attractor does neither. It traces a path through three-dimensional space that stays bounded but never closes, so filter cutoff, oscillator drift, and pan can wander for minutes without you hearing a loop point. Because the system is deterministic, the same seed and the same speed produce the same wander every time you reload the session.

## Voice architecture at a glance

- **Three oscillators** — two full-range analog-modeled cores plus a sub. Continuous shape morphing from triangle through saw to variable-width pulse.
- **Real detune** — inter-oscillator drift modeled from measured hardware, so unison is uneven and alive.
- **State-variable filter** — low, band, high, and notch outputs; self-oscillates past 90 percent resonance.
- **Output mixer** — six automatable faders feeding a plate reverb and an analog-style delay.
- **Per-note expression** — full MPE, with pitch, pressure, and slide routable in the matrix.

Every parameter is automatable from the host and can be MIDI-learned in two clicks. Patches are plain text, so they diff cleanly in version control if you keep your sound design in a repository. When you are ready, browse the [factory presets](/presets/) or read the full [specs](/specs/).
