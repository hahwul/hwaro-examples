+++
title = "Cosmic Weaver Glass"
description = "A futuristic dark theme with glassmorphism and glowing neon threads."
template = "page"
+++

<div class="hero glass-container">
    <h1>Welcome to Cosmic Weaver Glass</h1>
    <p>A mesmerizing Hwaro theme featuring deep void animated backgrounds, glowing neon threads, and refractive glassmorphism containers.</p>
    <div style="margin-top: 2rem;">
        <a href="/about/" class="btn btn-primary" style="margin-right: 1rem;">Explore Design</a>
        <a href="https://github.com/hahwul/hwaro" class="btn">View on GitHub</a>
    </div>
</div>

<div class="grid">
    <div class="card glass-container">
        <h3 style="color: var(--accent-cyan);">Animated Void</h3>
        <p>A deep cosmic background with pulsing ethereal orbs and infinite drifting threads of cyan, magenta, and purple light.</p>
    </div>
    <div class="card glass-container">
        <h3 style="color: var(--accent-magenta);">Refractive Glass</h3>
        <p>Advanced translucent panels utilizing <code>backdrop-filter</code> to create stunning frosted glass effects across the interface.</p>
    </div>
    <div class="card glass-container">
        <h3 style="color: var(--accent-purple);">Modern Typography</h3>
        <p>Clean and highly legible type hierarchy combining <strong>Space Grotesk</strong> for headings and <strong>Inter</strong> for body text.</p>
    </div>
</div>

<div class="content glass-container" style="margin-top: 4rem;">
    <h2>Example Content</h2>
    <p>This is how standard markdown content renders within the Cosmic Weaver Glass theme.</p>

    {% alert(type="info") %}
    This is a custom alert shortcode utilizing the theme's glowing neon borders and glassmorphism styling!
    {% end %}

    <h3>Code Block Example</h3>
    <pre><code class="language-css">/* Glassmorphism Effect */
.glass-container {
    background: rgba(20, 10, 30, 0.2);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
}</code></pre>
</div>
