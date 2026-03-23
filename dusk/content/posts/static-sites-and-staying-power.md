+++
title = "Static Sites and Staying Power"
date = "2026-03-05"
description = "Why the oldest architecture on the web might also be the most durable."
tags = ["web", "software", "architecture"]
categories = ["essays"]
+++

The first website was a static site. Tim Berners-Lee published a collection of HTML files on a NeXT computer in 1991, and those files described what the World Wide Web was and how to use it. No database. No build pipeline. No JavaScript framework. Just text, links, and a server.

Thirty-five years later, the original URL still resolves. The page still renders. The content is still readable.

Try that with any web application built in 2019.

## The Durability Argument

Static sites survive because they have almost no dependencies at runtime. An HTML file requires a web server and a browser. Both are commodities. The file itself is inert -- it does not execute, connect, query, or authenticate. It simply exists, waiting to be read.

This is a profound advantage. Every dependency is a potential point of failure:

- Databases crash, corrupt, or outgrow their hosting.
- APIs deprecate, rate-limit, or shut down.
- Runtimes update, and yesterday's code throws new errors.
- Frameworks fall out of maintenance.

A static file avoids all of these failure modes. It can be served from a USB drive, a CDN, or a Raspberry Pi in a closet. It works offline. It works in ten years.

## The Build-Time Bargain

Modern static site generators like Hwaro make a specific trade: they move complexity from runtime to build time. The computation happens once, on the author's machine, and the result is a folder of files that any web server can deliver.

```
hwaro build
# Done. The output is a directory of HTML, CSS, and images.
# No server-side logic required to serve it.
```

This is not a limitation. It is a deliberate architectural choice. By accepting that content is computed once rather than on every request, you gain:

- **Speed.** Serving a file is the fastest thing a web server can do.
- **Security.** No server-side code means no server-side vulnerabilities.
- **Portability.** The output works anywhere files can be hosted.
- **Archivability.** The entire site can be zipped, stored, and reopened decades later.

## What Static Cannot Do

Static sites are not appropriate for everything. They cannot handle user authentication, real-time data, or personalized content without client-side JavaScript or external services.

But the question is not whether static sites can do everything. The question is whether your site needs everything. Most blogs, documentation sites, portfolios, and landing pages do not. They need to present content reliably, quickly, and for a long time.

For that job, static is not a compromise. It is the strongest choice available.

## The Long View

The web is littered with dead applications -- sites that worked brilliantly for three years and then vanished when the hosting expired, the framework broke, or the team moved on. Their content is gone, locked in databases no one can access.

Static sites do not have this problem. They are files. They can be copied, backed up, version-controlled, and migrated trivially. Their content is not trapped inside a system. It is the system.

If you care about your words lasting longer than your current technology stack, write them down in the simplest format that works. Then serve them as files.
