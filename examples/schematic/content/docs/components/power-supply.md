+++
title = "Power Supply"
description = "Power regulation circuitry including the LP3520 buck converter and LP1117 LDO voltage regulator."
weight = 3

[taxonomies]
tags = ["power", "regulator", "buck"]
+++

# Power Regulation

The Schematic reference board uses a two-stage power regulation topology. An LP3520 synchronous buck converter steps down the input voltage to 3.3V, and an LP1117 LDO provides a clean 1.8V analog supply for sensitive components.

## System Power Architecture

| Rail | Voltage | Source | Load |
|---|---|---|---|
| VIN | 5.0V (USB) or 7-12V (barrel jack) | External | LP3520 input |
| VCC_3V3 | 3.3V | LP3520 buck converter | MCU digital, sensors, I/O |
| VCC_1V8 | 1.8V | LP1117 LDO (from 3.3V rail) | MCU analog, ADC reference |
| VBAT | 3.0V (coin cell) | CR2032 | RTC backup |

---

## LP3520 Synchronous Buck Converter

The LP3520 is a high-efficiency synchronous buck converter with integrated MOSFETs, capable of delivering up to 3A continuous output current.

**Part Number:** LP3520MRQR

### Key Specifications

| Parameter | Min | Typ | Max | Unit |
|---|---|---|---|---|
| Input voltage | 4.5 | -- | 18 | V |
| Output voltage (adjustable) | 0.8 | -- | VIN | V |
| Output current | -- | -- | 3.0 | A |
| Switching frequency | 1.0 | 1.2 | 1.4 | MHz |
| Efficiency (3.3V, 1A, VIN=5V) | -- | 92 | -- | % |
| Efficiency (3.3V, 1A, VIN=12V) | -- | 88 | -- | % |
| Quiescent current | -- | 30 | 50 | uA |
| Shutdown current | -- | 0.1 | 1.0 | uA |
| Output voltage accuracy | -1.5 | -- | +1.5 | % |
| Operating temperature | -40 | -- | +125 | C |

### Application Circuit (3.3V Output)

The following external components are required for 3.3V / 3A output:

| Component | Designator | Value | Package | Part Number |
|---|---|---|---|---|
| Input capacitor | C1 | 22 uF / 25V X5R | 1206 | GRM31CR61E226ME15 |
| Input capacitor | C2 | 100 nF / 25V X7R | 0402 | GRM155R71E104KA87 |
| Output capacitor | C3 | 22 uF / 10V X5R | 1206 | GRM31CR61A226ME15 |
| Output capacitor | C4 | 22 uF / 10V X5R | 1206 | GRM31CR61A226ME15 |
| Inductor | L1 | 2.2 uH / 4A | 4020 | IHLP4040DZER2R2M11 |
| Feedback resistor (top) | R1 | 100 kohm / 1% | 0402 | -- |
| Feedback resistor (bottom) | R2 | 32 kohm / 1% | 0402 | -- |
| Bootstrap capacitor | C5 | 100 nF / 16V X7R | 0402 | -- |
| Soft-start capacitor | C6 | 10 nF / 16V X7R | 0402 | -- |

### Output Voltage Setting

Output voltage is set by the external resistor divider:

`VOUT = 0.8V x (1 + R1/R2)`

For 3.3V output: R1 = 100 kohm, R2 = 32 kohm (closest standard value: 31.6 kohm).

### Pin Description

| Pin | Name | Type | Description |
|---|---|---|---|
| 1 | VIN | Power | Input supply voltage |
| 2 | VIN | Power | Input supply voltage (connect to Pin 1) |
| 3 | EN | Input | Enable (active high, internal pull-up) |
| 4 | SS | Input | Soft-start timing capacitor |
| 5 | FB | Input | Feedback voltage input (0.8V reference) |
| 6 | PGOOD | Output | Power good indicator (open-drain, active high) |
| 7 | BST | Power | Bootstrap supply for high-side driver |
| 8 | SW | Output | Switch node output |
| 9 | SW | Output | Switch node output (connect to Pin 8) |
| 10 | PGND | Ground | Power ground |
| 11 | PGND | Ground | Power ground (connect to Pin 10) |
| 12 | AGND | Ground | Analog ground |
| PAD | EPAD | Ground | Exposed pad (connect to ground plane) |

### Thermal Information

| Parameter | Value | Unit |
|---|---|---|
| Junction-to-ambient thermal resistance | 45 | C/W |
| Junction-to-case thermal resistance | 5.2 | C/W |
| Maximum junction temperature | 150 | C |
| Recommended max power dissipation (85C amb) | 1.44 | W |

---

## LP1117 Low Dropout Regulator

The LP1117 is a fixed-output, low-dropout linear regulator providing a stable 1.8V supply for analog circuits.

**Part Number:** LP1117DTXR-1.8

### Key Specifications

| Parameter | Min | Typ | Max | Unit |
|---|---|---|---|---|
| Input voltage | 2.5 | -- | 15 | V |
| Output voltage | 1.764 | 1.800 | 1.836 | V |
| Output current | -- | -- | 800 | mA |
| Dropout voltage (800 mA) | -- | 1.1 | 1.3 | V |
| Quiescent current | -- | 5 | 10 | mA |
| Output noise (10 Hz - 100 kHz) | -- | 30 | -- | uVrms |
| PSRR (120 Hz) | 60 | 75 | -- | dB |
| Line regulation | -- | 0.01 | 0.04 | %/V |
| Load regulation | -- | 0.1 | 0.4 | % |
| Operating temperature | -40 | -- | +125 | C |

### Pin Description

| Pin | Name | Type | Description |
|---|---|---|---|
| 1 | ADJ/GND | Ground | Ground (fixed output version) |
| 2 | VOUT | Output | Regulated output voltage |
| 3 | VIN | Input | Input supply voltage |
| TAB | TAB | Ground | Metal tab (connect to ground plane for heatsink) |

### Application Notes

- Place a 10 uF ceramic capacitor (X5R or X7R) on both input and output for stability
- Ensure input voltage is at least 3.1V for proper regulation (VIN >= VOUT + dropout)
- Route the 1.8V analog supply with dedicated traces to avoid coupling digital noise
- Use a solid ground plane under the regulator and connect the exposed tab

### Ordering Information

| Part Number | Output Voltage | Package | Current |
|---|---|---|---|
| LP1117DTXR-1.8 | 1.8V | SOT-223 | 800 mA |
| LP1117DTXR-2.5 | 2.5V | SOT-223 | 800 mA |
| LP1117DTXR-3.3 | 3.3V | SOT-223 | 800 mA |
| LP1117IMPX-1.8 | 1.8V | SOT-223-4 | 1000 mA |
