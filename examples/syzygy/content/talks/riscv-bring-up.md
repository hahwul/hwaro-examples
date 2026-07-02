+++
title = "RISC-V Bring-Up: From Reset Vector to Running Linux"
date = "2026-03-13"
weight = 4
description = "Everything that happens between power-on and a login prompt on a new RISC-V board, narrated from the reset vector up."
[extra]
kind = "talk"
time = "14:00"
duration = "45 min"
speaker = "Callum Reyes"
speaker_role = "Firmware engineer, Talvik Silicon"
room = "Annex"
day = "Day 02 — 13 March"
+++

Bring-up is the part of systems programming nobody teaches, because it is
different on every board and mostly learned from other people's crash
dumps. This talk walks one RISC-V board, in order, from the reset vector
to a login prompt, with every stage's failure mode demonstrated on stage.

<!-- more -->

## The stages, in the order they actually run

```text
reset vector (ROM, fixed address)
  -> ZSBL   zeroth-stage bootloader, minimal DRAM init
    -> SBI   supervisor binary interface (OpenSBI)
      -> U-Boot   (or a direct kernel jump for smaller boards)
        -> Linux kernel, S-mode
          -> init, PID 1
```

Most bring-up guides start at U-Boot because everything before it is
assumed to work. This talk starts at the reset vector, in M-mode, before
DRAM training has even finished, because that is where the boards Talvik
ships actually fail: a marginal DDR timing that only shows up at one
temperature, a clock tree misconfiguration that boots fine under JTAG and
hangs on cold power-on, and a PMP (physical memory protection) region
that was correct on paper and wrong in silicon.

## What the talk demonstrates live

A dev board on stage, a UART cable to a laptop, and a full boot captured
at 115200 baud with commentary on each stage transition. When SBI hands
off to the kernel, the talk pauses on the exact `mret` instruction that
performs the privilege drop from M-mode to S-mode, and explains what the
PMP configuration has to look like *before* that instruction executes or
the kernel gets an illegal instruction trap two lines into its own entry
point.

The closing section covers the failure that took Talvik's team three
weeks to find: a device tree that validated cleanly, booted a kernel that
looked healthy, and then wedged solid the first time the RTC driver
probed a register that did not exist on that die revision. The fix was
four lines. Finding it was not.
