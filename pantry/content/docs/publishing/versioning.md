+++
title = "Versioning"
weight = 1
template = "doc"
description = "Semantic versioning rules, version ranges, and dependency resolution."
tags = ["versioning", "semver", "dependencies"]
[extra]
category = "Reference"
+++

## Semantic Versioning

Pantry requires all packages to follow Semantic Versioning 2.0.0 (semver). A version number has the format `MAJOR.MINOR.PATCH`, where:

| Component | When to increment |
|-----------|-------------------|
| MAJOR | Incompatible API changes that require consumers to update their code |
| MINOR | New functionality added in a backward-compatible manner |
| PATCH | Backward-compatible bug fixes with no new features |

### Pre-release Versions

Pre-release versions are denoted by appending a hyphen and identifiers after the patch number:

```
1.0.0-alpha
1.0.0-alpha.1
1.0.0-beta.3
1.0.0-rc.1
```

Pre-release versions have lower precedence than the associated release version. They are excluded from range matching unless explicitly requested.

### Build Metadata

Build metadata is appended with a plus sign and is ignored during version comparison:

```
1.0.0+build.42
1.0.0+20250101
```

## Version Ranges

When specifying dependency versions in `pantry.toml`, you can use several range syntaxes:

### Range Operators

| Syntax | Example | Matches | Description |
|--------|---------|---------|-------------|
| Caret `^` | `^1.2.3` | `>=1.2.3, <2.0.0` | Compatible with version. Default when bare version is given. |
| Tilde `~` | `~1.2.3` | `>=1.2.3, <1.3.0` | Patch-level changes only. |
| Exact `=` | `=1.2.3` | `1.2.3` | Exactly this version and nothing else. |
| Greater than | `>1.2.3` | `>1.2.3` | Any version strictly greater. |
| Greater or equal | `>=1.2.3` | `>=1.2.3` | This version or any later version. |
| Less than | `<2.0.0` | `<2.0.0` | Any version strictly less. |
| Less or equal | `<=1.9.9` | `<=1.9.9` | This version or any earlier version. |
| Wildcard | `1.2.*` | `>=1.2.0, <1.3.0` | Any patch version within minor. |
| Compound | `>=1.2, <1.5` | `>=1.2.0, <1.5.0` | Multiple constraints combined with comma. |

### Caret Ranges in Detail

The caret range is the default and most commonly used. Its behavior varies based on which components are specified:

| Specifier | Equivalent range | Rationale |
|-----------|-----------------|-----------|
| `^1.2.3` | `>=1.2.3, <2.0.0` | Major version is nonzero, so major is fixed |
| `^0.2.3` | `>=0.2.3, <0.3.0` | Major is zero, so minor is fixed |
| `^0.0.3` | `>=0.0.3, <0.0.4` | Major and minor are zero, so patch is fixed |
| `^1.2` | `>=1.2.0, <2.0.0` | Missing patch treated as zero |
| `^0.0` | `>=0.0.0, <0.1.0` | Minor is fixed |
| `^1` | `>=1.0.0, <2.0.0` | Only major specified |

### Tilde Ranges in Detail

| Specifier | Equivalent range |
|-----------|-----------------|
| `~1.2.3` | `>=1.2.3, <1.3.0` |
| `~1.2` | `>=1.2.0, <1.3.0` |
| `~1` | `>=1.0.0, <2.0.0` |

## Dependency Resolution

Pantry uses a SAT-based dependency resolver that guarantees a correct and deterministic solution when one exists.

### Resolution Algorithm

1. **Collect requirements.** Gather all direct dependencies from `pantry.toml` and their transitive dependencies from the registry index.

2. **Build constraint graph.** Each package-version pair becomes a variable. Version ranges are translated into boolean clauses.

3. **Solve.** The SAT solver finds an assignment that satisfies all constraints. If no solution exists, it reports the minimal conflicting set.

4. **Select optimal versions.** Among valid solutions, Pantry prefers the newest version that satisfies all constraints, giving priority to packages closer to the root of the dependency tree.

### Conflict Resolution

When two packages require incompatible versions of the same dependency, the resolver reports the conflict:

```
error: dependency conflict

  my-app requires reqwest ^0.12
  analytics requires reqwest ^0.11

  reqwest 0.12.x and 0.11.x cannot coexist.

  Suggestion: Update analytics to a version compatible with reqwest 0.12,
  or pin reqwest to a version both can accept.
```

### Resolution Strategies

| Strategy | Flag | Behavior |
|----------|------|----------|
| Default | (none) | Prefer newest compatible versions |
| Minimal | `--minimal` | Prefer oldest compatible versions. Useful for testing minimum supported versions. |
| Locked | `--frozen` | Use exact versions from `pantry.lock`. Fail if lockfile is outdated. |
| Eager | `--eager` | Update all transitive dependencies to latest, even if lockfile has valid versions. |

## Version Precedence

Pantry orders versions according to semver rules:

1. Compare MAJOR, then MINOR, then PATCH numerically.
2. A version without a pre-release tag has higher precedence than one with.
3. Pre-release precedence is determined by comparing dot-separated identifiers left to right. Numeric identifiers compare as integers; alphanumeric identifiers compare lexically.

### Precedence Examples

```
0.9.0 < 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-beta < 1.0.0-rc.1 < 1.0.0 < 1.1.0 < 2.0.0
```

## Yanked Versions

A yanked version is still downloadable (for reproducibility) but excluded from resolution unless the lockfile already pins it. If your lockfile references a yanked version, Pantry displays a warning:

```
warning: reqwest 0.12.2 has been yanked.
  Reason: "contains data corruption bug in multipart uploads"
  Consider upgrading to 0.12.3 or later.
```
