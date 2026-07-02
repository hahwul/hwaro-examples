+++
title = "Installation"
description = "A base module, an electrician, and a morning — most stacks are drawing load by the same evening."
+++

We built the mechanical side of Ampere so that a two-person crew can do the
whole job in a single visit, and most of that visit is the electrical
commissioning, not the hardware. Here is the sequence, in the order it
actually happens at your house.

## Before the crew arrives

A remote site review, done over a video call with photos you send in, checks
your panel capacity, your mounting wall, and your utility meter type. This is
also when we confirm whether your jurisdiction requires a permit — most do —
and file it on your behalf. Permit turnaround is the only part of the
timeline we do not control; budget one to three weeks depending on your
utility.

## Install day

1. **Mounting rail, 30 minutes.** The base plate bolts to a wall bracket
   rated for the full weight of a six-module stack, even if you are only
   installing one module today. There is no second bracket to buy later.
2. **Base module and inverter, 45 minutes.** The base seats onto the rail,
   the electrician lands the panel connections, and the inverter runs its
   self-test.
3. **Modules, about 15 minutes each.** Each module lifts onto the rail above
   the last and locks with a quarter-turn latch — no tools, no exposed
   terminals once it is seated. A four-module stack adds about an hour here.
4. **Commissioning, 45 minutes.** The system runs a full charge-discharge
   calibration cycle, pairs to the monitoring app over Wi-Fi, and the
   electrician walks you through the breaker labeling and the manual
   disconnect.

A typical four-module household install runs four to five hours door to
door, and the stack is charging from solar or the grid before the crew
leaves the driveway.

## Where it can go

Garage walls are the most common install location, followed by an exterior
wall under eave cover. The IP65 rating means direct exterior mounting is
fine in most climates; we ask installers to avoid direct exposure to
standing water and to keep the base module's intake clear of insulation or
storage boxes so the passive cooling fins can breathe.

## Adding a module later

Expansion is scheduled as its own short visit — usually under ninety
minutes, no permit re-filing required in most jurisdictions since the panel
connection and disconnect were already sized for the full six-module rail
on day one. The new module locks in, the base recognizes it automatically,
and the stack's reported capacity updates in the app within a few minutes.

```text
$ ampere-cli stack status
base        online   fw 4.2.1
module-01   online   soh 99%   cycles 214
module-02   online   soh 99%   cycles 214
module-03   online   soh 98%   cycles 214
module-04   online   soh 100%  cycles 6      <- installed this morning
stack       20.8 kWh usable   4 modules
```
