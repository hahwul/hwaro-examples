+++
title = "Dropzone"
description = "Cloud storage landing page example"
template = "page"
+++

<div class="hero-section">
  <div class="badge">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;">
      <path d="M12 22V8"/>
      <path d="m5 15 7-7 7 7"/>
      <path d="M8 3h8"/>
    </svg>
    New: Sync Engine 2.0
  </div>
  <h1 class="hero-title">File sharing made incredibly simple</h1>
  <p class="hero-subtitle">Secure cloud storage with intuitive drag-and-drop mechanics. Built for modern teams who need to move fast.</p>
</div>

<div class="upload-container">
  <div class="dropzone-area">
    <div class="dropzone-icon">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
    </div>
    <h3 class="dropzone-title">Drag & Drop files here</h3>
    <p class="dropzone-text">or click to browse from your computer</p>
    <button class="btn btn-primary">Select Files</button>
  </div>

  <div class="upload-progress-container">
    <div class="file-item">
      <div class="file-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
          <circle cx="9" cy="9" r="2"/>
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
        </svg>
      </div>
      <div class="file-details">
        <div class="file-name">
          <span>presentation-q4.pdf</span>
          <span class="file-size">4.2 MB</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill"></div>
        </div>
      </div>
      <div class="status-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2v20"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      </div>
    </div>

    <div class="file-item finished">
      <div class="file-icon" style="color: var(--success); background: color-mix(in srgb, var(--success) 10%, transparent);">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>
      </div>
      <div class="file-details">
        <div class="file-name">
          <span>brand-guidelines.zip</span>
          <span class="file-size">12.8 MB</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill"></div>
        </div>
      </div>
      <div class="status-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6 9 17l-5-5"/>
        </svg>
      </div>
    </div>
  </div>
</div>

<div class="section-title">
  <h2>Simple, transparent pricing</h2>
  <p>Choose the storage plan that fits your needs. No hidden fees, cancel anytime.</p>
</div>

<div class="pricing-grid">
  <div class="pricing-card">
    <h3 class="tier-name">Basic</h3>
    <div class="tier-price">$0<span class="tier-period">/mo</span></div>
    <p class="tier-desc">Perfect for individuals starting out with cloud storage.</p>

    <ul class="feature-list">
      <li>
        <svg class="feature-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        <span>5 GB Storage</span>
      </li>
      <li>
        <svg class="feature-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        <span>Secure file sharing</span>
      </li>
      <li>
        <svg class="feature-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        <span>Mobile app access</span>
      </li>
      <li class="disabled">
        <svg class="feature-icon disabled" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        <span>Advanced permission controls</span>
      </li>
    </ul>

    <button class="btn btn-outline" style="width: 100%;">Get Started</button>
  </div>

  <div class="pricing-card featured">
    <div class="featured-badge">Most Popular</div>
    <h3 class="tier-name">Pro</h3>
    <div class="tier-price">$12<span class="tier-period">/mo</span></div>
    <p class="tier-desc">Ideal for professionals who need more space and tools.</p>

    <ul class="feature-list">
      <li>
        <svg class="feature-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        <span>2 TB Storage</span>
      </li>
      <li>
        <svg class="feature-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        <span>Advanced permission controls</span>
      </li>
      <li>
        <svg class="feature-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        <span>30-day file recovery</span>
      </li>
      <li>
        <svg class="feature-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        <span>Password protected links</span>
      </li>
    </ul>

    <button class="btn btn-primary" style="width: 100%;">Start Free Trial</button>
  </div>

  <div class="pricing-card">
    <h3 class="tier-name">Team</h3>
    <div class="tier-price">$24<span class="tier-period">/mo</span></div>
    <p class="tier-desc">For organizations requiring collaborative storage solutions.</p>

    <ul class="feature-list">
      <li>
        <svg class="feature-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        <span>Unlimited Storage</span>
      </li>
      <li>
        <svg class="feature-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        <span>Admin console</span>
      </li>
      <li>
        <svg class="feature-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        <span>180-day file recovery</span>
      </li>
      <li>
        <svg class="feature-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        <span>Priority support</span>
      </li>
    </ul>

    <button class="btn btn-outline" style="width: 100%;">Contact Sales</button>
  </div>
</div>