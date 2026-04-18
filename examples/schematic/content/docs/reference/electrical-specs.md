+++
title = "Electrical Specifications"
description = "Board-level electrical characteristics, DC parameters, AC timing, and environmental ratings."
weight = 2

[taxonomies]
tags = ["electrical", "specs", "compliance"]
+++

# Electrical Specifications

This document provides the board-level electrical characteristics for the Schematic Rev 3.2 reference design, including DC parameters, AC timing, and environmental ratings.

## DC Characteristics

### Power Supply Requirements

| Parameter | Symbol | Min | Typ | Max | Unit |
|---|---|---|---|---|---|
| USB input voltage | VUSB | 4.5 | 5.0 | 5.5 | V |
| Barrel jack input voltage | VIN | 7.0 | 12.0 | 15.0 | V |
| 3.3V rail voltage | VCC_3V3 | 3.234 | 3.300 | 3.366 | V |
| 1.8V rail voltage | VCC_1V8 | 1.764 | 1.800 | 1.836 | V |
| 3.3V rail max current | ICC_3V3 | -- | -- | 2.5 | A |
| 1.8V rail max current | ICC_1V8 | -- | -- | 500 | mA |
| Backup battery voltage | VBAT | 2.0 | 3.0 | 3.6 | V |

### GPIO DC Parameters (3.3V Domain)

| Parameter | Symbol | Condition | Min | Max | Unit |
|---|---|---|---|---|---|
| Input low voltage | VIL | -- | -0.3 | 0.8 | V |
| Input high voltage | VIH | -- | 2.0 | 3.6 | V |
| Input low voltage (5V tolerant) | VIL_FT | -- | -0.3 | 0.8 | V |
| Input high voltage (5V tolerant) | VIH_FT | -- | 2.0 | 5.5 | V |
| Output low voltage | VOL | IOL = 8 mA | -- | 0.4 | V |
| Output high voltage | VOH | IOH = -8 mA | 2.4 | -- | V |
| Input leakage current | ILK | 0 < VIN < VDD | -- | 1 | uA |
| Internal pull-up resistance | RPU | -- | 30 | 50 | kohm |
| Internal pull-down resistance | RPD | -- | 30 | 50 | kohm |

### ADC Characteristics

| Parameter | Symbol | Min | Typ | Max | Unit |
|---|---|---|---|---|---|
| Resolution | -- | -- | 12 | -- | bits |
| Integral nonlinearity | INL | -- | +/- 1.5 | +/- 3 | LSB |
| Differential nonlinearity | DNL | -- | +/- 0.8 | +/- 1.5 | LSB |
| Total unadjusted error | TUE | -- | +/- 2 | +/- 5 | LSB |
| Offset error (after cal) | EO | -- | +/- 1 | +/- 3 | LSB |
| Gain error (after cal) | EG | -- | +/- 1 | +/- 3 | LSB |
| Conversion time | tCONV | -- | 1.0 | -- | us |
| Sampling rate (max) | fSAMPLE | -- | -- | 2.4 | MSPS |
| Input impedance | ZIN | -- | -- | 6 | kohm |
| Reference voltage | VREF | 1.8 | -- | VDDA | V |

### DAC Characteristics

| Parameter | Symbol | Min | Typ | Max | Unit |
|---|---|---|---|---|---|
| Resolution | -- | -- | 12 | -- | bits |
| Integral nonlinearity | INL | -- | +/- 1 | +/- 2 | LSB |
| Differential nonlinearity | DNL | -- | +/- 0.5 | +/- 1 | LSB |
| Output voltage range | VDAC | 0 | -- | VDDA | V |
| Settling time (1 LSB) | tSETTLE | -- | 3 | -- | us |
| Output impedance | ZOUT | -- | 15 | -- | kohm |
| Output current | IOUT | -- | -- | 200 | uA |

---

## AC Timing

### I2C Bus Timing (Standard / Fast Mode)

| Parameter | Standard Mode | Fast Mode | Unit |
|---|---|---|---|
| SCL clock frequency | 0 - 100 | 0 - 400 | kHz |
| SCL low time | 4.7 (min) | 1.3 (min) | us |
| SCL high time | 4.0 (min) | 0.6 (min) | us |
| SDA setup time | 250 (min) | 100 (min) | ns |
| SDA hold time | 0 (min) | 0 (min) | ns |
| Start condition setup | 4.7 (min) | 0.6 (min) | us |
| Stop condition setup | 4.0 (min) | 0.6 (min) | us |
| Bus free time | 4.7 (min) | 1.3 (min) | us |
| Rise time | 1000 (max) | 300 (max) | ns |
| Fall time | 300 (max) | 300 (max) | ns |

### SPI Bus Timing

| Parameter | Symbol | Min | Max | Unit |
|---|---|---|---|---|
| SCK frequency | fSCK | -- | 42 | MHz |
| SCK high time | tSCKH | 10 | -- | ns |
| SCK low time | tSCKL | 10 | -- | ns |
| MOSI setup time | tMSU | 5 | -- | ns |
| MOSI hold time | tMHD | 5 | -- | ns |
| MISO valid after SCK | tMV | -- | 12 | ns |
| CS to SCK setup | tCSSU | 10 | -- | ns |
| SCK to CS hold | tCSHD | 10 | -- | ns |

### UART Timing

| Parameter | Value | Unit |
|---|---|---|
| Supported baud rates | 9600, 19200, 38400, 57600, 115200, 230400, 460800, 921600 | bps |
| Baud rate accuracy | +/- 0.1 | % |
| Start bit detection | 1/16 bit sampling | -- |
| Data bits | 7, 8, or 9 | bits |
| Stop bits | 0.5, 1, 1.5, or 2 | bits |
| Parity | None, Even, Odd | -- |

---

## Environmental Ratings

### Operating Conditions

| Parameter | Min | Typ | Max | Unit |
|---|---|---|---|---|
| Ambient temperature | -40 | 25 | +85 | C |
| Relative humidity (non-condensing) | 5 | -- | 85 | %RH |
| Altitude | -- | -- | 3000 | m |
| Vibration (random, 10-500 Hz) | -- | -- | 2.0 | g RMS |

### Storage Conditions

| Parameter | Min | Max | Unit |
|---|---|---|---|
| Temperature | -65 | +150 | C |
| Relative humidity | 5 | 90 | %RH |

### Reliability Data

| Test | Standard | Condition | Duration | Result |
|---|---|---|---|---|
| High-temperature operating life | JESD22-A108 | 85C, VDD = 3.6V | 1000 hours | Pass |
| Temperature cycling | JESD22-A104 | -40C to +125C | 1000 cycles | Pass |
| Moisture sensitivity | J-STD-020 | MSL 3, 260C reflow | -- | Pass |
| ESD (HBM) | ANSI/ESDA/JEDEC JS-001 | All pins | -- | 2 kV min |
| ESD (CDM) | ANSI/ESDA/JEDEC JS-002 | All pins | -- | 500 V min |
| Latch-up | JESD78 | 100 mA, 125C | -- | Pass |

---

## Board Physical Specifications

| Parameter | Value |
|---|---|
| PCB dimensions | 68 mm x 42 mm |
| PCB thickness | 1.6 mm |
| PCB layers | 4 |
| Layer stackup | Signal / Ground / Power / Signal |
| Copper weight (outer) | 1 oz (35 um) |
| Copper weight (inner) | 0.5 oz (17.5 um) |
| Surface finish | ENIG (Electroless Nickel Immersion Gold) |
| Solder mask | Green, LPI |
| Silkscreen | White |
| Minimum trace width | 0.15 mm (6 mil) |
| Minimum trace spacing | 0.15 mm (6 mil) |
| Minimum via drill | 0.2 mm (8 mil) |
| Controlled impedance (50 ohm SE) | 0.22 mm trace / 0.12 mm prepreg |
| Controlled impedance (90 ohm diff) | 0.12 mm trace / 0.15 mm space |
| Board weight | 12 g |
| Mounting holes | 4x M2.5, 3.2 mm diameter |
