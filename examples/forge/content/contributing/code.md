+++
title = "Contributing Code"
weight = 1
template = "doc"
description = "How to submit code changes through pull requests."
tags = ["code", "pull-requests"]
[extra]
category = "Code"
+++

## Fork and Clone

```bash
# Fork on GitHub, then:
git clone https://github.com/YOUR_USERNAME/forge.git
cd forge
git remote add upstream https://github.com/forge-oss/forge.git
```

## Create a Branch

```bash
git checkout -b fix/issue-123
```

Branch naming conventions:

| Prefix | Usage |
|--------|-------|
| `feat/` | New feature |
| `fix/` | Bug fix |
| `docs/` | Documentation changes |
| `refactor/` | Code refactoring |
| `test/` | Adding or updating tests |

## Make Changes

1. Write your code
2. Add tests for new functionality
3. Run the test suite: `forge test`
4. Run the linter: `forge lint`

## Commit Messages

Follow the Conventional Commits format:

```
feat: add support for YAML configuration

- Parse YAML config files alongside TOML
- Add YAML test fixtures
- Update documentation

Closes #123
```

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `test` | Adding or correcting tests |
| `chore` | Maintenance tasks |

## Submit a Pull Request

```bash
git push origin fix/issue-123
```

Then open a pull request on GitHub. Fill in the PR template completely.

### PR Checklist

- All tests pass
- Linter shows no warnings
- Documentation updated (if applicable)
- Commit messages follow conventions
- PR description explains the change and links to the issue
