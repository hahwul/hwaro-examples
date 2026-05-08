+++
title = "Probe Authoring"
date = 2024-08-18
description = "Conventions for writing custom probes and validating their output."
+++

A probe is a small program that returns a structured signal at a defined interval. Probes are the extension point through which Sentinel observes systems that are not covered by the built-in collectors.

## Contract

A probe must be a self-contained executable that emits one signal per invocation on standard output. The signal is a single line of JSON conforming to the published schema. Lines that do not parse are recorded as probe failures and counted against a per-probe error budget.

A probe must complete within its configured deadline. The default deadline is five seconds. Probes that exceed the deadline are terminated and recorded as timeouts.

## Required Fields

Every signal must include the probe identifier, the timestamp, and at least one numeric or boolean measurement. Free-form metadata may be attached under the `attributes` key, which is preserved through the routing layer and made available to alert templates.

The timestamp is expressed in Unix seconds with optional fractional precision. The collector treats timestamps in the future as clock drift and applies a configurable correction.

## Validation

The reference toolchain includes a probe validator that runs a probe ten times in isolation and verifies the schema, deadline, and idempotency of the output. A probe whose output varies between consecutive invocations under identical conditions is considered non-idempotent and rejected.

Validators may be invoked in continuous integration. The recommended practice is to run the validator on every change to a probe before merging.

## Distribution

Probes are distributed as plain executables placed in the probe directory of each agent. There is no central registry, and probes are not automatically synchronized between agents. Configuration management is the responsibility of the operator.

A future revision of the agent will introduce a signed manifest format for probe distribution. The manifest will declare the probe schema version and permit the agent to refuse incompatible probes at load time.
