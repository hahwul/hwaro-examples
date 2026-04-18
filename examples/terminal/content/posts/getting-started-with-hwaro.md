+++
title = "Getting Started with Hwaro"
date = "2024-01-20"
tags = ["tutorial", "hwaro"]
categories = ["tutorials"]
description = "A quick guide to building your site with Hwaro."
+++

Setting up a new site with Hwaro takes about 30 seconds.

## Installation

```bash
git clone https://github.com/hahwul/hwaro
cd hwaro
shards build
```

## Create a site

```bash
hwaro init my-blog --scaffold blog
cd my-blog
hwaro serve
```

Open `http://localhost:3000` and you're done.

## Project structure

```
my-blog/
├── config.toml
├── content/
│   ├── index.md
│   └── posts/
├── templates/
└── static/
```

Simple and predictable.
