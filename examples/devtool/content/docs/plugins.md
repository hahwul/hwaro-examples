+++
title = "Writing Plugins"
date = "2025-03-04"
description = "Extend devtool with sandboxed Lua plugins"
+++

Plugins extend the build pipeline without recompiling the binary. Each plugin is a Lua file that exports a table conforming to the plugin contract. The runtime loads the file once per build, calls the registered hooks in dependency order, and tears down the sandbox at the end of the run.

## The contract

A plugin must export `name`, `version`, and at least one hook function. Hooks return either `nil` for success or an error table that describes what went wrong. Returning a string is treated as a generic error message.

```lua
local M = {}

M.name = "html-minify"
M.version = "0.3.1"

function M.on_emit(ctx, files)
  for _, file in ipairs(files) do
    if file.ext == ".html" then
      file.contents = minify(file.contents)
    end
  end
end

return M
```

## Available hooks

Four hooks fire during a build: `on_init` for one-time setup, `on_load` when source files are read into memory, `on_transform` for in-place edits, and `on_emit` immediately before files are written to disk. A plugin may implement any subset of the four.

The execution order is deterministic. Plugins declared first run first within a hook. If two plugins must coordinate, declare the upstream plugin earlier in the configuration file.

## The sandbox

The Lua sandbox restricts the standard library to a curated subset. File I/O, network calls, and process spawning are absent. To reach those capabilities, request a capability token at registration time.

```lua
M.capabilities = { "net.fetch", "fs.read" }

function M.on_init(ctx)
  local body = ctx.net.fetch("https://example.com/data.json")
  ctx.state.remote = body
end
```

Capability tokens are visible in `devtool plan` output, which makes plugin permissions auditable in code review without running the build itself.
