+++
title = "Installation"
description = "How to install and set up your Obsidian-style docs."
tags = ["setup", "install"]
+++

Setting up your **Obsidian Docs** is straightforward.

## Prerequisites

Before you begin, ensure you have <a href="https://github.com/hahwul/hwaro" class="wiki-link">Hwaro</a> installed on your system.

## Quick Install

1.  Initialize a new project:
    ```bash
    hwaro init my-docs --scaffold docs
    ```
2.  Apply the Obsidian theme (copy the styles and templates).
3.  Run the development server:
    ```bash
    hwaro serve
    ```

## Vault Structure

We recommend organizing your notes into logical folders:

- `/daily`: For journal entries.
- `/projects`: For active work.
- `/archive`: For completed knowledge.

{{ alert(type="note", content="Links like [[Installation]] are automatically styled as wiki links in this theme.") }}
