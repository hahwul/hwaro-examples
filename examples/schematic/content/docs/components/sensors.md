+++
title = "Sensors"
description = "Sensor module specifications including the SX9500 environmental sensor and AX2150 inertial measurement unit."
weight = 2

[taxonomies]
tags = ["sensor", "i2c", "imu"]
+++

# Sensor Modules

The Schematic reference board integrates two sensor modules: the SX9500 environmental sensor for temperature, humidity, and barometric pressure, and the AX2150 6-axis inertial measurement unit.

## SX9500 Environmental Sensor

The SX9500 is a digital environmental sensor that combines temperature, humidity, and barometric pressure measurement in a single 2.5 x 2.5 mm LGA package.

**Part Number:** SX9500-BAGR

### Key Specifications

| Parameter | Min | Typ | Max | Unit |
|---|---|---|---|---|
| Supply voltage | 1.71 | 1.8 | 3.6 | V |
| Supply current (measuring) | -- | 340 | 510 | uA |
| Supply current (sleep) | -- | 0.15 | 0.40 | uA |
| Temperature range | -40 | -- | +85 | C |
| Temperature accuracy | -- | +/- 0.5 | +/- 1.0 | C |
| Temperature resolution | -- | 0.01 | -- | C |
| Humidity range | 0 | -- | 100 | %RH |
| Humidity accuracy | -- | +/- 3 | +/- 5 | %RH |
| Pressure range | 300 | -- | 1100 | hPa |
| Pressure accuracy (abs) | -- | +/- 1.0 | -- | hPa |

### Interface

The SX9500 communicates via I2C with the following parameters:

| Parameter | Value |
|---|---|
| Interface | I2C |
| I2C address | 0x76 (SDO = GND), 0x77 (SDO = VDD) |
| Clock speed | Up to 3.4 MHz |
| Data format | 20-bit (temperature, pressure), 16-bit (humidity) |
| Interrupt output | Active low, open-drain |

### Pin Description

| Pin | Name | Type | Description |
|---|---|---|---|
| 1 | VDD | Power | Supply voltage input |
| 2 | GND | Ground | Ground reference |
| 3 | SCL | Input | I2C clock |
| 4 | SDA | I/O | I2C data |
| 5 | CSB | Input | Chip select (tie to VDD for I2C) |
| 6 | SDO | Input | I2C address bit (GND = 0x76, VDD = 0x77) |
| 7 | INT | Output | Interrupt output (active low, open-drain) |
| 8 | GND | Ground | Exposed pad (connect to ground plane) |

### Measurement Modes

| Mode | Duration | Current | Description |
|---|---|---|---|
| Normal | 70 ms | 340 uA | All three sensors measured |
| Forced | On demand | 340 uA | Single measurement, return to sleep |
| Sleep | -- | 0.15 uA | No measurements, registers accessible |
| Pressure only | 25 ms | 270 uA | Temperature + pressure |
| Humidity only | 40 ms | 340 uA | Temperature + humidity |

---

## AX2150 Inertial Measurement Unit

The AX2150 is a 6-axis IMU combining a 3-axis accelerometer and 3-axis gyroscope. It features a programmable digital low-pass filter and a 1024-byte FIFO buffer.

**Part Number:** AX2150-ESQR

### Key Specifications

| Parameter | Min | Typ | Max | Unit |
|---|---|---|---|---|
| Supply voltage | 1.71 | 1.8 | 3.6 | V |
| I/O voltage | 1.2 | -- | 3.6 | V |
| Supply current (full rate) | -- | 3.2 | 4.0 | mA |
| Supply current (sleep) | -- | 6.5 | 10 | uA |
| Operating temperature | -40 | -- | +85 | C |

### Accelerometer Specifications

| Parameter | Value | Unit |
|---|---|---|
| Measurement range | +/- 2, 4, 8, 16 | g |
| Sensitivity (2g range) | 16384 | LSB/g |
| Noise density | 100 | ug/sqrt(Hz) |
| Output data rate | 1 - 8000 | Hz |
| Bandwidth | 0.5 - 4000 | Hz |
| Zero-g offset | +/- 40 | mg |
| Cross-axis sensitivity | +/- 2 | % |

### Gyroscope Specifications

| Parameter | Value | Unit |
|---|---|---|
| Measurement range | +/- 250, 500, 1000, 2000 | dps |
| Sensitivity (250 dps) | 131 | LSB/dps |
| Noise density | 0.005 | dps/sqrt(Hz) |
| Output data rate | 4 - 8000 | Hz |
| Zero-rate offset | +/- 5 | dps |
| Cross-axis sensitivity | +/- 2 | % |

### Interface

| Parameter | Value |
|---|---|
| Digital interface | I2C / SPI |
| I2C address | 0x68 (AD0 = GND), 0x69 (AD0 = VDD) |
| I2C clock speed | Up to 400 kHz |
| SPI clock speed | Up to 10 MHz |
| SPI mode | CPOL=0, CPHA=0 (Mode 0) or CPOL=1, CPHA=1 (Mode 3) |
| FIFO depth | 1024 bytes |
| Interrupt outputs | 2 (configurable, push-pull or open-drain) |

### Pin Description

| Pin | Name | Type | Description |
|---|---|---|---|
| 1 | VDD | Power | Supply voltage |
| 2 | GND | Ground | Ground |
| 3 | RESV | -- | Reserved (leave unconnected) |
| 4 | FSYNC | Input | Frame synchronization (optional) |
| 5 | INT1 | Output | Interrupt 1 (data ready, FIFO, motion) |
| 6 | INT2 | Output | Interrupt 2 (configurable) |
| 7 | AD0/SDO | I/O | I2C address LSB / SPI data out |
| 8 | REGOUT | Output | Regulator bypass (1 uF to GND) |
| 9 | VDDIO | Power | I/O supply voltage |
| 10 | SCL/SCLK | Input | I2C clock / SPI clock |
| 11 | SDA/SDI | I/O | I2C data / SPI data in |
| 12 | CS | Input | SPI chip select (tie to VDD for I2C) |

### Ordering Information

| Part Number | Package | Interface | Temperature |
|---|---|---|---|
| AX2150-ESQR | QFN-12 (3x3 mm) | I2C/SPI | -40 to +85C |
| AX2150-ESQR-A | QFN-12 (3x3 mm) | I2C/SPI | -40 to +105C |
