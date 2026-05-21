+++
title = "On the Tyranny of the Loading State"
date = "2026-05-07"
description = "Why the loading spinner is a moral failure and what static publishing offers instead."
tags = ["essay", "static", "speed"]
+++

There was a moment, somewhere around 2017, when the loading spinner stopped being an apology and became an expectation. A page would render the layout instantly, then sit empty for two seconds while the *real* content arrived from somewhere else — an API, a CDN, an analytics endpoint, a third-party ad network feeding the page after the page had already feigned readiness.

We stopped noticing. We stopped expecting better. We started accepting that *being on the internet* meant watching skeletons load into chairs, watching avatars resolve into faces, watching headlines flicker into existence one character at a time.

> A loading state is a contract you have broken with your reader before they ever saw your work.

## Static publishing as a moral choice

The alternative is older than the spinner. A page is a sheet. A sheet is composed before it is delivered. When the reader requests the sheet, the entire sheet arrives.

This publication is built on [Hwaro](https://hwaro.hahwul.com), a static site generator written in Crystal. Every page in this archive was rendered at build time. Every byte of HTML you are reading right now was assembled before you asked for it. There is no API. There is no skeleton. There is no spinner.

This is not nostalgia. This is engineering discipline. The fewer moving parts in your publication, the fewer places it can break, the fewer moments where the reader is forced to wait.

## What we gain

- A page that loads instantly on a 2G phone.
- A page that loads instantly on a slow library computer.
- A page that loads instantly ten years from now.
- A page that loads instantly when the build server is gone.

Static publishing is the easiest, most durable, most respectful form of distribution we have. We see no reason to abandon it.
