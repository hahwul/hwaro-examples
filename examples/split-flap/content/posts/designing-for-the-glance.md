+++
title = "Designing for the Glance"
date = "2024-11-19"
description = "Information design for people in a hurry. What the departure board teaches about hierarchy, contrast, and the half-second read."
tags = ["design", "typography", "transit"]
authors = ["the-dispatcher"]
+++

The traveler reading a departure board is not reading. Reading implies leisure, a settling-in, a willingness to parse. The traveler is *scanning* — moving at pace, scared of missing the train, looking for one row out of forty and one fact in that row. The board has perhaps half a second of their attention. Everything good about its design follows from accepting that brutal constraint and building for the glance instead of the read.

## Answer the Question They Are Asking

A person at the board is asking exactly one question: **"Which row is mine, and is it leaving?"** Good information design answers that before it answers anything else. The board's column order is therefore not arbitrary; it is a script for the eye.

A canonical departure row reads:

| Time | Destination | Track | Status |
| --- | --- | --- | --- |
| 14.05 | EDINBURGH | 12 | ON TIME |

The traveler usually knows their time, so `Time` anchors the left edge as a sorting key. `Destination` confirms the line. `Track` is the payload — the one fact they actually need to *act* on. `Status` is the exception report, the thing that overrides the plan. The columns are ordered roughly by how often the eye returns to them, and that is the whole design.

> "Design for the glance, not the read. If they have to study it, you have already failed them."

## Contrast Is the Whole Job

On a board, hierarchy is not built from a dozen type sizes and a clever grid. It is built from a small number of *loud* distinctions that survive distance, motion, and bad light.

- **Amber on near-black** for the data that matters, because warm light cuts through a hazy hall.
- **Dim gray for labels**, so the column headers recede and the values dominate.
- **A single accent color for exceptions** — green for `ON TIME`, red for `DELAYED` — used so sparingly that the eye snaps to it.

The discipline is in the restraint. The moment a second color competes with the status color, the exception stops being exceptional. A board that paints half its rows red has taught its travelers to ignore red. **Color is a budget**, and the board spends almost all of it on the one word that changes a traveler's plan.

## Type for Distance

There is a reason boards reach for condensed, uppercase, monospaced type, and it is not nostalgia.

1. **Uppercase** has a stable rectangular silhouette that holds its shape when blurred by distance or motion. Lowercase, with its ascenders and descenders, is more legible up close but noisier far away.
2. **Monospace** locks every character to the same width, so columns align perfectly without measuring and a `1` never crowds an `8`. Alignment *is* meaning on a board: a ragged column is an unreadable column.
3. **Condensed** faces fit more characters per inch of expensive board, letting `INTERNATIONAL` share a row with `14.05` without shrinking the type below the distance threshold.

You can prove the distance point at your desk. Set a label in a condensed all-caps face and squint until it blurs:

```
DEPARTURES
```

The word survives the blur as a recognizable block. The same word in a delicate serif dissolves. The board chooses the face that *fails gracefully*, because half the people reading it are reading a degraded version through tired eyes from across a hall.

## Stillness Earns the Motion

The final lesson is about *when* to change. A board that constantly reshuffles is exhausting; a traveler cannot find their row twice in the same place. So the good board holds still, sorted and stable, and moves only when reality moves. The rare flip is what draws the eye — the same logic as the clatter that draws the ear. **Motion is precious precisely because it is rare.**

This is the inheritance worth carrying into any interface, mechanical or otherwise. Order columns by the question the user is asking. Spend contrast on the one fact that matters. Choose type that fails gracefully. And let the thing sit still until something true has changed, so that when it finally moves, every head in the hall turns at once. Design for the glance, and you will have built something a person in a hurry can actually trust.
