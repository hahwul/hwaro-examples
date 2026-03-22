+++
title = "Launchpad"
template = "landing"
+++

<section class="hero">
  <div class="container">
    <span class="hero-badge">Now in Public Beta</span>
    <h1>Ship products faster with your entire team</h1>
    <p class="hero-subtitle">Launchpad brings your workflows, tools, and team into one streamlined platform. Focus on building, not on managing.</p>
    <div class="hero-actions">
      <a href="#" class="btn-primary">Start Free Trial</a>
      <a href="#" class="btn-secondary">See How It Works</a>
    </div>
  </div>
</section>

<section class="stats">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item">
        <span class="stat-value">12k+</span>
        <span class="stat-label">Active Teams</span>
      </div>
      <div class="stat-item">
        <span class="stat-value">48M</span>
        <span class="stat-label">Tasks Completed</span>
      </div>
      <div class="stat-item">
        <span class="stat-value">99.9%</span>
        <span class="stat-label">Uptime SLA</span>
      </div>
      <div class="stat-item">
        <span class="stat-value">4.8/5</span>
        <span class="stat-label">User Rating</span>
      </div>
    </div>
  </div>
</section>

<section class="logos-section">
  <div class="container">
    <div class="logos-label">Trusted by teams at leading companies</div>
    <div class="logos-grid">
      <span class="logo-item">Acme Corp</span>
      <span class="logo-item">TechFlow</span>
      <span class="logo-item">Basecamp</span>
      <span class="logo-item">NovaSoft</span>
      <span class="logo-item">Meridian</span>
      <span class="logo-item">Apex Labs</span>
    </div>
  </div>
</section>

<section class="section" id="features">
  <div class="container">
    <div class="section-header">
      <div class="section-label">Features</div>
      <h2 class="section-title">Everything you need to launch</h2>
      <p class="section-desc">From ideation to deployment, Launchpad covers every step of your product workflow.</p>
    </div>
    <div class="features-grid">
      {{ feature(icon="Wf", title="Workflow Automation", description="Build custom workflows with drag-and-drop simplicity. Automate repetitive tasks and keep your team focused on what matters.") }}
      {{ feature(icon="Rt", title="Real-time Collaboration", description="Work together seamlessly with live editing, comments, and instant notifications. Never miss an update again.") }}
      {{ feature(icon="An", title="Advanced Analytics", description="Track every metric that matters. Customizable dashboards give you actionable insights in real time.") }}
      {{ feature(icon="In", title="Integrations", description="Connect with 200+ tools you already use. Slack, GitHub, Figma, Jira, and more work right out of the box.") }}
      {{ feature(icon="Sc", title="Security First", description="Enterprise-grade security with SOC 2 compliance, SSO, audit logs, and role-based access control.") }}
      {{ feature(icon="Ap", title="API & Extensibility", description="Build on top of Launchpad with our powerful REST and GraphQL APIs. Create custom integrations effortlessly.") }}
    </div>
  </div>
</section>

<section class="section section-alt">
  <div class="container">
    <div class="section-header">
      <div class="section-label">Testimonials</div>
      <h2 class="section-title">Loved by product teams</h2>
      <p class="section-desc">See what teams are saying about switching to Launchpad.</p>
    </div>
    <div class="testimonials-grid">
      {{ testimonial(quote="Launchpad cut our sprint planning time in half. The workflow automation alone was worth the switch.", name="Sarah Chen", role="VP of Engineering, TechFlow", initials="SC") }}
      {{ testimonial(quote="We evaluated a dozen tools before choosing Launchpad. Nothing else comes close to the developer experience.", name="Marcus Rivera", role="CTO, NovaSoft", initials="MR") }}
      {{ testimonial(quote="The analytics dashboard gives us visibility we never had before. We can finally make data-driven decisions quickly.", name="Elena Park", role="Product Lead, Meridian", initials="EP") }}
    </div>
  </div>
</section>

<section class="section" id="pricing">
  <div class="container">
    <div class="section-header">
      <div class="section-label">Pricing</div>
      <h2 class="section-title">Simple, transparent pricing</h2>
      <p class="section-desc">Start free, scale as you grow. No hidden fees, no surprises.</p>
    </div>
    <div class="pricing-grid">
      {{ pricing(name="Starter", price="$0", description="For small teams getting started", f1="Up to 5 team members", f2="10 projects", f3="Basic analytics", f4="Community support") }}
      {{ pricing(name="Pro", price="$29", description="For growing teams that need more", featured="true", f1="Unlimited team members", f2="Unlimited projects", f3="Advanced analytics", f4="Priority support", f5="Custom workflows") }}
      {{ pricing(name="Enterprise", price="$99", description="For large organizations at scale", f1="Everything in Pro", f2="SSO & SAML", f3="Audit logs", f4="Dedicated account manager", f5="Custom SLA") }}
    </div>
  </div>
</section>

<section class="cta-banner">
  <div class="container">
    <h2>Ready to launch?</h2>
    <p>Join thousands of teams already shipping faster with Launchpad. Start your free trial today.</p>
    <a href="#" class="btn-white">Start Free Trial</a>
  </div>
</section>
