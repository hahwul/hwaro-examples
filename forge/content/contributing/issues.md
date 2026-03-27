+++
title = "Filing Issues"
weight = 2
template = "doc"
description = "How to report bugs and request features effectively."
tags = ["issues", "community"]
[extra]
category = "Community"
+++

## Bug Reports

Use the bug report template when filing a new issue. Include:

### Required Information

| Field | Description |
|-------|-------------|
| Title | Brief, specific summary of the bug |
| Environment | OS, Forge version, Go version |
| Steps to Reproduce | Numbered steps to trigger the bug |
| Expected Behavior | What should happen |
| Actual Behavior | What actually happens |
| Logs / Output | Relevant error messages or output |

### Example

```markdown
## Bug: forge build fails with YAML config

**Environment:** macOS 14.2, Forge v2.0.3, Go 1.22.1

**Steps to Reproduce:**
1. Create a new project with `forge new test`
2. Rename `forge.toml` to `forge.yaml`
3. Run `forge build`

**Expected:** Build succeeds
**Actual:** Error: "unsupported config format"

**Logs:**
Error at config.go:42: unsupported config format ".yaml"
```

## Feature Requests

Use the feature request template. Include:

- **Problem statement** -- What problem does this solve?
- **Proposed solution** -- How should it work?
- **Alternatives considered** -- What other approaches were evaluated?
- **Additional context** -- Mockups, links, or related issues

## Labels

| Label | Meaning |
|-------|---------|
| `bug` | Confirmed bug |
| `enhancement` | Feature request |
| `good first issue` | Suitable for new contributors |
| `help wanted` | Maintainers welcome help |
| `duplicate` | Already reported |
| `wontfix` | Not planned |

## Response Times

- **Critical bugs:** Triaged within 24 hours
- **General bugs:** Triaged within 1 week
- **Feature requests:** Discussed in monthly planning
