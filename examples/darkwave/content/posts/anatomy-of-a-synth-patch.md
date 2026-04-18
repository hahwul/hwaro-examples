+++
title = "Anatomy of a Synth Patch"
date = "2026-03-15"
description = "Breaking down the classic synthwave lead -- oscillators, filters, and the art of programming analog warmth in a digital age."
tags = ["synthesizers", "music", "production"]
categories = ["tech"]
+++

Every synthwave track begins with a single oscillator. A raw waveform -- sawtooth, square, or pulse -- waiting to be shaped into something that sounds like it belongs on the soundtrack of a film that was never made.

## The Signal Chain

A classic synthwave lead follows a predictable but powerful signal path:

1. **Oscillator** -- Two detuned sawtooth waves, slightly offset in pitch to create width and movement
2. **Filter** -- A low-pass filter with moderate resonance, sweeping slowly to add expression
3. **Amplifier** -- An envelope with a sharp attack and long release, giving each note a percussive bite that fades into sustain
4. **Effects** -- Chorus for stereo spread, delay for depth, reverb for space

## The Juno-106 Standard

The Roland Juno-106, released in 1984, became the de facto synthwave instrument not because it was the most capable synthesizer of its era, but because it was the most accessible. One oscillator per voice, a single filter, and a built-in chorus that could make anything sound wide and lush.

```
Oscillator: Sawtooth
Sub-Osc:    Square, -1 octave
Filter:     LPF, cutoff 60%, resonance 30%
Envelope:   A:0 D:40 S:80 R:50
Chorus:     Mode II
```

This simplicity is the point. Synthwave is not about complexity. It is about economy -- finding the exact right sound and letting it carry the entire track.

## Digital vs. Analog

There is an ongoing debate about whether software synthesizers can replace hardware. The answer is both yes and no.

Yes, because modern emulations like Diva, Repro, and TAL-U-NO-LX are functionally indistinguishable from their hardware counterparts in a blind test. The algorithms have gotten that good.

No, because the experience of programming a hardware synthesizer is fundamentally different. When you reach for a physical knob, you are making a commitment. There is no undo. Every adjustment is final, which creates a creative pressure that software cannot replicate.

## The Unison Trick

The secret weapon of synthwave production is unison mode. Stack four to eight slightly detuned copies of the same oscillator, spread them across the stereo field, and you get the massive, wall-of-sound lead that defines the genre.

```python
def unison_detune(base_freq, voices=6, spread=0.15):
    """Generate detuned unison frequencies."""
    offsets = []
    for i in range(voices):
        ratio = -spread + (2 * spread * i / (voices - 1))
        offsets.append(base_freq * (1 + ratio / 100))
    return offsets
```

The spread parameter is critical. Too little and the sound is thin. Too much and it becomes a dissonant mess. The sweet spot is usually between 10 and 20 cents -- enough to create movement without losing pitch definition.
