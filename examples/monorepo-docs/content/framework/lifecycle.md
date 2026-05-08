+++
title = "Framework Lifecycle"
description = "Initialization, mount, and teardown phases."
+++

Every application built on the framework moves through three phases: bootstrap, runtime, and teardown. Understanding the order in which hooks fire makes plugin authoring and debugging considerably less surprising.

During bootstrap, the framework reads its configuration, resolves the dependency graph between modules, and instantiates services in topological order. Services that declare a dependency on another service receive that dependency through constructor injection. Bootstrap completes when every registered service has reported a ready state.

The runtime phase begins once bootstrap finishes and lasts until a shutdown signal is received. Reactive bindings are evaluated lazily during runtime, which means a state change does not trigger work in subscribers that are not currently mounted. Mount and unmount events fire whenever a component enters or leaves the active tree, and these events are the recommended place to attach side effects such as timers, network listeners, or DOM observers.

Teardown is triggered by `app.shutdown()` or by an OS signal forwarded from the host. The framework reverses the bootstrap order: components unmount first, then services release their resources, and finally the configuration store is flushed. A teardown can be cancelled by any service that returns a non-null reason from its `beforeShutdown` hook, which is helpful when in-flight work needs to drain before the process exits.

Plugins extend the lifecycle by registering hooks against named phases. The framework guarantees that hooks within a phase run in registration order, but it does not order phases between unrelated plugins. If two plugins must coordinate, declare a dependency between them and let the resolver compute a deterministic order at bootstrap.

For a deeper look at how reactivity interacts with the lifecycle, see the [Toolkit](/toolkit) reference.
