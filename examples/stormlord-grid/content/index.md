+++
title = "Stormlord Grid"
description = "Sky tyrant. Lightning, thunder, and total atmospheric domination."
tags = ["admin", "dashboard", "dark", "bold", "cyberpunk"]
+++

<div class="min-h-screen text-[#bae6fd]">
  <div class="border-b border-white/10 bg-black/70 backdrop-blur sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3"><div class="text-3xl font-semibold tracking-[-1.5px] display">STORMLORD</div><div class="text-xs text-[#60a5fa] tracking-[3px] font-bold">GRID</div></div>
      <div class="text-xs font-mono text-[#60a5fa]">ATMOSPHERIC DOMINION • 100%</div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-8 pt-8">
    <div class="flex justify-between"><div><div class="text-[#60a5fa] text-xs tracking-[3px]">CELESTIAL TYRANNY</div><div class="text-7xl display tracking-[-4px] leading-none mt-1 text-white">THE SKY<br>BOWS TO NO ONE.</div></div><button onclick="callLightning(this)" class="px-8 py-4 bg-[#38bdf8] text-black font-extrabold tracking-widest rounded text-sm">CALL LIGHTNING STRIKE</button></div>

    <div class="grid grid-cols-4 gap-4 mt-8">
      <div class="storm-panel p-6 rounded-2xl"><div class="text-[#60a5fa] text-xs">ACTIVE STORMS</div><div class="metric mt-1 text-white" data-count="41">41</div></div>
      <div class="storm-panel p-6 rounded-2xl"><div class="text-[#60a5fa] text-xs">LIGHTNING YIELD</div><div class="metric mt-1" data-count="2.8">2.8</div><div class="text-xs">TW</div></div>
      <div class="storm-panel p-6 rounded-2xl"><div class="text-[#60a5fa] text-xs">CITIES UNDER CLOUD</div><div class="metric mt-1 text-amber-400" data-count="219">219</div></div>
      <div class="storm-panel p-6 rounded-2xl"><div class="text-[#60a5fa] text-xs">PRESSURE ANOMALY</div><div class="metric mt-1 text-red-400" data-count="-980">−980</div><div class="text-xs">hPa</div></div>
    </div>

    <div class="mt-4 grid grid-cols-12 gap-4">
      <div class="col-span-12 storm-panel rounded-3xl p-7">
        <div class="text-[#60a5fa] text-xs mb-3">CURRENT CELL STATUS — EYE OF THE STORM</div>
        <div class="grid grid-cols-4 gap-3 text-sm">
          <div class="bg-black/40 p-4 rounded-2xl">CELL A1 — <span class="text-red-400">CATEGORY 6</span></div>
          <div class="bg-black/40 p-4 rounded-2xl">CELL B7 — <span class="text-amber-400">SUPERCELL</span></div>
          <div class="bg-black/40 p-4 rounded-2xl">CELL C3 — <span class="text-emerald-400">CONTROLLED</span></div>
          <div class="bg-black/40 p-4 rounded-2xl">CELL D9 — <span class="text-red-400">CATEGORY 7</span></div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>function callLightning(b){b.textContent='STRIKING...';setTimeout(()=>{b.textContent='TARGET VAPORIZED';setTimeout(()=>b.textContent='CALL LIGHTNING STRIKE',1500)},650)}</script>
