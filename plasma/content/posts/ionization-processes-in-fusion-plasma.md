+++
title = "Ionization Processes in Fusion Plasma"
date = 2026-04-05
description = "How neutral atoms become plasma: the atomic physics of ionization, recombination, and charge exchange in magnetic fusion environments."
[taxonomies]
tags = ["ionization", "atomic-physics", "plasma-physics", "diagnostics"]
categories = ["Fundamentals"]
+++

# Ionization Processes in Fusion Plasma

At the most fundamental level, plasma is created through ionization -- the removal of one or more electrons from a neutral atom. In the context of magnetic fusion, understanding ionization processes is essential not only for creating and fueling the plasma, but also for interpreting diagnostic measurements and managing the interaction between the hot core plasma and the cooler edge regions.

## Electron Impact Ionization

The dominant ionization mechanism in fusion plasmas is electron impact ionization, in which a free electron collides with a neutral atom and transfers enough energy to liberate a bound electron:

```
e- + A -> A+ + 2e-
```

The probability of this process -- quantified by the ionization cross-section -- depends on the energy of the incident electron relative to the ionization potential of the target atom. For hydrogen, the ionization energy is 13.6 electron volts. The cross-section rises steeply above threshold, peaks around 50-100 eV, and then decreases slowly at higher energies as the fast electron spends less time in the vicinity of the atom.

In the hot core of a fusion plasma, where electron temperatures reach tens of kiloelectron volts, hydrogen is fully ionized. However, heavier impurity species such as carbon, nitrogen, oxygen, tungsten, and iron have much higher ionization potentials for their inner electrons. Tungsten, for example, is not fully stripped of its 74 electrons until temperatures approach 100 keV. In practice, tungsten ions in the core plasma exist in very high charge states -- W60+ to W70+ -- each with a characteristic spectral signature.

## Photoionization

In laboratory fusion plasmas, photoionization -- ionization by photon absorption -- is generally a secondary process. The radiation field inside a tokamak is not intense enough to compete with collisional ionization for most species. However, photoionization plays a role in certain diagnostic techniques and becomes significant in astrophysical plasmas where intense radiation fields are present.

## Recombination

The inverse of ionization is recombination, in which a free electron is captured by an ion. Three-body recombination, where two electrons interact with an ion and one is captured, dominates at high densities and low temperatures. Radiative recombination, where the excess energy is emitted as a photon, dominates at lower densities.

The balance between ionization and recombination determines the charge state distribution of each element in the plasma. In the core, where temperatures are highest, ionization dominates and atoms are highly stripped. Moving toward the cooler edge, recombination becomes increasingly important, and the charge state distribution shifts downward.

## Charge Exchange

Charge exchange is a process in which an electron is transferred from a neutral atom to an ion during a close collision:

```
A+ + B -> A + B+
```

In fusion plasmas, charge exchange between energetic hydrogen ions and injected neutral hydrogen atoms is of particular importance. The resulting energetic neutral atoms are no longer confined by the magnetic field and escape the plasma in straight lines. This is the basis of charge exchange recombination spectroscopy (CXRS), one of the most powerful diagnostic tools in fusion research.

By injecting a beam of neutral atoms into the plasma and observing the light emitted when charge exchange creates excited neutrals, physicists can measure the temperature, rotation velocity, and impurity density profiles with excellent spatial and temporal resolution.

## The Edge Plasma: Where Ionization Physics Matters Most

The boundary between the hot plasma core and the material walls of the vacuum vessel is a region of extraordinary complexity. Here, the temperature drops from kiloelectron volts to just a few electron volts over a distance of centimeters. Neutral atoms recycled from the walls must be ionized before they can be confined by the magnetic field, and the details of this ionization process determine the fueling efficiency and edge density profile.

The "ionization front" -- the location where recycled neutrals are predominantly ionized -- plays a critical role in determining the operating regime of the plasma edge. In detached divertor operation, a regime sought for future reactors, the ionization front moves away from the material surfaces, and the plasma near the walls cools to temperatures where radiation and charge exchange dissipate the incoming heat flux before it reaches the solid surfaces.

## Spectroscopic Signatures

Each ionization and recombination event is accompanied by the emission or absorption of light at characteristic wavelengths. The spectral lines emitted by partially ionized atoms serve as a rich source of information about the plasma:

- **Line ratios** between different transitions of the same ion reveal the electron temperature and density.
- **Doppler broadening** of spectral lines indicates the ion temperature.
- **Doppler shifts** reveal bulk plasma rotation and flows.
- **Line intensities** of impurity species quantify their concentrations in the plasma.

The field of plasma spectroscopy is built on the atomic physics of ionization and excitation. Every photon that escapes the plasma carries information, and the art of plasma diagnostics lies in decoding that information to build a complete picture of the plasma state.

## Toward Better Models

Modern fusion codes model the atomic physics of ionization using large databases of cross-sections and rate coefficients, such as the ADAS (Atomic Data and Analysis Structure) database. These models track dozens of charge states for each element and hundreds of individual atomic transitions.

As fusion devices grow larger and approach reactor conditions, the accuracy of these atomic physics models becomes increasingly important. The interplay between plasma transport, radiation, and ionization balance determines the operating boundaries of the machine -- and ultimately whether the plasma burns steadily or succumbs to radiative collapse.

Understanding ionization is understanding the birth and death of the plasma state itself.
