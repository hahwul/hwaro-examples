+++
title = "Wind-Tunnel Report"
description = "Our full test protocol, raw yaw-sweep data, and the math that turns CdA into watts."
+++

We test at GST Aeronautics, a closed-loop automotive tunnel outside Denver, in
three off-season sessions each year. Every frame you can buy has been through the
same protocol, and every run is on this page. If a competitor won't show you their
raw sweep, ask why.

## Protocol

Each frame is run as a complete bike with a fit mannequin at a fixed position,
identical wheels, and identical tires at 75&nbsp;psi. We sweep yaw from &minus;15°
to +15° in 2.5° steps, hold each angle for 30&nbsp;seconds, and average the last
20. Drag force is measured at a wind speed of 45&nbsp;km/h. We repeat the zero-yaw
run at the start and end of every session; if the two differ by more than 1%, the
session is void.

## Raw data — 2026 winter session

The figures below are the session export for the three production frames, drag
force in newtons at each yaw angle. This is the file our engineers work from.

```json
{
  "session": "2026-01-19",
  "wind_speed_kmh": 45,
  "tire_psi": 75,
  "runs": [
    { "frame": "Draft",     "cda_m2": 0.221, "drag_N": { "0": 24.8, "5": 24.1, "10": 23.6, "15": 24.9 } },
    { "frame": "Echelon",   "cda_m2": 0.204, "drag_N": { "0": 22.9, "5": 22.0, "10": 21.4, "15": 22.7 } },
    { "frame": "Breakaway", "cda_m2": 0.191, "drag_N": { "0": 21.4, "5": 20.5, "10": 19.9, "15": 21.2 } }
  ]
}
```

Note the shape of each row: drag *falls* as yaw increases toward 10°, then climbs
again. That dip is the sail effect a good aero tube exploits in a crosswind, and
it is why zero-yaw is the honest headline number, not a cherry-picked 10° minimum.

## From CdA to watts

Aerodynamic power scales with the cube of speed. The power a rider spends beating
air drag is:

```python
def aero_watts(cda, speed_kmh, rho=1.0):
    """Power (W) to overcome aero drag. rho ~ 1.0 kg/m3 at Denver altitude."""
    v = speed_kmh / 3.6           # m/s
    return 0.5 * rho * cda * v**3

for name, cda in [("Draft", 0.221), ("Echelon", 0.204), ("Breakaway", 0.191)]:
    print(name, round(aero_watts(cda, 45), 1), "W")
```

At 45&nbsp;km/h the Breakaway saves roughly **31 watts** over the Draft — about the
difference between hanging onto a fast group and getting shelled. That is the
number we design around, and now you can check our arithmetic.
