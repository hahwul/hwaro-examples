+++
title = "Home"
description = "The premier developer conference — June 15-17, 2026 · San Francisco"
+++

<div class="py-24 px-6 text-center -mx-6 relative overflow-hidden">
<!-- Background Effects -->
<div class="absolute inset-0 bg-surface"></div>
<div class="absolute inset-0 bg-gradient-to-b from-primary/10 via-surface to-surface pointer-events-none"></div>
<div class="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-primary/10 blur-3xl pointer-events-none mix-blend-screen"></div>
<div class="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-3xl pointer-events-none mix-blend-screen"></div>

<div class="max-w-4xl mx-auto relative z-10">
<p class="text-primary-light font-semibold text-sm uppercase tracking-[0.2em] mb-6">June 15-17, 2026 · San Francisco</p>
<h1 class="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50" style="-webkit-text-fill-color: transparent; -webkit-background-clip: text;">DevConf 2026</h1>
<p class="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">Three days of talks, workshops, and networking with the world's best developers.</p>

{{ countdown(date="2026-06-15") }}

<div class="flex gap-6 justify-center mt-10">
<a href="#" class="inline-block px-8 py-4 bg-primary text-white rounded-full font-bold text-sm no-underline hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1">Get Tickets</a>
<a href="/speakers/" class="inline-block px-8 py-4 border border-white/20 text-white rounded-full font-bold text-sm no-underline hover:bg-white/10 transition-all hover:border-white/40">View Speakers</a>
</div>
</div>
</div>

<div class="max-w-5xl mx-auto py-16 px-6">

## Featured Speakers

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">

{{ speaker_card(name="Alice Chen", role="VP Engineering", company="StreamScale", talk="Scaling to 1M concurrent WebSocket connections") }}

{{ speaker_card(name="Marcus Rivera", role="CTO", company="DataForge", talk="The future of edge computing") }}

{{ speaker_card(name="Priya Sharma", role="Lead Architect", company="NeuralPath", talk="Production-ready ML pipelines") }}

</div>

<div class="text-center">
  <a href="/speakers/" class="inline-block px-8 py-3 border border-primary text-primary rounded-full font-semibold text-sm no-underline hover:bg-primary hover:text-white transition-all hover:shadow-lg hover:shadow-primary/25">All Speakers →</a>
</div>

---

## 3 Days, 4 Tracks, 30+ Talks

<div class="grid grid-cols-2 md:grid-cols-4 gap-6 my-10 text-center">
  <div class="p-6 bg-blue-500/5 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-colors group">
    <div class="text-2xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">Frontend</div>
    <div class="text-sm text-blue-300/70">React, CSS, WebAssembly</div>
  </div>
  <div class="p-6 bg-green-500/5 rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-colors group">
    <div class="text-2xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">Backend</div>
    <div class="text-sm text-green-300/70">APIs, databases, architecture</div>
  </div>
  <div class="p-6 bg-purple-500/5 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-colors group">
    <div class="text-2xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">DevOps</div>
    <div class="text-sm text-purple-300/70">CI/CD, Kubernetes, observability</div>
  </div>
  <div class="p-6 bg-rose-500/5 rounded-2xl border border-rose-500/20 hover:border-rose-500/50 transition-colors group">
    <div class="text-2xl font-bold text-rose-400 mb-2 group-hover:text-rose-300 transition-colors">AI/ML</div>
    <div class="text-sm text-rose-300/70">LLMs, MLOps, data pipelines</div>
  </div>
</div>

{{ cta_banner(title="Early bird tickets available", description="Save 30% when you register before April 1st. Student discounts available.", button="Register Now") }}

</div>
