+++
title = "Dreadnought Core"
description = "Floating fortress battleship command. 400mm guns and iron discipline."
tags = ["admin", "dashboard", "dark", "bold"]
+++

<div class="min-h-screen text-[#cbd5e1]">
  <div class="border-b border-white/10 bg-black/70 backdrop-blur sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3"><div class="text-3xl font-semibold tracking-[-1.5px] display">DREADNOUGHT</div><div class="text-xs text-[#64748b] tracking-[3px] font-bold">CORE</div></div>
      <div class="text-xs font-mono">BATTLE GROUP 7 • ALL GUNS LOADED</div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-8 pt-8">
    <div class="flex justify-between"><div><div class="text-[#64748b] text-xs tracking-[3px]">IRON ADMIRALTY</div><div class="text-7xl display tracking-[-4px] leading-none mt-1 text-white">THE SEA<br>IS OURS.</div></div><button onclick="broadside(this)" class="px-8 py-4 border border-[#64748b] text-[#64748b] hover:bg-white/5 rounded text-sm tracking-widest">FIRE BROADSIDE</button></div>

    <div class="grid grid-cols-4 gap-4 mt-8">
      <div class="dread-panel p-6 rounded-2xl"><div class="text-[#64748b] text-xs">MAIN BATTERY</div><div class="metric mt-1 text-white" data-count="9">9</div><div class="text-xs">× 400mm</div></div>
      <div class="dread-panel p-6 rounded-2xl"><div class="text-[#64748b] text-xs">ENEMY HULLS SUNK</div><div class="metric mt-1" data-count="184">184</div></div>
      <div class="dread-panel p-6 rounded-2xl"><div class="text-[#64748b] text-xs">CREW DISCIPLINE</div><div class="metric mt-1" data-count="100">100</div><div class="text-xs">%</div></div>
      <div class="dread-panel p-6 rounded-2xl"><div class="text-[#64748b] text-xs">STEAM PRESSURE</div><div class="metric mt-1 text-red-400" data-count="1420">1420</div><div class="text-xs">psi</div></div>
    </div>

    <div class="mt-4 grid grid-cols-12 gap-4">
      <div class="col-span-12 dread-panel rounded-3xl p-7">
        <div class="text-[#64748b] text-xs mb-3">CURRENT ENGAGEMENT — GUNS 1-9 STATUS</div>
        <div class="grid grid-cols-9 gap-2 text-center text-xs">
          <div class="bg-black/50 py-2 rounded">GUN 1<br><span class="text-emerald-400">READY</span></div>
          <div class="bg-black/50 py-2 rounded">GUN 2<br><span class="text-emerald-400">READY</span></div>
          <div class="bg-black/50 py-2 rounded">GUN 3<br><span class="text-emerald-400">READY</span></div>
          <div class="bg-red-950 py-2 rounded text-red-400">GUN 4<br>JAMMED</div>
          <div class="bg-black/50 py-2 rounded">GUN 5<br><span class="text-emerald-400">READY</span></div>
          <div class="bg-black/50 py-2 rounded">GUN 6<br><span class="text-emerald-400">READY</span></div>
          <div class="bg-black/50 py-2 rounded">GUN 7<br><span class="text-emerald-400">READY</span></div>
          <div class="bg-black/50 py-2 rounded">GUN 8<br><span class="text-emerald-400">READY</span></div>
          <div class="bg-black/50 py-2 rounded">GUN 9<br><span class="text-emerald-400">READY</span></div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>function broadside(b){b.textContent='FIRING...';setTimeout(()=>{b.textContent='9 GUNS. ONE MESSAGE.';setTimeout(()=>b.textContent='FIRE BROADSIDE',1600)},650)}</script>
