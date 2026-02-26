+++
title = "Project Nebula"
weight = 2
description = "Static site generator toolkit"
tags = ["open-source", "tools"]
skills = ["Crystal", "HTML", "CSS"]

[extra]
year = 2024
url = "https://github.com/example/nebula"
status = "Open Source"
+++

## Overview

Nebula is a toolkit for building and theming static sites. It provides a library of reusable components and a CLI for scaffolding new projects.

## Features

- 50+ pre-built UI components
- Theme system with CSS custom properties
- CLI scaffolding: `nebula create my-site --theme minimal`

## Architecture

```crystal
module Nebula
  class Builder
    def build(source : String, output : String)
      pages = Parser.parse(source)
      pages.each { |page| Renderer.render(page, output) }
    end
  end
end
```
