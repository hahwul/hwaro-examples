+++
title = "Vector"
description = "An embedded database toolchain you drive entirely from the command line"
template = "home"

[extra]
prompt_cmd = "vector init"
workspace = "./edge-app"
version = "0.9.2"
claims = [
  "embeds in your process — no server, no port, no daemon to babysit",
  "replicates as a signed append-only log between any two peers, online or off",
  "runs the identical engine from a Pi Zero to a CI runner",
]
next_cmd = "vector schema apply ./schema.vx"
install_cmd = "curl -fsSL https://vector.sh/install | sh"
install_log = [
  "Downloading vector 0.9.2 (linux-x86_64)...",
  "Verifying checksum... ok",
  "Installed to /usr/local/bin/vector",
]
verify_cmd = "vector --version"
verify_out = "vector 0.9.2 (rev 8a1c3e0, built 2026-06-18)"

capabilities = [
  { name = "embed", title = "One binary, zero services", body = "Link libvector.a or drop the vector binary into your build. There is no server process, no port to open, and nothing to orchestrate before your first read." },
  { name = "sync", title = "Sync when the network shows up", body = "Writes land in a local append-only log first. Point two nodes at each other, on a LAN or over the open internet, and vector reconciles the log the moment it can." },
  { name = "query", title = "A REPL that ships with the binary", body = "vector shell opens a query REPL against any local database file. Every migration and query you run there is a line you can paste straight into a script." },
]
+++

Vector is an embedded database toolchain built for the parts of your system that
do not get a reliable connection: kiosks, vehicles, field devices, and edge
nodes that spend as much time offline as on. The engine is a single linkable
library with no external dependencies; the toolchain around it — schema
migrations, a query REPL, and a sync relay — is a single CLI binary you already
have once you have installed `vector`.

There is no cluster to provision and no connection string to manage. Every
database is a file on disk, owned by the process that opened it, replicated
only when and where you tell it to. That constraint is deliberate: it is the
same one your device already has to live with, so Vector is built to match it
rather than paper over it with a network you cannot always reach.

```bash
$ vector schema apply ./schema.vx
applying migration 0007_add_device_index... ok
schema is now at revision 7
```

The [features](/features/) page covers everything that ships in the toolchain,
[pricing](/pricing/) explains how the hosted relay is priced for teams running
a fleet, and [about](/about/) covers the reasoning behind a project that treats
"the network is down" as the normal case rather than the exception. The
[changelog](/changelog/) tracks every tagged release.
