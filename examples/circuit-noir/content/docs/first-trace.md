+++
title = "First Trace"
date = "2026-05-15"
weight = 2
description = "Light an LED, blink it on a 100ms cycle, read the GPIO state back over UART. The complete journey from blank board to verified output."
tags = ["quickstart"]
+++

This quickstart assumes you have a supported development board, a USB cable, and approximately twenty minutes. We use the **Nucleo-G031K8** as the reference board because it is widely available and inexpensive. Any board listed in [GPIO &amp; pin mapping](/docs/gpio/) will work with minor adjustments.

## step 1 — create the project

```bash
ohmic new my-first-trace --board nucleo-g031k8
cd my-first-trace
```

`ohmic new` produces a working `Cargo.toml`, a `memory.x` linker script tuned for the target, and a minimal `src/main.rs` that does nothing useful.

## step 2 — blink an LED

Open `src/main.rs` and replace its contents with:

```rust
#![no_std]
#![no_main]

use ohmic::prelude::*;
use ohmic::hal::stm32g0::{gpiob, rcc};

#[ohmic::main]
fn main() -> ! {
    let mut p = ohmic::take().unwrap();
    let mut led = p.gpiob.pb3.into_push_pull_output();

    loop {
        led.set_high();
        ohmic::delay_ms(100);
        led.set_low();
        ohmic::delay_ms(100);
    }
}
```

Build and flash the firmware:

```bash
ohmic flash
# Flashing nucleo-g031k8 ... 100% (8.2kb)
# Verified. Resetting.
```

The user LED on the Nucleo should now blink at 5 Hz. If it does not, run `ohmic doctor --board` to diagnose the USB connection.

## step 3 — read it back over UART

We will now add a simple UART line every cycle so we can see, on the host, what the firmware thinks it is doing. Add this above the loop:

```rust
let mut uart = p.usart1
    .with_pins((p.gpioa.pa9, p.gpioa.pa10))
    .config(115_200);
```

And inside the loop, print the LED state:

```rust
loop {
    led.set_high();
    writeln!(uart, "[{}ms] led=ON", ohmic::millis()).ok();
    ohmic::delay_ms(100);

    led.set_low();
    writeln!(uart, "[{}ms] led=OFF", ohmic::millis()).ok();
    ohmic::delay_ms(100);
}
```

Re-flash, then open the UART monitor:

```bash
ohmic trace --baud 115200
# [100ms] led=ON
# [200ms] led=OFF
# [300ms] led=ON
# ...
```

You now have a complete trace of what the firmware is doing, second by second. This is the loop we extend in the rest of the documentation.

## what just happened

The firmware you wrote is 4,180 bytes. It does not include an RTOS, an HAL crate from the vendor, or a runtime allocator. It compiles to a single `.elf` file that OHMIC flashes directly to the MCU.

> If you see `[ ? ]` in your trace output, the UART pins are not connected. Check that PA9 and PA10 are accessible on your board — the Nucleo exposes them on the ST-Link side of the morpho header.

When you are ready, the next document is [Configuration](/docs/configuration/), which covers how to set up multiple boards, multiple build profiles, and the cargo features that select which HAL submodules are compiled in.
