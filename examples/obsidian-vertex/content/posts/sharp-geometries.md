+++
title = "Sharp Geometries"
description = "On rendering hard edges with intent."
date = "2024-01-12"
tags = ["design", "geometry"]
+++

## The Vertex

Every angle is a decision. Where two surfaces meet, the eye finds a point of orientation. Soft transitions blur this signal. Sharp geometries preserve it.

This template treats corners as load-bearing. Borders are unrounded. Dividers are one pixel thick. Padding is fixed in absolute units rather than relative scales, because relative scales drift across viewports and produce inconsistent rhythm.

## Constraints as Specification

A constraint-driven layout starts with what cannot move. The header sits at a fixed height. The grid columns adhere to a twelve-unit subdivision. Type leading is locked to the baseline grid. Once these rules are committed, the remaining design space becomes finite, and finite spaces are easier to navigate than open ones.

The body text uses a single weight throughout the article. Hierarchy is signalled by size and position alone. Italics carry no semantic load and are reserved for titles of external works. This reduces visual entropy without removing information density.

## Working in Monochrome

A monochrome surface forces decisions into structure rather than ornament. There is no accent colour to fall back on when alignment fails. Each margin must justify its existence. Each rule must serve the reading flow rather than decorate it.

The result is a slower kind of design. Pages take longer to compose because each element receives sustained attention. The reward is a finished page that holds together at any zoom level, on any display, under any lighting condition. The vertex remains a vertex.
