+++
title = "Content Management"
+++

Organizing your work should feel like a breeze! In Pastel Docs, managing your content is as friendly as it gets.

## Using Sections

You can group your pages into sections by creating folders in the `content` directory. Each folder should have an `_index.md` file to describe what's inside.

```markdown
content/
  getting-started/
    _index.md
    installation.md
    quick-start.md
  guide/
    _index.md
    content-management.md
```

## Creating new pages

Using the CLI is a quick and friendly way to make a new page:

```bash
hwaro new content/guide/new-page.md
```

<div class="info-box tip">
  **A friendly tip:** You can even use the CLI to create new sections with `hwaro new content/new-section/_index.md`!
</div>

## Adding metadata

Each page starts with a friendly block of metadata called frontmatter:

```markdown
+++
title = "My New Page"
description = A gentle description of what's inside.
+++
```

Happy writing!
