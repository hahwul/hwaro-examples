+++
title = "Sound Engine"
description = "The signal path from oscillator drift to self-oscillating filter to the Lorenz-driven modulation core."
+++

The engine runs at up to 8x oversampling around every nonlinear stage, so the analog models stay clean at the top of the keyboard without aliasing artifacts creeping into bright patches. Here is how a voice is built, in order.

## Oscillators and drift

Each of the two main oscillators is a continuous waveshaper rather than a table lookup. The **Shape** control sweeps from triangle through saw to a pulse whose width you can modulate independently. The analog character comes from a drift model: a slow, correlated random walk applied to pitch and phase, tuned from measurements of a vintage divide-down poly. Turn **Drift** up and unison voices spread apart unevenly, the way real hardware never quite agrees with itself.

<!-- more -->

## The filter

The state-variable filter gives you low-, band-, high-, and notch responses from the same core. Resonance is musical across its whole range, and past ninety percent the filter self-oscillates into a clean sine you can tune and play from the keyboard as a fourth oscillator. Key tracking is continuously variable, so you can dial in anything from a fixed formant to perfect pitch tracking.

## The chaos core

The modulation engine integrates a Lorenz attractor and exposes its three state variables as modulation sources. In plain terms, it solves this every sample block:

```text
dx = sigma * (y - x)
dy = x * (rho - z) - y
dz = x * y - beta * z
```

`sigma`, `rho`, and `beta` are your controls. Raise `rho` and the system tips from a lazy orbit into full turbulence; **Freeze** halts integration for instant sample-and-hold. Because it is a differential system, the outputs are smooth and continuous, never stepped, and they are perfectly reproducible from the patch seed.

## Output stage

Six faders mix the oscillator stack, sub, noise, and ring modulator, plus two sends into the built-in plate reverb and a bucket-brigade-style delay. Both effects are voice-summed, not per-voice, so they behave like the outboard gear you would have patched after a hardware synth. From here, explore the [full feature list](/features/) or hear it in the [factory presets](/presets/).
