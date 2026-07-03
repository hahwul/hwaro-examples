+++
title = "Specs"
description = "Formats, system requirements, DSP details, and everything Impulse needs to run in your studio."
+++

Impulse runs on current macOS and Windows systems as a plugin only; there is no standalone build, on the theory that everyone reading this already lives in a DAW. Below is what it needs and what it does under the hood.

## Formats and hosts

| Platform | Formats | Notes |
|---|---|---|
| macOS 12+ | VST3, AU, AAX | Universal binary, Apple silicon native |
| Windows 10+ | VST3, AAX | 64-bit only |
| Linux | VST3 | Community-supported, no AAX |

Impulse is validated against the major hosts and passes `auval` and the VST3 validator on every release.

<!-- more -->

## System requirements

- **CPU** — any 64-bit processor from the last decade; the DSP scales with voice count and oversampling.
- **RAM** — 512 MB free for the plugin and its preset index.
- **Disk** — 240 MB for the factory library.
- **Sample rates** — 44.1 kHz through 192 kHz, with internal oversampling independent of host rate.

## DSP details

The audio engine is 64-bit double precision end to end. Nonlinear stages, the oscillators, filter, and saturation, run at up to 8x oversampling with a polyphase decimator to keep CPU sane. The chaos core integrates with a fourth-order Runge-Kutta solver at control rate and interpolates to audio rate, which is why its modulation is smooth rather than stepped.

Voice allocation is 16 by default and can be lowered to save CPU on dense sessions. Envelopes are analog-modeled with exponential curves and true zero-attack capability. Latency is zero in normal mode; the optional linear-phase mode on the output reverb reports its latency to the host for automatic compensation.

## Licensing

One purchase covers three activations, online or offline via a challenge-response file. Licenses are perpetual, and every update through version 2 is free. There is no subscription and no phone-home during audio processing. See pricing and start a trial on the [buy page](/buy/).
