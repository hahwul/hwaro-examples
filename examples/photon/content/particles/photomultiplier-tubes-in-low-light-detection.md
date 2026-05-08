+++
title = "Photomultiplier Tubes in Low-Light Detection"
date = "2026-03-11"
description = "Working notes on PMT operation, dark current, and single-photon counting."
tags = ["pmt", "instrumentation", "single-photon"]
+++

## The Tube

A photomultiplier tube is a vacuum device built around a single principle: the ability to multiply a single photoelectron into a measurable current pulse through a chain of secondary emission stages. The front face of the tube is a transparent window — usually borosilicate glass for the visible band, ultraviolet-grade quartz for shorter wavelengths — coated on its inner surface with a thin photocathode. The photocathode is a low-work-function semiconductor, typically a multialkali compound such as Sb-Na-K-Cs, that emits an electron into the vacuum when struck by an incident photon of sufficient energy.

Behind the photocathode, the tube contains a series of dynodes, typically eight to fourteen of them, held at progressively higher voltages by a resistive divider. A photoelectron emitted from the photocathode is accelerated toward the first dynode, where it strikes the dynode surface with enough kinetic energy to liberate four to six secondary electrons. Each of those is accelerated to the next dynode, where the multiplication repeats. The final dynode delivers a charge pulse to the anode that is, on average, 10^6 to 10^7 times larger than the initial single electron.

## Dark Current

The dominant noise source in a PMT operating at room temperature is thermionic emission from the photocathode. The same low work function that makes the photocathode efficient at converting visible photons into photoelectrons also allows it to emit thermally excited electrons in the absence of any incident light. Each of these thermal electrons enters the dynode chain and produces an output pulse indistinguishable in shape from a real photoelectron pulse.

For a multialkali photocathode at 22 degrees Celsius, the thermal electron emission rate is on the order of 10^3 to 10^4 electrons per square centimeter per second. The rate falls roughly exponentially with temperature; cooling the photocathode to −20 degrees Celsius reduces the dark count by approximately three orders of magnitude. For experiments that require single-photon sensitivity, thermoelectric cooling of the photocathode is standard practice.

## Single-Photon Counting

In single-photon counting mode, the PMT is operated as a digital device. Each output pulse is amplified, discriminated against a fixed threshold, and counted. The threshold is set well above the typical electronic noise floor and below the median pulse height of single-photon events. Pulses smaller than the threshold are rejected as noise; pulses larger than the threshold are counted as photon detections.

The detected count rate, after correction for dark counts, is a direct measurement of the photon flux at the photocathode. The minimum detectable flux is set by the dark count rate and the available integration time. For a cooled bialkali photocathode and a one-second integration window, single-photon detection sensitivities below 100 photons per second per square centimeter are routinely achieved. This is the regime in which low-light imaging, fluorescence spectroscopy, and astrophysical photon counting all operate.
