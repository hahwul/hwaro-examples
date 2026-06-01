+++
title = "Eclipse Command"
description = "Total eclipse strategic operations. When the sun dies, we command the darkness."
tags = ["admin", "dashboard", "dark", "bold"]
+++

<div class="min-h-screen text-[#f1e7d0]">
  <div class="border-b border-white/10 bg-black/70 backdrop-blur sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3"><div class="text-3xl font-semibold tracking-[-2px] text-white display">ECLIPSE</div><div class="text-xs text-[#fbbf24] tracking-[4px] font-bold">COMMAND</div></div>
      <div class="px-4 py-1 bg-[#3f2a1f] text-xs rounded text-[#fbbf24]">SOLAR DEATH PROTOCOL ACTIVE</div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-8 pt-8">
    <div class="flex justify-between"><div><div class="text-[#fbbf24] text-xs tracking-[3px]">TOTAL DARKNESS OPS</div><div class="text-7xl display tracking-[-4px] text-white">THE SUN IS DEAD.<br>LONG LIVE THE DARK.</div></div><button onclick="initiateEclipse(this)" class="px-8 py-4 bg-[#fbbf24] text-black font-bold tracking-[2px] rounded-2xl text-sm">INITIATE TOTAL ECLIPSE</button></div>

    <div class="grid grid-cols-4 gap-4 mt-8">
      <div class="eclipse-panel p-6 rounded-3xl"><div class="text-[#fbbf24] text-xs">DARKNESS COVERAGE</div><div class="metric mt-1" data-count="100">100</div><div class="text-xs text-white/60">THE SKY BELONGS TO US</div></div>
      <div class="eclipse-panel p-6 rounded-3xl"><div class="text-[#fbbf24] text-xs">SUNLIGHT REMAINING</div><div class="metric mt-1 text-red-400" data-count="0">0</div></div>
      <div class="eclipse-panel p-6 rounded-3xl"><div class="text-[#fbbf24] text-xs">LUNAR ASSETS</div><div class="metric mt-1" data-count="14">14</div></div>
      <div class="eclipse-panel p-6 rounded-3xl"><div class="text-[#fbbf24] text-xs">CIVILIZATIONS IN SHADOW</div><div class="metric mt-1" data-count="219">219</div></div>
    </div>

    <div class="mt-4 grid grid-cols-12 gap-4">
      <div class="col-span-12 eclipse-panel rounded-3xl p-7">
        <div class="text-[#fbbf24] text-xs mb-3">CELESTIAL STRIKE TEAMS</div>
        <div class="flex gap-3 text-sm">
          <div class="flex-1 bg-black/40 p-4 rounded-2xl">MOON DIVISION — READY</div>
          <div class="flex-1 bg-black/40 p-4 rounded-2xl">SHADOW FLEET — 100%</div>
          <div class="flex-1 bg-black/40 p-4 rounded-2xl text-red-400">SUN EATER — DEPLOYED</div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>function initiateEclipse(b){b.textContent='ECLIPSE IN PROGRESS...';setTimeout(()=>{b.textContent='TOTAL DARKNESS ACHIEVED';setTimeout(()=>b.textContent='INITIATE TOTAL ECLIPSE',1600)},700)}</script>
