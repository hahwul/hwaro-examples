+++
title = "Orthogonal Projection Notes"
date = "2024-07-20"
description = "Reducing three-dimensional lattice nodes to two-dimensional reference plates."
[extra]
reading_time = "3"
tags = ["projection", "drafting", "geometry"]
+++

Orthogonal projection collapses a three-dimensional lattice onto a two-dimensional plane by discarding one coordinate. The result is a flat reference plate that preserves angles along the chosen axes but distorts angles in every other direction.

## Plan, Elevation, Section

Three projections are sufficient to reconstruct any rigid lattice without ambiguity. The plan view discards the vertical axis, the elevation discards one horizontal axis, and the section view discards the depth axis at a chosen cut plane. Together they describe every node's position to within the precision of the reference grid.

## Coordinate Truncation

A node at position `(x, y, z)` projects to `(x, y)` in plan view. The truncation is lossy in isolation but invertible when combined with elevation data. Drafting conventions place the plan above the elevation and align the two views by shared horizontal coordinates, which lets a draftsman read the third dimension by tracing vertical lines between views.

## Hidden Edge Resolution

When a lattice contains nodes at varying depths, edges that pass behind other edges must be marked as hidden. The standard convention uses a dashed stroke for hidden edges and a solid stroke for visible edges. Computer-aided systems compute visibility by ray casting along the projection axis and recording the first intersection.

## Reference Tolerance

A drafted reference plate is reliable to within the resolution of its grid. For a one-millimeter grid, node positions are accurate to half a millimeter in either direction. Tighter tolerances require either a finer grid or a digital coordinate file rather than a printed plate.
