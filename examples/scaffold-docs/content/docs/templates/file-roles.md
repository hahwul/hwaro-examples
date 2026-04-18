+++
title = "File Roles"
weight = 2
tags = ["templates", "files"]
+++

# File Roles

Each file in a template pack serves a specific purpose. This page documents the role and format of every configuration file.

## scaffold.toml

The manifest file that describes the template pack:

```toml
[template]
name = "go-cli"
version = "1.2.0"
description = "Go CLI application with cobra and goreleaser"
author = "scaffoldcli"
license = "MIT"
min_scaffold_version = "2.0.0"

[template.tags]
values = ["go", "cli", "cobra"]
```

| Field | Required | Description |
|---|---|---|
| `name` | yes | Unique template identifier |
| `version` | yes | Semantic version string |
| `description` | yes | One-line summary |
| `author` | no | Template author name |
| `license` | no | Template license type |
| `min_scaffold_version` | no | Minimum Scaffold version required |
| `tags` | no | Searchable tags for the registry |

## prompts.toml

Defines the variables that the user is prompted for during generation:

```toml
[[prompts]]
name = "project_name"
message = "Project name"
type = "string"
required = true
default = "my-project"

[[prompts]]
name = "author"
message = "Author name"
type = "string"
required = true

[[prompts]]
name = "license"
message = "License type"
type = "select"
options = ["MIT", "Apache-2.0", "GPL-3.0", "BSD-3-Clause"]
default = "MIT"

[[prompts]]
name = "with_ci"
message = "Include CI workflow?"
type = "confirm"
default = true
```

| Field | Description |
|---|---|
| `name` | Variable name used in templates |
| `message` | Prompt text shown to the user |
| `type` | Input type: `string`, `select`, `confirm`, `number` |
| `options` | Choices for `select` type prompts |
| `required` | Whether the prompt must have a value |
| `default` | Default value if the user presses Enter |

## Hook Scripts

Scripts in the `hooks/` directory run at specific lifecycle points:

| Script | When It Runs |
|---|---|
| `pre-generate.sh` | Before template files are written |
| `post-generate.sh` | After all files are generated |

Example `post-generate.sh`:

```bash
#!/bin/bash
cd "{{output_dir}}"
git init
git add .
git commit -m "Initial scaffold"
```

{{ alert(type="warning", message="Hook scripts must be executable. Run chmod +x on each script.") }}

## Partials

Files in `partials/` are reusable text fragments. Reference them in template files with the include directive:

```
{{ include "license-header.txt" }}
```

Partials are useful for shared headers, license blocks, or boilerplate code that appears in multiple generated files.
