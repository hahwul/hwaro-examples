+++
title = "Log 003: Grid Tessellation Notes"
date = "2024-05-06"
template = "page"
+++

The grid uses a regular hexagonal tessellation for its primary routing fabric. Each cell holds one routing node and connects to six neighbors. The choice predates the current operations team and has often been questioned, mostly by engineers familiar with square or triangular meshes from earlier deployments.

Hexagonal cells offer two practical advantages over square cells at the same node density. The average distance between a node and its neighbors is shorter, which reduces the time a packet spends in transit when the path crosses several cells. The number of neighbors is also balanced. A square mesh forces a choice between four neighbors with poor diagonal coverage or eight neighbors with uneven distances. Six neighbors at uniform distance avoids both compromises.

The cost shows up in addressing. Hexagonal coordinates require either three axial values with a constraint or a pair of offset values that change parity from row to row. Both representations are awkward to read. The grid uses axial coordinates for storage and converts to offset coordinates only at display time. Operators occasionally report cells by offset values they read from a dashboard, then trace them back to incorrect axial pairs. A small lookup helper resolves both forms.

Failure modes are also worth noting. When a single node drops, the six neighbors can absorb its traffic without exceeding their capacity, assuming uniform load. When two adjacent nodes drop, the four cells surrounding both lose redundancy on one side. The mitigation is to schedule maintenance windows so adjacent nodes are never offline at the same time. The scheduler enforces this rule by default.

Tessellation choice is rarely revisited. The fabric has performed within tolerances for several years, and the operational habits have settled around it. The notes here are for new operators.
