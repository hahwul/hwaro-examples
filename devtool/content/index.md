+++
title = "devtool - The Ultimate CLI"
description = "A fast, flexible developer tool for modern workflows."
+++

<div class="hero">
    <h1>Supercharge your workflow.</h1>
    <p>A fast, extensible command-line tool designed for modern developers. Eliminate boilerplate and automate the boring stuff.</p>
    <div>
        <a href="#install" class="button">Install Now</a>
        <a href="https://github.com/example/devtool" class="button button-secondary">View Source</a>
    </div>

    <div class="stats">
        <div class="stat-item">
            <svg height="16" viewBox="0 0 16 16" width="16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            <strong>v2.4.0</strong> release
        </div>
        <div class="stat-item">
            <svg height="16" viewBox="0 0 16 16" width="16" fill="currentColor"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
            <strong>12.4k</strong> stars
        </div>
        <div class="stat-item">
            <svg height="16" viewBox="0 0 16 16" width="16" fill="currentColor"><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-.878a2.25 2.25 0 111.5 0v.878a2.25 2.25 0 01-2.25 2.25h-1.5v2.128a2.251 2.251 0 11-1.5 0V8.5h-1.5A2.25 2.25 0 013.5 6.25v-.878a2.25 2.25 0 111.5 0ZM5 3.25a.75.75 0 10-1.5 0 .75.75 0 001.5 0Zm6.75.75a.75.75 0 100-1.5.75.75 0 000 1.5Zm-3 8.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0Z"></path></svg>
            <strong>1.2k</strong> forks
        </div>
    </div>
</div>

<h2 id="quick-start">Quick Start</h2>

<p>Get up and running in seconds. Here's a basic example of what <code>devtool</code> can do:</p>

```bash
# Initialize a new project workspace
$ devtool init my-project --template react

Creating new workspace in ./my-project
✔ Fetching template 'react'
✔ Installing dependencies
✔ Configuring environment

Success! To get started:
  cd my-project
  devtool serve
```

<div class="features">
    <div class="feature-card">
        <h3>Lightning Fast</h3>
        <p>Written in a compiled language, <code>devtool</code> executes operations incredibly fast with minimal overhead.</p>
    </div>
    <div class="feature-card">
        <h3>Extensible</h3>
        <p>Easily create custom plugins using our simple Lua API. Hook into core events and modify the execution pipeline.</p>
    </div>
    <div class="feature-card">
        <h3>Secure by Default</h3>
        <p>Sandboxed execution environments ensure your local system remains safe while running untrusted scripts.</p>
    </div>
    <div class="feature-card">
        <h3>Zero Config</h3>
        <p>Smart defaults mean you can start working immediately without spending hours configuring build files.</p>
    </div>
</div>

<h2 id="install">Installation</h2>

<p>Install the latest release directly via our setup script or your package manager of choice.</p>

```bash
# macOS / Linux (Homebrew)
brew install example/tap/devtool

# Windows (Scoop)
scoop install devtool

# Install script
curl -fsSL https://devtool.example.com/install.sh | sh
```

<h2 id="configuration">Configuration</h2>

<p>Configure <code>devtool</code> via a simple <code>devtool.toml</code> file in your project root:</p>

```toml
[project]
name = "my-awesome-app"
version = "1.0.0"

[build]
target = "es2022"
minify = true
out_dir = "./dist"

[env]
DEBUG = "true"
API_URL = "https://api.example.com"
```
