+++
title = "About Relay"
description = "About the Relay webhook and integration platform"
tags = ["about", "relay"]
+++

# About Relay

Relay is an open-source webhook delivery platform designed for teams that need reliable event-driven communication between services. The project was created to solve the common challenges of webhook infrastructure: retries, signature verification, payload transformation, and delivery monitoring.

## Design Principles

Relay is built around four principles:

- **Reliable Delivery** -- Every webhook delivery is tracked, retried on failure with exponential backoff, and logged for auditing. No event is silently dropped.
- **Security by Default** -- All outgoing webhooks are signed with HMAC-SHA256. Endpoint secrets are stored encrypted and rotated without downtime.
- **Declarative Configuration** -- Endpoints, routing rules, and integration settings are defined in configuration files that can be version-controlled alongside application code.
- **Observable Operations** -- Delivery logs, failure rates, and latency metrics are exposed through a structured API for monitoring and alerting.

## Project History

Relay started as an internal webhook proxy for coordinating deployment notifications across multiple teams. The initial version handled simple HTTP POST forwarding with basic retry logic. Over time, the project grew to include signature verification, payload transformation, routing rules, and a library of pre-built integrations.

The project is maintained by a small team of backend engineers and accepts contributions through standard pull request workflows.

## License

Relay is released under the MIT license. Commercial support and managed hosting are available through separate agreements.

## Contact

- **Source** -- [github.com/relay-platform/relay](https://github.com/relay-platform/relay)
- **Issues** -- Use the GitHub issue tracker for bug reports and feature requests
- **Discussion** -- Join the community forum for questions and design discussions

## Documentation

This documentation site is built with [Hwaro](https://github.com/hahwul/hwaro), a fast static site generator.
