+++
title = "Power Margin Review at Flight Day 6"
date = 2025-11-12
tags = ["power", "eecom", "nominal"]
description = "EECOM's flight-day-6 review confirms the battery and solar array are tracking above the predicted power curve."
+++

EECOM walked the flight director through the electrical power subsystem at flight day 6. The headline: the array is generating slightly more than the pre-flight prediction, and the battery is holding a healthier state of charge than the curve called for.

## power state

- **Battery state of charge**: 91%, against a predicted 86% at this point.
- **Array output**: 4.9 kW peak in full sun, 6% over prediction.
- **Eclipse depth of discharge**: 18%, comfortably under the 35% red line.

The extra margin came from a colder-than-expected radiator loop, which let the avionics run more efficiently. Thermal is keeping an eye on it, but nobody is complaining about free watts.

> EECOM, Flight -- copy on the power numbers. That margin buys us options for the extended objectives.

## load planning

With the surplus, Flight approved bringing the secondary science payload online one orbit early. The load budget below shows the allocation after that addition:

```
LOAD   avionics      = 1.80 kW
LOAD   thermal       = 0.95 kW
LOAD   payload_pri   = 1.10 kW
LOAD   payload_sec   = 0.60 kW   [NEW]
----------------------------------
TOTAL                = 4.45 kW   (array 4.9 kW)  -> MARGIN 0.45 kW
```

The subsystem stays green across the board. Next review is scheduled for flight day 9, ahead of the first orbit-raising maneuver.
