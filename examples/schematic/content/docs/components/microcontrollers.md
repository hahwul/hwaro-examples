+++
title = "Microcontrollers"
description = "MCU specifications, pin assignments, and operating parameters for the SC32F407 application processor."
weight = 1

[taxonomies]
tags = ["mcu", "arm", "cortex-m4"]
+++

# SC32F407 Microcontroller

The SC32F407 is an ARM Cortex-M4 based microcontroller operating at up to 168 MHz. It serves as the primary application processor on the Schematic reference board.

## General Description

The SC32F407 integrates a 32-bit ARM Cortex-M4 core with FPU, 1 MB of Flash memory, and 192 KB of SRAM. It provides a rich set of peripherals including USB OTG, Ethernet MAC, and a 12-bit ADC subsystem.

**Part Number:** SC32F407VGT6

## Key Features

- ARM Cortex-M4 core with single-precision FPU
- 168 MHz maximum clock frequency
- 1024 KB Flash / 192 KB SRAM
- 3x SPI, 3x I2C, 4x USART, 2x UART
- 2x USB OTG (FS + HS)
- Ethernet 10/100 MAC with IEEE 1588
- 3x 12-bit ADC (up to 24 channels)
- 2x 12-bit DAC
- 82 GPIO pins with 5V tolerance on select pins

## Absolute Maximum Ratings

| Parameter | Symbol | Min | Max | Unit |
|---|---|---|---|---|
| Supply voltage (VDD) | VDD | -0.3 | 4.0 | V |
| Input voltage (5V tolerant pins) | VIN | -0.3 | 5.5 | V |
| Input voltage (standard pins) | VIN | -0.3 | 4.0 | V |
| Output current (single pin) | IO | -- | 25 | mA |
| Total output current (all ports) | IOTOTAL | -- | 240 | mA |
| Storage temperature | TSTG | -65 | 150 | C |
| Junction temperature | TJ | -- | 105 | C |
| ESD (HBM) | VESD | -- | 2000 | V |

## Recommended Operating Conditions

| Parameter | Symbol | Min | Typ | Max | Unit |
|---|---|---|---|---|---|
| Supply voltage | VDD | 1.8 | 3.3 | 3.6 | V |
| Analog supply | VDDA | 1.8 | 3.3 | 3.6 | V |
| I/O supply | VDDIO | 1.65 | 3.3 | 3.6 | V |
| Operating temperature | TA | -40 | 25 | 85 | C |
| Clock frequency (max) | fHCLK | -- | -- | 168 | MHz |

## Power Consumption

| Mode | Condition | Typical | Unit |
|---|---|---|---|
| Run | 168 MHz, all peripherals on | 93 | mA |
| Run | 168 MHz, Flash on, peripherals off | 58 | mA |
| Sleep | 168 MHz, WFI | 28 | mA |
| Stop | Regulator low-power, RTC on | 0.35 | mA |
| Standby | RTC on, backup SRAM on | 2.4 | uA |

## Clock Configuration

The SC32F407 supports the following clock sources:

| Clock Source | Frequency Range | Accuracy | Purpose |
|---|---|---|---|
| HSE (crystal) | 4 - 26 MHz | Per crystal | System clock PLL input |
| HSI (internal RC) | 16 MHz | +/- 1% | Backup / fast startup |
| LSE (crystal) | 32.768 kHz | Per crystal | RTC, low-power timer |
| LSI (internal RC) | 32 kHz | +/- 10% | IWDG, RTC fallback |

The reference design uses an 8 MHz HSE crystal with PLL configured for 168 MHz SYSCLK, 42 MHz APB1, and 84 MHz APB2.

## Memory Map

| Address Range | Size | Region |
|---|---|---|
| 0x0000 0000 - 0x000F FFFF | 1 MB | Flash (aliased) |
| 0x0800 0000 - 0x080F FFFF | 1 MB | Flash |
| 0x1FFF 0000 - 0x1FFF 7FFF | 32 KB | System memory (bootloader) |
| 0x2000 0000 - 0x2002 FFFF | 192 KB | SRAM |
| 0x4000 0000 - 0x4007 FFFF | -- | APB1 peripherals |
| 0x4001 0000 - 0x4001 67FF | -- | APB2 peripherals |
| 0x4002 0000 - 0x4007 FFFF | -- | AHB1 peripherals |

## Package Information

| Parameter | Value |
|---|---|
| Package | LQFP-100 |
| Pin count | 100 |
| Body size | 14 x 14 mm |
| Lead pitch | 0.5 mm |
| Mounting | Surface mount |
| MSL | Level 3 (168 hours / 30C / 60% RH) |
| Marking | SC32F407VGT6 |

## Ordering Information

| Part Number | Flash | SRAM | Package | Temperature |
|---|---|---|---|---|
| SC32F407VGT6 | 1 MB | 192 KB | LQFP-100 | -40 to +85C |
| SC32F407VGT7 | 1 MB | 192 KB | LQFP-100 | -40 to +105C |
| SC32F407ZGT6 | 1 MB | 192 KB | LQFP-144 | -40 to +85C |
| SC32F407IGT6 | 1 MB | 192 KB | BGA-176 | -40 to +85C |
