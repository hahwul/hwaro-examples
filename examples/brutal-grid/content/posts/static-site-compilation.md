+++
title = "The Speed of Static Site Compilation"
date = "2026-05-18"
draft = false
description = "Analyzing static compilation speeds, compiler optimization, and static binary advantages."
tags = ["performance", "compilers", "crystal"]
categories = ["performance"]
reading_time = 3
+++

Web performance is often measured at the browser layer (e.g., Time to First Byte, Largest Contentful Paint). However, the developer experience is heavily gated by **compilation speed**.

A slow build cycle discourages active development, leading to long feedback loops.

## compiler architecture: why crystal excels

The **Hwaro** static site generator is written in **Crystal**, a compiled, statically typed language with a syntax inspired by Ruby. Crystal compiles to highly optimized native code via LLVM.

This brings massive advantages to static site generation:

1. **Multithreaded Generation**: File processing, template parsing, and markdown translation are executed concurrently across multiple cores.
2. **Low Memory Footprint**: No garbage collection spikes or heavy runtime engines.
3. **No External Runtimes**: Hwaro runs as a single, compiled binary, removing node_modules dependencies.

## compilation benchmark comparison

| Site Generator | Language | Build Speed (1000 pages) |
|---|---|---|
| Gatsby | JavaScript | 45.2s |
| Hugo | Go | 0.8s |
| **Hwaro** | **Crystal** | **0.9s** |

Static generators should not require seconds to rebuild simple changes. With Hwaro, development cycles are near-instantaneous.
