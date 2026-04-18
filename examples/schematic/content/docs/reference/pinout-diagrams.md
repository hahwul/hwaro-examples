+++
title = "Pinout Diagrams"
description = "Pin configurations and signal mapping for the SC32F407 MCU and board-level connectors."
weight = 1

[taxonomies]
tags = ["pinout", "gpio", "connectors"]
+++

# Pinout Diagrams

This section documents the pin assignments for the SC32F407 MCU as configured on the Schematic reference board, along with the board-level connector pinouts.

## MCU Pin Assignments

The SC32F407VGT6 in LQFP-100 package is configured with the following primary signal assignments:

### Port A (PA0 - PA15)

| Pin | GPIO | Alternate Function | Board Signal | Direction |
|---|---|---|---|---|
| 23 | PA0 | ADC1_IN0 | AIN0 | Input |
| 24 | PA1 | ADC1_IN1 | AIN1 | Input |
| 25 | PA2 | USART2_TX | DEBUG_TX | Output |
| 26 | PA3 | USART2_RX | DEBUG_RX | Input |
| 29 | PA4 | SPI1_NSS / DAC1_OUT | DAC_OUT | Output |
| 30 | PA5 | SPI1_SCK | SPI_SCK | Output |
| 31 | PA6 | SPI1_MISO | SPI_MISO | Input |
| 32 | PA7 | SPI1_MOSI | SPI_MOSI | Output |
| 67 | PA8 | TIM1_CH1 | PWM0 | Output |
| 68 | PA9 | USART1_TX | UART1_TX | Output |
| 69 | PA10 | USART1_RX | UART1_RX | Input |
| 70 | PA11 | USB_OTG_FS_DM | USB_DM | I/O |
| 71 | PA12 | USB_OTG_FS_DP | USB_DP | I/O |
| 72 | PA13 | SWDIO | SWD_DIO | I/O |
| 76 | PA14 | SWCLK | SWD_CLK | Input |
| 77 | PA15 | TIM2_CH1 | PWM1 | Output |

### Port B (PB0 - PB15)

| Pin | GPIO | Alternate Function | Board Signal | Direction |
|---|---|---|---|---|
| 35 | PB0 | ADC1_IN8 | AIN2 | Input |
| 36 | PB1 | ADC1_IN9 | AIN3 | Input |
| 37 | PB2 | BOOT1 | BOOT1 (GND) | Input |
| 89 | PB3 | SPI3_SCK | EXT_SCK | Output |
| 90 | PB4 | SPI3_MISO | EXT_MISO | Input |
| 91 | PB5 | SPI3_MOSI | EXT_MOSI | Output |
| 92 | PB6 | I2C1_SCL | I2C_SCL | I/O |
| 93 | PB7 | I2C1_SDA | I2C_SDA | I/O |
| 95 | PB8 | TIM4_CH3 | LED_G | Output |
| 96 | PB9 | TIM4_CH4 | LED_B | Output |
| 47 | PB10 | I2C2_SCL | EXT_I2C_SCL | I/O |
| 48 | PB11 | I2C2_SDA | EXT_I2C_SDA | I/O |
| 51 | PB12 | SPI2_NSS | SD_CS | Output |
| 52 | PB13 | SPI2_SCK | SD_SCK | Output |
| 53 | PB14 | SPI2_MISO | SD_MISO | Input |
| 54 | PB15 | SPI2_MOSI | SD_MOSI | Output |

### Port C (PC0 - PC15)

| Pin | GPIO | Alternate Function | Board Signal | Direction |
|---|---|---|---|---|
| 15 | PC0 | ADC1_IN10 | VBAT_SENSE | Input |
| 16 | PC1 | ADC1_IN11 | TEMP_NTC | Input |
| 17 | PC2 | ADC1_IN12 | AIN4 | Input |
| 18 | PC3 | ADC1_IN13 | AIN5 | Input |
| 33 | PC4 | GPIO | PGOOD | Input |
| 34 | PC5 | GPIO | nRESET_EXT | Output |
| 63 | PC6 | TIM3_CH1 | LED_R | Output |
| 64 | PC7 | TIM3_CH2 | BUZZER | Output |
| 65 | PC8 | GPIO | SD_DETECT | Input |
| 66 | PC9 | GPIO | USER_BTN | Input |
| 78 | PC10 | UART4_TX | EXT_TX | Output |
| 79 | PC11 | UART4_RX | EXT_RX | Input |
| 80 | PC12 | GPIO | SPI_CS_IMU | Output |
| 7 | PC13 | GPIO | WAKEUP | Input |
| 8 | PC14 | OSC32_IN | LSE_IN | Input |
| 9 | PC15 | OSC32_OUT | LSE_OUT | Output |

---

## Board Connectors

### J1 - Debug Header (10-pin ARM SWD)

| Pin | Signal | Description |
|---|---|---|
| 1 | VCC_3V3 | Target reference voltage |
| 2 | SWDIO | Serial wire debug data |
| 3 | GND | Ground |
| 4 | SWCLK | Serial wire debug clock |
| 5 | GND | Ground |
| 6 | SWO | Serial wire output (optional) |
| 7 | -- | Reserved |
| 8 | -- | Reserved |
| 9 | GND | Ground |
| 10 | nRESET | Target reset (active low) |

### J2 - Expansion Header (20-pin, 2.54mm pitch)

| Pin | Signal | Pin | Signal |
|---|---|---|---|
| 1 | VCC_3V3 | 2 | VCC_5V |
| 3 | EXT_I2C_SDA | 4 | EXT_I2C_SCL |
| 5 | EXT_TX | 6 | EXT_RX |
| 7 | EXT_SCK | 8 | EXT_MISO |
| 9 | EXT_MOSI | 10 | EXT_CS |
| 11 | AIN4 | 12 | AIN5 |
| 13 | PWM0 | 14 | PWM1 |
| 15 | GPIO_A | 16 | GPIO_B |
| 17 | GPIO_C | 18 | GPIO_D |
| 19 | GND | 20 | GND |

### J3 - USB Type-C Connector

| Pin | Signal | Description |
|---|---|---|
| A1/B12 | GND | Ground |
| A4/B9 | VBUS | USB power (5V) |
| A6 | USB_DP | USB data positive |
| A7 | USB_DM | USB data negative |
| B6 | USB_DP | USB data positive (redundant) |
| B7 | USB_DM | USB data negative (redundant) |
| A5 | CC1 | Configuration channel 1 |
| B5 | CC2 | Configuration channel 2 |
| A8 | SBU1 | Sideband use (not connected) |
| B8 | SBU2 | Sideband use (not connected) |

### J4 - Power Input (Barrel Jack)

| Pin | Signal | Description |
|---|---|---|
| Center | VIN | 7-12V DC input |
| Sleeve | GND | Ground |

**Specification:** 2.1mm inner diameter, 5.5mm outer diameter, center-positive polarity.
