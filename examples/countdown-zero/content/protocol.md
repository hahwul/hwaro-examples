+++
title = "Protocol"
description = "Mission protocol and countdown procedures"
+++

<div class="section-block">
  <div class="section-label">Mission Protocol</div>
  <h2>Countdown Procedures</h2>
  <p style="color: var(--text-secondary); line-height: 1.8; max-width: 720px;">The countdown follows a strict sequence of milestones measured in negative time relative to T-0. Each milestone has a designated hold point where the clock can be paused for unresolved issues. Once a hold is cleared, the countdown resumes and the next milestone becomes the focus. There is no going backward.</p>

  <!-- SVG countdown milestone markers -->
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 32px auto; display: block;">
    <!-- Vertical timeline -->
    <line x1="100" y1="20" x2="100" y2="180" stroke="#00ff88" stroke-width="1" opacity="0.2"/>
    <!-- Milestones -->
    <circle cx="100" cy="35" r="6" stroke="#00ff88" stroke-width="1.5" fill="none" opacity="0.2"/>
    <text x="120" y="38" fill="#00ff88" font-family="Orbitron, sans-serif" font-weight="700" font-size="8" opacity="0.25">T-4H</text>
    <circle cx="100" cy="75" r="6" stroke="#00ff88" stroke-width="1.5" fill="none" opacity="0.25"/>
    <text x="120" y="78" fill="#00ff88" font-family="Orbitron, sans-serif" font-weight="700" font-size="8" opacity="0.3">T-2H</text>
    <circle cx="100" cy="115" r="6" stroke="#00ff88" stroke-width="1.5" fill="none" opacity="0.3"/>
    <text x="120" y="118" fill="#00ff88" font-family="Orbitron, sans-serif" font-weight="700" font-size="8" opacity="0.35">T-30M</text>
    <!-- T-0 emphasis -->
    <circle cx="100" cy="165" r="10" stroke="#00ff88" stroke-width="2" fill="none" opacity="0.35"/>
    <circle cx="100" cy="165" r="4" fill="#00ff88" opacity="0.3"/>
    <text x="120" y="168" fill="#00ff88" font-family="Orbitron, sans-serif" font-weight="900" font-size="10" opacity="0.4">T-0</text>
  </svg>
</div>
