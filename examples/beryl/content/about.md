+++
title = "About"
description = "Why Beryl reconciles resource by resource instead of re-applying whole stacks, and how to install it"
toc = true
+++

Beryl started as an internal tool at a payments company where the
declared-infrastructure story and the actual-infrastructure story had
quietly diverged in eleven different ways, none of them caught until an
audit. The team had a plan-and-apply workflow already &mdash; the problem
was that "apply" meant touching everything, so nobody ran it against a
live stack without scheduling a maintenance window first. Drift
accumulated because fixing it was expensive.

<!-- more -->

## Detection is not reconciliation

Most infrastructure-as-code tools conflate the two: a plan shows you every
difference between desired and current state, in the same breath as
changes you actually asked for. Beryl separates them deliberately.
`beryl plan` only ever reports drift &mdash; divergence nobody declared.
`beryl apply` only ever touches resources that plan flagged. If you change
your `.tf` or `.pulumi` source and want that rolled out, that is still your
existing tool's job; Beryl assumes it runs alongside Terraform or Pulumi,
not instead of them.

## How comparison works

On each run, Beryl reads your state backend (S3, GCS, Terraform Cloud, or a
local file), fetches the live resource description from the provider API,
and normalizes both into a comparable shape:

```yaml
# .beryl.yml — minimal project config
version: 1
backend:
  kind: s3
  bucket: infra-state-prod
  key: payments/terraform.tfstate
providers:
  - aws
  - gcp
ignore_defaults: true   # skip provider-injected fields like ARNs and timestamps
```

Fields the provider sets automatically &mdash; ARNs, generated IDs,
last-modified timestamps &mdash; are excluded from comparison by default,
because flagging them as drift on every run trains operators to ignore the
output. What is left is the set of fields a human or another tool changed
outside your declared configuration.

## Installation

```sh
# macOS / Linux, via install script
curl -fsSL https://get.beryl.dev | sh

# or a specific release
curl -fsSL -o beryl https://dl.beryl.dev/v2.4.0/beryl-linux-amd64
chmod +x beryl && sudo mv beryl /usr/local/bin/
```

Beryl needs read access to your state backend and your cloud provider's
describe/list APIs; `beryl apply` additionally needs write access scoped to
the resource types you want it to reconcile. It does not need access to
create or destroy resources outside what your declared configuration
already defines.

## What it is not

Beryl does not replace a provisioning tool, does not manage its own state
format unless you opt into the native manifest, and does not attempt
predictive drift detection. It answers one question well &mdash; "does live
match declared, right now" &mdash; and gives you a narrow, auditable way to
act on the answer.
