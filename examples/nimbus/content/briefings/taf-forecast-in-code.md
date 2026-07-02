+++
title = "TAF: The Forecast in a Paragraph of Code"
date = "2025-03-04"
description = "How a terminal aerodrome forecast strings together time windows, and how to read its FM and TEMPO lines."
tags = ["taf", "forecast", "planning"]
toc = true
[extra]
station = "KRHV"
kind = "TAF"
metar = "KRHV 041130Z 0412/0512 30008KT P6SM SCT030 FM041800 32012G20KT P6SM BKN025"
decoded = "Reid-Hillview, 24-hour forecast: light NW wind and scattered clouds now, becoming gusty to 20 knots after 18Z with a broken deck lowering to 2,500 feet."
+++

A METAR tells you what *is*; a TAF tells you what a forecaster thinks *will be* within roughly five miles of the field. It reads like a METAR that learned to talk about the future, chopped into time blocks. Here is a morning-issued forecast for Reid-Hillview.

<!-- more -->

## The header and the base line

```text
KRHV        station
041130Z     issued day 04 at 11:30 Zulu
0412/0512   valid from day 04 12Z to day 05 12Z (24 hours)
30008KT     base forecast wind: 300° at 8 knots
P6SM        visibility greater than 6 statute miles
SCT030      scattered clouds at 3,000 ft
```

Everything after the base line is an *amendment* to it. The forecaster is saying "assume these conditions unless I tell you otherwise," then telling you otherwise.

## FM: a clean break

```text
FM041800    from day 04, 18:00 Zulu, replace everything:
32012G20KT  wind 320° at 12 gusting 20 knots
P6SM        still better than 6 miles
BKN025      broken ceiling at 2,500 ft
```

`FM` (FROM) is a hard switch. At 1800Z the whole picture changes to the new line and stays there until the next group. This is the afternoon sea-breeze signature the valley sees all spring: the wind veers, picks up, and gusts, while a broken deck settles in.

## The change groups you will also meet

- **`TEMPO`** &mdash; temporary fluctuations expected to last less than an hour at a time and, in total, less than half the period. Plan for it, do not bank on it clearing.
- **`PROB30` / `PROB40`** &mdash; a 30 or 40 percent probability of the conditions that follow. Below 30 percent, forecasters simply omit it.
- **`BECMG`** &mdash; a gradual change over a stated window, usually one to two hours.

## Turning it into a plan

If your lesson is at 1700Z, you brief the base line but keep one eye on that `FM041800` gust line, because it may arrive early. If you are landing at 2000Z, you plan for `32012G20KT` and a crosswind on the likely runway. The TAF has already told you which way the afternoon tips &mdash; your job is to notice before the windsock does.
