+++
title = "About the deck"
description = "Who Vertex Prism is for, who maintains it, and how the views are intended to be read."
+++

Vertex Prism is the shared analytics deck for **Cuboid Software**, a 140-person SaaS business that sells design-collaboration tools to product, design, and engineering teams. The deck is reviewed every Monday morning by the operating committee and is also published, in slightly redacted form, to every employee on Wednesday.

## Who maintains it

The deck is owned jointly by three small teams. The **analytics engineering** team owns the underlying models — they live in a single dbt project, are tested on every commit, and are documented in plain English on the same page as the SQL. The **growth science** team owns the dashboards on the marketing and conversion side. The **finance** team owns the ARR bridge, the cohort retention surface, and the contribution-margin views.

Each tile on the deck is signed at the bottom with the name of the maintainer team and the freshness of the underlying query. If a number on the deck is wrong, there is exactly one person we ask first; if a definition is unclear, there is exactly one team we ask first.

## How to read the views

The deck is intentionally drawn in **isometric projection**. We have found that flat bar charts hide the texture of the data — a month that is technically "up" can be hiding a single very large enterprise deal — and we have found that the third dimension on the cube tower makes the texture obvious without needing a footnote. The cubes are read like a poster, not like a 3D plot: tall stack means a strong month, color-coded by the dominant deal segment.

The ribbon-stack area chart is read left-to-right; each ribbon is a customer segment, stacked from bottom to top in the order of self-serve, mid-market, enterprise, strategic. The cohort retention table is read row-by-row; the four shade steps per row are the four quarters of retention, with the darkest cell being the freshest.

## What this deck is not

It is not a dashboard for the board, who get a separate, much shorter pack each quarter. It is not a real-time view, either; everything on the deck is computed from the warehouse at 4 AM and is intentionally stale during the day. We have found that real-time numbers invite real-time decisions, and we do not want to make real-time decisions about retention.
