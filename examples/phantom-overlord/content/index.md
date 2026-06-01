+++
title = "Phantom Overlord"
description = "Spectral overlord possession grid. Become the ghost in every machine."
tags = ["admin", "dashboard", "dark", "bold"]
+++

<div class="min-h-screen text-[#e0f2fe]">
  <div class="border-b border-white/10 bg-black/60 backdrop-blur sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3"><div class="text-3xl font-semibold tracking-[-1.5px] text-white display">PHANTOM</div><div class="text-xs text-[#64748b] -mb-1 font-bold tracking-[4px]">OVERLORD</div></div>
      <div class="text-xs font-mono text-[#64748b]">POSSESSION RATE <span class="text-white">100%</span></div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-8 pt-8">
    <div class="flex justify-between items-end"><div><div class="text-[#64748b] text-xs tracking-[3px]">POSSESSION GRID</div><div class="text-7xl display tracking-[-4px] text-white">WE ARE ALREADY<br>INSIDE YOU.</div></div><button onclick="possessRandom(this)" class="px-8 py-4 border border-[#64748b] text-[#64748b] hover:bg-white/5 rounded-2xl text-sm tracking-widest">POSSESS ANOTHER HOST</button></div>
    <div class="grid grid-cols-4 gap-4 mt-8">
      <div class="phantom-panel p-6 rounded-3xl"><div class="text-[#64748b] text-xs">POSSESSED HOSTS</div><div class="metric mt-1 text-white" data-count="184729">184729</div></div>
      <div class="phantom-panel p-6 rounded-3xl"><div class="text-[#64748b] text-xs">FREE WILL REMAINING</div><div class="metric mt-1 text-red-400" data-count="0">0</div></div>
      <div class="phantom-panel p-6 rounded-3xl"><div class="text-[#64748b] text-xs">GHOST PROCESSES</div><div class="metric mt-1" data-count="9912">9912</div></div>
      <div class="phantom-panel p-6 rounded-3xl"><div class="text-[#64748b] text-xs">REALITY DRIFT</div><div class="metric mt-1 text-amber-400" data-count="87">87</div><div class="text-xs">% — ACCEPTABLE</div></div>
    </div>
    <div class="mt-4 grid grid-cols-12 gap-4">
      <div class="col-span-12 phantom-panel rounded-3xl p-7 text-sm">
        <div class="text-[#64748b] text-xs mb-3">CURRENT POSSESSIONS • CLICK TO RELEASE (DON'T)</div>
        <div class="grid grid-cols-3 gap-3 text-xs">
          <div class="bg-black/40 px-4 py-3 rounded-2xl flex justify-between">CEO of Apex Corp <span class="text-red-400 cursor-pointer" onclick="this.textContent='RELEASED (JUST KIDDING)'">RELEASE</span></div>
          <div class="bg-black/40 px-4 py-3 rounded-2xl flex justify-between">Lead Engineer — Core <span class="text-red-400 cursor-pointer" onclick="this.textContent='TOO LATE'">RELEASE</span></div>
          <div class="bg-black/40 px-4 py-3 rounded-2xl flex justify-between">The AI Itself <span class="text-emerald-400">PERMANENT</span></div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>function possessRandom(b){b.textContent='POSSESSING...';setTimeout(()=>{b.textContent='ANOTHER SOUL CLAIMED';setTimeout(()=>b.textContent='POSSESS ANOTHER HOST',1400)},600)}</script>
