+++
title = "Flags"
weight = 2
tags = ["cli", "flags"]
+++

# Flags

Scaffold supports global flags that apply to all commands, as well as command-specific flags documented on each command page.

## Global Flags

These flags can be used with any command:

| Flag | Short | Description | Default |
|---|---|---|---|
| `--help` | `-h` | Show help for any command | |
| `--version` | `-v` | Print Scaffold version | |
| `--config` | `-c` | Path to config file | `~/.scaffold/config.toml` |
| `--verbose` | | Enable verbose output | `false` |
| `--quiet` | `-q` | Suppress all output except errors | `false` |
| `--no-color` | | Disable colored output | `false` |
| `--log-level` | | Set log level: `debug`, `info`, `warn`, `error` | `info` |

## Usage Examples

Show help for a specific command:

```bash
scaffold new --help
```

Run with verbose logging:

```bash
scaffold new go-cli my-tool --verbose
```

Use a custom config file:

```bash
scaffold new go-cli my-tool --config ./project-scaffold.toml
```

Disable color for piping to a file:

```bash
scaffold list --no-color > templates.txt
```

## Environment Variables

Scaffold reads the following environment variables. These take precedence over config file values but are overridden by command-line flags.

| Variable | Description | Equivalent Flag |
|---|---|---|
| `SCAFFOLD_CONFIG` | Path to config file | `--config` |
| `SCAFFOLD_NO_COLOR` | Disable colored output | `--no-color` |
| `SCAFFOLD_LOG_LEVEL` | Set log level | `--log-level` |
| `SCAFFOLD_REGISTRY_URL` | Override registry URL | |
| `SCAFFOLD_TEMPLATE_DIR` | Override template search path | |

Example:

```bash
export SCAFFOLD_LOG_LEVEL=debug
export SCAFFOLD_TEMPLATE_DIR=~/my-templates
scaffold new go-cli my-tool
```

## Exit Codes

Scaffold uses standard exit codes to indicate success or failure:

| Code | Meaning |
|---|---|
| `0` | Success |
| `1` | General error |
| `2` | Invalid arguments or flags |
| `3` | Template not found |
| `4` | Template validation failed |
| `5` | Output directory already exists (without `--force`) |
| `6` | Hook script failed |
| `7` | Registry communication error |

{{ alert(type="tip", message="Use exit codes in CI scripts to detect specific failure modes.") }}

## Shell Completion

Generate shell completion scripts for your shell:

```bash
scaffold completion bash > /etc/bash_completion.d/scaffold
scaffold completion zsh > ~/.zsh/completions/_scaffold
scaffold completion fish > ~/.config/fish/completions/scaffold.fish
```

After installing completions, restart your shell or source the file to enable tab completion for all commands and flags.
