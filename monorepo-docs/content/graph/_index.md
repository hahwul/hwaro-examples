+++
title = "Dependency Graph"
+++

Below is a visualization of the dependencies between packages in this monorepo.

{{ dependency_graph() }}

### Analysis

- **Toolkit** is the most shared package, with no internal dependencies.
- **Framework** builds upon **Toolkit**.
- **CLI** depends on both **Framework** and **Toolkit**.
