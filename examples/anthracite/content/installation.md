+++
title = "Installation"
description = "Three ways to put the anthracite binary on a machine, plus the config file and exit codes CI needs to know about."
toc = true
+++

Anthracite ships as a single statically linked binary with no runtime
dependencies. Pick whichever of the three installers fits your
environment; all three put the same binary on `$PATH`.

## Shell installer

```sh
curl -fsSL https://anthracite.sh/install | sh
anthracite --version
```

The script detects your platform, downloads the matching release from the
tagged archive, verifies its checksum against the published manifest, and
installs to `~/.local/bin` (or `/usr/local/bin` when run as root). It
never touches your shell's rc file — add the target directory to `PATH`
yourself if the installer reports it isn't there already.

## Package managers

```sh
brew install anthracite
cargo install anthracite-cli
```

The Homebrew formula and the `cargo install` path both build from the
same tagged source and land on the same release cadence, roughly every
three to four weeks. `cargo install` additionally lets you pin an exact
version with `--version 0.9.2` when a CI pipeline needs reproducible
tooling.

## Verifying the install

```sh
anthracite --version
anthracite lint --help
```

## Project configuration

Anthracite reads `.anthracite.toml` from the current directory or any
parent, letting you set defaults once for a whole repository instead of
passing flags on every invocation:

```toml
# .anthracite.toml
shell = "posix"          # posix | bash — which dialect to assume by default
exclude = ["vendor/**", "third_party/**"]
disable = ["AN214"]       # rule codes to skip repo-wide

[severity]
AN228 = "error"           # promote a warning-level rule to error for this repo
```

## Exit codes for CI

`anthracite lint` exits `0` when nothing above warning level is found,
`1` when at least one error-level finding is present, and `2` on a usage
or internal error such as an unreadable file. A minimal CI step is one
line:

```sh
anthracite lint . || exit 1
```

Combine `exclude` in the config file with per-line
`# anthracite: disable=CODE` comments (shown on each [rule page](/rules/))
to keep the signal-to-noise ratio high as a codebase grows.
