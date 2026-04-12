+++
title = "Rules"
description = "Course rules and station protocol"
+++

<div class="section-block">
  <div class="section-label">Protocol</div>
  <h2>Course Rules</h2>
  <p style="color: var(--text-secondary); line-height: 1.8; max-width: 720px;">Stations must be completed in order. No skipping. No backtracking. Failed stations can be retried once. If you fail twice, you are marked DNF at that station and proceed to the next. Time penalties apply for each retry.</p>

  <!-- SVG obstacle course station diagram -->
  <svg width="100%" height="80" viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 32px auto; display: block; max-width: 400px;">
    <!-- Wall obstacle diagram -->
    <rect x="20" y="20" width="8" height="50" fill="#84cc16" opacity="0.2" stroke="#84cc16" stroke-width="1"/>
    <rect x="50" y="10" width="8" height="60" fill="#eab308" opacity="0.2" stroke="#eab308" stroke-width="1"/>
    <rect x="80" y="5" width="8" height="65" fill="#dc2626" opacity="0.2" stroke="#dc2626" stroke-width="1"/>
    <!-- Ground line -->
    <line x1="10" y1="70" x2="110" y2="70" stroke="#506048" stroke-width="1"/>
    <!-- Arrow -->
    <path d="M130,40 L160,40" stroke="#84cc16" stroke-width="1.5" opacity="0.4"/>
    <path d="M155,35 L165,40 L155,45" stroke="#84cc16" stroke-width="1.5" fill="none" opacity="0.4"/>
    <!-- Cargo net diagram -->
    <line x1="180" y1="15" x2="180" y2="65" stroke="#eab308" stroke-width="1.5" opacity="0.3"/>
    <line x1="210" y1="15" x2="210" y2="65" stroke="#eab308" stroke-width="1.5" opacity="0.3"/>
    <line x1="240" y1="15" x2="240" y2="65" stroke="#eab308" stroke-width="1.5" opacity="0.3"/>
    <line x1="175" y1="20" x2="245" y2="20" stroke="#eab308" stroke-width="1" opacity="0.2"/>
    <line x1="175" y1="35" x2="245" y2="35" stroke="#eab308" stroke-width="1" opacity="0.2"/>
    <line x1="175" y1="50" x2="245" y2="50" stroke="#eab308" stroke-width="1" opacity="0.2"/>
    <line x1="175" y1="65" x2="245" y2="65" stroke="#eab308" stroke-width="1" opacity="0.2"/>
    <!-- Labels -->
    <text x="55" y="78" text-anchor="middle" fill="#506048" font-family="Rajdhani, sans-serif" font-weight="700" font-size="7">WALLS</text>
    <text x="210" y="78" text-anchor="middle" fill="#506048" font-family="Rajdhani, sans-serif" font-weight="700" font-size="7">CARGO NET</text>
    <!-- Finish flag -->
    <line x1="350" y1="65" x2="350" y2="15" stroke="#84cc16" stroke-width="2"/>
    <path d="M350,15 L380,22 L350,30" fill="#84cc16" opacity="0.3" stroke="#84cc16" stroke-width="1"/>
    <text x="365" y="78" text-anchor="middle" fill="#506048" font-family="Rajdhani, sans-serif" font-weight="700" font-size="7">FINISH</text>
  </svg>
</div>
