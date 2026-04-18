+++
title = "Inside the NES: Understanding 8-bit Architecture"
date = "2026-03-18"
description = "A deep dive into the technical architecture of the Nintendo Entertainment System."
tags = ["hardware", "nes", "retro"]
categories = ["deep-dive"]
+++

## The Machine That Started It All

The Nintendo Entertainment System (NES), released in 1983 in Japan as the Famicom, defined an entire generation of gaming. Understanding its architecture reveals why games looked and played the way they did.

## CPU: Ricoh 2A03

The NES runs on a modified MOS 6502 processor clocked at 1.79 MHz. This is the same family of processors used in the Apple II and Commodore 64.

Key specifications:

- **Clock Speed:** 1.79 MHz (NTSC) / 1.66 MHz (PAL)
- **Address Space:** 16-bit (64 KB)
- **Data Bus:** 8-bit
- **Registers:** A (accumulator), X, Y (index), SP, PC, P (status)

## PPU: Picture Processing Unit

The PPU (Ricoh 2C02) handles all graphics rendering. It operates independently from the CPU and has its own memory map.

### Nametables

The screen is divided into a 32x30 grid of 8x8 tiles. Each tile references a pattern in the CHR ROM. The nametable holds these references:

```
Nametable Layout (256x240 pixels):
+--------------------------------+
|  32 tiles wide x 30 tiles tall |
|  = 960 tile references         |
|  + 64 bytes attribute data     |
|  = 1024 bytes per nametable    |
+--------------------------------+
```

### Sprites

The NES supports 64 sprites via Object Attribute Memory (OAM):

- Each sprite is 8x8 or 8x16 pixels
- Maximum 8 sprites per scanline
- Each sprite has 3 colors + transparent
- Sprites can be flipped horizontally/vertically

### Color Palette

The NES has a fixed palette of 54 usable colors (from a possible 64). The system uses:

- 4 background palettes (4 colors each)
- 4 sprite palettes (3 colors + transparent each)

## APU: Audio Processing Unit

The audio chip is integrated into the CPU and provides 5 sound channels:

1. **Pulse 1** - Square wave with duty cycle control
2. **Pulse 2** - Same as Pulse 1
3. **Triangle** - Triangle wave (bass lines)
4. **Noise** - Pseudo-random noise (percussion)
5. **DMC** - Delta modulation channel (samples)

## Memory Map

```
$0000-$07FF  2KB Internal RAM
$2000-$2007  PPU Registers
$4000-$4017  APU and I/O Registers
$4020-$FFFF  Cartridge Space (PRG ROM/RAM)
```

## The Mapper System

NES cartridges used mapper chips to extend the console capabilities beyond its base hardware. Popular mappers include:

- **NROM (Mapper 0)** - No mapping, 32KB PRG + 8KB CHR
- **MMC1 (Mapper 1)** - Bank switching, used by Zelda
- **MMC3 (Mapper 4)** - Scanline counter, used by Super Mario Bros. 3
- **VRC6 (Mapper 24)** - Extra sound channels, Castlevania III (JP)

---

*KNOWLEDGE UNLOCKED. +100 XP gained.*
