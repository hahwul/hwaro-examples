+++
title = "Data Structure"
date = "2026-02-15"
+++

A complete reference for Hwaro core data structures utilized internally during the static generation phase.

## Page Object

The central object constructed for every markdown file parsed by the engine. It contains the following core attributes:

* `title` (string): The title derived from front matter or the file name.
* `url` (string): The generated absolute URL relative to the server root.
* `date` (string): The creation or modification date of the content, if specified.
* `content` (string): The raw HTML content rendered from the Markdown source.

## Section Object

A section represents a directory within the content folder. It acts as an aggregator for pages.

* `title` (string): The title of the section, typically derived from its `_index.md`.
* `list` (array): A collection of Page objects associated with this section directory.
* `pages` (array): Alias for `list`, containing the child pages for the section.

## Taxonomy Object

Used to classify content logically across the site.

* `name` (string): The identifier of the taxonomy, such as `tags` or `categories`.
* `terms` (array): A structured list of distinct terms applied across all content files.

## Summary

Understanding these data structures is critical when building custom Liquid templates or implementing advanced site architecture.
