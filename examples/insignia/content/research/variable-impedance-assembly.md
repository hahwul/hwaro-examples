+++
title = "A Variable-Impedance Controller for Contact-Rich Peg-in-Hole Assembly"
date = "2025-11-05"
description = "An impedance controller that lowers stiffness on the axes actually in contact during tight-tolerance peg-in-hole assembly, borrowed from fingertip work and applied at the arm level."
+++

Peg-in-hole assembly is the classic contact-rich manipulation benchmark for a reason: a rigid position controller fights the part into a jam the moment there is any misalignment, and the fix — lower the arm's stiffness on the axes that are actually in contact — is exactly the same idea behind the compliant fingertip work, just applied at the level of the whole arm instead of a single finger.

<!-- more -->

## Controller

The arm runs a Cartesian impedance controller with per-axis stiffness that is not fixed but scheduled from the current contact wrench. Axes reporting sustained lateral force get their stiffness lowered; the insertion axis stays comparatively stiff so the peg keeps making forward progress:

```python
def schedule_stiffness(wrench, k_high=800.0, k_low=60.0, threshold=2.5):
    """Per-axis stiffness (N/m) scheduled from measured contact wrench."""
    stiffness = {}
    for axis, force in wrench.items():
        if axis == "z_insertion":
            stiffness[axis] = k_high
        else:
            stiffness[axis] = k_low if abs(force) > threshold else k_high
    return stiffness
```

The scheduling runs at 500 Hz alongside the low-level torque loop, fast enough that the arm feels genuinely compliant rather than stiff-then-suddenly-soft.

## Test parts

Evaluated on three peg-hole pairs with clearances of 0.4mm, 0.2mm, and 0.08mm, all held in a fixture with a deliberately introduced ±1.5mm lateral offset to force a real search-and-correct behavior rather than a straight insertion.

| Clearance | Fixed-stiffness success | Scheduled-stiffness success | Mean insertion time |
|---|---|---|---|
| 0.4 mm | 92% | 96% | 3.1 s |
| 0.2 mm | 61% | 89% | 4.4 s |
| 0.08 mm | 18% | 71% | 6.7 s |

The gap grows as clearance tightens, which matches the intuition: a fixed-stiffness controller has essentially no margin for error at 0.08mm clearance, while the scheduled controller's local softening buys enough search room to find the hole edge without a large force spike.

## Where it breaks

The scheduler is reactive by design, and reactive control has a floor: at the tightest clearance, roughly a third of the remaining failures were cases where the peg tipped enough to jam against the hole's chamfer before the lowered stiffness could take effect. A short predictive term — anticipating tip-over from angular velocity rather than only wrench — is the obvious next step, and is currently sitting in a branch waiting for bench time.

## Relevance to the fingertip work

The most useful outcome of this project was less the assembly result itself and more confirmation that the "soft on contact, stiff once resolved" pattern generalizes past fingertips to full-arm impedance — which is reassuring, since the dissertation's variable-stiffness fingertip is really a miniaturized, faster-acting version of exactly this idea.
