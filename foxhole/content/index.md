+++
title = "Foxhole"
description = "Security writeups and CTF challenge solutions"
template = "page"
+++

<div class="hero">
  <p class="terminal-prompt">$ cat /etc/motd</p>
  <h1>Foxhole</h1>
  <p>A collection of security research writeups, CTF challenge solutions, and vulnerability analysis. Detailed step-by-step breakdowns from reconnaissance to flag capture.</p>
</div>

<div class="stats-bar">
  <div class="stat">
    <span class="stat-value">12</span>
    <span class="stat-label">Writeups</span>
  </div>
  <div class="stat">
    <span class="stat-value">5</span>
    <span class="stat-label">CTF Events</span>
  </div>
  <div class="stat">
    <span class="stat-value">3</span>
    <span class="stat-label">Categories</span>
  </div>
</div>

<h2 class="section-title">Recent Writeups</h2>

<div class="writeup-list">
  <a href="writeups/blind-sqli-login-bypass/" class="writeup-card">
    <div class="writeup-card-header">
      <h3>Blind SQLi Login Bypass</h3>
      <div class="badge-group">
        <span class="badge badge-category">Web</span>
        <span class="badge badge-difficulty-medium">Medium</span>
        <span class="badge badge-points">250 pts</span>
      </div>
    </div>
    <div class="meta">
      <span>2025-03-10</span>
      <span>NullCon CTF 2025</span>
    </div>
    <p class="summary">Exploiting a time-based blind SQL injection in a login form to extract admin credentials and bypass authentication.</p>
  </a>

  <a href="writeups/heap-overflow-tcache/" class="writeup-card">
    <div class="writeup-card-header">
      <h3>Heap Overflow via Tcache Poisoning</h3>
      <div class="badge-group">
        <span class="badge badge-category">Pwn</span>
        <span class="badge badge-difficulty-hard">Hard</span>
        <span class="badge badge-points">500 pts</span>
      </div>
    </div>
    <div class="meta">
      <span>2025-02-22</span>
      <span>DefCamp CTF 2025</span>
    </div>
    <p class="summary">Tcache poisoning attack on a custom allocator to gain arbitrary write and redirect execution flow.</p>
  </a>

  <a href="writeups/jwt-none-algorithm/" class="writeup-card">
    <div class="writeup-card-header">
      <h3>JWT None Algorithm Attack</h3>
      <div class="badge-group">
        <span class="badge badge-category">Web</span>
        <span class="badge badge-difficulty-easy">Easy</span>
        <span class="badge badge-points">100 pts</span>
      </div>
    </div>
    <div class="meta">
      <span>2025-01-15</span>
      <span>PicoCTF 2025</span>
    </div>
    <p class="summary">Forging JWT tokens by exploiting the "none" algorithm vulnerability to escalate privileges.</p>
  </a>
</div>
