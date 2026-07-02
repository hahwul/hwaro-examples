+++
title = "The Survey Camp at Cold Fork Pass"
date = "2025-09-18"
description = "Six weeks of triangulation above the treeline, told through the traverse log a field party actually kept."
tags = ["field-survey", "triangulation", "fieldwork"]
[extra]
dispatch = "No. 05"
coord = "45°52'41\" N, 110°22'15\" W"
+++

The tent at Cold Fork Pass sat at a spot chosen for exactly one reason: it
was the only flat ground within half a mile with a clear sightline to three
prior triangulation stations. Everything else about the camp &mdash; the
water source forty minutes downhill, the wind that came sideways through the
guy lines every afternoon &mdash; was a problem the survey party solved
after the fact, because the sightline decided the site, not the comfort.

<!-- more -->

Triangulation control still gets built the same way it did before satellite
positioning made it optional for most ordinary mapping: occupy a known
point, measure the horizontal angle to two or more other known points, and
let the geometry fix a new point's location without ever measuring a
distance directly. The method is old enough that the instruments have
changed completely and the fieldwork has barely changed at all. Someone
still has to physically stand on a mountain with a clear view of two other
mountains, and mountains with clear views of two other mountains are
reliably the ones nobody wants to hike to.

The field party's traverse log from the second week records the ordinary
grind of the work: a backsight to confirm the instrument hadn't drifted
overnight, a foresight to the next unknown station, and an elevation carried
forward by trigonometric leveling rather than a separate survey.

```text
STATION  BACKSIGHT  FORESIGHT  ANGLE       ELEV(m)
TP-14    TP-13      TP-15      118°22'40"  1204.6
TP-15    TP-14      TP-16      203°09'12"  1231.8
TP-16    TP-15      RM-2       077°51'55"  1219.4
```

Each row is a closed loop of trust: the angle at TP-15 has to reconcile with
the angles measured from TP-14 and TP-16 on the same network, and if it
doesn't close within the tolerance the party allowed itself, someone hikes
back up with the instrument and reoccupies the point rather than fudging the
number. That refusal to fudge is the entire discipline. A modern GNSS
receiver can produce a coordinate in minutes that this crew spent six weeks
earning the hard way, but the tolerance for disagreement is the same either
way &mdash; the network only means anything if every closed loop actually
closes.
