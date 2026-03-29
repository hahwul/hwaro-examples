+++
title = "Quickstart"
weight = 2
tags = ["setup", "quickstart"]
+++

# Quickstart

This walkthrough creates a new Go project using a built-in template in under two minutes.

## Step 1: List Available Templates

```bash
scaffold list
```

Output:

```
TEMPLATE       DESCRIPTION                  VERSION
go-cli         Go CLI application           1.2.0
go-api         Go REST API server           1.1.0
node-api       Node.js Express API          1.0.3
python-pkg     Python package scaffold      1.0.1
static-site    Static site with HTML/CSS    0.9.0
```

## Step 2: Create a New Project

Run the `new` command with a template name and output directory:

```bash
scaffold new go-cli my-tool
```

Scaffold will prompt for template variables:

```
? Project name: my-tool
? Author: jdoe
? License: MIT
? Description: A command-line utility

Generating project from template "go-cli"...
```

## Step 3: Inspect the Output

```
my-tool/
├── .github/
│   └── workflows/
│       └── ci.yml
├── cmd/
│   └── root.go
├── internal/
│   └── version.go
├── .gitignore
├── go.mod
├── go.sum
├── LICENSE
├── Makefile
└── README.md
```

## Step 4: Verify the Project

```bash
cd my-tool
go build ./...
go test ./...
```

{{ alert(type="tip", message="Use --dry-run to preview the output tree without writing files to disk.") }}

## Step 5: Run the Generated Binary

```bash
go run ./cmd/... --help
```

```
my-tool - A command-line utility

Usage:
  my-tool [command]

Available Commands:
  help        Show help for a command
  version     Print version information

Flags:
  -h, --help      Show help
  -v, --version   Show version
```

## Configuration File

Scaffold stores user defaults in `~/.scaffold/config.toml`:

```toml
[defaults]
author = "jdoe"
license = "MIT"

[registry]
url = "https://registry.scaffoldcli.dev"
```

These values are injected automatically when creating new projects, so you do not need to enter them each time.

Next, learn how templates are structured in the [Templates](/docs/templates/) section.
