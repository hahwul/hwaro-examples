+++
title = "Installation"
date = "2025-02-14"
description = "Install devtool on macOS, Linux, or Windows"
+++

devtool ships as a single statically linked binary. There is no runtime requirement and no virtual environment to manage. The binary boots in under twenty milliseconds on a cold cache and parses its configuration lazily, so simple commands stay fast even on large projects.

## macOS and Linux

The recommended path on Unix-like systems is the Homebrew tap. The formula tracks stable releases and pins each version to a SHA256 manifest published from CI.

```bash
brew install example/tap/devtool
devtool --version
```

If Homebrew is unavailable, the install script downloads a release artifact from the GitHub releases page, verifies it against the published checksum, and places the binary in `/usr/local/bin` or `$HOME/.local/bin` depending on write permissions.

```bash
curl -fsSL https://devtool.example.com/install.sh | sh
```

## Windows

On Windows, Scoop is the preferred channel. The bucket mirrors the same artifacts as the Homebrew tap and updates within minutes of a release tag.

```powershell
scoop bucket add example https://github.com/example/scoop-bucket
scoop install devtool
```

Direct binary downloads are also published as zipped MSI bundles for environments that cannot use a package manager.

## Build from source

The repository builds reproducibly with the standard toolchain. A clean build takes roughly forty seconds on a modern laptop and produces a binary identical to the published release for a given commit.

```bash
git clone https://github.com/example/devtool
cd devtool
make release
./bin/devtool --version
```

After installation, run `devtool init` inside any project directory to generate a starter configuration. The generated file documents every available option inline and can be deleted at any time without breaking the default behavior.
