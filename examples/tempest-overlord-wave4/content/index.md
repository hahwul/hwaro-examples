+++
title = "Tempest Overlord"
description = "Ultimate chaos weather god. Hurricanes, tornadoes, and total atmospheric subjugation."
tags = ["admin", "dashboard", "dark", "bold", "cyberpunk"]
+++

<div class="min-h-screen text-[#bae6fd]">
  <div class="border-b border-white/10 bg-black/70 backdrop-blur sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3"><div class="text-3xl font-semibold tracking-[-1.5px] display">TEMPEST</div><div class="text-[#60a5fa] text-xs font-bold tracking-[4px]">OVERLORD</div></div>
      <div class="text-xs font-mono">ATMOSPHERE FULLY SUBJUGATED</div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-8 pt-8">
    <div class="flex justify-between"><div><div class="text-[#60a5fa] text-xs tracking-[3px]">TOTAL ATMOSPHERIC DOMINATION</div><div class="text-7xl display tracking-[-4px] leading-none mt-1 text-white">THE SKY<br>IS NOW PROPERTY.</div></div><button onclick="unleashTempest(this)" class="px-8 py-4 bg-[#60a5fa] text-black font-extrabold tracking-widest rounded text-sm">UNLEASH CATEGORY 7</button></div>
    <div class="grid grid-cols-4 gap-4 mt-8">
      <div class="tempest-panel p-6 rounded-2xl"><div class="text-[#60a5fa] text-xs">ACTIVE HURRICANES</div><div class="metric mt-1" data-count="41">41</div></div>
      <div class="tempest-panel p-6 rounded-2xl"><div class="text-[#60a5fa] text-xs">TORNADOES CONTROLLED</div><div class="metric mt-1" data-count="184">184</div></div>
      <div class="tempest-panel p-6 rounded-2xl"><div class="text-[#60a5fa] text-xs">CITIES IN CHAOS</div><div class="metric mt-1 text-red-400" data-count="219">219</div></div>
      <div class="tempest-panel p-6 rounded-2xl"><div class="text-[#60a5fa] text-xs">SKY OWNERSHIP</div><div class="metric mt-1" data-count="100">100</div><div class="text-xs">%</div></div>
    </div>
    <div class="mt-4 grid grid-cols-12 gap-4">
      <div class="col-span-12 tempest-panel rounded-3xl p-7">
        <div class="text-[#60a5fa] text-xs mb-3">CURRENT STORM CELLS — EYE OF THE TEMPEST</div>
        <div class="grid grid-cols-3 gap-3 text-sm">
          <div class="bg-black/40 p-4 rounded-2xl">Cell Omega-7 — "The winds sing my name"</div>
          <div class="bg-black/40 p-4 rounded-2xl">Cell Delta-9 — "Category 9 achieved"</div>
          <div class="bg-black/40 p-4 rounded-2xl text-red-400">Cell Zeta-12 — "UNLEASHED — NO CONTROL"</div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>function unleashTempest(b){b.textContent='UNLEASHING...';setTimeout(()=>{b.textContent='CATEGORY 7 UNLEASHED';setTimeout(()=>b.textContent='UNLEASH CATEGORY 7',1500)},650)}</script>
