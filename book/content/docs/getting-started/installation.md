+++
title = "Installation"
weight = 1
tags = ["setup"]
+++

# Installation

Hwaro is distributed as a single binary. Download it from the [releases page](https://github.com/hahwul/hwaro) or install via package managers.

## Using Homebrew

```bash
brew install hahwul/tap/hwaro
```

## From Source

If you have Crystal installed, you can build from source:

```bash
git clone https://github.com/hahwul/hwaro.git
cd hwaro
shards build --release
```

The binary will be available at `bin/hwaro`.

## Verify Installation

```bash
hwaro --version
```

{{ hint(type="info", message="Make sure you have version 0.8.0 or later for full feature support.") }}

Once installed, proceed to [Configuration](../configuration/) to set up your site.
