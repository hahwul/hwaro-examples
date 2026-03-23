+++
title = "Summit 2026"
description = "The premier tech conference for developers and engineering leaders"
+++

<!-- Hero Section -->
<section class="relative py-24 md:py-36">
  <div class="max-w-4xl mx-auto px-6 text-center">
    <p class="text-primary font-mono text-sm font-bold tracking-widest uppercase mb-6">October 15 &ndash; 17, 2026 / San Francisco, CA</p>
    <h1 class="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6">
      Where Engineering<br>Meets Innovation
    </h1>
    <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
      Three days of deep technical talks, hands-on workshops, and meaningful connections with the people shaping the future of software.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
      <a href="#" class="btn-primary text-base px-10 py-4">Register Now</a>
      <a href="#schedule" class="btn-outline text-base px-10 py-4">View Schedule</a>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
      <div class="text-center">
        <p class="stat-value">40+</p>
        <p class="stat-label">Speakers</p>
      </div>
      <div class="text-center">
        <p class="stat-value">3</p>
        <p class="stat-label">Days</p>
      </div>
      <div class="text-center">
        <p class="stat-value">12</p>
        <p class="stat-label">Workshops</p>
      </div>
      <div class="text-center">
        <p class="stat-value">2K+</p>
        <p class="stat-label">Attendees</p>
      </div>
    </div>
  </div>
</section>

<!-- Speakers Section -->
<section id="speakers" class="py-20">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="section-title">Featured Speakers</h2>
      <p class="section-subtitle">Industry leaders sharing their expertise and vision</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {{ speaker(initials="AK", name="Alice Kim", org="Vercel", talk="The Future of Edge Computing and Serverless Architecture") }}
      {{ speaker(initials="MR", name="Marcus Rivera", org="Google DeepMind", talk="Building Responsible AI Systems at Scale") }}
      {{ speaker(initials="SN", name="Sofia Nakamura", org="Stripe", talk="Designing APIs That Developers Actually Love") }}
      {{ speaker(initials="JC", name="James Chen", org="Cloudflare", talk="Zero Trust Security for Modern Web Applications") }}
      {{ speaker(initials="EO", name="Elena Ostrova", org="HashiCorp", talk="Infrastructure as Code: Lessons from 10 Years in Production") }}
      {{ speaker(initials="DW", name="David Wright", org="Netflix", talk="Resilience Engineering and Chaos at Netflix Scale") }}
      {{ speaker(initials="LP", name="Lina Park", org="Figma", talk="Multiplayer Architecture: Real-time Collaboration Deep Dive") }}
      {{ speaker(initials="RH", name="Raj Huerta", org="Datadog", talk="Observability-Driven Development in Distributed Systems") }}
    </div>
  </div>
</section>

<!-- Schedule Section -->
<section id="schedule" class="py-20 bg-surface-card/30">
  <div class="max-w-5xl mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="section-title">Schedule</h2>
      <p class="section-subtitle">Three days packed with talks, workshops, and networking</p>
    </div>

    <!-- Day 1 -->
    <div class="mb-16">
      <div class="flex items-center gap-4 mb-8">
        <h3 class="text-xl font-bold text-white">Day 1</h3>
        <span class="text-sm text-muted font-mono">October 15, 2026</span>
        <div class="flex-1 h-px bg-border"></div>
      </div>
      <div>
        {{ session(time="09:00", track="a", track_name="Keynote", title="Opening Keynote: Where Engineering Meets Innovation", speaker="Alice Kim", org="Vercel") }}
        {{ session(time="10:30", track="a", track_name="Platform", title="The Future of Edge Computing and Serverless Architecture", speaker="Alice Kim", org="Vercel") }}
        {{ session(time="10:30", track="b", track_name="AI/ML", title="Building Responsible AI Systems at Scale", speaker="Marcus Rivera", org="Google DeepMind") }}
        {{ session(time="11:30", track="a", track_name="Platform", title="Designing APIs That Developers Actually Love", speaker="Sofia Nakamura", org="Stripe") }}
        {{ session(time="11:30", track="c", track_name="Workshop", title="Hands-on: Building Your First Edge Function", speaker="Workshop Team", org="Vercel") }}
        {{ session(time="14:00", track="b", track_name="Security", title="Zero Trust Security for Modern Web Applications", speaker="James Chen", org="Cloudflare") }}
        {{ session(time="15:00", track="a", track_name="Platform", title="Infrastructure as Code: Lessons from 10 Years in Production", speaker="Elena Ostrova", org="HashiCorp") }}
        {{ session(time="16:00", track="c", track_name="Workshop", title="Hands-on: Terraform for Multi-Cloud Deployments", speaker="Workshop Team", org="HashiCorp") }}
      </div>
    </div>

    <!-- Day 2 -->
    <div class="mb-16">
      <div class="flex items-center gap-4 mb-8">
        <h3 class="text-xl font-bold text-white">Day 2</h3>
        <span class="text-sm text-muted font-mono">October 16, 2026</span>
        <div class="flex-1 h-px bg-border"></div>
      </div>
      <div>
        {{ session(time="09:00", track="a", track_name="Keynote", title="Day 2 Keynote: The Next Decade of Distributed Systems", speaker="David Wright", org="Netflix") }}
        {{ session(time="10:30", track="a", track_name="Platform", title="Resilience Engineering and Chaos at Netflix Scale", speaker="David Wright", org="Netflix") }}
        {{ session(time="10:30", track="b", track_name="Frontend", title="Multiplayer Architecture: Real-time Collaboration Deep Dive", speaker="Lina Park", org="Figma") }}
        {{ session(time="11:30", track="b", track_name="Observability", title="Observability-Driven Development in Distributed Systems", speaker="Raj Huerta", org="Datadog") }}
        {{ session(time="14:00", track="c", track_name="Workshop", title="Hands-on: Building Chaos Engineering Experiments", speaker="Workshop Team", org="Netflix") }}
        {{ session(time="15:00", track="a", track_name="Panel", title="Panel: The State of Developer Experience in 2026", speaker="All Speakers", org="Summit") }}
        {{ session(time="16:30", track="a", track_name="Platform", title="Lightning Talks: Community Spotlight", speaker="Community", org="Summit") }}
      </div>
    </div>

    <!-- Day 3 -->
    <div>
      <div class="flex items-center gap-4 mb-8">
        <h3 class="text-xl font-bold text-white">Day 3</h3>
        <span class="text-sm text-muted font-mono">October 17, 2026</span>
        <div class="flex-1 h-px bg-border"></div>
      </div>
      <div>
        {{ session(time="09:00", track="c", track_name="Workshop", title="Full-Day Workshop: Production-Ready Observability Stack", speaker="Raj Huerta", org="Datadog") }}
        {{ session(time="09:00", track="b", track_name="Workshop", title="Full-Day Workshop: Advanced API Design Patterns", speaker="Sofia Nakamura", org="Stripe") }}
        {{ session(time="14:00", track="a", track_name="Keynote", title="Closing Keynote: Building What Comes Next", speaker="Marcus Rivera", org="Google DeepMind") }}
        {{ session(time="15:30", track="a", track_name="Keynote", title="Closing Ceremony and Awards", speaker="Organizers", org="Summit") }}
      </div>
    </div>
  </div>
</section>

<!-- Venue Section -->
<section class="py-20">
  <div class="max-w-5xl mx-auto px-6">
    <div class="card p-8 md:p-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p class="text-xs font-bold uppercase tracking-widest text-primary mb-4">Venue</p>
          <h2 class="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-4">Moscone Center</h2>
          <p class="text-gray-400 leading-relaxed mb-6">
            Located in the heart of downtown San Francisco, Moscone Center offers world-class facilities with easy access to hotels, restaurants, and public transit.
          </p>
          <div class="space-y-3 text-sm">
            <p class="text-gray-400"><span class="text-gray-500 font-semibold">Address:</span> 747 Howard St, San Francisco, CA 94103</p>
            <p class="text-gray-400"><span class="text-gray-500 font-semibold">Transit:</span> 5 min walk from Powell St BART Station</p>
            <p class="text-gray-400"><span class="text-gray-500 font-semibold">Hotels:</span> Partner rates available at registration</p>
          </div>
        </div>
        <div class="bg-surface-elevated rounded-lg aspect-video flex items-center justify-center border border-border">
          <p class="text-gray-600 text-sm font-medium">Map</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Sponsors Section -->
<section id="sponsors" class="py-20 bg-surface-card/30">
  <div class="max-w-5xl mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="section-title">Sponsors</h2>
      <p class="section-subtitle">Summit 2026 is made possible by our partners</p>
    </div>

    <div class="mb-12">
      <p class="text-xs font-bold uppercase tracking-widest text-gray-500 text-center mb-6">Platinum</p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {{ sponsor(name="Acme Corp") }}
        {{ sponsor(name="TechGiant") }}
        {{ sponsor(name="CloudBase") }}
      </div>
    </div>

    <div class="mb-12">
      <p class="text-xs font-bold uppercase tracking-widest text-gray-500 text-center mb-6">Gold</p>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {{ sponsor(name="DevTools") }}
        {{ sponsor(name="InfraCo") }}
        {{ sponsor(name="DataFlow") }}
        {{ sponsor(name="SecureNet") }}
      </div>
    </div>

    <div>
      <p class="text-xs font-bold uppercase tracking-widest text-gray-500 text-center mb-6">Community</p>
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {{ sponsor(name="OSS Fund") }}
        {{ sponsor(name="CodeHub") }}
        {{ sponsor(name="DevRel Co") }}
        {{ sponsor(name="HackSpace") }}
        {{ sponsor(name="BuildIt") }}
      </div>
    </div>
  </div>
</section>

<!-- Past Events Archive Section -->
<section id="archive" class="py-20">
  <div class="max-w-5xl mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="section-title">Past Events</h2>
      <p class="section-subtitle">A look back at previous Summit conferences</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="archive-card">
        <p class="text-xs font-bold uppercase tracking-widest text-primary mb-3">2025</p>
        <h3 class="text-lg font-bold text-white mb-2">Summit 2025</h3>
        <p class="text-muted text-sm leading-relaxed mb-4">Austin, TX. 1,500+ attendees, 30 speakers, focused on platform engineering and AI/ML infrastructure.</p>
        <div class="flex gap-6 text-sm">
          <span class="text-gray-500"><span class="text-white font-bold">30</span> Talks</span>
          <span class="text-gray-500"><span class="text-white font-bold">8</span> Workshops</span>
        </div>
      </div>
      <div class="archive-card">
        <p class="text-xs font-bold uppercase tracking-widest text-primary mb-3">2024</p>
        <h3 class="text-lg font-bold text-white mb-2">Summit 2024</h3>
        <p class="text-muted text-sm leading-relaxed mb-4">Seattle, WA. 1,200+ attendees, 25 speakers, deep dives into cloud-native architectures and developer tooling.</p>
        <div class="flex gap-6 text-sm">
          <span class="text-gray-500"><span class="text-white font-bold">25</span> Talks</span>
          <span class="text-gray-500"><span class="text-white font-bold">6</span> Workshops</span>
        </div>
      </div>
      <div class="archive-card">
        <p class="text-xs font-bold uppercase tracking-widest text-primary mb-3">2023</p>
        <h3 class="text-lg font-bold text-white mb-2">Summit 2023</h3>
        <p class="text-muted text-sm leading-relaxed mb-4">Portland, OR. 800+ attendees, 20 speakers, the inaugural Summit focused on open source and community.</p>
        <div class="flex gap-6 text-sm">
          <span class="text-gray-500"><span class="text-white font-bold">20</span> Talks</span>
          <span class="text-gray-500"><span class="text-white font-bold">4</span> Workshops</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-20">
  <div class="max-w-3xl mx-auto px-6 text-center">
    <h2 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">Don't Miss Out</h2>
    <p class="text-gray-400 text-lg mb-10 leading-relaxed">Early bird tickets are available until August 31, 2026. Join 2,000+ developers and engineering leaders at the premier tech conference of the year.</p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="#" class="btn-primary text-base px-10 py-4">Get Your Ticket</a>
      <a href="#" class="btn-outline text-base px-10 py-4">Become a Sponsor</a>
    </div>
  </div>
</section>
