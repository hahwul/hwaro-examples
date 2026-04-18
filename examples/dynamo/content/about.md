+++
title = "About Dynamo"
description = "About the Dynamo serverless platform and project"
tags = ["about", "dynamo"]
+++

# About Dynamo

Dynamo is an open-source serverless platform designed for teams that want fine-grained control over function execution without the operational overhead of managing server fleets. The project provides a complete FaaS runtime with built-in event routing, lifecycle management, and observability.

## Design Principles

Dynamo is built around four principles:

- **Zero Infrastructure** -- Developers define functions and triggers. The platform handles provisioning, scaling, and teardown with no server management required.
- **Event-First Architecture** -- Every function invocation originates from an event. HTTP requests, queue messages, timer ticks, and storage notifications all follow the same dispatch pipeline.
- **Isolated Execution** -- Each function instance runs in its own container with dedicated memory, filesystem, and network namespace. Execution environments are ephemeral and stateless by default.
- **Observable by Default** -- Every invocation produces structured logs, duration metrics, and trace spans. No additional instrumentation is needed to get baseline visibility into function behavior.

## Project History

Dynamo started as an internal tool for running short-lived data processing tasks triggered by file uploads. The initial version supported a single runtime (Node.js) and only HTTP triggers. Over successive iterations, the project added multi-runtime support, queue-based triggers, cron scheduling, and a deployment pipeline with traffic splitting.

The project is maintained by a team of platform engineers and accepts contributions through standard pull request workflows.

## License

Dynamo is released under the Apache 2.0 license. Enterprise support and managed hosting are available through separate agreements.

## Contact

- **Source** -- [github.com/dynamo-faas/dynamo](https://github.com/dynamo-faas/dynamo)
- **Issues** -- Use the GitHub issue tracker for bug reports and feature requests
- **Discussion** -- Join the community forum for questions and design discussions

## Documentation

This documentation site is built with [Hwaro](https://github.com/hahwul/hwaro), a fast static site generator.
