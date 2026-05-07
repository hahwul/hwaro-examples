+++
title = "Import Ordering"
weight = 20
+++

Imports establish the dependencies of a module. A consistent order at the top of every file makes those dependencies scannable and reduces merge conflicts when two changes touch the same import block.

## Group Order

Imports are organized into four groups, separated by a blank line. Within each group, lines are sorted alphabetically by source path.

1.  **Standard library** — modules that ship with the language runtime.
2.  **External packages** — dependencies installed from the package registry.
3.  **Internal packages** — modules from the same monorepo, addressed by their package name.
4.  **Local modules** — relative imports within the current package.

## JavaScript and TypeScript

```typescript
import { readFile } from "node:fs/promises";
import { setTimeout } from "node:timers/promises";

import { z } from "zod";
import { Hono } from "hono";

import { logger } from "@acme/logging";
import { db } from "@acme/db";

import { BillingForm } from "./billing-form";
import type { Invoice } from "./types";
```

Type-only imports are written with the `import type` syntax and live in the same group as their non-type counterparts. They are not split into a separate group, because the runtime distinction is invisible to the reader scanning the dependency surface.

## Python

```python
import json
from pathlib import Path

import httpx
from pydantic import BaseModel

from acme.logging import get_logger
from acme.db import session

from .billing_form import BillingForm
from .types import Invoice
```

## Forbidden Patterns

Do not use wildcard imports such as `from module import *`. They obscure the surface and break static analysis. Do not import a default and then immediately destructure it on the next line; combine them in the import statement.

## Tooling

Import ordering is enforced by the formatter, not by a linter. The pre-commit hook runs the formatter in check mode and refuses commits that would change the import block. Editors that integrate the formatter on save will keep imports correct without manual effort.
