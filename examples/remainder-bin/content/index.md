+++
title = "The Bin"
description = "A working catalogue of remaindered, secondhand, and lightly worn books at marked-down prices. Prices stickered once, peeled, and reduced again."
template = "page"
+++

<section class="bin-hero">
  <div class="bin-hero-plate">
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Bin / crate with books -->
      <rect x="10" y="60" width="380" height="200" fill="#d8c98b" stroke="#222" stroke-width="2"/>
      <rect x="10" y="60" width="380" height="20" fill="#c95c3b"/>
      <text x="200" y="76" text-anchor="middle" font-family="Bebas Neue, sans-serif" font-size="14" fill="#fdf7e1" letter-spacing="4">REMAINDER BIN</text>
      <line x1="80" y1="60" x2="80" y2="260" stroke="#222" stroke-width="1"/>
      <line x1="320" y1="60" x2="320" y2="260" stroke="#222" stroke-width="1"/>
      <!-- Books stacked in the bin -->
      <g>
        <rect x="30" y="110" width="30" height="150" fill="#4a6ea3" stroke="#222" stroke-width="1"/>
        <rect x="60" y="130" width="28" height="130" fill="#c95c3b" stroke="#222" stroke-width="1"/>
        <rect x="88" y="120" width="32" height="140" fill="#6b8a4a" stroke="#222" stroke-width="1"/>
        <rect x="120" y="135" width="26" height="125" fill="#4a3524" stroke="#222" stroke-width="1"/>
        <rect x="146" y="110" width="30" height="150" fill="#e0b030" stroke="#222" stroke-width="1"/>
        <rect x="176" y="125" width="28" height="135" fill="#8a4a6e" stroke="#222" stroke-width="1"/>
        <rect x="204" y="115" width="30" height="145" fill="#2d4a8f" stroke="#222" stroke-width="1"/>
        <rect x="234" y="130" width="26" height="130" fill="#6b4a1e" stroke="#222" stroke-width="1"/>
        <rect x="260" y="115" width="30" height="145" fill="#c95c3b" stroke="#222" stroke-width="1"/>
        <rect x="290" y="125" width="28" height="135" fill="#3c8a68" stroke="#222" stroke-width="1"/>
        <rect x="330" y="110" width="30" height="150" fill="#4a3524" stroke="#222" stroke-width="1"/>
        <rect x="360" y="130" width="20" height="130" fill="#e0b030" stroke="#222" stroke-width="1"/>
      </g>
      <!-- Spine labels (horizontal lines) -->
      <g stroke="#222" stroke-width="0.4" opacity="0.5">
        <line x1="30" y1="140" x2="60" y2="140"/>
        <line x1="60" y1="160" x2="88" y2="160"/>
        <line x1="88" y1="150" x2="120" y2="150"/>
        <line x1="120" y1="170" x2="146" y2="170"/>
        <line x1="146" y1="140" x2="176" y2="140"/>
        <line x1="176" y1="160" x2="204" y2="160"/>
        <line x1="204" y1="145" x2="234" y2="145"/>
        <line x1="234" y1="165" x2="260" y2="165"/>
        <line x1="260" y1="145" x2="290" y2="145"/>
        <line x1="290" y1="160" x2="318" y2="160"/>
        <line x1="330" y1="140" x2="360" y2="140"/>
      </g>
      <!-- Remainder spray on top -->
      <g fill="#222">
        <circle cx="30" cy="100" r="1"/>
        <circle cx="50" cy="104" r="1.2"/>
        <circle cx="70" cy="98" r="0.9"/>
        <circle cx="95" cy="108" r="1.1"/>
        <circle cx="120" cy="102" r="1"/>
        <circle cx="150" cy="104" r="1.3"/>
        <circle cx="180" cy="106" r="1"/>
        <circle cx="212" cy="100" r="1.1"/>
        <circle cx="240" cy="108" r="0.9"/>
        <circle cx="272" cy="102" r="1.2"/>
        <circle cx="302" cy="104" r="1"/>
        <circle cx="340" cy="98" r="1.1"/>
        <circle cx="370" cy="106" r="0.9"/>
      </g>
      <!-- A peeled sticker -->
      <g transform="translate(220,190) rotate(-10)">
        <rect x="-30" y="-20" width="60" height="40" fill="#e0b030" stroke="#222" stroke-width="1"/>
        <text y="-4" text-anchor="middle" font-family="Bebas Neue, sans-serif" font-size="8" fill="#222" letter-spacing="1">MARKED</text>
        <text y="10" text-anchor="middle" font-family="Bebas Neue, sans-serif" font-size="10" fill="#c95c3b" font-weight="700">-75%</text>
        <path d="M 24 -18 Q 36 -12 34 0 Q 28 10 20 4 Z" fill="#f2d668" stroke="#222" stroke-width="0.8"/>
      </g>
    </svg>
  </div>
  <div class="bin-hero-text">
    <p class="kicker">EVERYTHING MUST MOVE</p>
    <h1>Books at the Bottom of the Pile.</h1>
    <p class="bin-sub">Reduced once, reduced again, reduced a third time with the pencil. That is the sticker.</p>
    <p class="bin-lede">Welcome to the Remainder Bin - a working catalogue of publishers' overstock, bookshop returns, review copies, and odd lots passed to us at trade discount. Nothing in this bin is rare; everything in this bin is cheap. The prices you see are the prices you pay.</p>
    <div class="bin-hero-prices">
      <span class="was">WAS 28.00</span>
      <span class="now">NOW 6.00</span>
      <span class="save">SAVE 78%</span>
    </div>
    <p>Stock turns weekly, arriving by van on Tuesday evenings and ready on the shop floor Wednesday at opening. Further reductions on the last Friday of each month, when everything on the floor takes a further thirty per cent off the sticker.</p>
    <p>Browse the current <a href="{{ base_url }}/stock/">stock list</a> below, or read our <a href="{{ base_url }}/policy/">counter policy</a> for particulars on holds, refunds, and trade-ins (short version: no, no, and no).</p>
  </div>
</section>

## This Week in the Bin

<ul class="feature-row">
  <li class="feature-card">
    <a href="{{ base_url }}/stock/post-war-modernist-poetry/">
      <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="10" y="10" width="180" height="240" fill="#4a6ea3" stroke="#222" stroke-width="1.5"/>
        <rect x="20" y="30" width="160" height="4" fill="#fdf7e1"/>
        <text x="100" y="70" text-anchor="middle" font-family="Bebas Neue, sans-serif" font-size="18" fill="#fdf7e1" letter-spacing="3">POST-WAR</text>
        <text x="100" y="92" text-anchor="middle" font-family="Bebas Neue, sans-serif" font-size="18" fill="#fdf7e1" letter-spacing="3">MODERNIST</text>
        <text x="100" y="114" text-anchor="middle" font-family="Bebas Neue, sans-serif" font-size="18" fill="#fdf7e1" letter-spacing="3">POETRY</text>
        <rect x="20" y="130" width="160" height="2" fill="#fdf7e1"/>
        <g fill="#222" opacity="0.6">
          <circle cx="20" cy="12" r="1"/><circle cx="40" cy="14" r="1.1"/><circle cx="60" cy="12" r="0.9"/><circle cx="80" cy="15" r="1"/><circle cx="100" cy="12" r="1.1"/><circle cx="120" cy="14" r="0.9"/><circle cx="140" cy="12" r="1"/><circle cx="160" cy="15" r="1.1"/><circle cx="180" cy="12" r="0.9"/>
        </g>
        <text x="100" y="230" text-anchor="middle" font-family="Special Elite, monospace" font-size="8" fill="#fdf7e1" letter-spacing="2">KIRKPATRICK PRESS</text>
      </svg>
      <p class="feature-cap">
        <span class="feature-author">ED. E. KIRKPATRICK</span>
        <span class="feature-title">Post-War Modernist Poetry</span>
        <span class="feature-prices">
          <span class="was">24.00</span>
          <span class="now">6.00</span>
        </span>
      </p>
    </a>
  </li>
  <li class="feature-card">
    <a href="{{ base_url }}/stock/field-guide-british-coastal-molluscs/">
      <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="10" y="10" width="180" height="240" fill="#6b8a4a" stroke="#222" stroke-width="1.5"/>
        <rect x="20" y="24" width="160" height="220" fill="#efe7d6" stroke="#222" stroke-width="0.8"/>
        <g transform="translate(100,130)">
          <ellipse rx="48" ry="32" fill="#c95c3b"/>
          <path d="M -44 0 Q -30 -18 0 -18 Q 30 -18 44 0 Q 30 12 0 12 Q -30 12 -44 0 Z" fill="#e0b030" opacity="0.7"/>
          <circle r="8" fill="#222"/>
        </g>
        <text x="100" y="50" text-anchor="middle" font-family="Oswald, sans-serif" font-size="13" fill="#222" letter-spacing="1">A FIELD GUIDE TO</text>
        <text x="100" y="68" text-anchor="middle" font-family="Bebas Neue, sans-serif" font-size="17" fill="#222" letter-spacing="3">BRITISH COASTAL</text>
        <text x="100" y="86" text-anchor="middle" font-family="Bebas Neue, sans-serif" font-size="17" fill="#222" letter-spacing="3">MOLLUSCS</text>
        <text x="100" y="196" text-anchor="middle" font-family="Special Elite, monospace" font-size="8" fill="#444" letter-spacing="1">WITH 480 COLOUR FIGURES</text>
        <text x="100" y="220" text-anchor="middle" font-family="Oswald, sans-serif" font-size="11" fill="#222" letter-spacing="2">A. M. WALLIS</text>
        <g fill="#222">
          <circle cx="20" cy="12" r="1"/><circle cx="40" cy="14" r="1.1"/><circle cx="60" cy="12" r="0.9"/><circle cx="80" cy="15" r="1"/><circle cx="100" cy="12" r="1.1"/><circle cx="120" cy="14" r="0.9"/><circle cx="140" cy="12" r="1"/><circle cx="160" cy="15" r="1.1"/>
        </g>
      </svg>
      <p class="feature-cap">
        <span class="feature-author">A. M. WALLIS</span>
        <span class="feature-title">British Coastal Molluscs</span>
        <span class="feature-prices">
          <span class="was">38.00</span>
          <span class="now">9.50</span>
        </span>
      </p>
    </a>
  </li>
  <li class="feature-card">
    <a href="{{ base_url }}/stock/historical-atlas-of-sleepless-cities/">
      <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="10" y="10" width="180" height="240" fill="#4a3524" stroke="#222" stroke-width="1.5"/>
        <g transform="translate(100,130)">
          <circle r="50" fill="none" stroke="#e0b030" stroke-width="1.5"/>
          <circle r="40" fill="none" stroke="#e0b030" stroke-width="0.8"/>
          <g stroke="#e0b030" stroke-width="0.8" fill="none">
            <line x1="-50" y1="0" x2="50" y2="0"/>
            <line x1="0" y1="-50" x2="0" y2="50"/>
            <line x1="-36" y1="-36" x2="36" y2="36"/>
            <line x1="-36" y1="36" x2="36" y2="-36"/>
          </g>
          <circle r="4" fill="#c95c3b"/>
        </g>
        <text x="100" y="50" text-anchor="middle" font-family="Bebas Neue, sans-serif" font-size="16" fill="#e0b030" letter-spacing="2">HISTORICAL ATLAS</text>
        <text x="100" y="70" text-anchor="middle" font-family="Oswald, sans-serif" font-size="11" fill="#e0b030" letter-spacing="2">OF THE</text>
        <text x="100" y="92" text-anchor="middle" font-family="Bebas Neue, sans-serif" font-size="17" fill="#e0b030" letter-spacing="3">SLEEPLESS CITIES</text>
        <text x="100" y="224" text-anchor="middle" font-family="Oswald, sans-serif" font-size="10" fill="#e0b030" letter-spacing="2">J. HOLLINGHEAD</text>
        <g fill="#222">
          <circle cx="18" cy="14" r="1"/><circle cx="38" cy="12" r="1.1"/><circle cx="58" cy="14" r="0.9"/><circle cx="78" cy="12" r="1"/><circle cx="98" cy="14" r="1.1"/><circle cx="118" cy="12" r="0.9"/><circle cx="138" cy="14" r="1"/><circle cx="158" cy="12" r="1.1"/>
        </g>
      </svg>
      <p class="feature-cap">
        <span class="feature-author">J. HOLLINGHEAD</span>
        <span class="feature-title">Atlas of Sleepless Cities</span>
        <span class="feature-prices">
          <span class="was">52.00</span>
          <span class="now">12.00</span>
        </span>
      </p>
    </a>
  </li>
  <li class="feature-card">
    <a href="{{ base_url }}/stock/a-life-in-typewriter-repair/">
      <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="10" y="10" width="180" height="240" fill="#e0b030" stroke="#222" stroke-width="1.5"/>
        <rect x="24" y="90" width="152" height="80" fill="#222"/>
        <rect x="30" y="96" width="140" height="28" fill="#d8c98b"/>
        <g fill="#222">
          <rect x="38" y="130" width="14" height="14" rx="2"/>
          <rect x="56" y="130" width="14" height="14" rx="2"/>
          <rect x="74" y="130" width="14" height="14" rx="2"/>
          <rect x="92" y="130" width="14" height="14" rx="2"/>
          <rect x="110" y="130" width="14" height="14" rx="2"/>
          <rect x="128" y="130" width="14" height="14" rx="2"/>
          <rect x="146" y="130" width="14" height="14" rx="2"/>
          <rect x="38" y="148" width="14" height="14" rx="2"/>
          <rect x="56" y="148" width="14" height="14" rx="2"/>
          <rect x="74" y="148" width="14" height="14" rx="2"/>
          <rect x="92" y="148" width="14" height="14" rx="2"/>
          <rect x="110" y="148" width="14" height="14" rx="2"/>
          <rect x="128" y="148" width="14" height="14" rx="2"/>
          <rect x="146" y="148" width="14" height="14" rx="2"/>
        </g>
        <text x="100" y="54" text-anchor="middle" font-family="Special Elite, monospace" font-size="14" fill="#222" letter-spacing="2">A LIFE IN</text>
        <text x="100" y="76" text-anchor="middle" font-family="Special Elite, monospace" font-size="18" fill="#222" letter-spacing="3">TYPEWRITER REPAIR</text>
        <text x="100" y="214" text-anchor="middle" font-family="Special Elite, monospace" font-size="11" fill="#222" letter-spacing="2">H. VAN ECK</text>
        <g fill="#222">
          <circle cx="18" cy="14" r="1.1"/><circle cx="38" cy="12" r="0.9"/><circle cx="58" cy="14" r="1"/><circle cx="78" cy="12" r="1.2"/><circle cx="98" cy="14" r="0.9"/><circle cx="118" cy="12" r="1"/><circle cx="138" cy="14" r="1.1"/><circle cx="158" cy="12" r="0.9"/>
        </g>
      </svg>
      <p class="feature-cap">
        <span class="feature-author">H. VAN ECK</span>
        <span class="feature-title">A Life in Typewriter Repair</span>
        <span class="feature-prices">
          <span class="was">18.00</span>
          <span class="now">4.50</span>
        </span>
      </p>
    </a>
  </li>
</ul>

See the full [current stock list](/stock/) for every title in the bin this week.

## How the Bin Works

A remaindered book is a publisher's leftover stock: copies that did not sell, or did not sell fast enough, and that the publisher has disposed of at a fraction of the original trade price. Such copies are marked across the top edge with a stippled black spray to distinguish them from full-price stock - a mark which cannot be removed and which follows the book through every subsequent hand. That is the book you are buying.

Our stickers tell the full price history. The original list price is printed upon the publisher's jacket; we overlay a yellow sticker with our first-pass discount; and when the book has lingered, we peel the corner of that sticker up and apply a red sticker beneath with the further-reduced figure. Nothing is ever stickered twice over without the first being peeled - you can always see what the book was before it was what it is.
