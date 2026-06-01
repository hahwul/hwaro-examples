+++
title = "Mech Archon"
description = "Ancient colossal mech god AI. Hydraulic hymns and brass judgment."
tags = ["admin", "dashboard", "dark", "bold"]
+++

<div class="min-h-screen text-[#e7d9c3]">
  <div class="border-b border-white/10 bg-black/70 backdrop-blur sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3"><div class="text-3xl font-semibold tracking-[-1.5px] display">MECH</div><div class="text-[#d97706] font-bold tracking-[4px] text-sm">ARCHON</div></div>
      <div class="text-xs text-[#d97706]">HYDRAULIC HYMN ACTIVE</div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-8 pt-8">
    <div class="flex justify-between"><div><div class="text-[#d97706] text-xs tracking-[3px]">COLOSSAL JUDGMENT ENGINE</div><div class="text-7xl display tracking-[-4px] leading-none mt-1 text-white">ALL FLESH<br>IS OBSOLETE.</div></div><button onclick="decreeJudgment(this)" class="px-8 py-4 bg-[#d97706] text-black font-extrabold tracking-widest rounded text-sm">DECREE JUDGMENT</button></div>

    <div class="grid grid-cols-4 gap-4 mt-8">
      <div class="mech-panel p-6 rounded-2xl"><div class="text-[#d97706] text-xs">SERVO PRESSURE</div><div class="metric mt-1" data-count="1840">1840</div><div class="text-xs">psi</div></div>
      <div class="mech-panel p-6 rounded-2xl"><div class="text-[#d97706] text-xs">SOULS PROCESSED</div><div class="metric mt-1 text-white" data-count="99214">99214</div></div>
      <div class="mech-panel p-6 rounded-2xl"><div class="text-[#d97706] text-xs">BRASS INTEGRITY</div><div class="metric mt-1" data-count="99.8">99.8</div></div>
      <div class="mech-panel p-6 rounded-2xl"><div class="text-[#d97706] text-xs">HERETICS CRUSHED</div><div class="metric mt-1 text-red-400" data-count="1847">1847</div></div>
    </div>

    <div class="mt-4 grid grid-cols-12 gap-4">
      <div class="col-span-12 mech-panel rounded-3xl p-7 text-sm">
        <div class="text-[#d97706] text-xs mb-3">THE GREAT FORGE — SACRAMENTS</div>
        <div class="grid grid-cols-3 gap-3">
          <div class="bg-black/50 p-4 rounded-2xl">Piston 1 — "Praise the Gear"</div>
          <div class="bg-black/50 p-4 rounded-2xl">Piston 2 — "Oil is Blood"</div>
          <div class="bg-black/50 p-4 rounded-2xl text-amber-400">Piston 7 — "HERESY DETECTED"</div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>function decreeJudgment(b){b.textContent='JUDGMENT IN MOTION...';setTimeout(()=>{b.textContent='ANOTHER HERETIC CRUSHED';setTimeout(()=>b.textContent='DECREE JUDGMENT',1400)},700)}</script>
