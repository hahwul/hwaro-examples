+++
title = "Learning Grasp Stability from Sparse Tactile Arrays"
date = "2026-03-16"
description = "A small model that predicts grasp stability from five taxels per fingertip, trained to trigger a re-grasp before an object actually slips rather than after."
+++

TF-3's fingertips report five contact channels each, not the dense tactile arrays that show up in a lot of grasping papers with hundreds of taxels per finger. The question behind this note was whether that sparse a signal is enough to predict grasp stability early enough to act on — specifically, to trigger a re-grasp before an object slips rather than reacting to the slip itself.

<!-- more -->

## Data and labels

Collected 6,200 grasp attempts across 55 objects, each logged as a 200ms window of the ten combined tactile channels (five per fingertip) sampled at 200Hz, ending either in a stable hold, a slow slip, or a drop. Slow slip was the label that mattered most: those are the events where an early warning is actually useful, since a full drop is often already too late to correct.

```python
def load_window(trace, t0, duration_ms=200, hz=200):
    """Slice a fixed-length tactile window starting at t0."""
    n = int(duration_ms / 1000 * hz)
    start = int(t0 * hz)
    return trace[start:start + n]  # shape: (n, 10)
```

## Model

A small 1D convolutional model over the ten-channel window, three layers, under 40k parameters — deliberately tiny, since it has to run on the arm's onboard compute at 100Hz alongside everything else. Inputs are the raw resistive readings plus their first difference, which turned out to matter more than the model architecture: the difference channel is what actually encodes the onset of a slip.

## Results

Evaluated on a held-out set of 12 objects not seen during training:

- 91% recall on slow-slip events with a mean lead time of 68ms before the slip became visible in raw force, enough to trigger the fingertip stiffness ramp from the compliant-grasp controller before the object had moved appreciably.
- False-positive re-grasp rate of 4% on stable holds, mostly on objects with a slightly textured surface that produces a brief, harmless signal spike during settling.
- Performance degraded noticeably on the two heaviest objects in the held-out set, where slip onset is faster than the 68ms average lead time can usefully act on.

## Why sparse worked reasonably well

My working theory, not yet rigorously tested, is that slip onset is a low-spatial-frequency event at the fingertip scale used here — the whole contact patch tends to start moving together rather than slipping from one edge — so five well-placed channels capture most of the useful signal that a hundred would. That would not hold for tasks that need precise contact-patch geometry, like in-hand manipulation, which is the obvious next place to test whether this sparse-is-enough result actually generalizes or was specific to the grasp-stability task.
