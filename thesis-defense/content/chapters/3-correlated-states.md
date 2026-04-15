+++
title = "Correlated Insulating States and Their Topological Classification"
description = "Self-consistent Hartree-Fock calculations reveal symmetry-broken ground states at integer fillings with nontrivial Chern numbers."
weight = 3
template = "post"
tags = ["correlated-states", "Hartree-Fock", "Chern-number", "insulator"]
categories = ["chapters"]
[extra]
chapter_number = "III"
+++

Building on the flat-band framework of Chapter II, we now include electron-electron interactions and determine the ground states at integer fillings of the moire flat bands using self-consistent Hartree-Fock calculations.

## Computational Approach

We project the Coulomb interaction onto the flat-band manifold and solve the resulting interacting problem using unrestricted Hartree-Fock theory on a 24 x 24 moire-reciprocal-space grid. The calculation is performed at each integer filling nu = -4, -3, ..., +3, +4, with the chemical potential adjusted to fix the charge per moire unit cell.

To access the full space of symmetry-breaking patterns, we initialize the self-consistent cycle with 200 random seed states per filling and select the lowest-energy converged solution.

## Results

| Filling (nu) | Ground State | Energy Gap (meV) | Chern Number | Key Symmetry Broken |
|--------------|-------------|------------------|-------------|-------------------|
| 0 (CNP) | Semimetal | 0 | 0 | None |
| +1 | QAH insulator | 3.2 | +1 | Time reversal |
| +2 | Valley-polarized insulator | 5.8 | 0 | Valley U(1) |
| +3 | QAH insulator | 2.1 | -1 | Time reversal |
| -2 | Kramers intervalley coherent | 4.4 | 0 | Translation |

The most striking finding is the quantum anomalous Hall (QAH) state at nu = +1 and nu = +3, where time-reversal symmetry is spontaneously broken, producing a nonzero Chern number without any external magnetic field. This prediction, if confirmed experimentally, would establish magic-angle TBG as a platform for topology driven purely by electron correlations.

## Stability Analysis

We assess the robustness of these states against:

- **Twist-angle disorder:** The QAH state at nu = +1 persists for angle variations up to +/- 0.05 degrees from the magic angle.
- **Strain:** Uniaxial strain of up to 0.3% preserves the insulating gap, though the Chern number can change sign for heterostrain exceeding 0.5%.
- **Temperature:** Mean-field estimates place the transition temperature at T_c approximately equal to 4--8 K, consistent with experimental observations of correlated gaps below 5 K.
