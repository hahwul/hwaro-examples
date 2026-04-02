+++
title = "Publish Workflow"
weight = 2
template = "doc"
description = "Step-by-step guide to publishing packages to the Pantry registry."
tags = ["publishing", "workflow"]
[extra]
category = "Guide"
+++

## Prerequisites

Before publishing, ensure you have:

1. A Pantry account at [pantry.dev](https://pantry.dev)
2. An authentication token configured
3. A valid `pantry.toml` with required metadata

## Authentication

Log in to generate and store your token:

```bash
pantry login
```

This opens a browser for authentication and saves the token to `~/.pantry/config.toml`. For CI environments, set the token via environment variable:

```bash
export PANTRY_TOKEN=ptry_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

You can also pass it directly:

```bash
pantry publish --token ptry_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Preparing a Package

### Validate Your Package

Run the check command to verify your package before publishing:

```bash
pantry check
```

This validates:

- `pantry.toml` has all required fields (`name`, `version`)
- Version follows semver format
- No duplicate dependencies
- All referenced files exist
- Package size is within limits (50 MB default)
- License field uses a valid SPDX identifier

### Preview the Package Contents

See exactly what will be included in the published tarball:

```bash
pantry pack --list
```

```
Files to include (12 files, 145 KB):
  pantry.toml
  README.md
  LICENSE
  src/lib.rs
  src/client.rs
  src/config.rs
  src/error.rs
  src/models/mod.rs
  src/models/request.rs
  src/models/response.rs
  src/utils.rs
  src/version.rs
```

### Create a Local Tarball

Build the package tarball without publishing:

```bash
pantry pack
```

This creates a `.pantry-pkg` file you can inspect or test locally:

```bash
pantry pack --output ./my-library-1.4.0.pantry-pkg
```

## Publishing

### Publish to the Public Registry

```bash
pantry publish
```

Output:

```
Packing my-library 1.4.0...
  Included 12 files (145 KB)
  Compressed to 42 KB

Uploading to registry.pantry.dev...
  Published my-library 1.4.0

  https://pantry.dev/packages/my-library/1.4.0
```

### Publish to a Private Registry

```bash
pantry publish --registry https://registry.internal.company.com
```

### Dry Run

Test the entire publish flow without actually uploading:

```bash
pantry publish --dry-run
```

## Publishing Checklist

Before every release, walk through these steps:

| Step | Command | Purpose |
|------|---------|---------|
| 1. Run tests | `pantry run test` | Verify all tests pass |
| 2. Update version | Edit `pantry.toml` | Bump version per semver |
| 3. Update changelog | Edit `CHANGELOG.md` | Document changes for users |
| 4. Validate | `pantry check` | Catch metadata errors |
| 5. Preview | `pantry pack --list` | Confirm file list |
| 6. Dry run | `pantry publish --dry-run` | Full rehearsal |
| 7. Publish | `pantry publish` | Ship it |
| 8. Tag release | `git tag v1.4.0` | Mark the release in git |

## CI/CD Publishing

### GitHub Actions Example

```yaml
name: Publish
on:
  push:
    tags: ["v*"]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pantry-dev/setup-pantry@v1
      - run: pantry check
      - run: pantry run test
      - run: pantry publish
        env:
          PANTRY_TOKEN: ${{ secrets.PANTRY_TOKEN }}
```

### GitLab CI Example

```yaml
publish:
  stage: deploy
  image: pantry-dev/pantry:latest
  script:
    - pantry check
    - pantry run test
    - pantry publish
  only:
    - tags
  variables:
    PANTRY_TOKEN: $PANTRY_TOKEN
```

## Scoped Packages

Organizations can publish scoped packages under their namespace:

```toml
[package]
name = "@myorg/utils"
version = "2.0.0"
```

Scoped packages require org membership. Add team members at [pantry.dev/settings/teams](https://pantry.dev/settings/teams).

## Access Control

Configure who can publish updates to your package:

```bash
# Grant publish access
pantry access grant @alice my-library

# Revoke publish access
pantry access revoke @bob my-library

# List collaborators
pantry access list my-library
```

## Provenance

Pantry supports build provenance attestation for packages published from CI. This allows consumers to verify that a package was built from a specific commit and workflow:

```bash
pantry publish --provenance
```

Provenance metadata is recorded on the registry and displayed on the package page.
