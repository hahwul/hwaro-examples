+++
title = "Ruin Emperor"
description = "Warlord of the apocalypse. Command legions from the bones of the old world."
tags = ["admin", "dashboard", "dark", "bold"]
+++

<div class="min-h-screen text-[#d4b89e]">
  <div class="border-b border-white/10 bg-black/60 backdrop-blur sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between text-sm">
      <div class="flex items-center gap-3"><div class="text-3xl font-semibold tracking-[-1.5px] display">RUIN</div><div class="text-[#c28a5a] text-sm font-bold tracking-widest">EMPEROR</div></div>
      <div class="px-4 py-1 bg-[#3f2a1f] text-xs rounded text-[#c28a5a]">WASTELAND DOMINION</div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-8 pt-8">
    <div class="flex justify-between"><div><div class="text-[#c28a5a] text-xs tracking-[3px]">ASH &amp; BONE COMMAND</div><div class="text-7xl display tracking-[-4px] leading-none mt-1 text-white">FROM THE RUINS<br>WE RISE AS GODS.</div></div><button onclick="razeCity(this)" class="px-8 py-4 bg-[#c28a5a] text-black font-extrabold tracking-[2px] rounded text-sm">RAZE ANOTHER CITY</button></div>
    <div class="grid grid-cols-4 gap-4 mt-8">
      <div class="ruin-panel p-6 rounded-2xl"><div class="text-[#c28a5a] text-xs">SCRAP LEGIONS</div><div class="metric mt-1 text-white" data-count="47">47</div></div>
      <div class="ruin-panel p-6 rounded-2xl"><div class="text-[#c28a5a] text-xs">FUEL BARRELS SEIZED</div><div class="metric mt-1 text-white" data-count="8820">8820</div></div>
      <div class="ruin-panel p-6 rounded-2xl"><div class="text-[#c28a5a] text-xs">SURVIVORS ENSLAVED</div><div class="metric mt-1 text-orange-400" data-count="2140">2140</div></div>
      <div class="ruin-panel p-6 rounded-2xl"><div class="text-[#c28a5a] text-xs">WASTELAND CONTROL</div><div class="metric mt-1" data-count="91">91</div><div class="text-xs">%</div></div>
    </div>
    <div class="mt-4 grid grid-cols-12 gap-4">
      <div class="col-span-12 ruin-panel rounded-3xl p-7">
        <div class="text-[#c28a5a] text-xs mb-3">THE WAR COUNCIL — LAST KNOWN ORDERS</div>
        <div class="grid grid-cols-3 gap-3 text-sm">
          <div class="bg-black/40 p-4 rounded-2xl">GENERAL SCAB — "Burn the northern silos"</div>
          <div class="bg-black/40 p-4 rounded-2xl">BLOOD PRIESTESS — "More sacrifices for the Throne of Rust"</div>
          <div class="bg-black/40 p-4 rounded-2xl">THE HUNGER — "We feast at dawn"</div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>function razeCity(b){b.textContent='RAZING...';setTimeout(()=>{b.textContent='ANOTHER CITY TURNED TO ASH';setTimeout(()=>b.textContent='RAZE ANOTHER CITY',1500)},700)}</script>
