+++
title = "Installation"
date = "2026-05-15"
weight = 1
description = "Install the OHMIC toolchain on macOS, Linux, and Windows. Three routes, in order of preference."
tags = ["quickstart"]
+++

OHMIC ships as a single self-contained binary plus a Rust target description. You do not need a separate ARM GCC toolchain — OHMIC bundles the assembler and linker it uses.

## quick install

The fastest route for most users is the install script:

```bash
curl -fsSL https://get.ohmic.example | sh
```

The script verifies a signed manifest, downloads the binary for your platform, and places it in `~/.ohmic/bin/`. It does not modify your shell init beyond appending a single line to your `PATH`.

> The install script is signed and the signature is verified before any artifact is downloaded. You can inspect the script before running it — `curl https://get.ohmic.example | less`.

## package managers

OHMIC is packaged for the major platforms:

| Platform | Command |
|---|---|
| macOS (Homebrew) | `brew install ohmic-labs/tap/ohmic` |
| Linux (Debian/Ubuntu) | `sudo apt install ohmic` |
| Linux (Arch) | `pacman -S ohmic` |
| Windows (winget) | `winget install OhmicLabs.Ohmic` |
| NixOS | `nix-env -iA nixpkgs.ohmic` |

Package manager builds are produced by the same CI pipeline as the official binaries and verified against the same signed manifest.

## from source

If you cannot use the install script or a package manager, you can build OHMIC from source. You will need a recent Rust toolchain (1.74 or newer):

```bash
git clone https://github.com/ohmic-labs/ohmic.git
cd ohmic
cargo build --release --features all-targets
sudo install target/release/ohmic /usr/local/bin/
```

The `all-targets` feature builds support for every supported MCU family. If you only need a subset, you can specify them — `--features stm32,nrf` keeps the build to about 38 megabytes.

## verifying the install

After installation, verify that the binary works and is the version you expect:

```bash
ohmic --version
# expected: ohmic 2.04.07 (rev a31c0d4 · 2026-05-15)
ohmic doctor
# expected: All checks passed.
```

`ohmic doctor` is a non-destructive command that verifies your install, checks for missing system dependencies (typically `udev` rules on Linux), and confirms that USB device permissions are set correctly.

## uninstall

If you installed via the script, uninstall is one line:

```bash
~/.ohmic/bin/ohmic uninstall --everything
```

This removes the binary, the cache, and the `PATH` line the install script added. It does not touch your project directories.
