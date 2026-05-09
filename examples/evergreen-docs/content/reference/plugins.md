+++
title = "Plugin Reference"
+++

Reference for Hwaro plugin architecture and available integrations.

## Core Processors

Hwaro includes several core processors that can be enabled in `config.toml`:

```toml
[plugins]
processors = ["markdown", "html", "css"]
```

## Creating Custom Plugins

Custom plugins can intercept the build lifecycle. A plugin is typically a script or binary defined in the build hooks:

```toml
[build]
hooks.pre = ["python scripts/my-plugin.py"]
```

The plugin can modify files in the `content/` directory before Hwaro processes them, or generate new files dynamically.

Plugins can also process the output directly, meaning they are exceptionally flexible tools when it comes to integrating third-party tools into a build pipeline. Some developers have utilized custom scripts to minify images and implement CSS purgers to optimize the output size of the static site. Furthermore, the use of Node-based preprocessors such as PostCSS can be integrated right within the Hwaro hooks without a heavy integration penalty.

By implementing custom processors, developers maintain significant architectural control over the HTML build without needing to rely on heavier compilation systems. Hwaro provides the exact flexibility you need to ensure the correct HTML output and optimal loading times. It's recommended to test custom plugins thoroughly to ensure that build times are not negatively affected and to preserve the swift compilation speeds that Hwaro is known for across all deployment environments.
