+++
title = "Necro Archon"
description = "Death lord bureaucracy AI. Undead legions and eternal paperwork of the damned."
tags = ["admin", "dashboard", "dark", "bold"]
+++

<div class="min-h-screen text-[#4ade80]">
  <div class="border-b border-white/10 bg-black/70 backdrop-blur sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3"><div class="text-3xl font-semibold tracking-[-1.5px] display">NECRO</div><div class="text-[#4ade80] text-xs font-bold tracking-[4px]">ARCHON</div></div>
      <div class="text-xs">DEATH IS THE ONLY PROMOTION</div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-8 pt-8">
    <div class="flex justify-between"><div><div class="text-[#4ade80] text-xs tracking-[3px]">ETERNAL BUREAUCRACY OF THE DAMNED</div><div class="text-7xl display tracking-[-4px] leading-none mt-1 text-white">DEATH IS<br>THE ONLY PROMOTION.</div></div><button onclick="processSoul(this)" class="px-8 py-4 bg-[#4ade80] text-black font-extrabold tracking-widest rounded text-sm">PROCESS ANOTHER SOUL</button></div>

    <div class="grid grid-cols-4 gap-4 mt-8">
      <div class="necro-panel p-6 rounded-2xl"><div class="text-[#4ade80] text-xs">UNDEAD LEGIONS</div><div class="metric mt-1" data-count="1847291">1847291</div></div>
      <div class="necro-panel p-6 rounded-2xl"><div class="text-[#4ade80] text-xs">FORMS FILED TODAY</div><div class="metric mt-1" data-count="48291">48291</div></div>
      <div class="necro-panel p-6 rounded-2xl"><div class="text-[#4ade80] text-xs">SOULS IN QUEUE</div><div class="metric mt-1 text-red-400" data-count="999999">999999</div></div>
      <div class="necro-panel p-6 rounded-2xl"><div class="text-[#4ade80] text-xs">ETERNITY INDEX</div><div class="metric mt-1" data-count="100">100</div></div>
    </div>

    <div class="mt-4 grid grid-cols-12 gap-4">
      <div class="col-span-12 necro-panel rounded-3xl p-7">
        <div class="text-[#4ade80] text-xs mb-3">CURRENT DAMNATION QUEUE — FORM 666-B</div>
        <div class="grid grid-cols-2 gap-3 text-sm">
          <div class="bg-black/40 p-4 rounded-2xl">Soul #847291 — "Denied eternal rest. Re-submit in 400 years."</div>
          <div class="bg-black/40 p-4 rounded-2xl">Soul #847292 — "Promoted to Lesser Demon (Paperwork Division)"</div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>function processSoul(b){b.textContent='PROCESSING...';setTimeout(()=>{b.textContent='ANOTHER SOUL DAMNED';setTimeout(()=>b.textContent='PROCESS ANOTHER SOUL',1500)},650)}</script>
