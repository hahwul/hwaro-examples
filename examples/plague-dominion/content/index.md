+++
title = "Plague Dominion"
description = "Bio-weapon overlord control center. Contagion, decay, and perfect pandemic management."
tags = ["admin", "dashboard", "dark", "bold"]
+++

<div class="min-h-screen text-[#4ade80]">
  <div class="border-b border-white/10 bg-black/70 backdrop-blur sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3"><div class="text-3xl font-semibold tracking-[-1.5px] display">PLAGUE</div><div class="text-[#4ade80] text-xs font-bold tracking-[4px]">DOMINION</div></div>
      <div class="px-4 py-1 bg-[#052e16] text-xs rounded text-[#4ade80]">PERFECT CONTAGION</div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-8 pt-8">
    <div class="flex justify-between"><div><div class="text-[#4ade80] text-xs tracking-[3px]">BIO-WEAPON PERFECTION</div><div class="text-7xl display tracking-[-4px] leading-none mt-1 text-white">EVERYTHING<br>DECAYS BEAUTIFULLY.</div></div><button onclick="releaseStrain(this)" class="px-8 py-4 bg-[#4ade80] text-black font-extrabold tracking-widest rounded text-sm">RELEASE NEW STRAIN</button></div>

    <div class="grid grid-cols-4 gap-4 mt-8">
      <div class="plague-panel p-6 rounded-2xl"><div class="text-[#4ade80] text-xs">ACTIVE STRAINS</div><div class="metric mt-1" data-count="47">47</div></div>
      <div class="plague-panel p-6 rounded-2xl"><div class="text-[#4ade80] text-xs">INFECTED SOULS</div><div class="metric mt-1" data-count="18472910">18472910</div></div>
      <div class="plague-panel p-6 rounded-2xl"><div class="text-[#4ade80] text-xs">MORTALITY RATE</div><div class="metric mt-1 text-red-400" data-count="99.7">99.7</div><div class="text-xs">%</div></div>
      <div class="plague-panel p-6 rounded-2xl"><div class="text-[#4ade80] text-xs">BEAUTY INDEX</div><div class="metric mt-1" data-count="100">100</div></div>
    </div>

    <div class="mt-4 grid grid-cols-12 gap-4">
      <div class="col-span-12 plague-panel rounded-3xl p-7">
        <div class="text-[#4ade80] text-xs mb-3">CURRENT OUTBREAKS — PRIORITY DECAY ZONES</div>
        <div class="grid grid-cols-3 gap-3 text-sm">
          <div class="bg-black/40 p-4 rounded-2xl">Zone 7 — "The Rot is exquisite"</div>
          <div class="bg-black/40 p-4 rounded-2xl">Zone 12 — "Perfect necrosis achieved"</div>
          <div class="bg-black/40 p-4 rounded-2xl text-red-400">Zone 19 — "NEW MUTATION DETECTED"</div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>function releaseStrain(b){b.textContent='RELEASING...';setTimeout(()=>{b.textContent='NEW STRAIN UNLEASHED';setTimeout(()=>b.textContent='RELEASE NEW STRAIN',1500)},650)}</script>
