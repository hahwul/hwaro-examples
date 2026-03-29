+++
title = "Directory Structure"
weight = 1
tags = ["templates", "structure"]
+++

# Directory Structure

Every template pack follows a standard directory layout. Scaffold reads this structure and reproduces it in the output directory, processing variable placeholders along the way.

## Template Pack Layout

```
templates/go-cli/
├── scaffold.toml
├── prompts.toml
├── hooks/
│   ├── pre-generate.sh
│   └── post-generate.sh
├── partials/
│   └── license-header.txt
└── files/
    ├── .gitignore
    ├── go.mod.tmpl
    ├── Makefile.tmpl
    ├── README.md.tmpl
    ├── LICENSE.tmpl
    ├── cmd/
    │   └── root.go.tmpl
    └── internal/
        └── version.go.tmpl
```

## Directory Breakdown

| Directory | Purpose |
|---|---|
| `scaffold.toml` | Template metadata: name, version, description |
| `prompts.toml` | Variable definitions and interactive prompts |
| `hooks/` | Shell scripts that run before or after generation |
| `partials/` | Reusable text fragments included by templates |
| `files/` | The actual project tree to generate |

## The files/ Directory

Everything inside `files/` maps directly to the output directory. Files ending in `.tmpl` are processed through the template engine; all others are copied as-is.

```
files/                     -->  my-project/
├── .gitignore             -->  ├── .gitignore
├── go.mod.tmpl            -->  ├── go.mod
├── cmd/                   -->  ├── cmd/
│   └── root.go.tmpl       -->  │   └── root.go
└── internal/              -->  └── internal/
    └── version.go.tmpl    -->      └── version.go
```

{{ hint(type="info", message="The .tmpl extension is stripped from filenames during generation.") }}

## Dynamic Directory Names

Directory names can contain template variables. For example:

```
files/
└── {{project_name}}/
    └── main.go.tmpl
```

If `project_name` is set to `myapp`, the output becomes:

```
myapp/
└── main.go
```

## Template Storage Locations

Scaffold searches for template packs in the following order:

| Location | Path |
|---|---|
| Local project | `.scaffold/templates/` |
| User home | `~/.scaffold/templates/` |
| Global registry | `https://registry.scaffoldcli.dev/` |

The first match wins. Local templates always take precedence over remote ones.
