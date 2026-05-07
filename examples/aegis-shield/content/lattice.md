+++
title = "Lattice Module"
description = "Internal grid framework that holds load-bearing content."
date = "2024-02-08"
weight = 2
template = "page"
+++

## Purpose

The lattice carries the page's internal structure. Every element of consequence is anchored to a lattice cell.

## Grid Specification

- Columns: 12.
- Gutter: 24px, fixed.
- Row height: derived from line-height of the base font, rounded to the nearest 8px.
- No fluid columns. Every breakpoint snaps to a discrete lattice.

## Cell Rules

A cell holds exactly one piece of content. If two ideas are colliding inside one cell, the cell is wrong, the content is wrong, or both.

## Verification

Run a structural audit by overlaying the lattice as a 12-column visual. Any element drifting between columns is a defect, not a stylistic choice.
