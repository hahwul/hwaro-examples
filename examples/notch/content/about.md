+++
title = "About Notch"
description = "What Notch is, how its FM synthesis channels work, and how the release channels line up."
+++

Notch is a chiptune tracker built around **frequency-modulation synthesis**.
Instead of playing back recorded samples, each voice is a small stack of sine
operators that modulate one another — the same technique behind the FM sound
chips of the late 1980s, rebuilt as clean, band-limited code. You write music in
a pattern grid, one row per tick, and Notch renders it to audio in real time or
straight to a file.

## The synthesis model

A Notch instrument is up to **six operators** wired together by an *algorithm* —
a routing that decides which operators are carriers you hear and which are
modulators that bend the ones below them. Each operator has its own frequency
ratio and envelope, so a single patch can be a soft electric piano or a metallic
bell depending only on how the operators feed each other. Feedback on the first
operator adds the harmonic edge that FM is known for.

## Channels, two meanings

The word *channel* does double duty here, which is why the pattern grid and the
release header look alike:

- **Synthesis channels** are the vertical tracks in a song. Each one plays one
  voice at a time; a 64-channel song is 64 simultaneous FM voices.
- **Release channels** are how builds reach you. `stable` is what most people
  run, `beta` previews the next minor version, `nightly` is the tip of the main
  branch, and `lts` tracks one older build with fixes only.

## Getting it

Notch is a single native binary for Linux, macOS, and Windows, plus a headless
renderer for build pipelines. Every version in the log below is downloadable and
signed. The project is developed in the open; bug reports and patch files are
welcome on the tracker, and the [release feed](/releases/rss.xml) announces every
tagged build.
