+++
title = "Notch"
description = "Version history for a chiptune tracker with FM synthesis channels"
template = "home"
+++

Notch is a tracker in the demoscene tradition: you compose in a grid of rows and
channels, and the machine plays it back one tick at a time. What sets it apart is
the sound source. Every voice is **frequency-modulation synthesis** — a small
stack of sine operators bending each other's pitch — so the whole soundtrack for
a game or a demo fits in a few kilobytes of patches and patterns, with no sampled
audio at all.

The changelog above reads like the tool it documents. Row numbers are hex, builds
line up in channel columns, and each release note stays as tight as a pattern
cell. If you are coming from a hardware FM synth or an older tracker, the model
will feel familiar; if you are new to it, start with the current build and work
backward through the log to see how the engine grew.
