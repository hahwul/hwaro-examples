+++
title = "Expansion of a Possibly-Unset Variable"
description = "A variable that is never assigned expands to an empty string instead of failing, which lets typos and missing environment variables pass through silently."
date = "2025-08-11"
weight = 40
toc = true
[extra]
code = "AN228"
severity = "warning"
category = "expansions"
+++

Shells do not distinguish "unset" from "empty" unless you ask them to.
`${TARGET_ENV}` and `${TARGTE_ENV}` — note the typo — both expand to
nothing if neither variable exists, and the script keeps running as if
that were fine. Anthracite tracks every assignment it can see (including
`export`, function parameters, and `read`) and raises AN228 when a
variable is expanded before any assignment reaches it on at least one
code path.

<!-- more -->

## What it flags

```sh
#!/bin/sh
rsync -a build/ "$DEPLOY_HOST":/var/www/app/
```

If the CI job that calls this script renamed its secret from
`DEPLOY_HOST` to `DEPLOY_TARGET` last quarter, this line now rsyncs the
build output to `:/var/www/app/` — an empty host, which most `rsync`
builds interpret as localhost. The deploy "succeeds," copies files to the
wrong machine, and nothing in the output says why the production site
never updated.

## The fix

```sh
#!/bin/sh
: "${DEPLOY_HOST:?DEPLOY_HOST must be set}"
rsync -a build/ "$DEPLOY_HOST":/var/www/app/
```

The `${var:?message}` form is a guard clause built into parameter
expansion itself: if `DEPLOY_HOST` is unset or empty, the shell prints
`message` to stderr and exits immediately, before `rsync` ever runs. Use
`${var:-default}` instead when an empty value is a legitimate, intended
case rather than a configuration error.

## Suppressing a finding

```sh
echo "${OPTIONAL_TAG}"  # anthracite: disable=AN228 -- empty tag is a valid, documented default
```

## See also

- [Unquoted Variable Expansion](/rules/an101-unquoted-variable-expansion/) — quoting and unset-checking are independent passes.
- [Non-POSIX Test Operator in a /bin/sh Script](/rules/an301-non-posix-test-operator/) — another rule that fires hardest on scripts with a `#!/bin/sh` shebang.
