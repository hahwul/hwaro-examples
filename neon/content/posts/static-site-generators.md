+++
title = "Why Static Site Generators Still Matter"
date = "2026-02-15"
tags = ["web", "static-sites", "performance"]
categories = ["tech"]
description = "Static site generators offer speed, security, and simplicity in an increasingly complex web."
+++

In an era of complex web frameworks and serverless architectures, static site generators remain relevant. Here's why.

## Speed

Static files are served directly by CDNs with no server-side processing. The result is near-instant page loads:

- No database queries
- No server rendering
- No cold starts
- Global CDN distribution

## Security

With no server-side code execution, the attack surface shrinks dramatically:

- No SQL injection
- No server-side vulnerabilities
- No runtime dependencies to patch
- Content is immutable once deployed

## Simplicity

Write content in Markdown, configure with TOML, deploy with a single command:

```toml
title = "My Site"
description = "A fast, secure blog"

[plugins]
processors = ["markdown"]
```

```markdown
+++
title = "Hello World"
date = "2026-01-01"
+++

Your content here.
```

## When to Use SSGs

Static site generators are ideal for:

- **Blogs** — content-focused sites with infrequent updates
- **Documentation** — versioned docs that live alongside code
- **Portfolios** — showcase work with maximum performance
- **Landing pages** — marketing sites that need speed

## Hwaro

[Hwaro](https://github.com/hahwul/hwaro) is written in Crystal, which compiles to native code. This means build times are fast even for large sites. Combined with Jinja2 templates and TOML config, it strikes a good balance between power and simplicity.

The future of the web might be complex, but your blog doesn't have to be.
