+++
title = "About OHMIC"
description = "Who builds and maintains the OHMIC toolchain."
+++

## origin

OHMIC began in 2019 as an internal tool at a hardware company that grew tired of waiting for vendor SDKs to catch up to silicon. The first release covered exactly three parts: an STM32F0, an STM32F1, and a Nordic nRF52832. The toolchain was open-sourced in 2021 after a customer asked, through gritted teeth, why they had to maintain a fork of the internal tool just to use the boards they had bought.

Today OHMIC supports 142 ARM Cortex-M parts and has more contributors than the original engineering team had employees.

## people

OHMIC is maintained by a core team of five engineers and a rotating group of about thirty volunteer contributors who handle hardware-specific support. Hardware vendor relationships are managed by a separate community liaison who is not paid by the vendors. We turn down sponsorship money that comes with strings; we accept sponsorship money that does not.

| Role | Maintainer |
|---|---|
| Project lead | I. Park |
| Core compiler | M. Tanaka |
| HAL generator | A. Park |
| Documentation | S. Hwang |
| Release engineering | R. Choi |

## what we will not do

- We will not add a JavaScript runtime to the toolchain.
- We will not ship telemetry, even opt-in.
- We will not add a graphical IDE — there are good ones already.
- We will not target FPGAs. We respect them. They are not our problem.

## license

The toolchain is dual-licensed under MIT and Apache-2.0. The reference documentation is licensed under CC BY 4.0. The vendor-provided datasheets we link to are not ours to license, but the tables we have transcribed from them are CC0.

## funding

OHMIC is funded by direct sponsorship from six hardware companies and a small open-collective pool. Yearly budget is publicly posted in the repository.

If your company uses OHMIC in production and wants to support it, [open a sponsorship issue](https://github.com/).
