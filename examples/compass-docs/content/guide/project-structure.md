+++
title = "Project Structure"
weight = 1
template = "doc"
description = "Understanding the directory layout and key files."
tags = ["fundamentals"]
[extra]
step = 1
total_steps = 3
estimated_time = "5 min"
+++

## Directory Layout

After running `compass init`, your project looks like this:

```
my-project/
  compass.toml        # Project configuration
  src/                 # Source files
    index.html         # Entry point
    styles/            # CSS files
    scripts/           # JavaScript files
  static/              # Files copied as-is to output
  dist/                # Build output (gitignored)
```

## Key Files

### compass.toml

The main configuration file. Controls build settings, environment variables, and deployment targets.

### src/index.html

Your application entry point. Compass processes this file and resolves all linked assets.

### static/

Files in this directory are copied directly to the output without processing. Use it for images, fonts, and other binary assets.

## Conventions

- Source files go in `src/`
- Static assets go in `static/`
- Environment-specific config uses `compass.{env}.toml` overrides
- Build output is always `dist/` and should be gitignored
