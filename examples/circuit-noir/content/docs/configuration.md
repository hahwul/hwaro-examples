+++
title = "Configuration"
date = "2026-04-10"
weight = 8
description = "How to set up multiple boards, multiple build profiles, and the cargo features that select which HAL submodules are compiled in."
tags = ["quickstart"]
+++

Most OHMIC projects start as a single board and a single binary. Real projects rarely stay that simple. This document covers the configuration patterns we have seen survive the transition from "blink an LED" to "we ship this to a thousand customers."

## the workspace

OHMIC projects are Cargo workspaces. A typical layout for a multi-board project:

```
my-product/
├── Cargo.toml          # workspace root
├── crates/
│   ├── common/         # shared logic, no board-specific code
│   ├── board-rev1/     # firmware for revision 1 hardware
│   ├── board-rev2/     # firmware for revision 2 hardware
│   └── host-tools/     # CLI tools for the production line
└── ohmic.toml          # OHMIC-specific configuration
```

The `ohmic.toml` file is read by `ohmic flash`, `ohmic trace`, and the test runners. It is not read by Cargo. It contains board definitions, default build profiles, and the connection of human-readable names to USB serial numbers.

## ohmic.toml example

```toml
[[boards]]
name = "rev1-engineering"
chip = "stm32g031k8"
probe = "stlink"
serial = "066BFF555050846786103120"
default_profile = "dev"

[[boards]]
name = "rev2-production"
chip = "stm32g071cb"
probe = "jlink"
serial = "000600341234"
default_profile = "release"

[profiles.dev]
optimize = "debug"
log_level = "trace"
panic = "halt_with_uart_dump"

[profiles.release]
optimize = "speed"
log_level = "warn"
panic = "halt"
strip_symbols = true
```

You can then target a specific board by name:

```bash
ohmic flash --board rev2-production
ohmic trace --board rev1-engineering --baud 115_200
```

## cargo features

OHMIC's HAL is feature-gated. Enabling only the features you need reduces the compiled size of the toolchain support library.

| Feature | Adds |
|---|---|
| `stm32g0` | All STM32G0 family parts |
| `nrf52` | Nordic nRF52 family |
| `rp2350` | Raspberry Pi RP2350 |
| `uart` | UART driver |
| `spi` | SPI driver |
| `i2c` | I²C driver |
| `pwm` | PWM driver |
| `proto-framer` | Protocol layer framer |
| `proto-rpc` | Protocol layer RPC (requires `proto-framer`) |

A minimal board with only UART support:

```toml
[dependencies]
ohmic = { version = "2.04", default-features = false, features = ["stm32g0", "uart"] }
```

This produces a final binary around 4 kilobytes smaller than the default, which matters on the smaller parts.

## environment configuration

The OHMIC CLI reads configuration from three places, in order of precedence:

1. Command-line flags.
2. The `OHMIC_*` environment variables.
3. The `ohmic.toml` file at the project root.

For CI, we recommend setting environment variables explicitly rather than relying on the file. A typical CI setup:

```bash
export OHMIC_BOARD=rev2-production
export OHMIC_PROFILE=release
export OHMIC_PROBE=jlink
export OHMIC_PROBE_SERIAL=000600341234
ohmic flash
```

## what we have learned about configuration

The number of boards in your project will increase. The number of profiles will increase. The temptation to share files between boards will become irresistible.

Resist it for as long as you can. Shared files are how a working rev2 firmware accidentally ships to rev1 hardware. We have seen, more than once, a "harmless" refactor in `common/` produce a deployment that bricked production units in the field.

When you must share, share through well-defined trait boundaries — not through `#[cfg(feature = "rev1")]` blocks sprinkled across the codebase. The compile-time switches will defeat you.
