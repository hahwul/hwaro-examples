+++
title = "On Sale Now"
description = "Box Office sale page with SVG tear-off tickets per tier, a bold SOLD OUT hero, and a countdown clock for the urgency of a fast-selling on-sale."
tags = ["event", "tickets", "sales", "urgency", "countdown"]
+++

<section class="sale-hero">
  <p class="hero-eyebrow">Official On-Sale &middot; Three Nights Only</p>
  <h1 class="hero-soldout">SOLD OUT</h1>
  <p class="hero-sub">Every single ticket to The Meridian Theatre residency is gone. Sold in 7 minutes 42 seconds from the second the on-sale window opened.</p>
</section>

<div class="countdown">
  <div class="clock-wrap">
    <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Countdown clock with twelve bold hour markers">
      <!-- Outer ring -->
      <circle cx="140" cy="140" r="132" fill="#fffbe6" stroke="#0a0a0a" stroke-width="6"/>
      <!-- Hour markers (bold rectangles) -->
      <g fill="#0a0a0a">
        <rect x="136" y="14" width="8" height="22"/>
        <rect x="136" y="244" width="8" height="22"/>
        <rect x="14" y="136" width="22" height="8"/>
        <rect x="244" y="136" width="22" height="8"/>
      </g>
      <!-- Five-minute markers (thinner) -->
      <g fill="#0a0a0a">
        <rect x="194" y="24" width="5" height="16" transform="rotate(30 196.5 32)"/>
        <rect x="237" y="77" width="5" height="16" transform="rotate(60 239.5 85)"/>
        <rect x="237" y="187" width="5" height="16" transform="rotate(120 239.5 195)"/>
        <rect x="194" y="240" width="5" height="16" transform="rotate(150 196.5 248)"/>
        <rect x="81" y="240" width="5" height="16" transform="rotate(210 83.5 248)"/>
        <rect x="38" y="187" width="5" height="16" transform="rotate(240 40.5 195)"/>
        <rect x="38" y="77" width="5" height="16" transform="rotate(300 40.5 85)"/>
        <rect x="81" y="24" width="5" height="16" transform="rotate(330 83.5 32)"/>
      </g>
      <!-- Hour hand -->
      <line x1="140" y1="140" x2="200" y2="100" stroke="#c41e3a" stroke-width="10" stroke-linecap="square"/>
      <!-- Minute hand -->
      <line x1="140" y1="140" x2="140" y2="52" stroke="#0a0a0a" stroke-width="6" stroke-linecap="square"/>
      <!-- Center pin -->
      <circle cx="140" cy="140" r="10" fill="#c41e3a" stroke="#0a0a0a" stroke-width="3"/>
      <!-- Numbers -->
      <text x="140" y="58" font-family="Archivo Black, sans-serif" font-size="22" fill="#0a0a0a" text-anchor="middle">12</text>
      <text x="232" y="150" font-family="Archivo Black, sans-serif" font-size="22" fill="#0a0a0a" text-anchor="middle">3</text>
      <text x="140" y="244" font-family="Archivo Black, sans-serif" font-size="22" fill="#0a0a0a" text-anchor="middle">6</text>
      <text x="48" y="150" font-family="Archivo Black, sans-serif" font-size="22" fill="#0a0a0a" text-anchor="middle">9</text>
    </svg>
  </div>

  <div class="countdown-stats">
    <div class="countdown-stat is-critical">
      <span class="countdown-val">00</span>
      <span class="countdown-label">Seats Left</span>
    </div>
    <div class="countdown-stat">
      <span class="countdown-val">07</span>
      <span class="countdown-label">Minutes</span>
    </div>
    <div class="countdown-stat">
      <span class="countdown-val">42</span>
      <span class="countdown-label">Seconds</span>
    </div>
  </div>
</div>

<section class="tiers">
  <!-- VIP -->
  <div class="ticket" data-tier="vip">
    <div class="ticket-svg-wrap">
      <svg class="ticket-svg" viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,0 L240,0 L240,10 A6,6 0 0 1 240,22 L240,32 A6,6 0 0 1 240,44 L240,54 A6,6 0 0 1 240,66 L240,76 A6,6 0 0 1 240,88 L240,98 A6,6 0 0 1 240,110 L240,120 A6,6 0 0 1 240,132 L240,142 A6,6 0 0 1 240,154 L240,164 A6,6 0 0 1 240,176 L240,180 L0,180 Z" fill="#0a0a0a"/>
        <path d="M240,10 A6,6 0 0 1 240,22 M240,32 A6,6 0 0 1 240,44 M240,54 A6,6 0 0 1 240,66 M240,76 A6,6 0 0 1 240,88 M240,98 A6,6 0 0 1 240,110 M240,120 A6,6 0 0 1 240,132 M240,142 A6,6 0 0 1 240,154 M240,164 A6,6 0 0 1 240,176" fill="none" stroke="#fffbe6" stroke-width="2" stroke-dasharray="4,3"/>
        <rect x="240" y="0" width="120" height="180" fill="#c41e3a"/>
        <text x="300" y="90" font-family="Archivo Black, sans-serif" font-size="48" fill="#fffbe6" text-anchor="middle" transform="rotate(-90 300 90)">VIP</text>
      </svg>
    </div>
    <div class="ticket-content">
      <div>
        <p class="ticket-tier">Tier 1 &middot; VIP Premiere</p>
        <h2 class="ticket-name">Backstage Pass</h2>
      </div>
      <div class="ticket-row">
        <span class="ticket-price"><span class="sym">USD</span>480</span>
        <span class="ticket-status">SOLD OUT</span>
      </div>
    </div>
  </div>

  <!-- FLOOR -->
  <div class="ticket" data-tier="floor">
    <div class="ticket-svg-wrap">
      <svg class="ticket-svg" viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,0 L240,0 L240,10 A6,6 0 0 1 240,22 L240,32 A6,6 0 0 1 240,44 L240,54 A6,6 0 0 1 240,66 L240,76 A6,6 0 0 1 240,88 L240,98 A6,6 0 0 1 240,110 L240,120 A6,6 0 0 1 240,132 L240,142 A6,6 0 0 1 240,154 L240,164 A6,6 0 0 1 240,176 L240,180 L0,180 Z" fill="#0a0a0a"/>
        <path d="M240,10 A6,6 0 0 1 240,22 M240,32 A6,6 0 0 1 240,44 M240,54 A6,6 0 0 1 240,66 M240,76 A6,6 0 0 1 240,88 M240,98 A6,6 0 0 1 240,110 M240,120 A6,6 0 0 1 240,132 M240,142 A6,6 0 0 1 240,154 M240,164 A6,6 0 0 1 240,176" fill="none" stroke="#fffbe6" stroke-width="2" stroke-dasharray="4,3"/>
        <rect x="240" y="0" width="120" height="180" fill="#c41e3a"/>
        <text x="300" y="90" font-family="Archivo Black, sans-serif" font-size="36" fill="#fffbe6" text-anchor="middle" transform="rotate(-90 300 90)">FLOOR</text>
      </svg>
    </div>
    <div class="ticket-content">
      <div>
        <p class="ticket-tier">Tier 2 &middot; General Floor</p>
        <h2 class="ticket-name">Front of House</h2>
      </div>
      <div class="ticket-row">
        <span class="ticket-price"><span class="sym">USD</span>220</span>
        <span class="ticket-status">SOLD OUT</span>
      </div>
    </div>
  </div>

  <!-- MEZZANINE -->
  <div class="ticket" data-tier="mezz">
    <div class="ticket-svg-wrap">
      <svg class="ticket-svg" viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,0 L240,0 L240,10 A6,6 0 0 1 240,22 L240,32 A6,6 0 0 1 240,44 L240,54 A6,6 0 0 1 240,66 L240,76 A6,6 0 0 1 240,88 L240,98 A6,6 0 0 1 240,110 L240,120 A6,6 0 0 1 240,132 L240,142 A6,6 0 0 1 240,154 L240,164 A6,6 0 0 1 240,176 L240,180 L0,180 Z" fill="#0a0a0a"/>
        <path d="M240,10 A6,6 0 0 1 240,22 M240,32 A6,6 0 0 1 240,44 M240,54 A6,6 0 0 1 240,66 M240,76 A6,6 0 0 1 240,88 M240,98 A6,6 0 0 1 240,110 M240,120 A6,6 0 0 1 240,132 M240,142 A6,6 0 0 1 240,154 M240,164 A6,6 0 0 1 240,176" fill="none" stroke="#fffbe6" stroke-width="2" stroke-dasharray="4,3"/>
        <rect x="240" y="0" width="120" height="180" fill="#c41e3a"/>
        <text x="300" y="90" font-family="Archivo Black, sans-serif" font-size="32" fill="#fffbe6" text-anchor="middle" transform="rotate(-90 300 90)">MEZZ</text>
      </svg>
    </div>
    <div class="ticket-content">
      <div>
        <p class="ticket-tier">Tier 3 &middot; Mezzanine</p>
        <h2 class="ticket-name">Upper Level</h2>
      </div>
      <div class="ticket-row">
        <span class="ticket-price"><span class="sym">USD</span>140</span>
        <span class="ticket-status">SOLD OUT</span>
      </div>
    </div>
  </div>
</section>

<div class="urgency-banner">
  <p class="urgency-label">Fastest on-sale in house history</p>
  <p class="urgency-message">12,480 tickets sold in 7 min 42 sec</p>
</div>

<section class="sale-stats">
  <div class="sale-stat">
    <p class="sale-stat-label">Tickets released</p>
    <p class="sale-stat-val">12,480</p>
  </div>
  <div class="sale-stat">
    <p class="sale-stat-label">Sell-out time</p>
    <p class="sale-stat-val">7:42</p>
  </div>
  <div class="sale-stat">
    <p class="sale-stat-label">Queue peak</p>
    <p class="sale-stat-val">48,200</p>
  </div>
  <div class="sale-stat">
    <p class="sale-stat-label">Per-order cap</p>
    <p class="sale-stat-val">4</p>
  </div>
</section>

<section class="sale-timeline">

<h2 class="sale-heading">ON-SALE TIMELINE</h2>

<div class="timeline-row is-done">
  <span class="timeline-time">10:00:00</span>
  <span class="timeline-event">On-sale window opens &middot; queue activated</span>
  <span class="timeline-state">COMPLETE</span>
</div>
<div class="timeline-row is-done">
  <span class="timeline-time">10:00:18</span>
  <span class="timeline-event">First transaction clears &middot; VIP backstage pass</span>
  <span class="timeline-state">FIRST SOLD</span>
</div>
<div class="timeline-row is-done">
  <span class="timeline-time">10:03:11</span>
  <span class="timeline-event">VIP backstage tier fully allocated</span>
  <span class="timeline-state">VIP GONE</span>
</div>
<div class="timeline-row is-done">
  <span class="timeline-time">10:04:54</span>
  <span class="timeline-event">General floor allocation depleted</span>
  <span class="timeline-state">FLOOR GONE</span>
</div>
<div class="timeline-row is-done">
  <span class="timeline-time">10:07:42</span>
  <span class="timeline-event">Final mezzanine seat sold &middot; three-night residency closes</span>
  <span class="timeline-state">SOLD OUT</span>
</div>
<div class="timeline-row">
  <span class="timeline-time">10:08:00</span>
  <span class="timeline-event">Resale waitlist opens via verified fan partners</span>
  <span class="timeline-state">ACTIVE</span>
</div>
</section>

## What happens now

If you missed the on-sale, your only official route is the verified resale waitlist. Tickets returned for any reason (duplicate orders, name mismatches, failed verification) are added back to the list and released in the order received. Average waitlist clear rate in the last six months: 2.3% of demand.

Avoid third-party resellers advertising face-plus prices &mdash; we do not recognise these tickets at the venue and will refuse entry without explanation.

[See the pricing tiers in detail]({{ base_url }}/tiers/) &middot; [Read the FAQ]({{ base_url }}/faq/) &middot; [Resale process]({{ base_url }}/resale/)
