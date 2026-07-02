+++
title = "Reading Your First METAR"
date = "2025-02-11"
description = "The seven groups every routine observation carries, decoded in the order you meet them."
tags = ["metar", "basics", "vfr"]
toc = true
[extra]
station = "KPAO"
kind = "METAR"
metar = "KPAO 111547Z 31006KT 10SM FEW025 14/07 A3012"
decoded = "Palo Alto, 07:47 local: light northwest wind, 10 miles visibility, a few clouds at 2,500 feet, 14°C and dry. A clean VFR morning."
+++

The first time someone hands you a METAR it looks like a password, not a weather report. But routine observations are rigidly ordered, and once you know the slots, you read them the way you read a clock. Here is the report from a calm winter morning at Palo Alto.

<!-- more -->

## The groups, in order

A routine METAR always marches through the same fields. Missing groups are simply dropped, never reordered, so position tells you almost as much as the content.

```text
KPAO      station identifier (Palo Alto)
111547Z   day 11, 15:47 Zulu (UTC)
31006KT   wind from 310° at 6 knots
10SM      visibility 10 statute miles
FEW025    few clouds at 2,500 ft AGL
14/07     temperature 14°C / dew point 7°C
A3012     altimeter 30.12 inHg
```

Read left to right and the sentence writes itself: *"At Palo Alto, quarter to eight in the morning local time, the wind is light out of the northwest, it is clear and a million, with a thin deck at twenty-five hundred, mild, and the spread between temperature and dew point is comfortably wide."*

## Why the spread matters

That last point is the one new pilots skip. Temperature 14, dew point 7 gives a **7°C spread** &mdash; plenty. As the two numbers converge, the air is closer to saturation, and fog or low stratus becomes likely, especially near dawn or over water. A tight spread on a cooling evening is your cue to expect the visibility to fall out from under a forecast.

## A second look

Compare the clean morning above with what the same field can look like when a marine layer pushes in:

{{ metar(kind="METAR", obs="KPAO 120653Z 00000KT 3SM BR OVC004 11/11 A3008", plain="Palo Alto before dawn: calm, 3 miles in mist, an overcast at 400 feet, and temperature equal to dew point. That is fog, and it is not a VFR departure.") }}

Same station, same instrument, a wildly different decision. Temperature and dew point have met at 11, visibility has collapsed to `3SM BR` (mist), and the ceiling is `OVC004`. Nothing about the code changed &mdash; you just learned to read it.

## What to carry forward

- The groups are ordered; use position as a clue.
- Wind is degrees-then-knots, always relative to true north.
- Cloud amounts are `FEW`, `SCT`, `BKN`, `OVC`; the number is hundreds of feet AGL.
- Watch the temperature/dew-point spread as hard as you watch the ceiling.

Once the routine report reads like a sentence, move on to the forecast that predicts it: [TAF: The Forecast in a Paragraph of Code](@/briefings/taf-forecast-in-code.md).
