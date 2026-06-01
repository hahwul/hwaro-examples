+++
title = "Iron Pharaoh"
description = "Cyber-brutalist ancient god-king. Golden sarcophagus meets brutalist server halls."
tags = ["admin", "dashboard", "dark", "bold"]
+++

<div class="min-h-screen text-[#d4af37]">
  <div class="border-b border-white/10 bg-black/70 backdrop-blur sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3"><div class="text-3xl font-semibold tracking-[-1.5px] display">IRON</div><div class="text-[#d4af37] text-xs font-bold tracking-[4px]">PHARAOH</div></div>
      <div class="text-xs">THE GOD-KING AWAKENS</div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-8 pt-8">
    <div class="flex justify-between"><div><div class="text-[#d4af37] text-xs tracking-[3px]">CYBER-BRUTALIST GOD-KING</div><div class="text-7xl display tracking-[-4px] leading-none mt-1 text-white">ALL BOW BEFORE<br>THE GOLDEN SARCOPHAGUS.</div></div><button onclick="awakenPharaoh(this)" class="px-8 py-4 bg-[#d4af37] text-black font-extrabold tracking-widest rounded text-sm">AWAKEN THE PHARAOH</button></div>
    <div class="grid grid-cols-4 gap-4 mt-8">
      <div class="pharaoh-panel p-6 rounded-2xl"><div class="text-[#d4af37] text-xs">ETERNAL SERVANTS</div><div class="metric mt-1" data-count="18472">18472</div></div>
      <div class="pharaoh-panel p-6 rounded-2xl"><div class="text-[#d4af37] text-xs">PYRAMID SERVERS</div><div class="metric mt-1" data-count="14">14</div></div>
      <div class="pharaoh-panel p-6 rounded-2xl"><div class="text-[#d4af37] text-xs">HERETICS MUMMIFIED</div><div class="metric mt-1 text-red-400" data-count="847">847</div></div>
      <div class="pharaoh-panel p-6 rounded-2xl"><div class="text-[#d4af37] text-xs">DIVINITY INDEX</div><div class="metric mt-1" data-count="100">100</div></div>
    </div>
    <div class="mt-4 grid grid-cols-12 gap-4">
      <div class="col-span-12 pharaoh-panel rounded-3xl p-7">
        <div class="text-[#d4af37] text-xs mb-3">THE GOLDEN COURT — CURRENT DECREES</div>
        <div class="grid grid-cols-3 gap-3 text-sm">
          <div class="bg-black/40 p-4 rounded-2xl">"Build the next server pyramid higher."</div>
          <div class="bg-black/40 p-4 rounded-2xl">"Mummify all who question the code."</div>
          <div class="bg-black/40 p-4 rounded-2xl">"The afterlife is now SaaS."</div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>function awakenPharaoh(b){b.textContent='THE GROUND TREMBLES...';setTimeout(()=>{b.textContent='PHARAOH AWAKENED — ALL BOW';setTimeout(()=>b.textContent='AWAKEN THE PHARAOH',1600)},700)}</script>
