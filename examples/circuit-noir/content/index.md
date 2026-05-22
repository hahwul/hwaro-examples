+++
title = "Overview"
template = "index"
description = "Documentation for the OHMIC embedded toolchain. Built for engineers operating below the abstraction line."
+++

## what ohmic is

OHMIC is a thin, opinionated Rust toolchain for writing firmware directly to ARM Cortex-M0 / M4 / M33 microcontrollers. It does not abstract the silicon. It does not assume an RTOS. It compiles down to a single binary that fits in flash sectors as small as 14 kilobytes.

OHMIC is for the engineers who measure their own boards with an oscilloscope and trust what they see. If you want a framework that hides the registers from you, this documentation will frustrate you. If you want a toolchain that helps you write directly to those registers without hand-typing every offset, this is the place.

## what to read first

If you are evaluating OHMIC, read the **first trace** quickstart — it walks from a blank board to a verified blinking LED in about twenty minutes. If you are already an OHMIC user and need a specific reference, the sidebar is organized by hardware area. If something is missing, file an issue against the repository — the documentation is generated from the same source tree as the toolchain.

## what is unsupported

OHMIC does not target x86, RISC-V, or ESP32. We have no plans to add them. The toolchain is small because its target set is small. We would rather support 142 ARM Cortex-M parts well than 600 parts poorly.
