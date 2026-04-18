+++
title = "About Reactor"
description = "About the Reactor reactive streaming framework and project"
tags = ["about", "reactor"]
+++

# About Reactor

Reactor is an open-source reactive streaming framework designed for developers building event-driven systems that process high-throughput data flows. The project provides a composable operator model inspired by the Reactive Streams specification, with practical extensions for backpressure management, error recovery, and concurrent scheduling.

## Design Principles

Reactor is built around four principles:

- **Composability** -- Every operator returns a new stream, enabling chains of arbitrary length without side effects or shared mutable state. Pipelines read as declarative data flow descriptions.
- **Backpressure by Default** -- Flow control is not optional. Every subscriber declares its demand, and producers respect that demand. This prevents memory exhaustion in pipelines with mismatched throughput.
- **Lazy Evaluation** -- No work is performed until a terminal subscriber attaches to the pipeline. This allows pipelines to be constructed, inspected, and reused before execution begins.
- **Scheduler Transparency** -- Operators do not assume a threading model. Execution context is controlled explicitly through scheduler operators, making concurrency visible and testable.

## Project History

Reactor started as a library for processing real-time telemetry streams in distributed monitoring systems. The initial version provided basic map/filter/reduce operators over push-based event sources. As adoption grew, the project expanded to include windowing operators, multi-stream combinators, and a formal backpressure protocol.

The framework now supports both JVM and Python runtimes, with a shared operator semantics specification that ensures consistent behavior across platforms.

## License

Reactor is released under the Apache 2.0 license. Contributions are accepted through standard pull request workflows.

## Contact

- **Source** -- [github.com/reactor-streaming/reactor](https://github.com/reactor-streaming/reactor)
- **Issues** -- Use the GitHub issue tracker for bug reports and feature requests
- **Discussion** -- Join the community forum for questions and design discussions

## Documentation

This documentation site is built with [Hwaro](https://github.com/hahwul/hwaro), a fast static site generator.
