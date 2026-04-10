+++
title = "Blueprint Pro"
description = "Developer tool landing page with code snippet showcases, terminal demos, and technical feature highlights"
template = "home"
+++

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <div class="hero-badge">
      <span class="dot"></span>
      v3.0 — Now with native TypeScript support
    </div>
    <h1>Build faster with<br><span class="gradient-text">Blueprint Pro</span></h1>
    <p class="hero-sub">A blazing-fast CLI toolkit for modern developers. Scaffold projects, run tasks, and deploy — all from one unified interface.</p>
    <div class="hero-actions">
      <a href="#get-started" class="btn btn-primary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        Get Started
      </a>
      <a href="#code" class="btn btn-ghost">View on GitHub</a>
    </div>
    <div class="hero-install">
      <div class="install-cmd">
        <span class="prompt">$</span>
        <code>npm install -g blueprint-pro</code>
      </div>
    </div>
  </div>
</section>

<!-- Stats -->
<div class="container">
  <div class="stats-strip">
    <div class="stat-item">
      <div class="stat-value">42k+</div>
      <div class="stat-label">Weekly Downloads</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">18k</div>
      <div class="stat-label">GitHub Stars</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">&lt;50ms</div>
      <div class="stat-label">Startup Time</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">200+</div>
      <div class="stat-label">Templates</div>
    </div>
  </div>
</div>

<!-- Features -->
<section id="features" class="section-block">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Features</span>
      <h2>Everything you need to ship fast</h2>
      <p>Blueprint Pro is designed from the ground up for developer productivity. No bloat, no guesswork — just tools that work.</p>
    </div>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon icon-primary">⚡</div>
        <h3>Instant Scaffolding</h3>
        <p>Generate production-ready project structures in milliseconds. Supports React, Vue, Svelte, and more out of the box.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon icon-accent">🔧</div>
        <h3>Task Runner</h3>
        <p>Define and run complex build pipelines with a simple TOML config. Parallel execution, dependency graphs, and caching built-in.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon icon-green">🔒</div>
        <h3>Sandboxed Execution</h3>
        <p>Run untrusted scripts safely in an isolated environment. Fine-grained permissions for filesystem, network, and environment access.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon icon-amber">📦</div>
        <h3>Smart Bundling</h3>
        <p>Tree-shake, minify, and bundle your code with zero config. Automatic code splitting and lazy loading for optimal performance.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon icon-primary">🔌</div>
        <h3>Plugin Ecosystem</h3>
        <p>Extend with plugins written in TypeScript or Lua. Hook into lifecycle events, transform outputs, and add custom commands.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon icon-accent">🚀</div>
        <h3>One-Click Deploy</h3>
        <p>Deploy to Vercel, Netlify, AWS, or your own server. Built-in preview environments and rollback support.</p>
      </div>
    </div>
  </div>
</section>

<!-- Terminal Demo -->
<section id="terminal" class="section-block">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Terminal Demo</span>
      <h2>See it in action</h2>
      <p>From project creation to production deployment in under 60 seconds.</p>
    </div>
    <div class="terminal">
      <div class="terminal-bar">
        <span class="terminal-dot red"></span>
        <span class="terminal-dot yellow"></span>
        <span class="terminal-dot green"></span>
        <span class="terminal-title">blueprint-pro — zsh</span>
      </div>
      <div class="terminal-body">
        <div><span class="prompt">❯</span> <span class="cmd">blueprint</span> <span class="flag">init</span> <span class="cmd">my-app</span> <span class="flag">--template</span> <span class="cmd">react-ts</span></div>
        <div><br></div>
        <div><span class="output">  Creating project in ./my-app</span></div>
        <div><span class="success">  ✔</span> <span class="output">Fetching template</span> <span class="highlight">react-ts</span></div>
        <div><span class="success">  ✔</span> <span class="output">Installing 24 dependencies</span></div>
        <div><span class="success">  ✔</span> <span class="output">Configuring TypeScript</span></div>
        <div><span class="success">  ✔</span> <span class="output">Setting up ESLint &amp; Prettier</span></div>
        <div><span class="success">  ✔</span> <span class="output">Initializing git repository</span></div>
        <div><br></div>
        <div><span class="success">  Done!</span> <span class="output">Project ready in</span> <span class="highlight">1.2s</span></div>
        <div><br></div>
        <div><span class="prompt">❯</span> <span class="cmd">cd</span> <span class="cmd">my-app</span></div>
        <div><span class="prompt">❯</span> <span class="cmd">blueprint</span> <span class="flag">dev</span></div>
        <div><br></div>
        <div><span class="output">  </span><span class="highlight">→</span> <span class="output">Local:</span>   <span class="highlight">http://localhost:3000</span></div>
        <div><span class="output">  </span><span class="highlight">→</span> <span class="output">Network:</span> <span class="highlight">http://192.168.1.42:3000</span></div>
        <div><span class="output">  </span><span class="highlight">→</span> <span class="output">Ready in</span> <span class="highlight">48ms</span></div>
      </div>
    </div>
  </div>
</section>

<!-- Code Showcase -->
<section id="code" class="section-block">
  <div class="container">
    <div class="section-header">
      <span class="section-label">Configuration</span>
      <h2>Simple, powerful config</h2>
      <p>Define your entire build pipeline in a single TOML file. No complex webpack configs, no boilerplate.</p>
    </div>
    <div class="code-showcase">
      <div class="code-panel">
        <div class="code-panel-header">
          <span class="code-filename">blueprint.toml</span>
          <span class="code-lang">TOML</span>
        </div>
        <pre><code>[project]
name = "my-app"
version = "1.0.0"

[build]
target = "es2024"
minify = true
sourcemap = true
out_dir = "./dist"

[tasks.dev]
command = "blueprint dev"
watch = ["src/**/*.{ts,tsx}"]

[tasks.test]
command = "vitest run"
parallel = true

[deploy]
provider = "vercel"
region = "iad1"
env_file = ".env.production"</code></pre>
      </div>
      <div class="code-description">
        <h3>Declarative by design</h3>
        <p>Blueprint Pro uses a single configuration file to define everything your project needs. No JavaScript config files, no plugin chains to debug.</p>
        <ul>
          <li>Auto-detected project type — React, Vue, Svelte, and more</li>
          <li>Built-in task runner with file watching and parallel execution</li>
          <li>Environment-aware deploys with secrets management</li>
          <li>Hot module replacement with sub-50ms refresh times</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section id="get-started" class="section-block">
  <div class="container">
    <div class="cta-block">
      <h2>Start building in seconds</h2>
      <p>Install Blueprint Pro and scaffold your next project with a single command.</p>
      <div class="hero-actions" style="justify-content: center;">
        <a href="#" class="btn btn-primary">Read the Docs</a>
        <a href="#" class="btn btn-ghost">Join Discord</a>
      </div>
    </div>
  </div>
</section>