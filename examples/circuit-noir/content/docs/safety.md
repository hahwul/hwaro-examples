+++
title = "Safety & Isolation"
date = "2026-04-18"
weight = 7
description = "What to do when the smoke is real. Galvanic isolation, fault detection, and the half-dozen ways your power rail can take down the board."
tags = ["operations"]
+++

This document is the most depressing in the OHMIC reference. We did not want to write it. It exists because we have seen too many engineers — including, more than once, ourselves — overlook a fault path that destroyed a working board, a working bench, or in one memorable case, a working desk.

## the half-dozen ways a power rail will take down your board

1. **Reverse polarity.** The most common failure. A customer plugs the barrel jack in backwards. Without protection, every IC on the board sees -12V on its supply pin. They will not survive.
2. **Overvoltage.** A regulator fails short. The 5V rail becomes 12V. Every 3.3V part downstream of the LDO sees 5V on its supply pin. They will not survive long.
3. **Inductive kickback.** A motor or a relay coil is de-energized. The collapsing magnetic field induces a high-voltage transient on the switching line. The switching MOSFET fails open.
4. **Hot plug.** A device is plugged into a live bus. The inrush current sags the supply. Brown-out causes the MCU to reset mid-write to flash. Flash is corrupted.
5. **Ground bounce.** A high-current load switches and the ground reference shifts by 200mV. Logic levels at the receiver are misinterpreted as inverted.
6. **Capacitive coupling.** A noisy 12V switching node sits next to a 3.3V analog input on the PCB. The analog reading wanders by 50mV at the switching frequency.

OHMIC cannot prevent any of these. OHMIC can help you detect them.

## detection

The MCU's brown-out reset (BOR) and supply voltage monitor (PVD) catch some of the failures above. OHMIC exposes them as a single peripheral:

```rust
let mut psu = p.power_monitor;

psu.enable_bor(BorLevel::V2_4);
psu.enable_pvd(PvdLevel::V2_9, |is_low| {
    if is_low {
        // The supply is sagging. Save state and prepare to reset.
        save_state();
    } else {
        // The supply has recovered.
    }
});
```

The BOR will reset the MCU if the supply drops below the configured threshold. The PVD will fire an interrupt at a higher threshold, giving your code an opportunity to save state before the BOR kicks in.

## isolation

If your design crosses a hostile rail boundary — for example, a 12V automotive bus to a 3.3V sensor — you must galvanically isolate the boundary. This means:

- Optical isolation (an opto-coupler or digital isolator) on every signal line that crosses the boundary.
- Isolated power. A transformer-isolated DC-DC, not a buck regulator.
- A physical air gap on the PCB between the two grounds, at least 2 mm wide for low-voltage isolation, more for higher voltages.

OHMIC ships an `IsolatedUart` driver that handles the timing differences in optical isolation:

```rust
let uart = p.usart2
    .config(115_200)
    .with_isolation(IsolationProfile::Optocoupler { rise_ns: 200 });
```

The isolation profile adds a small delay to the timing budget to account for the slower rise time of the optical channel. This is not a substitute for proper isolation on the board; it is a courtesy to the silicon.

## the kill switch

Every safety-critical board should have a hardware kill switch — a physical switch that interrupts the supply rail, not a software command that asks the MCU to shut down. We have seen software shutdowns fail in three ways:

1. The firmware crashed before it could execute the shutdown.
2. The watchdog reset the MCU mid-shutdown and the firmware restarted.
3. A bug in the shutdown sequence left a peripheral active.

A hardware kill switch is a copper wire to a relay. It does not have any of these failure modes.

## a final note

We do not believe in catastrophizing. Most embedded boards do not catch fire. Most firmware does not produce smoke. The list above is not a list of likely outcomes — it is a list of *possible* outcomes that we have seen, in person, and that you should design against.

The phrase "this could never happen in production" is the phrase we hear most often before something happens in production.
