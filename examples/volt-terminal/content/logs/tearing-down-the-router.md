+++
title = "Tearing Down the Router"
date = "2026-04-20"
description = "An off-brand router yields its secrets to a cheap USB-TTL cable."
tags = ["reverse", "hardware"]
[extra]
kind = "REVERSE"
+++

# Tearing Down the Router

Bought a no-name router at a flea market for the equivalent of two dollars. It booted, so I plugged it in. I was curious what was on it.

## First look

The case pops open with a guitar pick. Inside: a single-board layout, four unmarked chips, a UART header I could not miss. Labels on the chip packages are silk-screen-scrubbed, which is always a tell.

```sh
$ picocom -b 115200 /dev/ttyUSB0
```

## First boot

U-Boot drops into a prompt after three seconds. Stock password is not `root` but is four characters long and gleefully common. I will not publish which four characters, but you can guess.

## First surprise

There is a second partition, mounted read-only, with a small JSON file in it. The file contains a hostname that belongs to a domain I did not expect — a regional chain of coffee shops about three hundred miles from where I bought the router. I am not going to speculate further in public.

## Next steps

The plan is to pull the firmware, diff it against a known reference, and write it up. Do not ship routers with a read-only mount that points at a customer's domain. That is a bad practice.
