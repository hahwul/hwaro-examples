+++
title = "Power Budget"
date = "2026-04-22"
weight = 6
description = "Worked examples for a 9V battery, a 5V USB rail, and a 12V automotive bus. Sleep currents, peak draws, and the math that keeps it stable."
tags = ["operations"]
+++

Power is the first thing your design will get wrong. The MCU will draw more current than the datasheet typical, the peripherals will draw more when they fail, and the regulator will sag under transients you did not anticipate. This document is the math we use, in the lab, to size the rail before laying out a board.

## what the numbers below assume

All numbers below assume the MCU is an STM32G031 at 16 MHz with two GPIO toggles active, one USART running at 115,200 baud, and one I²C bus polled at 10 Hz. If your design is heavier than this, scale the numbers accordingly — they are not the worst case, they are a working starting point.

## a 9V alkaline battery

A standard 9V alkaline battery is rated for 550 mAh at a 50 mA discharge. At lower currents the capacity is higher (closer to 620 mAh); at higher currents it falls precipitously. We assume 500 mAh as our planning number.

| Mode | Current | Time to deplete |
|---|---|---|
| Active, all peripherals | 28 mA | 17.9 hours |
| Active, MCU only | 9 mA | 55.6 hours |
| Idle (CPU stopped, peripherals on) | 1.2 mA | 17.4 days |
| Sleep (RTC only) | 14 μA | 4.1 years |
| Deep sleep (wake-from-pin) | 1.8 μA | 31.6 years |

The deep-sleep number is theoretical — battery self-discharge will deplete the cell long before the firmware does. A 9V alkaline self-discharges at roughly 5% per year, which sets the practical upper limit at about 20 years.

## a 5V USB rail

USB 2.0 ports provide 500 mA at 5V. If your design draws more than this, the port will not power your board — it will be disconnected by the host's overcurrent protection. USB-C ports provide 900 mA without negotiation; up to 3A with negotiation.

For a working board with a small motor, a power LED, and a couple of GPIOs driving an external transistor:

| Element | Typical | Peak |
|---|---|---|
| STM32G031 active | 9 mA | 14 mA |
| Status LED | 8 mA | 8 mA |
| GPIO drive (external load) | 16 mA | 25 mA |
| Small motor (3V brushed, no load) | 90 mA | 380 mA (stall) |
| **Total** | **123 mA** | **427 mA** |

The motor stall current is the worrying number. A 380 mA transient lasting 10 ms can sag the USB rail by 200 mV depending on the host's response. Add a 470 μF bulk capacitor on the rail to absorb the transient.

## a 12V automotive bus

Automotive 12V is the most hostile rail in common use. The nominal is 12V, but the actual rail can swing from 8V (cranking) to 18V (transient) under normal operation, and to 100V+ during load-dump events.

Use a protected regulator. The reference circuit in OHMIC's hardware kit specifies:

```text
[ 12V in ] → [ TVS diode (24V) ] → [ Reverse-polarity FET ] → [ LDO ]
                  ↓                          ↓
              ground               diode-OR with backup cap
```

The TVS clamps load-dump transients before they reach the LDO. The reverse-polarity FET protects against installation errors. The diode-OR feeds a small 100μF backup cap that keeps the rail stable through the 50ms cranking sag.

> Do not connect a 12V automotive rail directly to an LDO. The first time the customer cranks the engine with your board connected, you will lose the regulator. We have replaced more regulators in this scenario than in any other.

## sleep currents in practice

OHMIC supports four sleep modes on the STM32G031. The numbers below are measured on the reference board with a calibrated bench supply:

| Mode | Measured | Datasheet typ |
|---|---|---|
| Sleep | 1.4 mA | 1.3 mA |
| Stop 0 | 78 μA | 75 μA |
| Stop 1 | 16 μA | 14 μA |
| Standby | 2.1 μA | 1.8 μA |

The 2.1 μA standby number assumes you have disabled the BOR (brown-out reset) and the RTC. If you need a wake-up clock, the standby current rises to about 8 μA.

## what we recommend you measure

The power budget on paper will be approximately correct. The power budget in the lab will not. Always measure the actual current draw of your prototype with a calibrated bench supply at your target voltage, at every operating temperature you plan to support. Cheap parts behave differently at -40°C than they do on the bench.
