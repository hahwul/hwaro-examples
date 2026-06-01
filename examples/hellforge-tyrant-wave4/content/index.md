+++
title = "Hellforge Tyrant"
description = "Molten hellish forge command. Chains, lava, and absolute industrial tyranny."
tags = ["admin", "dashboard", "dark", "bold"]
+++

<div class="min-h-screen text-[#fecaca]">
  <div class="border-b border-white/10 bg-black/70 backdrop-blur sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3"><div class="text-3xl font-semibold tracking-[-1.5px] display">HELLFORGE</div><div class="text-[#f87171] text-xs font-bold tracking-[4px]">TYRANT</div></div>
      <div class="px-4 py-1 bg-[#3f1a0a] text-xs rounded text-[#f87171]">SOULS AS FUEL</div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-8 pt-8">
    <div class="flex justify-between"><div><div class="text-[#f87171] text-xs tracking-[3px]">MOLTEN INDUSTRIAL TYRANNY</div><div class="text-7xl display tracking-[-4px] leading-none mt-1 text-white">THE FIRES<br>NEVER SLEEP.</div></div><button onclick="feedTheForge(this)" class="px-8 py-4 bg-[#f87171] text-black font-extrabold tracking-widest rounded text-sm">FEED MORE SOULS</button></div>

    <div class="grid grid-cols-4 gap-4 mt-8">
      <div class="hell-panel p-6 rounded-2xl"><div class="text-[#f87171] text-xs">ACTIVE FORGES</div><div class="metric mt-1" data-count="18">18</div></div>
      <div class="hell-panel p-6 rounded-2xl"><div class="text-[#f87171] text-xs">SOULS INCINERATED</div><div class="metric mt-1" data-count="184729">184729</div></div>
      <div class="hell-panel p-6 rounded-2xl"><div class="text-[#f87171] text-xs">LAVA FLOW</div><div class="metric mt-1 text-orange-400" data-count="4200">4200</div><div class="text-xs">t/s</div></div>
      <div class="hell-panel p-6 rounded-2xl"><div class="text-[#f87171] text-xs">DAMNATION LEVEL</div><div class="metric mt-1" data-count="100">100</div><div class="text-xs">%</div></div>
    </div>

    <div class="mt-4 grid grid-cols-12 gap-4">
      <div class="col-span-12 hell-panel rounded-3xl p-7">
        <div class="text-[#f87171] text-xs mb-3">THE ETERNAL CHAIN GANG — CURRENT SHIFTS</div>
        <div class="grid grid-cols-3 gap-3 text-sm">
          <div class="bg-black/40 p-4 rounded-2xl">Shift 1 — "We burn for the Tyrant"</div>
          <div class="bg-black/40 p-4 rounded-2xl">Shift 2 — "More fuel. Always more."</div>
          <div class="bg-black/40 p-4 rounded-2xl text-red-400">Shift 3 — "THE FORGE HUNGERS"</div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>function feedTheForge(b){b.textContent='FEEDING THE FLAMES...';setTimeout(()=>{b.textContent='ANOTHER BATCH DAMNED';setTimeout(()=>b.textContent='FEED MORE SOULS',1500)},650)}</script>
