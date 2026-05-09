+++
title = "Installation & Setup"
description = "How to install and run the formulary reference locally"
date = "2026-01-05"
tags = ["getting-started", "installation", "setup"]
+++

# Installation & Setup

This guide provides the necessary steps to install, configure, and serve the Formulary locally on your own machine.

## Prerequisites

Before setting up the project, assure you have the correct software installed. This documentation relies on the Hwaro static site generator to compile markdown files into an optimized HTML website.

- **Hwaro:** The core static site generator.
- **Git:** Required to clone the repository to your local system.

## Cloning the Repository

To begin, you will need to clone the repository containing the Formulary files. Open your terminal and run the following command:

```bash
git clone https://github.com/hahwul/hwaro.git
cd hwaro/examples/formulary
```

This will download the examples and place you into the formulary directory.

## Building the Site

To compile the markdown documentation and generate the final HTML, CSS, and JS output, execute the following command:

```bash
hwaro build
```

This command processes all files inside the `content/` directory and outputs the optimized static website into the `public/` directory.

## Local Server

To view the generated reference guide in your browser with live-reloading, start the development server:

```bash
hwaro serve
```

Once the server has started, navigate to `http://127.0.0.1:3000` in your web browser. Any changes you make to the markdown content or templates will automatically refresh the browser window.
