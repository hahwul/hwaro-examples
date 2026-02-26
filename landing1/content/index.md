+++
title = "Home"
description = "Team collaboration, reimagined"
+++

<div class="py-20 px-6 text-center -mx-6" style="background: linear-gradient(135deg, #4f46e5, #818cf8);">
  <div class="max-w-3xl mx-auto">
    <h1 class="text-5xl font-extrabold text-white mb-6 tracking-tight">Team collaboration,<br>reimagined</h1>
    <p class="text-xl text-indigo-100 mb-8">FlowSync brings your team's work together in one place. Plan, track, and ship faster with real-time collaboration tools built for modern teams.</p>
    <div class="flex gap-4 justify-center">
      <a href="#" class="inline-block px-8 py-3 bg-white text-indigo-600 rounded-full font-bold text-sm no-underline hover:bg-gray-100 transition-colors">Start Free Trial</a>
      <a href="#" class="inline-block px-8 py-3 border-2 border-white text-white rounded-full font-bold text-sm no-underline hover:bg-white/10 transition-colors">Watch Demo</a>
    </div>
  </div>
</div>

<div class="max-w-5xl mx-auto py-16 px-6">
  <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-10">
    <div>
      <div class="text-3xl font-extrabold text-indigo-600">10k+</div>
      <div class="text-sm text-gray-500 mt-1">Teams worldwide</div>
    </div>
    <div>
      <div class="text-3xl font-extrabold text-indigo-600">50M+</div>
      <div class="text-sm text-gray-500 mt-1">Tasks completed</div>
    </div>
    <div>
      <div class="text-3xl font-extrabold text-indigo-600">99.9%</div>
      <div class="text-sm text-gray-500 mt-1">Uptime SLA</div>
    </div>
    <div>
      <div class="text-3xl font-extrabold text-indigo-600">4.9/5</div>
      <div class="text-sm text-gray-500 mt-1">User rating</div>
    </div>
  </div>

  <h2 id="features" class="text-3xl font-extrabold text-center mb-10 mt-16 tracking-tight">Everything your team needs</h2>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

  {{ feature(icon="⚡", title="Real-time Sync", description="See changes instantly across your team. No refresh needed — every update appears in real-time.") }}

  {{ feature(icon="📋", title="Smart Boards", description="Kanban, timeline, and list views. Organize work the way your team thinks, with drag-and-drop simplicity.") }}

  {{ feature(icon="🔗", title="Integrations", description="Connect with GitHub, Slack, Figma, and 100+ tools your team already uses. No context switching.") }}

  {{ feature(icon="📊", title="Analytics", description="Track velocity, burndown, and team workload. Make data-driven decisions with beautiful dashboards.") }}

  {{ feature(icon="🔒", title="Enterprise Security", description="SOC 2 Type II certified. SSO, SCIM provisioning, audit logs, and data encryption at rest.") }}

  {{ feature(icon="🌍", title="Global CDN", description="Lightning-fast performance worldwide. Your data is served from the edge, closest to your team.") }}

  </div>

  <h2 id="pricing" class="text-3xl font-extrabold text-center mb-10 mt-20 tracking-tight">Simple, transparent pricing</h2>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

  {{ pricing(name="Starter", price="$0", description="For individuals and small projects", f1="Up to 5 users", f2="10 projects", f3="Basic analytics", f4="Community support") }}

  {{ pricing(name="Pro", price="$12", description="For growing teams that need more", highlight="true", f1="Unlimited users", f2="Unlimited projects", f3="Advanced analytics", f4="Priority support", f5="Custom integrations") }}

  {{ pricing(name="Enterprise", price="$49", description="For large organizations", f1="Everything in Pro", f2="SSO & SCIM", f3="Audit logs", f4="Dedicated CSM", f5="99.99% SLA") }}

  </div>

  {{ cta(title="Ready to transform your workflow?", description="Join 10,000+ teams already using FlowSync to ship faster.", button="Start Free Trial") }}
</div>
