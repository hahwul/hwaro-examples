+++
title = "Plugins"
weight = 3
date = 2025-06-12
+++

# Plugin System

Mortar has an extensible plugin system that lets you hook into the build lifecycle, add custom commands, and integrate with external tools.

## Installing Plugins

Plugins are declared in `mortar.toml`:

```toml
[plugins]
lint = { version = "0.3.0" }
format = { version = "1.1.0" }
coverage = { git = "https://github.com/mortar-plugins/coverage.git", tag = "v0.5" }
```

Install all declared plugins:

```bash
mortar plugin install
```

## Built-in Plugins

Mortar ships with several built-in plugins:

| Plugin     | Description                          | Default |
|-----------|--------------------------------------|---------|
| markdown  | Process Markdown files               | On      |
| lint      | Run linters before build             | Off     |
| format    | Auto-format source files             | Off     |
| test      | Run test suites after build          | Off     |
| docs      | Generate documentation from source   | Off     |
| bench     | Benchmark runner                     | Off     |

Enable built-in plugins:

```toml
[plugins]
lint = { enabled = true, config = "strict" }
test = { enabled = true, parallel = true }
```

## Writing Plugins

A Mortar plugin is a directory with a `plugin.toml` manifest and an entry point script:

```
my-plugin/
  plugin.toml
  main.sh        # or main.py, main.js
```

The plugin manifest:

```toml
[plugin]
name = "my-plugin"
version = "1.0.0"
description = "A custom build step"
author = "Your Name"
hooks = ["pre-build", "post-build"]
```

## Lifecycle Hooks

Plugins can register for the following hooks:

| Hook            | Triggered                                |
|----------------|------------------------------------------|
| pre-init       | Before project initialization            |
| post-init      | After project initialization             |
| pre-build      | Before compilation starts                |
| post-compile   | After compilation, before linking        |
| post-build     | After build completes successfully       |
| on-error       | When a build error occurs                |
| pre-test       | Before test execution                    |
| post-test      | After test execution                     |
| pre-clean      | Before clean operation                   |

Example hook implementation in a shell script:

```bash
#!/bin/bash
# main.sh - runs on pre-build hook

echo "[my-plugin] Checking code style..."
mortar-lint --config .lintrc src/
if [ $? -ne 0 ]; then
  echo "[my-plugin] Lint errors found. Fix before building."
  exit 1
fi
echo "[my-plugin] Code style check passed."
```

## Plugin Configuration

Pass configuration to plugins through `mortar.toml`:

```toml
[plugins.lint]
enabled = true
rules = ["no-unused-vars", "no-implicit-cast"]
exclude = ["vendor/**", "tests/**"]
fail_on_warning = false
```

Plugins access their configuration through the Mortar plugin API:

```python
import mortar

config = mortar.plugin_config()
rules = config.get("rules", [])
exclude = config.get("exclude", [])
```

> Plugins run in a sandboxed environment by default. They can read project files and write to the build directory, but cannot modify source files unless explicitly granted `write_source = true` permission in the plugin manifest.
