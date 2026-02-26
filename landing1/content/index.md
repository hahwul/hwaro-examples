+++
title = "Home"
description = "Team collaboration, reimagined"
+++

<div class="pt-32 pb-20 px-6 text-center relative overflow-hidden">
  <!-- Glow effect background -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-30 pointer-events-none" style="background: radial-gradient(circle at 50% 50%, #7c3aed 0%, transparent 60%); filter: blur(80px);"></div>

  <div class="max-w-4xl mx-auto relative z-10">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-primary-light mb-8 backdrop-blur-md">
      <span class="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
      New: AI-Powered Workflows
    </div>
    <h1 class="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight font-display text-balance leading-tight">
      Team collaboration, <br>
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-white to-accent">reimagined</span>
    </h1>
    <p class="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">FlowSync brings your team's work together in one place. Plan, track, and ship faster with real-time collaboration tools built for modern teams.</p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a href="#" class="inline-flex items-center justify-center px-8 py-4 bg-white text-surface rounded-full font-bold text-base no-underline hover:bg-gray-100 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)] w-full sm:w-auto">Start Free Trial</a>
      <a href="#" class="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white rounded-full font-bold text-base no-underline hover:bg-white/10 backdrop-blur-md transition-all hover:border-white/40 w-full sm:w-auto">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        Watch Demo
      </a>
    </div>
  </div>
</div>

<div class="max-w-6xl mx-auto py-16 px-6 relative z-10">
  <div class="glass rounded-3xl p-10 border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-24">
    <div class="relative">
      <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 font-display">10k+</div>
      <div class="text-sm text-gray-500 mt-2 font-medium uppercase tracking-wide">Teams worldwide</div>
      <div class="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10 hidden md:block"></div>
    </div>
    <div class="relative">
      <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 font-display">50M+</div>
      <div class="text-sm text-gray-500 mt-2 font-medium uppercase tracking-wide">Tasks completed</div>
      <div class="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10 hidden md:block"></div>
    </div>
    <div class="relative">
      <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 font-display">99.9%</div>
      <div class="text-sm text-gray-500 mt-2 font-medium uppercase tracking-wide">Uptime SLA</div>
      <div class="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10 hidden md:block"></div>
    </div>
    <div>
      <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 font-display">4.9/5</div>
      <div class="text-sm text-gray-500 mt-2 font-medium uppercase tracking-wide">User rating</div>
    </div>
  </div>

  <div class="text-center max-w-2xl mx-auto mb-16">
    <h2 id="features" class="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight font-display">Everything your team needs</h2>
    <p class="text-gray-400 text-lg">Powerful tools designed to help your team build better products.</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  {{ feature(icon="⚡", title="Real-time Sync", description="See changes instantly across your team. No refresh needed — every update appears in real-time.") }}
  {{ feature(icon="📋", title="Smart Boards", description="Kanban, timeline, and list views. Organize work the way your team thinks, with drag-and-drop simplicity.") }}
  {{ feature(icon="🔗", title="Integrations", description="Connect with GitHub, Slack, Figma, and 100+ tools your team already uses. No context switching.") }}
  {{ feature(icon="📊", title="Analytics", description="Track velocity, burndown, and team workload. Make data-driven decisions with beautiful dashboards.") }}
  {{ feature(icon="🔒", title="Enterprise Security", description="SOC 2 Type II certified. SSO, SCIM provisioning, audit logs, and data encryption at rest.") }}
  {{ feature(icon="🌍", title="Global CDN", description="Lightning-fast performance worldwide. Your data is served from the edge, closest to your team.") }}
  </div>

  <div class="text-center max-w-2xl mx-auto mb-16 mt-32">
    <h2 id="pricing" class="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight font-display">Simple, transparent pricing</h2>
    <p class="text-gray-400 text-lg">Start for free, scale as you grow. No hidden fees.</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
  {{ pricing(name="Starter", price="$0", description="For individuals and small projects", f1="Up to 5 users", f2="10 projects", f3="Basic analytics", f4="Community support") }}
  {{ pricing(name="Pro", price="$12", description="For growing teams that need more", highlight="true", f1="Unlimited users", f2="Unlimited projects", f3="Advanced analytics", f4="Priority support", f5="Custom integrations") }}
  {{ pricing(name="Enterprise", price="$49", description="For large organizations", f1="Everything in Pro", f2="SSO & SCIM", f3="Audit logs", f4="Dedicated CSM", f5="99.99% SLA") }}
  </div>

  {{ cta(title="Ready to transform your workflow?", description="Join 10,000+ teams already using FlowSync to ship faster.", button="Start Free Trial") }}
</div>
