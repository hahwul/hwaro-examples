+++
title = "Demand"
description = "Audience demand counters and voting results"
+++

<div class="section-block">
  <div class="section-label">Voting</div>
  <h2>How Encore Works</h2>
  <p style="color: var(--text-secondary); line-height: 1.8; max-width: 720px;">After each conference, attendees vote for the sessions they want to see again. Sessions crossing the 2,000-vote threshold earn an encore slot at the next event. The top three return to the main stage.</p>

  <!-- SVG demand counter visualization -->
  <svg width="100%" height="140" viewBox="0 0 600 140" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 32px auto; display: block; max-width: 600px;">
    <!-- Threshold line -->
    <line x1="0" y1="70" x2="600" y2="70" stroke="#d4a843" stroke-width="1" stroke-dasharray="6,4"/>
    <text x="590" y="64" text-anchor="end" fill="#d4a843" font-family="Source Sans Pro, sans-serif" font-weight="700" font-size="9" letter-spacing="1">THRESHOLD: 2,000</text>

    <!-- Bar 1 -->
    <rect x="40" y="6" width="80" height="124" fill="#d4a843" opacity="0.15"/>
    <rect x="40" y="6" width="80" height="94" fill="#d4a843" opacity="0.3"/>
    <text x="80" y="135" text-anchor="middle" fill="#a098b4" font-family="Source Sans Pro, sans-serif" font-weight="600" font-size="8">ART OF FAILURE</text>

    <!-- Bar 2 -->
    <rect x="160" y="6" width="80" height="124" fill="#d4a843" opacity="0.15"/>
    <rect x="160" y="18" width="80" height="82" fill="#d4a843" opacity="0.3"/>
    <text x="200" y="135" text-anchor="middle" fill="#a098b4" font-family="Source Sans Pro, sans-serif" font-weight="600" font-size="8">SYSTEMS AT SCALE</text>

    <!-- Bar 3 -->
    <rect x="280" y="6" width="80" height="124" fill="#d4a843" opacity="0.15"/>
    <rect x="280" y="24" width="80" height="76" fill="#d4a843" opacity="0.3"/>
    <text x="320" y="135" text-anchor="middle" fill="#a098b4" font-family="Source Sans Pro, sans-serif" font-weight="600" font-size="8">DESIGN PRESSURE</text>

    <!-- Bar 4 - below threshold -->
    <rect x="400" y="6" width="80" height="124" fill="#2a2438" opacity="0.3"/>
    <rect x="400" y="46" width="80" height="84" fill="#2a2438" opacity="0.4"/>
    <text x="440" y="135" text-anchor="middle" fill="#5c5470" font-family="Source Sans Pro, sans-serif" font-weight="600" font-size="8">ZERO TO PROD</text>

    <!-- Bar 5 - below threshold -->
    <rect x="520" y="6" width="80" height="124" fill="#2a2438" opacity="0.3"/>
    <rect x="520" y="62" width="80" height="68" fill="#2a2438" opacity="0.4"/>
    <text x="560" y="135" text-anchor="middle" fill="#5c5470" font-family="Source Sans Pro, sans-serif" font-weight="600" font-size="8">NAMING PROBLEM</text>
  </svg>
</div>
