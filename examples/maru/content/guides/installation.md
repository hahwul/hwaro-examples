+++
title = "Installing maru"
description = "Install the maru binary, verify it, and scaffold a project in under a minute."
date = "2025-02-11"
weight = 1
toc = true

[extra]
node = "setup:install"
+++

maru ships as a single static binary with no runtime dependencies. It is about
1.8 MB, links nothing dynamically, and runs the same on Linux and macOS. There
is no daemon, no background service, and nothing that phones home.

<!-- more -->

## Install the binary

The install script downloads the release for your platform, verifies its
checksum, and places `maru` on your `PATH`:

```sh
curl -fsSL https://get.maru.build | sh
```

If you prefer a package manager, maru is published to Homebrew and to the
standard Linux repositories:

```sh
brew install maru
# or
apt install maru
```

## Verify the download

Every release is signed and its digest is published in the release notes. The
`--verify` flag re-hashes the running binary and prints its content address so
you can compare it against what you expected to install:

```sh
maru --version
# maru 0.9.3 (blake3:9f2a…c14e)

maru --verify
# binary digest matches the published release for 0.9.3
```

Because maru identifies everything by content, the binary is no exception: the
digest above becomes part of every cache key, so upgrading the tool correctly
invalidates only the tasks whose behavior could have changed.

## Scaffold a project

`maru init` writes a minimal `maru.toml` and a first task so you have something
to build immediately:

```sh
maru init
maru build
```

You now have an empty but valid graph. The next guide, *Your first build*,
replaces the placeholder task with a real one and shows how maru decides what to
run. If anything above failed, run `maru doctor` — it checks your `PATH`, the
cache directory, and sandbox support, and prints a fix for each problem it finds.
