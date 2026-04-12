+++
title = "Home"
template = "page"
+++

<style>
/* Landing Page Specific Styles */
.hero-section {
  padding: 8rem 0 6rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-badge {
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  font-family: var(--font-mono);
  color: var(--accent-blue);
  background-color: rgba(0, 210, 255, 0.05);
  border: 1px solid rgba(0, 210, 255, 0.2);
  margin-bottom: 2rem;
  box-shadow: 0 0 15px var(--accent-glow-blue);
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto 3rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

/* Neural Network Visualization Background */
.neural-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
  opacity: 0.6;
}

.node {
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: var(--border-color);
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(255,255,255,0.1);
}

.node.active {
  background-color: var(--accent-blue);
  box-shadow: 0 0 12px var(--accent-blue);
}

.connection {
  position: absolute;
  background-color: var(--border-color);
  height: 1px;
  transform-origin: 0 50%;
  opacity: 0.3;
}

/* Feature Grid */
.features-section {
  padding: 6rem 0;
  background-color: var(--bg-surface);
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 2.5rem 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border-color: rgba(255, 255, 255, 0.1);
}

.feature-icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.feature-icon {
  width: 20px;
  height: 20px;
  background-color: var(--text-main);
  mask-size: cover;
  -webkit-mask-size: cover;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.feature-desc {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.5;
}

/* Code Demo Section */
.demo-section {
  padding: 8rem 0;
}

.demo-container {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.demo-content {
  flex: 1;
}

.demo-visual {
  flex: 1;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.demo-header {
  background-color: rgba(255,255,255,0.02);
  border-bottom: 1px solid var(--border-color);
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.demo-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--border-color);
}

.demo-body {
  padding: 2rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.7;
}

.code-line {
  display: flex;
}

.code-num {
  color: rgba(255,255,255,0.2);
  width: 2rem;
  user-select: none;
}

.code-keyword { color: var(--accent-blue); text-shadow: 0 0 8px var(--accent-glow-blue); }
.code-string { color: #a5d6ff; }
.code-func { color: #d2a8ff; }

@media (max-width: 900px) {
  .demo-container { flex-direction: column; }
  .hero-title { font-size: 3rem; }
}
</style>

<section class="hero-section">
<div class="neural-bg">
<div class="node active" style="top: 20%; left: 30%;"></div>
<div class="node" style="top: 25%; left: 60%;"></div>
<div class="node active" style="top: 50%; left: 20%;"></div>
<div class="node" style="top: 60%; left: 75%;"></div>
<div class="node active" style="top: 80%; left: 40%;"></div>
<div class="node" style="top: 70%; left: 85%;"></div>
<div class="connection" style="top: 20%; left: 30%; width: 300px; transform: rotate(15deg);"></div>
<div class="connection" style="top: 20%; left: 30%; width: 350px; transform: rotate(65deg);"></div>
<div class="connection" style="top: 50%; left: 20%; width: 400px; transform: rotate(20deg);"></div>
<div class="connection" style="top: 25%; left: 60%; width: 250px; transform: rotate(70deg);"></div>
<div class="connection" style="top: 60%; left: 75%; width: 300px; transform: rotate(140deg);"></div>
</div>
<div class="container">
<div class="hero-badge">v2.0 Model Release</div>
<h1 class="hero-title">Intelligence Architecture for the Modern Web</h1>
<p class="hero-subtitle">Deploy sophisticated cognitive models to your applications with single-line integrations. Built for scale, engineered for precision.</p>
<div class="hero-actions">
<a href="#" class="btn-primary" style="padding: 0.8rem 2rem; font-size: 1rem;">Start Building</a>
<a href="#" class="btn-outline" style="padding: 0.8rem 2rem; font-size: 1rem;">Read Docs</a>
</div>
</div>
</section>

<section class="features-section" id="features">
<div class="container">
<div class="section-header">
<h2 class="section-title">Cognitive Capabilities</h2>
<p style="color: var(--text-muted); max-width: 600px; margin: 0 auto;">Our neural architecture provides unprecedented contextual understanding with latency under 50ms.</p>
</div>
<div class="feature-grid">
<div class="feature-card">
<div class="feature-icon-wrapper">
<div style="width: 16px; height: 16px; border: 2px solid var(--accent-blue); border-radius: 2px; box-shadow: 0 0 10px var(--accent-glow-blue);"></div>
</div>
<h3 class="feature-title">Contextual Awareness</h3>
<p class="feature-desc">Models that understand multi-turn interactions, maintaining state across extended sessions without degrading response quality.</p>
</div>
<div class="feature-card">
<div class="feature-icon-wrapper">
<div style="width: 16px; height: 16px; border-radius: 50%; border: 2px solid var(--text-main); border-top-color: var(--accent-purple); box-shadow: 0 0 10px var(--accent-glow-purple); transform: rotate(45deg);"></div>
</div>
<h3 class="feature-title">Sub-50ms Latency</h3>
<p class="feature-desc">Distributed edge inference ensures responses are generated and delivered globally with virtually imperceptible delay.</p>
</div>
<div class="feature-card">
<div class="feature-icon-wrapper">
<div style="display: flex; gap: 4px;">
<div style="width: 4px; height: 16px; background-color: var(--text-main); opacity: 0.5;"></div>
<div style="width: 4px; height: 16px; background-color: var(--accent-blue); box-shadow: 0 0 8px var(--accent-blue);"></div>
<div style="width: 4px; height: 16px; background-color: var(--text-main); opacity: 0.5;"></div>
</div>
</div>
<h3 class="feature-title">Data Sovereignty</h3>
<p class="feature-desc">Strict compliance protocols ensuring zero-retention processing. Your data never trains our base models.</p>
</div>
</div>
</div>
</section>

<section class="demo-section" id="architecture">
<div class="container demo-container">
<div class="demo-content">
<h2 class="section-title" style="text-align: left; margin-bottom: 1.5rem;">Integration by Design</h2>
<p style="color: var(--text-muted); margin-bottom: 2rem; font-size: 1.1rem;">
Initialize the client, connect to the edge network, and stream responses directly to your UI components. The complexity of model orchestration is entirely abstracted.
</p>
<ul style="list-style: none; display: flex; flex-direction: column; gap: 1rem;">
<li style="display: flex; align-items: center; gap: 1rem;">
<div style="width: 8px; height: 8px; background-color: var(--accent-blue); border-radius: 50%; box-shadow: 0 0 8px var(--accent-blue);"></div>
<span style="font-weight: 500;">Type-safe SDKs for major frameworks</span>
</li>
<li style="display: flex; align-items: center; gap: 1rem;">
<div style="width: 8px; height: 8px; background-color: var(--border-color); border-radius: 50%;"></div>
<span style="color: var(--text-muted);">Automatic fallback and retry logic</span>
</li>
<li style="display: flex; align-items: center; gap: 1rem;">
<div style="width: 8px; height: 8px; background-color: var(--border-color); border-radius: 50%;"></div>
<span style="color: var(--text-muted);">Built-in streaming parsers</span>
</li>
</ul>
</div>
<div class="demo-visual">
<div class="demo-header">
<div class="demo-dot"></div>
<div class="demo-dot"></div>
<div class="demo-dot"></div>
</div>
<div class="demo-body">
<div class="code-line">
<span class="code-num">1</span>
<span><span class="code-keyword">import</span> { HorizonClient } <span class="code-keyword">from</span> <span class="code-string">'@horizon/sdk'</span>;</span>
</div>
<div class="code-line"><span class="code-num">2</span></div>
<div class="code-line">
<span class="code-num">3</span>
<span><span class="code-keyword">const</span> client = <span class="code-keyword">new</span> <span class="code-func">HorizonClient</span>({</span>
</div>
<div class="code-line">
<span class="code-num">4</span>
<span>  apiKey: process.env.HORIZON_KEY,</span>
</div>
<div class="code-line">
<span class="code-num">5</span>
<span>  edge: <span class="code-keyword">true</span></span>
</div>
<div class="code-line">
<span class="code-num">6</span>
<span>});</span>
</div>
<div class="code-line"><span class="code-num">7</span></div>
<div class="code-line">
<span class="code-num">8</span>
<span><span class="code-keyword">async function</span> <span class="code-func">processQuery</span>(input) {</span>
</div>
<div class="code-line">
<span class="code-num">9</span>
<span>  <span class="code-keyword">const</span> stream = <span class="code-keyword">await</span> client.models.<span class="code-func">generate</span>({</span>
</div>
<div class="code-line">
<span class="code-num">10</span>
<span>    model: <span class="code-string">'horizon-v2-instruct'</span>,</span>
</div>
<div class="code-line">
<span class="code-num">11</span>
<span>    prompt: input,</span>
</div>
<div class="code-line">
<span class="code-num">12</span>
<span>    stream: <span class="code-keyword">true</span></span>
</div>
<div class="code-line">
<span class="code-num">13</span>
<span>  });</span>
</div>
<div class="code-line">
<span class="code-num">14</span>
<span>  <span class="code-keyword">return</span> stream;</span>
</div>
<div class="code-line">
<span class="code-num">15</span>
<span>}</span>
</div>
</div>
</div>
</div>
</section>
