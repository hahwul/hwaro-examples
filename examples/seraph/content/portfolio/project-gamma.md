+++
title = "Project Gamma"
date = 2024-08-15
description = "Editorial system for a quarterly print and web publication."
+++

Project Gamma is a unified editorial system developed for a quarterly publication that distributes both a printed edition and a parallel web archive.

The brief required that the two channels share a common typographic logic without forcing one to imitate the other. The print edition uses a measured serif at 10 point on a 13 point baseline, while the web archive uses the same family at 18 pixels with a 1.55 leading ratio. The proportions were tuned so that the optical density at typical reading distance is comparable across both surfaces.

The grid is a four-column structure on print and a fluid two-column structure on web, with shared gutter ratios. Article length and figure placement are determined once and rendered through both pipelines without manual intervention.

- Shared typographic scale across print and web
- Source-of-truth content stored as structured Markdown
- Print pipeline uses a custom paginator built on existing tooling
- Web pipeline renders the same source through a static generator

The system has shipped six issues to date and is maintained by a team of two editors and one developer.
