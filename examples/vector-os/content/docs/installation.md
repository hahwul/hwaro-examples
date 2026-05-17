+++
title = "01.02 — Installation"
description = "Install the Vector OS binary on Linux, macOS, or Windows."
weight = 2

[extra]
section_label = "01 · Docs"
section_number = "01.02"
+++

Vector OS ships as a single static binary. There is one release artifact per
platform; pick the one that matches your target and put it somewhere on your
path.

## Quick install

The install script downloads the latest stable release, verifies the checksum,
and places the binary in `/usr/local/bin`:

```shell
curl -fsSL https://get.vector-os.dev/install.sh | sh
```

Pass `VECTOR_VERSION` to pin to a specific release:

```shell
curl -fsSL https://get.vector-os.dev/install.sh | VECTOR_VERSION=0.4.2 sh
```

## Package managers

On macOS the Homebrew tap mirrors the release schedule:

```shell
brew install vector-os/tap/vector-os
```

On Debian and Ubuntu the apt repository ships the same binaries with a systemd
unit:

```shell
curl -fsSL https://get.vector-os.dev/apt.gpg | sudo tee /etc/apt/trusted.gpg.d/vector.gpg
echo "deb https://apt.vector-os.dev stable main" | sudo tee /etc/apt/sources.list.d/vector.list
sudo apt-get update
sudo apt-get install vector-os
```

## Verifying the install

The binary prints version and build provenance on `--version`:

```shell
vector-os --version
# vector-os 0.4.2 (rev 9f3a1c8, built 2026-04-09)
```

Run the doctor command to check for missing kernel features and recommended
sysctls before starting the control plane:

```shell
vector-os doctor
```

A clean run should print `all checks passed`. Any warnings are explained in the
output and linked to the matching reference entry.
