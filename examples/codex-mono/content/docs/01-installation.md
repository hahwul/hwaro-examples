+++
title = "Installation"
description = "Get the toolchain on your machine."
date = "2026-04-02"
weight = 1
tags = ["setup"]
+++

## Requirements

The runtime requires a POSIX-compatible shell and one of the following
package managers. No additional system libraries are linked at runtime.

- macOS 12 or newer (Homebrew)
- Linux with `glibc` 2.31+ (apt, dnf, pacman)
- Windows 10/11 via WSL2

## Install via Homebrew

```bash
brew tap codex/mono
brew install codex
codex --version
```

The binary is statically linked and self-contained. Removing it is a single
`brew uninstall codex` — there is no scattered state outside `~/.codex/`.

## Install from source

```bash
git clone https://codex.example/runtime.git
cd runtime
make release
sudo make install PREFIX=/usr/local
```

Build artifacts land in `./build/release/`. The default `make install` target
copies the binary, shell completions, and a `man(1)` page.

## Verifying the install

```bash
codex doctor
# => runtime: 1.4.0
# => config:  /Users/you/.codex/config.toml
# => cache:   /Users/you/.codex/cache (12 entries, 2.1MB)
```

If `codex doctor` reports a clean state, you can proceed to the next chapter.
