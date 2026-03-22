+++
title = "Graph Theory: First Principles"
date = 2026-03-22
description = "An introduction to graphs, vertices, edges, and the fundamental theorems that connect them."
tags = ["mathematics", "computer-science"]
+++

Graph theory studies mathematical structures used to model pairwise relations between objects. A graph is made up of **vertices** (also called nodes) and **edges** that connect them.

## Definitions

A graph `G = (V, E)` consists of:
- A set `V` of vertices
- A set `E` of edges, where each edge is a pair of vertices

### Types of Graphs

- **Undirected graph**: edges have no direction
- **Directed graph (digraph)**: edges have a direction
- **Weighted graph**: edges carry numerical values
- **Simple graph**: no self-loops or multiple edges

## The Handshaking Lemma

**Theorem**: In any undirected graph, the sum of all vertex degrees equals twice the number of edges.

*Proof*: Each edge contributes exactly 1 to the degree of each of its two endpoints. Therefore, when we sum all degrees, each edge is counted exactly twice.

**Corollary**: The number of vertices with odd degree is always even.

## Euler's Formula for Planar Graphs

For any connected planar graph:

```
V - E + F = 2
```

where `V` is vertices, `E` is edges, and `F` is faces (including the outer face).

## Applications

Graph theory appears everywhere:
- **Networks**: social networks, computer networks, transportation
- **Scheduling**: coloring problems model resource allocation
- **Navigation**: shortest path algorithms power GPS systems
- **Biology**: protein interaction networks, phylogenetic trees

## Exercise

Draw a graph with 5 vertices where every vertex has degree 2. What shape does it form? Can you draw one where every vertex has degree 3?

*Hint: check the handshaking lemma before attempting the second question.*
