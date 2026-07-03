+++
title = "256-Byte Intro"
date = "2026-01-16"
description = "Everything in 256 bytes. Smaller than this sentence, wired straight to the metal."
weight = 20
[extra]
slot = "SAT 21:40"
limit = "256 bytes"
deadline = "Sat 5 Apr, 17:00"
platform = "TIC-80 / DOS / bootsector"
prize = "200 EUR + eternal respect"
duration = "runs until we stop it"
+++

Two hundred and fifty-six bytes. That is the whole program. No compression
tricks buy you room here, because there is no room to buy. This is the compo
where a single well-chosen constant is a design decision.

<!-- more -->

## Accepted platforms

Pick one and declare it on submission:

- **TIC-80** fantasy console, `.tic` cart, code counted in bytes.
- **MS-DOS `.com`**, real mode, runs under DOSBox at the desk.
- **x86 bootsector**, 512-byte sector but only the first 256 bytes are yours;
  bring it on a USB image and we will boot a spare laptop.

## A place to start

Most 256b entries are a palette, a loop over pixels, and one formula that
turns coordinates and time into color. The art is choosing the formula. Here
is the shape of a TIC-80 entry before you start golfing the whitespace out:

```lua
t=0
function TIC()
 for i=0,32639 do
  x=i%240 y=i//240
  poke(0x0000+i, (x~y)+t>>1)
 end
 t=t+1
end
```

That XOR pattern is a cliche, and that is fine: the point of your first 256b
is to learn the toolchain and the byte counter, not to win. Iterate. Every
byte you free up is a byte you can spend on making it look less like everyone
else's first 256b.

Submit early. The size checker at the desk is final, and 257 bytes is not a
256-byte intro no matter how good it looks.
