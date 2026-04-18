+++
title = "Commands"
weight = 1
tags = ["cli", "commands"]
+++

# Commands

Scaffold provides a small set of focused commands for project generation and template management.

## scaffold new

Generate a new project from a template:

```bash
scaffold new <template> <output-dir> [flags]
```

| Flag | Short | Description |
|---|---|---|
| `--dry-run` | `-n` | Preview output without writing files |
| `--force` | `-f` | Overwrite existing output directory |
| `--var` | `-V` | Set a variable inline: `--var key=value` |
| `--no-hooks` | | Skip pre/post generation hooks |
| `--no-prompts` | | Use defaults for all prompts |

Example:

```bash
scaffold new go-cli my-tool --var author=jdoe --var license=MIT
```

## scaffold list

List all available templates:

```bash
scaffold list [flags]
```

| Flag | Short | Description |
|---|---|---|
| `--remote` | `-r` | Include templates from the registry |
| `--tag` | `-t` | Filter by tag |
| `--format` | | Output format: `table`, `json`, `yaml` |

Example:

```bash
scaffold list --tag go --format json
```

## scaffold template

Manage template packs:

```bash
scaffold template <subcommand>
```

| Subcommand | Description |
|---|---|
| `init <name>` | Create a new template pack |
| `validate <path>` | Check a template for errors |
| `publish <path>` | Publish to the registry |
| `install <name>` | Download from the registry |
| `remove <name>` | Delete a local template |

Example:

```bash
scaffold template validate ./my-template
```

```
Validating template "my-template"...
  scaffold.toml   OK
  prompts.toml    OK
  files/          OK (7 files, 2 templates)

Validation passed.
```

## scaffold config

View or modify user configuration:

```bash
scaffold config <subcommand>
```

| Subcommand | Description |
|---|---|
| `show` | Print current configuration |
| `set <key> <value>` | Set a configuration value |
| `unset <key>` | Remove a configuration value |
| `path` | Print config file location |

Example:

```bash
scaffold config set defaults.author "jdoe"
scaffold config show
```

## scaffold auth

Manage registry authentication:

```bash
scaffold auth <subcommand>
```

| Subcommand | Description |
|---|---|
| `login` | Authenticate with the registry |
| `logout` | Clear stored credentials |
| `status` | Show current auth state |

{{ hint(type="info", message="Authentication is only required for publishing templates. Downloading public templates does not require login.") }}
