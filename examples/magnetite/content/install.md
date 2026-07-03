+++
title = "Install & run"
description = "Download the Magnetite binary, index a corpus, and start the search server."
tags = ["install", "operations"]
toc = true
[extra]
section_id = "OPS"
stability = "stable"
+++

Magnetite ships as a single static binary with no runtime dependencies. There is
nothing to configure before you can index a directory and start answering
queries — the defaults are sensible, and everything else is a flag.

## Download

Grab the build for your platform and put it on your `PATH`. Every release is a
single file; there is no installer and no service manager requirement.

```bash
# Linux x86_64
curl -fsSL https://get.magnetite.dev/2.4/magnetite-linux-x86_64 -o magnetite
chmod +x magnetite
sudo mv magnetite /usr/local/bin/

magnetite version
# magnetite 2.4.0 (index format v3)
```

Prefer a container? The image is built `FROM scratch` around the same binary, so
it weighs a few megabytes and has no shell to attack.

```bash
docker run --rm -p 7700:7700 \
  -v "$PWD/data:/data" \
  ghcr.io/magnetite/magnetite:2.4 serve --index /data/index.mag
```

## Index a corpus

Point the indexer at a schema and a directory of JSON documents. See
[indexing & schema](/reference/indexing-and-schema/) for the field
declarations.

```bash
magnetite index \
  --schema schema.toml \
  --source ./documents \
  --out index.mag
# indexed 12,480 documents into 4 segments (index.mag, 38 MB)
```

## Serve

Start the server against the index you just built. It binds to `127.0.0.1:7700`
by default; put it behind your own reverse proxy for TLS and access control.

```bash
magnetite serve \
  --index index.mag \
  --synonyms synonyms.txt \
  --addr 127.0.0.1:7700
```

Query it over HTTP. The query string is the grammar documented in
[query syntax](/reference/query-syntax/); the response is JSON.

```bash
curl 'http://127.0.0.1:7700/search?q=title:manual+AND+body:altitude~2&facet=year'
```

## Server flags

| Flag | Default | Purpose |
| --- | --- | --- |
| `--index <path>` | `index.mag` | the memory-mapped index to serve |
| `--addr <host:port>` | `127.0.0.1:7700` | listen address |
| `--synonyms <path>` | — | load a synonym map at startup |
| `--reload` | `false` | watch schema and synonym files for changes |
| `--max-hits <n>` | `100` | cap the number of documents per response |
| `--log <level>` | `info` | `error`, `warn`, `info`, or `debug` |

## Running as a service

For production, run Magnetite under your init system. A minimal systemd unit
mounts the index read-only and restarts on failure:

```ini
[Service]
ExecStart=/usr/local/bin/magnetite serve --index /var/lib/magnetite/index.mag
Restart=on-failure
ProtectSystem=strict
ReadOnlyPaths=/var/lib/magnetite
```

Reindex on a schedule with a timer that runs `magnetite index --since` against
your source, then send the server `SIGHUP` to remap the freshly merged segments
without dropping a request.
