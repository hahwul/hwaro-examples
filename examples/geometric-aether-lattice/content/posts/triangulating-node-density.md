+++
title = "Triangulating Node Density"
date = "2024-06-12"
description = "Calculating optimal node distribution across structural facets."
[extra]
reading_time = "4"
tags = ["geometry", "topology", "density"]
+++

Node density across a tessellated surface dictates load distribution. When the underlying lattice is composed of equilateral triangles, every interior vertex carries six incident edges, and every face carries three. This regularity simplifies the calculation of stress propagation under axial load.

## Vertex Counting

For a frequency-N icosahedral subdivision, the vertex count is `10N^2 + 2`. The face count is `20N^2`, and the edge count is `30N^2`. These three values satisfy Euler's polyhedron formula:

```text
V - E + F = 2
(10N^2 + 2) - 30N^2 + 20N^2 = 2
```

The identity holds for every frequency, which means the structural balance never drifts as the mesh refines.

## Distribution Strategy

Higher-frequency lattices place more vertices near the equator of the parent solid than near its poles. The drift is small at low frequencies and severe at frequencies above ten. To compensate, vertices can be projected onto the circumscribed sphere and then redistributed by Lloyd's algorithm, which moves each vertex toward the centroid of its Voronoi cell.

| Frequency | Vertices | Polar Skew |
|-----------|----------|------------|
| 2         | 42       | 1.4%       |
| 4         | 162      | 3.1%       |
| 8         | 642      | 6.7%       |
| 16        | 2562     | 12.8%      |

## Practical Limits

Beyond frequency 16, the cumulative skew exceeds the tolerance allowed for structural members of equal length. At that point, the lattice must be partitioned into zones, with each zone assigned a distinct member length. The result is a hybrid mesh that preserves geometric coherence at the cost of fabrication complexity.
