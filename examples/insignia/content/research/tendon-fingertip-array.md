+++
title = "Passive Compliance in a Tendon-Driven Fingertip Array"
date = "2025-02-18"
description = "Redesigning the TF-3 fingertip as a tendon-driven, mechanically compliant array that absorbs small positioning errors before the controller ever sees them."
+++

The first generation of TF-3's fingertips was rigid 3D-printed shells with a single force-torque sensor at the base — accurate, but blind to exactly where on the fingertip contact happened, and stiff enough that a 2mm positioning error on a rigid object produced a real force spike. The redesign this note documents replaces that shell with a small array of independently tensioned tendon segments, each backed by a light spring, so the fingertip can conform locally to whatever it touches before any control loop reacts.

<!-- more -->

## Mechanism

Each fingertip carries five tendon segments arranged radially, routed through a low-friction sheath to a small capstan at the base of the finger. A miniature extension spring on each capstan sets the segment's passive stiffness, tunable between roughly 0.8 and 3.5 N/mm by swapping springs — soft enough that a misaligned rigid corner deflects the local segment rather than transmitting force through the whole finger. A thin conductive foam layer under the shell gives each segment a coarse resistive contact reading, so the controller knows roughly where contact happened even without a full tactile array.

## Bench results

Testing against the old rigid shell on a set of twenty rigid test objects with known positioning error:

| Positioning error | Rigid shell peak force | Tendon array peak force |
|---|---|---|
| 0 mm | 3.1 N | 2.9 N |
| 2 mm | 9.4 N | 3.6 N |
| 4 mm | 17.8 N | 5.1 N |

The gap widens with error because the rigid shell has nowhere for the mismatch to go except into force, while the tendon array simply lets the affected segment deflect. The array's own tension can be read back to estimate contact stiffness of the touched object, which turned out to be a useful free signal for the grasp classifier described in a later note.

## Tension estimate from capstan angle

Each capstan carries a small magnetic encoder, and tendon tension is estimated from the deflection between commanded and measured capstan angle:

```python
def segment_tension(k_spring, theta_cmd, theta_meas, capstan_radius):
    """Estimate tendon tension (N) from spring-backed capstan deflection."""
    deflection_rad = theta_cmd - theta_meas
    arc_length = deflection_rad * capstan_radius
    return k_spring * arc_length
```

The estimate is noisy below about 0.5 N, which is a real limitation for detecting the lightest first-contact events — the sim-to-real grasp policy work that followed this design ended up leaning more heavily on the resistive foam layer than on tendon tension for that reason.

## What's next

The current array is hand-wound, which does not scale past the four fingertips we need for lab testing. The next revision moves tensioning to small linear actuators per segment so stiffness can be commanded electronically rather than fixed by spring selection — the mechanical groundwork for the variable-stiffness fingertip that the dissertation is ultimately about.
