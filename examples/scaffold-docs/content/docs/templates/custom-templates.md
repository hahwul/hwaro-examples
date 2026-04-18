+++
title = "Custom Templates"
weight = 3
tags = ["templates", "custom"]
+++

# Custom Templates

Scaffold supports authoring and distributing your own template packs. This guide walks through creating a template from scratch.

## Initialize a Template Pack

```bash
scaffold template init my-template
```

This creates the standard structure:

```
my-template/
├── scaffold.toml
├── prompts.toml
├── hooks/
├── partials/
└── files/
```

## Define Template Metadata

Edit `scaffold.toml` with your template details:

```toml
[template]
name = "my-template"
version = "0.1.0"
description = "My custom project template"
author = "yourname"

[template.tags]
values = ["custom"]
```

## Add Prompts

Define variables in `prompts.toml`:

```toml
[[prompts]]
name = "project_name"
message = "Project name"
type = "string"
required = true

[[prompts]]
name = "use_docker"
message = "Include Dockerfile?"
type = "confirm"
default = false
```

## Write Template Files

Add files to the `files/` directory. Use double curly braces for variable interpolation:

```
# {{project_name}}

> {{description}}

## Getting Started

Built by {{author}}.
```

## Template Variable Reference

The following built-in variables are always available:

| Variable | Description |
|---|---|
| `project_name` | Name of the generated project |
| `output_dir` | Absolute path to the output directory |
| `scaffold_version` | Version of Scaffold running the generation |
| `timestamp` | ISO 8601 timestamp of generation time |
| `year` | Current four-digit year |

## Conditional File Generation

Use the `when` field in `scaffold.toml` to conditionally include files:

```toml
[[conditionals]]
path = "Dockerfile"
when = "use_docker == true"

[[conditionals]]
path = ".github/workflows/ci.yml"
when = "with_ci == true"
```

Files listed with a `when` clause are only generated if the condition evaluates to true.

## Testing Your Template

Use the `--dry-run` flag to preview output without writing to disk:

```bash
scaffold new my-template test-output --dry-run
```

```
[dry-run] Would create: test-output/
[dry-run] Would create: test-output/README.md
[dry-run] Would create: test-output/Makefile
[dry-run] Would create: test-output/.gitignore
```

## Publishing to the Registry

Package and publish your template for others to use:

```bash
scaffold template publish my-template
```

{{ hint(type="info", message="You need a registry account to publish templates. Run scaffold auth login to authenticate.") }}

Published templates appear in the global registry and can be installed with:

```bash
scaffold template install yourname/my-template
```
