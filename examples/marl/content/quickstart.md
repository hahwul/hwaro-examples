+++
title = "Quickstart"
description = "Install Marl, write your first points, and watch them settle into tiers."
toc = true
[extra]
tier = "surface"
+++

This quickstart takes a fresh machine to a running Marl node with one series
being written, downsampled, and queried — about ten minutes end to end. It
assumes nothing but a shell and a way to send HTTP.

<!-- more -->

## Install

Marl ships as a single static binary. Fetch the release for your platform and
put it on your path:

```bash
curl -fsSL https://get.marldb.dev/install.sh | sh
marl version
# marl 0.9.3 "dolostone" (linux/amd64)
```

The binary is both the server and the client. There is no separate agent and
no external dependency: storage, downsampling, and the query API all live in
the same process.

## Start a node

Create a data directory and start the node. On first boot Marl writes a
default `strata.toml` describing three tiers — you can edit it later.

```bash
mkdir -p /var/lib/marl
marl serve --data /var/lib/marl --listen 127.0.0.1:7180
```

The node logs the strata it deposited into on boot:

```
ready  listen=127.0.0.1:7180
strata hot: 1s for 48h · warm: 1m for 30d · cold: 1h for 5y
```

## Write your first points

Points are line-oriented: a series name, a set of tags, a value, and a
timestamp in nanoseconds. Marl creates the series on first write.

```bash
marl write --node 127.0.0.1:7180 <<'EOF'
cpu.load,host=quarry-1,region=west 0.42 1735689600000000000
cpu.load,host=quarry-1,region=west 0.55 1735689601000000000
cpu.load,host=quarry-1,region=west 0.61 1735689602000000000
EOF
# ok  3 points  1 series
```

## Read it back

Query with a time range and an optional aggregation. Without a `fill` policy,
gaps come back as `null` so you can tell silence from zero.

```sql
SELECT mean(value)
FROM cpu.load
WHERE host = 'quarry-1' AND time > now() - 5m
GROUP BY time(30s)
FILL none
```

```
time                 mean
2025-01-01T00:00:00  0.527
2025-01-01T00:00:30  null
```

That `null` is real: no points arrived in that window. See
[Gap-aware queries](/manual/gap-aware-queries/) for how to carry, interpolate,
or ignore it.

## Where to go next

- [The data model](/manual/data-model/) — how series, tags, and points fit together.
- [Tiered retention](/manual/tiered-retention/) — editing `strata.toml`.
- [Query language](/manual/query-language/) — the full MarlQL reference.
