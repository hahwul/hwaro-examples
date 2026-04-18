+++
title = "Scanning Tunneling Spectroscopy of Magic-Angle Devices"
description = "Low-temperature STM/STS measurements on magic-angle TBG devices, revealing local density of states signatures consistent with correlated topological states."
weight = 4
template = "post"
tags = ["STM", "spectroscopy", "experiment", "magic-angle"]
categories = ["chapters"]
[extra]
chapter_number = "IV"
+++

This chapter presents scanning tunneling microscopy (STM) and spectroscopy (STS) measurements on magic-angle twisted bilayer graphene devices. The experiments were performed at T = 300 mK in a home-built dilution-refrigerator STM in the Watanabe group laboratory.

## Device Fabrication and Characterization

Devices were fabricated using the "tear and stack" technique with a polycarbonate/PDMS stamp. The twist angle was targeted at 1.08 degrees and confirmed by:

- Moire wavelength from STM topography: 12.8 +/- 0.3 nm (expected: 12.8 nm for 1.08 degrees)
- Transport: resistivity peak at nu = +2 filling with T_onset approximately equal to 4 K
- Landau fan diagram: Hofstadter butterfly features consistent with 4 flat bands per spin-valley flavor

## Spectroscopic Results

Differential conductance dI/dV spectra were acquired on a 64 x 64 grid spanning 4 moire unit cells at each gate voltage.

Key findings:

1. **Flat band peaks:** Two sharp conductance peaks separated by 8 +/- 2 meV, corresponding to the van Hove singularities of the flat bands. Width limited by disorder (approximately 3 meV broadening).

2. **Correlated gap at nu = +2:** A hard gap of 5.2 +/- 0.8 meV opens at charge neutrality of the flat bands (nu = +2 measured from CNP), consistent with the valley-polarized insulator predicted in Chapter III.

3. **Spatial modulation:** The LDOS at energies within the gap shows a modulation with the moire periodicity, with intensity concentrated at the AA stacking regions -- precisely where the flat-band wavefunctions are localized.

4. **Edge signatures:** Near a step edge in the hBN substrate (which terminates the moire region), we observe in-gap states that decay into the bulk over approximately 2--3 moire wavelengths. These are consistent with the topologically-protected edge modes predicted for the QAH state at neighboring fillings.

## Comparison with Theory

Simulated LDOS maps from the Hartree-Fock ground states of Chapter III show quantitative agreement with the experimental data at nu = +2, reproducing the spatial pattern, gap magnitude, and spectral line shape within the experimental resolution.

At nu = +1, the experimental signal is weaker and partially masked by disorder. The predicted QAH gap of 3.2 meV is near the noise floor of our measurement. More controlled devices with reduced disorder are needed for definitive confirmation.
