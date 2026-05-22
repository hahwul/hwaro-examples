+++
title = "GPIO & Pin Mapping"
date = "2026-05-10"
weight = 3
description = "Every supported package, every pin, every alternate function — generated directly from the manufacturer reference, not transcribed."
tags = ["reference"]
+++

OHMIC ships pin mappings for every supported MCU. The mappings are generated from the manufacturer's CMSIS pack files and are regenerated for each release. They are not transcribed by hand, which means that pin number errata in the source are reflected in OHMIC.

## addressing pins

Every GPIO pin is addressable by a name of the form `gpio<port>.p<port><pin>`:

```rust
// Pin 3 on Port B → blue LED on Nucleo-G031K8
let pb3 = p.gpiob.pb3;

// Pin 5 on Port A → user button on most Nucleo boards
let pa5 = p.gpioa.pa5;
```

The names are stable across MCU families. `pa5` on an STM32 and `pa5` on an nRF52 are different pins on different silicon, but they are accessed with the same identifier in your code.

## supported packages

OHMIC supports 142 MCU parts across 11 families. The full mapping for each part is queryable from the CLI:

```bash
ohmic pins nucleo-g031k8
ohmic pins --search "uart"
ohmic pins --filter "alt=spi1_sck"
```

## alternate functions

Most pins support multiple alternate functions. OHMIC ships a complete alternate-function table for every supported part. The example below shows the alternates available on PA9 on the STM32G031:

| Pin | AF0 | AF1 | AF2 | AF3 | AF4 | AF5 |
|---|---|---|---|---|---|---|
| PA9 | TIM1_CH2 | I2C1_SCL | USART1_TX | EVENTOUT | – | TIM17_BKIN |

The function is selected by your code at compile time. There is no run-time AF switcher. The compiler will reject code that tries to use a pin for an alternate function it does not support.

## ground rules

Three ground rules govern every pin operation:

1. **Pins are owned.** A pin can be used by exactly one peripheral at a time. The borrow checker enforces this.
2. **Pins are typed.** A pin in `Output<PushPull>` mode is a different type from the same pin in `Input<Floating>` mode. Mode transitions are explicit.
3. **No hidden globals.** There is no `Pin::new()` constructor that produces a pin out of thin air. Every pin originates from the central peripheral set returned by `ohmic::take()`.

## reading the manufacturer reference

OHMIC's GPIO tables are not a replacement for the manufacturer reference manual. If you need to understand the timing of a particular alternate function (rise time, drive strength, hysteresis), consult the reference. OHMIC links to the relevant section of each reference manual on every pin's individual page:

```bash
ohmic pins pa9 --explain
# PA9 — Port A, Pin 9
# Drive strength: 8mA (high), 4mA (low)
# Reference: RM0444 §6.4.11 (STMicroelectronics)
# ↗ https://www.st.com/...
```

The link is the canonical source. We are not.
