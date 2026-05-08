+++
title = "Search Indexing"
description = "Generating a client-side search index from rendered pages."
date = "2025-02-11"
+++

Client-side search avoids a separate backend, but it requires care during the build. The index must be small enough to download, complete enough to return useful results, and rebuilt only when content changes.

## Index Schema

A minimal record contains four fields: an identifier, the page title, a summary, and the body text stripped of HTML. The identifier should be the rendered URL so the search UI can link directly to the page.

```json
{
  "id": "/guide/templates/",
  "title": "Templates",
  "summary": "How to build and customize templates.",
  "body": "Templates control the visual structure..."
}
```

Avoid storing the full HTML. The search index is a flat text dump; markup adds bytes without improving recall.

## Tokenization

Default whitespace tokenization works for English documentation. For mixed-language sites, run a Unicode segmenter so multibyte text breaks into characters rather than being indexed as a single opaque token. Lowercase everything before writing the record.

## Stop Words

Common English stop words such as `the`, `a`, and `of` reduce index size by roughly fifteen percent without measurably hurting recall. Domain-specific terms should not be filtered. A documentation site for a database product needs `query` to be searchable even though it is among the most common words on the site.

## Update Strategy

Build the index in the same pipeline stage as page rendering. Hash the source content; if the hash matches the previous build, reuse the existing index file rather than regenerating it. This single optimization shaves seconds off incremental builds for projects in the multi-hundred-page range.

The final artifact should be served with a long cache header and a content hash in the filename so browsers fetch a new copy only after a real content change.
