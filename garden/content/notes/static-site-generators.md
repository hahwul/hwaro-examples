+++
title = "Static Site Generators"
date = "2026-03-05"
description = "Tools that compile content into static HTML files, offering speed, security, and simplicity"
tags = ["budding", "web", "tools-for-thought", "development"]
categories = ["tools"]
+++

Static site generators (SSGs) transform source files -- typically Markdown and templates -- into plain HTML pages that can be served from any web server or CDN without a database or server-side runtime.

## Advantages

**Performance.** Static HTML loads faster than dynamically generated pages. There is no database query, no template rendering at request time.

**Security.** With no server-side code executing per request, the attack surface is minimal. There is no SQL injection, no server-side template injection.

**Simplicity.** Content lives in files. Version control (git) provides history, branching, and collaboration for free.

## For Digital Gardens

SSGs are a natural fit for [digital gardens](/notes/digital-gardens/). The file-based content model maps well to the note-per-file approach of a [Zettelkasten](/notes/zettelkasten-method/). Taxonomies and cross-references can be modeled through front matter metadata and template logic.

Hwaro, the generator powering this garden, is written in Crystal and emphasizes fast builds, flexible taxonomies, and clean template syntax.

## Trade-offs

The main limitation is the lack of dynamic features. Search, comments, and user-specific content require client-side JavaScript or third-party services. For a garden focused on reading and linking, this is rarely a problem.

Build times can also become a concern for very large sites, though modern generators have largely addressed this through incremental builds and caching.
