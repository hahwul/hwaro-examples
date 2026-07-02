+++
title = "About Tuff"
description = "Where Tuff came from, what hardware it speaks to, and why the docs sound like this."
+++

Tuff started in the winter of 2023 at the Marrow Lake Makerspace, where two
members — June Okafor, a firmware engineer, and Sam Petraki, a middle-school
science teacher — kept watching the same scene repeat: someone would unbox a
hobby robot arm, spend an evening fighting a vendor IDE from 2011, and never
plug the thing in again. The robots were fine. The software was the wall.

So they wrote a wall remover. Tuff is a Python library and a small command
line that treat a robot the way a notebook treats a plot: one import, one
connect call, and something visible happens. The serial transport came
first, for arms tethered over USB; the wifi transport followed in 2024 when
the rover kits arrived at the makerspace and nobody wanted to chase them
around with a cable.

## What Tuff speaks to

Out of the box, Tuff ships drivers for the hardware hobby kits actually
contain: the Crabby A2 and A4 desk arms, the Pebble and Pebble XL rovers,
and any board running the open `tuffball` firmware — which is most things
with a serial port and a servo header. The protocol is documented, plain,
and versioned, so writing a driver for an unlisted kit is a weekend job,
not a reverse-engineering project.

## The rules we write docs by

Every tutorial on this site follows three rules. Something must move within
the first ten lines of code. Every code block must run exactly as printed,
on a stock install. And nothing is labeled "advanced" to excuse a bad
explanation — if a topic needs three robot-arm pictograms, it gets a longer
tutorial, not a warning sign.

Tuff is MIT licensed, developed in the open, and sustained by kit makers
who bundle it and by people who like it. The forum — everyone calls it the
Bench — is where drivers get shared and mail robots get bragged about. Come
say hi, and bring whatever you built.
