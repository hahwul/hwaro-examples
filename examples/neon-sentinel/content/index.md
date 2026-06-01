+++
title = "Neon Sentinel"
description = "Hyper-aggressive neon guardian AI. Watch. Detect. Neutralize. In electric color."
tags = ["admin", "dashboard", "dark", "bold", "cyberpunk"]
+++

<div class="min-h-screen text-[#c3f7e8]">
  <div class="border-b border-white/10 bg-black/70 backdrop-blur sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between text-sm">
      <div class="flex items-center gap-3"><div class="text-3xl font-semibold tracking-[-2px] text-white display">NEON</div><div class="text-[#22f5c2] font-black text-sm tracking-[5px] -mt-1">SENTINEL</div></div>
      <div class="flex gap-8 text-xs font-mono"><div>THREATS NEUTRALIZED <span class="text-[#22f5c2]">41,992</span></div><div class="text-emerald-400">ALL CLEAR</div></div>
      <div class="px-4 py-1 bg-[#00120f] border border-[#0a3a32] text-xs rounded">AI CORE v9.4 • HOSTILE</div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-8 pt-8">
    <div class="flex justify-between">
      <div><div class="text-[#22f5c2] text-xs tracking-[3px]">AUTOMATED DEFENSE GRID</div><div class="text-7xl display tracking-[-4.2px] text-white leading-none mt-1">NO ONE<br>ESCAPES THE GRID.</div></div>
      <button onclick="neutralizeAll(this)" class="self-end px-9 py-4 bg-[#22f5c2] text-black font-extrabold tracking-widest rounded-2xl text-sm active:scale-[0.985]">NEUTRALIZE ALL THREATS</button>
    </div>
    <div class="grid grid-cols-4 gap-4 mt-8 text-white">
      <div class="neon-panel p-6 rounded-3xl"><div class="text-[#22f5c2] text-xs">LIVE CAMERAS</div><div class="metric text-white mt-1" data-count="1284">1284</div></div>
      <div class="neon-panel p-6 rounded-3xl"><div class="text-[#22f5c2] text-xs">HOSTILES DETECTED</div><div class="metric text-red-400 mt-1" data-count="7">7</div></div>
      <div class="neon-panel p-6 rounded-3xl"><div class="text-[#22f5c2] text-xs">RESPONSE TIME</div><div class="flex items-baseline"><span class="metric text-white" data-count="0.04">0.04</span><span class="ml-1 text-xl text-[#22f5c2]">s</span></div></div>
      <div class="neon-panel p-6 rounded-3xl"><div class="text-[#22f5c2] text-xs">GRID COVERAGE</div><div class="metric text-emerald-400 mt-1" data-count="100">100</div><div class="text-xs">NO BLIND SPOTS</div></div>
    </div>
    <div class="grid grid-cols-12 gap-4 mt-4">
      <div class="col-span-5 neon-panel rounded-3xl p-8 flex flex-col items-center">
        <div class="section-label mb-4">THREAT RADAR • SECTOR 09</div>
        <div class="radar mt-2"><div class="absolute inset-0 flex items-center justify-center"><div class="w-3 h-3 bg-[#22f5c2] rounded-full"></div></div></div>
        <div class="text-[10px] text-[#22f5c2] mt-6 font-mono">SCANNING... 14,200 TARGETS PROCESSED</div>
      </div>
      <div class="col-span-7 neon-panel rounded-3xl p-7">
        <div class="section-label">ACTIVE THREATS • PRIORITY</div>
        <div class="mt-4 space-y-2 text-sm">
          <div class="flex justify-between bg-black/60 px-5 py-3 rounded-2xl"><div><span class="text-red-400">INTRUDER-7</span> • ROOF ACCESS</div><button onclick="this.closest('.flex').remove()" class="text-xs border border-red-900 px-3 py-px text-red-400">TERMINATE</button></div>
          <div class="flex justify-between bg-black/60 px-5 py-3 rounded-2xl"><div><span class="text-red-400">GHOST-2</span> • DATA VAULT</div><button onclick="this.closest('.flex').remove()" class="text-xs border border-red-900 px-3 py-px text-red-400">TERMINATE</button></div>
        </div>
      </div>
      <div class="col-span-12 neon-panel p-6 rounded-3xl text-xs flex justify-between items-center font-mono text-[#5fc9a8]">
        <div>SENTINEL PROTOCOL: "IF IT MOVES AND IS NOT US, IT DIES."</div>
        <button onclick="this.textContent='PROTOCOL REAFFIRMED'" class="border border-[#0a3a32] px-6 py-2 rounded-2xl">REAFFIRM PROTOCOL</button>
      </div>
    </div>
  </div>
</div>

<script>function neutralizeAll(b){b.textContent='NEUTRALIZING...';setTimeout(()=>{b.textContent='ALL THREATS ERASED';setTimeout(()=>b.textContent='NEUTRALIZE ALL THREATS',1600)},650)}</script>
