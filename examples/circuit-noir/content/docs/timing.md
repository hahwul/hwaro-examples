+++
title = "Timing Diagrams"
date = "2026-05-08"
weight = 4
description = "Setup, hold, and propagation specs for the supported buses. Read with an oscilloscope; verified against measured traces from the lab."
tags = ["reference"]
+++

Bus timing is the area where most embedded code goes wrong silently. The bus *appears* to work — the device responds, the data appears on the line — but a marginal setup time produces intermittent failures in production that are difficult to reproduce on the bench.

OHMIC ships measured timing specifications for every supported bus and every supported MCU. The numbers below are not transcribed from datasheets — they are measured on reference boards in our lab and re-measured for each silicon revision.

## SPI master mode — STM32G031

The default SPI configuration on the STM32G031, with `SPI1` clocked from APB1 at 16 MHz:

| Parameter | Symbol | Min | Typ | Max | Unit |
|---|---|---|---|---|---|
| Clock period | t_clk | 60 | 62.5 | – | ns |
| Clock high time | t_ch | 28 | 31 | – | ns |
| Clock low time | t_cl | 28 | 31 | – | ns |
| Setup, MOSI to SCK | t_su(MO) | – | 14 | – | ns |
| Hold, MOSI from SCK | t_h(MO) | 6 | – | – | ns |
| Propagation, SCK to MISO valid | t_v(MI) | – | 22 | 35 | ns |

The bus is read by the master on the rising edge of SCK in the default `MODE0` configuration. If your peripheral expects a different polarity, configure it via:

```rust
let spi = p.spi1
    .config(SpiConfig { mode: Mode::Mode1, .. })
    .with_pins((sck, miso, mosi));
```

## I²C standard mode

Standard-mode I²C (100 kHz) on the STM32G031, with the recommended 4.7kΩ pull-ups on a 3.3V rail:

| Parameter | Min | Typ | Max | Unit |
|---|---|---|---|---|
| Clock frequency | – | 100 | 100 | kHz |
| Setup, START condition | 4.7 | – | – | μs |
| Hold, START condition | 4.0 | – | – | μs |
| Setup, STOP condition | 4.7 | – | – | μs |
| Low period (SCL) | 4.7 | – | – | μs |
| High period (SCL) | 4.0 | – | – | μs |
| Bus free time between conditions | 4.7 | – | – | μs |

> If you are running an I²C bus at the edge of the standard, increase the pull-up strength. A 2.2kΩ resistor at 3.3V on a 100pF bus gives you about 220ns of rise time — well within standard-mode budget. The lab has reproduced intermittent failures on 10kΩ pull-ups at 25cm bus length; the bus is technically in spec but the rise time is too slow for reliable hold.

## UART, asynchronous mode

OHMIC's UART implementation uses 16x oversampling by default. The 1-bit time at common baud rates:

| Baud | 1-bit time | 16x sample period |
|---|---|---|
| 9,600 | 104.2 μs | 6.5 μs |
| 19,200 | 52.1 μs | 3.3 μs |
| 38,400 | 26.0 μs | 1.6 μs |
| 115,200 | 8.68 μs | 543 ns |
| 921,600 | 1.09 μs | 68 ns |

At 921,600 baud, the 16x sample period is 68 nanoseconds — close to the 60ns SPI clock period. If your application requires both a high-speed SPI bus and a 921,600-baud UART, allocate them to different APB buses or accept the marginal frame error rate.

## what we do not document here

OHMIC does not ship a timing analyzer. The numbers above are starting points. If you have a critical bus, capture the actual waveform with an oscilloscope at the load it will see in production. We have seen apparently-correct waveforms become marginal because the production board added a 6pF connector and a 2-inch trace that was not in the prototype.

The bench will lie to you. The oscilloscope will not.
