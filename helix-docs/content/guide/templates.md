+++
title = "Data Visualization"
description = "Synthesizing visual models from raw helix data."
weight = 2
+++

Visualization is the core of the Helix experience. We transform raw technical data into intuitive, threaded models.

## Template Architecture

Helix uses the Crinja engine (a Jinja2 implementation) to render structural layouts.

### Structural Nodes

Every page is a node within the larger helix structure. You can customize these nodes using standard HTML and CSS.

```jinja
{# Example of a structural node template #}
<div class="helix-node">
  <h2>{{ page.title }}</h2>
  {{ content }}
</div>
```

### Threading Logic

Navigation threads are automatically generated based on your section structure. By mapping files to directories, you create natural links between related sequences.

## Advanced Synthesis

For complex data models, use our built-in shortcodes to enhance clarity.

- **Alerts**: Highlight critical data or warnings.
- **DNA Patterns**: Inject subtle helix-themed decorations.
- **Progressive Disclosure**: Reveal content based on user interaction.

Proceed to the [Terminal Hub]({{ base_url }}/reference/cli/) for advanced command-line control over your visualization engine.
