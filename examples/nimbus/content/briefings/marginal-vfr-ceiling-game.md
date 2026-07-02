+++
title = "Marginal VFR and the Ceiling Game"
date = "2025-10-15"
description = "The four flight categories, where marginal VFR bites, and how a coastal METAR hides the trap."
tags = ["mvfr", "ceilings", "vfr", "coastal"]
toc = true
[extra]
station = "KHAF"
kind = "METAR"
metar = "KHAF 151653Z 29007KT 4SM BR BKN008 OVC015 13/12 A3009"
decoded = "Half Moon Bay, mid-morning: light onshore wind, 4 miles in mist, broken 800 feet over an overcast. This is marginal VFR — legal to look at, easy to regret."
+++

"Marginal VFR" is a polite phrase for the band of weather where the sky is technically flyable and quietly hostile. This coastal report sits right in it, and coastal fields are exactly where new pilots get squeezed.

<!-- more -->

## The four categories

Ceiling and visibility sort every report into one of four buckets:

| Category | Ceiling | Visibility |
|---|---|---|
| VFR | > 3,000 ft | > 5 SM |
| Marginal VFR | 1,000&ndash;3,000 ft | 3&ndash;5 SM |
| IFR | 500&ndash;1,000 ft | 1&ndash;3 SM |
| Low IFR | < 500 ft | < 1 SM |

The *ceiling* is the lowest broken or overcast layer &mdash; the first `BKN` or `OVC` you meet, top to bottom.

## Reading the trap

```text
4SM BR      4 miles in mist → visibility is MVFR
BKN008      broken at 800 ft → ceiling is IFR
OVC015      overcast above
13/12       spread of just 1°C → saturated, sticky
```

Here is the catch: the *visibility* is marginal VFR, but the *ceiling* is IFR. **The worse of the two sets the category** &mdash; so this field is IFR, not MVFR, despite the four-mile visibility that might tempt you to launch. A one-degree temperature/dew-point spread means the mist will not burn off quickly.

## Why the coast is different

A `29007KT` onshore breeze is pushing marine air against the hills. Scud forms and re-forms; the ceiling you brief at the field may be solid over the ridgeline five miles inland where the terrain rises to meet it. The METAR describes a point, not your route.

## The honest go/no-go

- **Add the ceiling and the terrain together.** An 800-foot ceiling over flat ground is one thing; the same ceiling against 1,200-foot hills leaves no VFR gap at all.
- **Watch the spread and the trend.** Read the last two hours. Is the visibility building or falling? A tightening spread near the coast late in the day usually means it is closing.
- **"Legal" is not "wise."** Special VFR might make a departure lawful. It does not make scud-running into rising terrain a good idea for a VFR pilot.

Marginal VFR is where good judgment earns its keep. When the ceiling and the visibility disagree, believe the pessimist.
