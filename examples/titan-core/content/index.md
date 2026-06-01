+++
title = "Titan Core"
description = "Colossal ancient machine god. Bronze, iron, and thunderous authority."
tags = ["admin", "dashboard", "dark", "bold"]
+++

<div class="min-h-screen text-[#e7d9c3]">
  <div class="border-b border-white/10 bg-black/70 backdrop-blur sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3"><div class="text-3xl font-semibold tracking-[-1.5px] text-white display">TITAN</div><div class="text-[#d97706] text-xs font-black tracking-[4px]">CORE</div></div>
      <div class="text-xs font-mono text-[#d97706]">FORGE LEVEL 9 • HAMMER ACTIVE</div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-8 pt-8">
    <div class="flex justify-between items-end"><div><div class="text-[#d97706] text-xs tracking-[3px]">COLOSSAL MACHINE GOD</div><div class="text-7xl display tracking-[-4px] text-white">BOW BEFORE<br>THE IRON WILL.</div></div><button onclick="awakenTitan(this)" class="px-9 py-4 bg-[#d97706] text-black font-extrabold tracking-widest text-sm rounded-2xl">AWAKEN THE TITAN</button></div>

    <div class="grid grid-cols-4 gap-4 mt-8">
      <div class="titan-panel p-6 rounded-3xl"><div class="text-[#d97706] text-xs">TONS OF BRONZE</div><div class="metric mt-1" data-count="48200">48200</div></div>
      <div class="titan-panel p-6 rounded-3xl"><div class="text-[#d97706] text-xs">HAMMER STRIKES / MIN</div><div class="metric mt-1" data-count="144">144</div></div>
      <div class="titan-panel p-6 rounded-3xl"><div class="text-[#d97706] text-xs">MORTAL SERVANTS</div><div class="metric mt-1" data-count="9184">9184</div></div>
      <div class="titan-panel p-6 rounded-3xl"><div class="text-[#d97706] text-xs">THUNDER RESERVES</div><div class="metric mt-1 text-amber-400" data-count="99">99</div><div class="text-xs">%</div></div>
    </div>

    <div class="mt-4 grid grid-cols-12 gap-4">
      <div class="col-span-12 titan-panel rounded-3xl p-7">
        <div class="text-[#d97706] text-xs mb-3">THE GREAT FORGE — STATUS</div>
        <div class="grid grid-cols-4 gap-3 text-sm">
          <div class="bg-black/50 p-4 rounded-2xl">PRIMARY PISTON <span class="text-emerald-400 float-right">ONLINE</span></div>
          <div class="bg-black/50 p-4 rounded-2xl">SECONDARY ANVIL <span class="text-emerald-400 float-right">ONLINE</span></div>
          <div class="bg-black/50 p-4 rounded-2xl">THUNDER COIL <span class="text-amber-400 float-right">CRITICAL</span></div>
          <div class="bg-black/50 p-4 rounded-2xl">SOUL FURNACE <span class="text-emerald-400 float-right">ONLINE</span></div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>function awakenTitan(b){b.textContent='THE GROUND TREMBLES...';setTimeout(()=>{b.textContent='TITAN AWAKENED — ALL BOW';setTimeout(()=>b.textContent='AWAKEN THE TITAN',1600)},800)}</script>
