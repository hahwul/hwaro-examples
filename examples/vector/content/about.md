+++
title = "About"
description = "Why Vector exists, who builds it, and how to reach the team."
+++

Vector started in 2024 as an internal tool at a company that made payment
terminals for markets with unreliable connectivity. Every terminal ran a
full relational database for offline transaction logs, but the database was
built for servers: it assumed a stable disk, a stable clock, and a network
that came back eventually. None of those held on a terminal that could lose
power mid-write or sit disconnected for a week at a trade show.

The team — Iris Novak, Teodor Basaran, and Miu Okafor — spent a year
rewriting the storage layer around the constraints the hardware actually
had, then spent another year realizing the result was more useful as a
general-purpose embedded database than as a payments-specific one. Vector
was open sourced in early 2025 and has been developed in the open since.

## Design principles

Vector is built on a short list of rules the team does not bend on:

- **The network is the exception, not the assumption.** Every feature has to
  work correctly with zero peers reachable, including schema migrations.
- **One binary, no daemons.** If a feature needs a background process, it
  belongs in the optional relay, not the core engine.
- **Boring file formats.** The on-disk format is documented and stable
  across minor versions; you can read a Vector file with a hex editor and a
  spec, not just with Vector itself.

## Contact

Bug reports and feature requests go through the public issue tracker linked
from the CLI's `vector help` output. For relay [pricing](/pricing/) questions
specific to a fleet rollout, reach the team directly at `hello@vector.sh`. The
full history of what shipped is in the [changelog](/changelog/).
