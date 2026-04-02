+++
title = "Pantry"
template = "page"
+++

Pantry is a fast, reliable package manager and registry for modern software development. Browse the documentation to learn how to install packages, manage dependencies, and publish your own libraries.

## Documentation

- [Getting Started](docs/getting-started/) -- Install the CLI, search for packages, and configure your project
- [Publishing](docs/publishing/) -- Versioning, publishing workflows, and deprecation policies
- [About](about/) -- About the Pantry platform and ecosystem

## Quick Install

```bash
curl -fsSL https://get.pantry.dev | sh
```

Then initialize a new project:

```bash
pantry init my-project
cd my-project
pantry install
```

## Features

| Feature | Description |
|---------|-------------|
| Fast resolution | Deterministic dependency resolution in milliseconds |
| Lockfile support | Reproducible builds with `pantry.lock` |
| Workspaces | Monorepo support with shared dependencies |
| Registry | Public and private registry hosting |
| Audit | Built-in security vulnerability scanning |
| Scripts | Task runner for build, test, and deploy workflows |
