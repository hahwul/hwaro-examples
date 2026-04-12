+++
title = "Your First Project"
description = "Learn how to create your first documentation project with Sage Guide."
date = "2025-01-24"
weight = 1
+++

Follow these simple steps to get your project up and running.

<ul class="step-list">
  {{ step(title="Initialize Project", body="Run the `hwaro init` command to create a new project skeleton.") }}
  {{ step(title="Configure Theme", body="Open `config.toml` and set your project title and description.") }}
  {{ step(title="Add Content", body="Create your first markdown file in the `content/` directory.") }}
  {{ step(title="Build and Preview", body="Run `hwaro serve` to see your changes in real-time.") }}
</ul>

{{ warning(title="Important", body="Always ensure your images are placed in the `static/images` directory for proper rendering.") }}

{{ progress(percent=100) }}
