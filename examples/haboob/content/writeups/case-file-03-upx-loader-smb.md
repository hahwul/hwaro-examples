+++
title = "Case File 03: Unpacking a UPX-Wrapped Loader Dropped Over SMB"
date = "2025-06-09"
description = "Static triage of a small Windows loader dropped through a Dionaea SMB honeypot, from packer identification to the shellcode it stages."
tags = ["malware-triage", "smb", "loader"]
toc = true
[extra]
older = "writeups/case-file-02-redis-cryptominer.md"
newer = "writeups/case-file-04-dionaea-telnet-botnet.md"
+++

Dionaea's SMB emulation still catches a steady trickle of automated worms trying variations on the EternalBlue-era exploit chain, most of which fail against the emulated service and move on. This one succeeded far enough to drop a file, which made it worth pulling apart even though the exploitation itself was a dead end against a honeypot.

<!-- more -->

## Identifying the packer

`file` and a hex editor got us most of the way before any disassembler was needed:

```text
$ file dropped_86e4.bin
dropped_86e4.bin: PE32 executable (GUI) Intel 80386, for MS Windows

$ xxd dropped_86e4.bin | head -3
00000000: 4d5a 9000 0300 0000 0400 0000 ffff 0000  MZ..............
00000010: b800 0000 0000 0000 4000 0000 0000 0000  ........@.......
00000020: 0000 0000 0000 0000 0000 0000 0000 0000  ........0.......
```

Section names gave it away immediately — `UPX0`, `UPX1`, and a tiny `UPX2` overlay, the stock UPX 3.x layout. `upx -d` unpacked it cleanly with no anti-unpacking tricks in play, which suggests whoever built this loader cared more about evading naive hash-based signatures than about resisting a determined analyst:

```text
$ upx -d dropped_86e4.bin -o unpacked.bin
                       Ultimate Packer for eXecutables
Unpacked 1 file: 100% [****************************] unpacked.bin
```

## What the unpacked binary does

`capa` gave a fast capability summary before any manual disassembly:

```text
$ capa unpacked.bin
ATT&CK Tactic          ATT&CK Technique
Defense Evasion        Obfuscated Files or Information::Software Packing
Discovery               Query Environment Variable
Command and Control     Encode Data::XOR
Execution                Create Process
```

The loader's actual job is small: read an embedded, XOR-encoded blob from its own overlay, decode it with a single repeating single-byte key (`0x5A`), write it to a newly allocated `VirtualAlloc` region, and jump to it. The decoded blob is a small reflective-loading stub, not final-stage malware — this sample's only job is to fetch and run stage two from a hardcoded URL, which was already offline by the time this was pulled for analysis.

```yara
rule smb_dropped_upx_loader_stage1
{
    meta:
        description = "Matches the XOR key and overlay layout of the stage-1 loader from case file 03"
        author = "kessa"
    strings:
        $xor_key_hint = { 5A 5A 5A 5A }
        $section1 = "UPX1"
        $section2 = "UPX2"
    condition:
        uint16(0) == 0x5A4D and all of them
}
```

## Detection notes

- UPX packing on an unsolicited SMB payload is not itself conclusive, but combined with a payload arriving from a raw file-write over SMB with no prior authentication handshake, it is a strong triage-priority signal.
- A single repeating-byte XOR key is trivial to brute-force during triage: iterate all 256 byte values against the overlay and check for a valid PE header (`MZ`) in the decoded output.
- Loaders of this shape are disposable by design — the stage-1 sample rarely repeats between campaigns, so hash-based detection alone will always be a step behind; the packer layout and capability profile above generalize much better.
