+++
title = "Black-Body Spectra in the Laboratory"
date = "2026-02-05"
description = "Building a calibrated black-body source for spectroscopy."
tags = ["calibration", "spectroscopy", "thermal-radiation"]
+++

## The Source

A laboratory black body is a hollow cavity held at a known and uniform temperature. The interior surface of the cavity is coated with a high-emissivity material — graphite or a sintered ceramic doped with carbon — and the cavity opening is small relative to the interior dimensions. Radiation entering or leaving the cavity is, after multiple internal reflections, in thermal equilibrium with the cavity walls. The radiation that exits through the small aperture has a spectral radiance described, to within the absorptivity of the wall material, by the Planck distribution at the cavity temperature.

The source described here is a copper cavity, machined as a cylinder 80 millimeters long and 30 millimeters in diameter, with an exit aperture 4 millimeters across. The interior is roughened by bead-blasting and coated with a vacuum-deposited carbon layer, achieving an emissivity above 0.99 across the visible and near-infrared bands. The cavity is wrapped in a resistive heating element and instrumented with two type-K thermocouples — one at the front of the cavity, one at the rear — that allow the temperature gradient along the axis to be monitored and held below 0.5 kelvin during operation.

## Calibration

The cavity is calibrated against the Planck spectrum at three reference temperatures: 600 K, 800 K, and 1000 K. Each reference point requires the cavity to come to thermal equilibrium, which takes approximately 45 minutes after the heating element is set to a new value. The exit aperture is imaged onto the entrance slit of a grating spectrometer, and the spectrum is recorded across the 400 nm to 2.5 micron band using a silicon detector below 1.1 microns and an indium-gallium-arsenide detector above.

The recorded spectrum is divided by the theoretical Planck spectrum at the measured cavity temperature. The result is the wavelength-dependent response function of the spectrometer-detector system. Once this response function is known, any subsequent measurement of an unknown source can be corrected for the spectrometer response and reported in absolute spectral radiance units.

## Working Range

The cavity is rated for continuous operation between 400 K and 1100 K. Below 400 K, the radiation peak shifts longward of the InGaAs detector cutoff and the calibration becomes dominated by infrared physics that this apparatus does not handle. Above 1100 K, the copper cavity walls begin to soften and the emissivity coating starts to lose adhesion. For working temperatures above 1100 K, a graphite cavity in a vacuum enclosure is required.

The source is used primarily as a transfer standard. A laboratory needs only one calibrated black body, and that black body is then used to characterize every other detector and spectrometer in the laboratory. The calibration chain ends at the black body; everything else is measured relative to it.
