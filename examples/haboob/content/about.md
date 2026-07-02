+++
title = "About"
description = "Who runs Haboob, what the sensors look like, and how to reach out."
+++

Haboob is written and operated by a single analyst going by **kessa** — no firm, no client list, no quarterly report to pad. The name comes from the wall-of-dust storms that roll across arid regions with almost no warning: most internet background noise looks exactly like that from the sensor side, a wall of scanning and credential-stuffing that occasionally has something worth digging out of it.

## The sensor grid

Four low-cost VPS instances in different regions run a mix of Cowrie (SSH/Telnet), Dionaea (SMB, MySQL, and a handful of other services), and a stock T-Pot deployment for breadth. None of them advertise anything interesting — no fake company names, no seeded "valuable" files — because the goal is to see what unauthenticated internet traffic looks like by default, not to bait a specific actor. Sessions are pulled weekly, deduplicated by source ASN and payload hash, and the interesting tail gets written up in [the write-ups section](/writeups/) — [case file 06](/writeups/case-file-06-sensor-review/) walks through what a full six-month pull actually looks like in aggregate.

## Triage tooling

Binary triage leans on a fairly ordinary toolchain: `radare2` and Ghidra for disassembly, `capa` for fast capability tagging, `YARA` for clustering samples against prior cases, and a disposable Windows VM, fully network-isolated, for anything that needs dynamic confirmation. Nothing here gets detonated against the live internet.

## Ethics and disclosure

Sensors only observe traffic directed at them; nothing here involves scanning, exploitation, or interaction with third-party infrastructure. Indicators published in write-ups are hashes, network signatures, and behavioral notes only — never full working exploit code, and never a live command-and-control address without a takedown-safe delay. If a write-up describes an active campaign that a vendor should already be tracking, assume it has been reported before publication.

## Contact

Findings, corrections, and sample submissions (as hashes, not attachments) are welcome at `kessa@haboob.example`. A PGP fingerprint is available on request for anything sensitive; this is a one-person operation, so replies take a few days.
