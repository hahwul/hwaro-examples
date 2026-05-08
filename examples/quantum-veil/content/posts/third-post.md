+++
title = "Field Calibration Notes"
date = "2023-11-08"
description = "Calibration log for the secondary containment field after the first thermal cycle."
tags = ["log", "calibration", "fields"]
+++

## Calibration Pass 04

After the first full thermal cycle, the secondary containment field drifted by roughly 1.4 percent off the reference geometry. The drift was within tolerance but worth recording, because the curvature of the displacement was unusual: the field sagged along the polar axis rather than expanding uniformly.

The shimmering edge of the Veil reflects this asymmetry. Light passing along the polar axis arrives slightly delayed, producing a chromatic ripple visible to the naked eye on the inner viewport. We have not yet decided whether the ripple is a side effect we should correct or a useful diagnostic we should keep.

### What We Adjusted

```typescript
interface FieldVector {
  axial: number;
  polar: number;
  azimuthal: number;
}

function rebalance(v: FieldVector, target: number): FieldVector {
  const scale = target / Math.hypot(v.axial, v.polar, v.azimuthal);
  return {
    axial: v.axial * scale,
    polar: v.polar * scale * 1.014,
    azimuthal: v.azimuthal * scale,
  };
}
```

The polar coefficient is a hand-picked correction. The cleaner approach would be a closed-loop controller, but the current readout cadence is too slow to make that worthwhile.

### Standing Items

- The chromatic ripple reappears within twelve minutes of every restart.
- Coolant draw is steady. No additional load on the supply line.
- The third operator confirms the visual artifact with an independent sensor.

For now, the Veil is stable. The next pass will use a slower thermal ramp to see whether the drift scales linearly or whether it has a fixed origin somewhere in the lattice.
