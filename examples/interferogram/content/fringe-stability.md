+++
title = "Fringe Stability on a Live Bench"
date = 2024-06-02
+++

A static interferogram is the easy case. Real benches drift. Mirrors expand under the heat of a nearby lamp, mounts settle into their kinematic seats, and the air above the table stratifies into thermal layers that bend the beams over the course of minutes. The fringes respond to all of it.

## Sources of Drift

The dominant offender on most benches is air. A one-degree temperature gradient across a 30-cm path shifts the optical length by roughly half a wavelength of green light. That is a full fringe of motion from a single warm hand passing nearby. Vibration is more obvious but easier to suppress: a damped table reduces it to a quiver, while air turbulence keeps walking the pattern even after every motor on the bench is off.

## Visibility and Contrast

A pattern that is constantly slipping by a fraction of a fringe loses contrast in any exposure longer than the drift period. Long-integration cameras average a faded version of the true fringe field. Either shorten the exposure to freeze the motion, or close the bench inside an acrylic enclosure to suppress the turbulence at its source.

## Active Stabilization

When passive isolation is not enough, a feedback loop can hold a fringe in place. A photodiode reads the brightness at a fixed point, a controller drives a piezoelectric stack on one of the mirrors, and the loop nudges the mirror to keep the brightness constant. The interferogram then shows the corrections instead of the drift, which converts a noisy environment into a record of how hard the loop had to work.
