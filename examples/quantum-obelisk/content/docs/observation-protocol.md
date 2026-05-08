+++
title = "Observation Protocol"
description = "Measurement discipline for monolithic quantum registers."
+++

# Observation Protocol

Measurement is destructive. The protocol that governs when, where, and how a register is observed determines whether the result carries any information at all. A monolithic obelisk-class register tolerates a narrow band of observation patterns, and stepping outside that band produces output that looks valid but isn't.

## Sequencing

Observations must be sequenced strictly. The reference clock issues a measurement window of fixed width, the gate fires within that window, and the readout pipeline drains before the next window opens. Skipping the drain step contaminates subsequent reads with leakage from the prior measurement.

```python
def observe(register, channels):
    window = clock.next_window()
    with window.guard():
        gate.fire(register, channels)
        return readout.drain(channels)
```

The guard context is not optional. Without it, the readout pipeline races against the next measurement window and produces aliased results.

## Channel Isolation

Each measurement channel must be electrically isolated from its neighbors. Crosstalk on the readout bus appears as correlated noise across channels, which the analysis pipeline interprets as genuine entanglement signal. The defensive position is to design the channel mapping so that physically adjacent qubits never share an isolation domain.

## Failure Modes

Two failure modes dominate in production. The first is window underflow, where the gate fires before the window has fully opened. The result is a partial measurement that reports nominal confidence values but encodes no useful state. The second is drain timeout, where the readout pipeline retains residual charge from the prior cycle. The remedy is to lengthen the drain interval rather than tighten the gate.

## Operational Notes

Run a calibration pass at the start of every shift. The protocol assumes that the clock, the gate, and the drain pipeline share a common phase reference, and that assumption decays over hours. A five-minute calibration extends usable register lifetime by roughly four hours.
