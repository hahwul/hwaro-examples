+++
title = "Reading Fuel"
description = "How much fuel to carry, how cold performance falls off, and how to ration the last canister."
date = "2025-03-19"
weight = 2
toc = true
[extra]
grams = 44
station = "Fuel dump"
+++

Fuel is the ration people forget to weigh. Run out and the whole trip stops,
because a mountain kitchen with no flame is just a cold pile of freeze-dried
bags. This chapter turns "bring enough" into a number.

<!-- more -->

## The melting tax

Below the snowline you only boil water you already have. Above it, you also
have to melt it, and melting is expensive — see [Water and Melt](/chapters/water-and-melt/)
for the technique that keeps the tax down. Turning a litre of snow into a litre
of near-boiling water costs roughly twice the fuel of heating tap water,
because the snow starts cold and half of it is air.

A useful planning rule, per person per day:

- **Valley camp, liquid water:** 40–60&nbsp;ml of white gas or ~90&nbsp;g of
  canister gas.
- **Snow camp, melting everything:** 120–180&nbsp;ml of white gas or
  ~180&nbsp;g of canister gas.

## Estimating a trip's load

Do the arithmetic once, at home, with a spreadsheet you can eat from later.

```python
people = 3
days = 6
melting = True                    # camping on snow?

per_person_ml = 160 if melting else 55
total_ml = people * days * per_person_ml
canisters = round(total_ml / 230, 1)   # a 230 g canister ~ 320 ml gas volume

print(f"{total_ml} ml of fuel  ->  about {canisters} large canisters")
# 2880 ml of fuel  ->  about 12.5 large canisters
```

Round up, then add one canister as the "storm day" reserve. A pinned-down team
still needs hot drinks, and morale is cheap to buy with cocoa.

## Rationing the last canister

When you are down to one, weigh it against your palm — a full 230&nbsp;g
canister feels reassuringly heavy; an empty shell is around 130&nbsp;g. Switch
to a lid on every pot, melt in bulk once a day into insulated bottles, and stop
boiling water you only want warm. Cold soaking oats overnight costs zero fuel
and tastes fine when the alternative is walking out hungry.
