+++
title = "Deprecation and Unpublish"
weight = 3
template = "doc"
description = "Policies for deprecating versions and removing packages from the registry."
tags = ["publishing", "deprecation"]
[extra]
category = "Policy"
+++

## Overview

Once a package version is published, it becomes part of the dependency graph for potentially thousands of downstream projects. Removing or altering published versions can break builds across the ecosystem. Pantry provides controlled mechanisms to handle problematic releases while minimizing disruption.

## Deprecating a Version

Deprecation marks a version as not recommended without removing it. Deprecated versions remain downloadable and resolvable but display a warning to users.

### Deprecate a Specific Version

```bash
pantry deprecate my-library@1.3.0 "Security vulnerability in XML parser. Upgrade to 1.3.1 or later."
```

When a user installs or resolves a deprecated version, they see:

```
warning: my-library 1.3.0 is deprecated
  Message: "Security vulnerability in XML parser. Upgrade to 1.3.1 or later."
```

### Deprecate an Entire Package

```bash
pantry deprecate my-library "This package has been superseded by my-library-v2."
```

### Undeprecate

If the deprecation was premature, reverse it:

```bash
pantry undeprecate my-library@1.3.0
```

## Yanking a Version

Yanking is stronger than deprecation. A yanked version is excluded from dependency resolution for new installs, but remains downloadable for projects that already have it in their lockfile.

### Yank a Version

```bash
pantry yank my-library@1.3.0
```

### Behavior of Yanked Versions

| Scenario | Yanked version behavior |
|----------|------------------------|
| New `pantry install` without lockfile | Excluded from resolution. Solver picks a different version. |
| `pantry install` with lockfile pinning yanked version | Installed normally, but a warning is displayed. |
| `pantry update` | Replaces yanked version with a non-yanked alternative. |
| Direct install `pantry add my-library@1.3.0` | Fails with an error explaining the version is yanked. |
| `pantry info my-library` | Version shown with `[yanked]` label. |

### Unyank

If a version was yanked by mistake:

```bash
pantry unyank my-library@1.3.0
```

## Unpublishing

Unpublishing completely removes a version from the registry. This is an irreversible action with strict limitations.

### Time Window

Pantry allows unpublishing only within **72 hours** of the initial publish, and only if:

- The version has fewer than **100 downloads**
- No other published package depends on the exact version
- You are the package owner or an organization admin

### Unpublish a Version

```bash
pantry unpublish my-library@1.3.0
```

You will be prompted to confirm:

```
You are about to permanently remove my-library@1.3.0 from the registry.
This action cannot be undone.

  Downloads: 23
  Dependents: 0
  Published: 2 hours ago

Type the package name to confirm: my-library
```

### Unpublish an Entire Package

Removing all versions of a package is only allowed if every version meets the unpublish criteria:

```bash
pantry unpublish my-library
```

After unpublishing all versions, the package name is reserved for 30 days to prevent name-squatting. After 30 days, the name becomes available for new packages.

## Policy Summary

| Action | Effect | Reversible | Time limit | Download limit |
|--------|--------|------------|------------|----------------|
| Deprecate | Warning shown to users | Yes | None | None |
| Yank | Excluded from new resolution | Yes | None | None |
| Unpublish | Permanently removed | No | 72 hours | 100 downloads |

## Best Practices

**Prefer deprecation over yanking.** Deprecation is the least disruptive option. Use it when a version has known issues but is not actively harmful.

**Prefer yanking over unpublishing.** Yanking prevents new adoption while preserving existing builds. Use it for serious bugs or security issues.

**Reserve unpublishing for accidental releases.** Only unpublish when you have published sensitive data (credentials, proprietary code) or the wrong package entirely.

**Always provide a message.** When deprecating or yanking, include a clear explanation and a recommended upgrade path. This helps downstream maintainers respond quickly.

**Coordinate with dependents.** Before yanking a widely-used version, consider reaching out to major downstream packages to give them time to update.

## Security Advisories

For security vulnerabilities, Pantry integrates with the advisory database. File a security advisory instead of (or in addition to) yanking:

```bash
pantry advisory create my-library \
  --versions ">=1.2.0, <1.3.1" \
  --severity high \
  --title "XML external entity injection" \
  --description "The XML parser in versions 1.2.0 through 1.3.0 is vulnerable to XXE attacks." \
  --patched "1.3.1"
```

Advisories appear in `pantry audit` results for all affected projects.
