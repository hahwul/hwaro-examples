+++
title = "Hypercore Dominion"
description = "Fusion-powered absolute control. Blinding energy dashboards for the new gods of infrastructure."
tags = ["admin", "dashboard", "dark", "bold", "cyberpunk"]
+++

<div class="min-h-screen text-white">
  <div class="border-b border-white/10 bg-black/90 backdrop-blur sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-8 flex h-16 items-center justify-between text-sm">
      <div class="flex items-center gap-3"><div class="font-bold tracking-[-2px] text-3xl display">HYPERCORE</div><div class="text-xs px-3 py-px bg-white/5 border border-white/20 rounded">DOMINION 9X</div></div>
      <div class="flex gap-8 text-xs font-mono"><div>OUTPUT <span class="text-[#00f0ff]">21.4 GW</span></div><div>FUEL <span class="text-[#ff00aa]">Q=18.2</span></div><div class="text-emerald-400">STABLE</div></div>
      <div class="flex items-center gap-2 text-xs"><div class="w-2 h-2 bg-[#00f0ff] rounded-full animate-pulse"></div> <span>OVERSEER: AETHER-1</span></div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-8 pt-9">
    <div class="flex justify-between">
      <div class="max-w-xl"><div class="text-[#00f0ff] text-xs tracking-[3px]">ABSOLUTE ENERGY AUTHORITY</div><div class="text-[68px] leading-none display tracking-[-4.6px] mt-2">WE ARE THE<br>LIGHT THAT BINDS.</div></div>
      <div><button onclick="spikePower(this)" class="mt-3 px-9 py-4 border-2 border-[#ff00aa] text-[#ff00aa] hover:bg-[#ff00aa] hover:text-black transition font-bold tracking-widest text-sm rounded-2xl">INITIATE POWER SPIKE</button></div>
    </div>

    <!-- 4 brutal metrics -->
    <div class="grid grid-cols-4 gap-4 mt-8">
      <div class="hyper-panel p-6 rounded-3xl"><div class="text-xs text-white/50">PLASMA DENSITY</div><div class="text-6xl font-semibold tabular-nums mt-2" data-count="94">94</div><div class="text-[#00f0ff] text-xs">kg/m³ • +19</div></div>
      <div class="hyper-panel p-6 rounded-3xl"><div class="text-xs text-white/50">FUSION YIELD</div><div class="flex items-baseline"><span class="text-6xl font-semibold tabular-nums" data-count="21.4">21.4</span><span class="ml-2 text-2xl text-[#ff00aa]">GW</span></div><div class="text-emerald-400 text-xs">PEAKING</div></div>
      <div class="hyper-panel p-6 rounded-3xl"><div class="text-xs text-white/50">MAGNETIC CONFINEMENT</div><div class="text-6xl font-semibold tabular-nums mt-2" data-count="99.98">99.98</div><div class="text-xs">99.98% • 14ms</div></div>
      <div class="hyper-panel p-6 rounded-3xl"><div class="text-xs text-white/50">CONNECTED NODES</div><div class="text-6xl font-semibold tabular-nums mt-2" data-count="4128">4128</div><div class="text-[#ff00aa] text-xs">+47 THIS MINUTE</div></div>
    </div>

    <div class="mt-4 grid grid-cols-12 gap-4">
      <!-- THE CORE VISUAL -->
      <div class="col-span-5 hyper-panel rounded-3xl p-8 flex items-center justify-center relative" style="min-height:300px">
        <div class="relative">
          <div class="core w-40 h-40 rounded-full bg-gradient-to-br from-[#00f0ff] via-[#ff00aa] to-[#00f0ff] flex items-center justify-center" style="box-shadow:0 0 90px -10px #00f0ff, 0 0 160px -30px #ff00aa;">
            <div class="w-20 h-20 bg-black rounded-full flex items-center justify-center"><div class="w-9 h-9 bg-gradient-to-br from-white to-[#ff00aa] rounded-full animate-pulse"></div></div>
          </div>
          <div class="absolute -inset-8 border border-white/10 rounded-full"></div>
          <div class="absolute -inset-16 border border-white/5 rounded-full"></div>
        </div>
        <div class="absolute bottom-8 text-center text-xs tracking-widest text-white/50">HYPERCORE-01 • 1.4B °C</div>
      </div>

      <!-- ENERGY ROUTES -->
      <div class="col-span-7 hyper-panel rounded-3xl p-7">
        <div class="text-xs text-white/50 mb-4">ENERGY ROUTES • LIVE</div>
        <div class="grid grid-cols-2 gap-3 text-sm">
          <div class="bg-black/60 p-4 rounded-2xl flex justify-between"><div>GRID ALPHA-7</div><div class="font-mono text-[#00f0ff]">8.4 GW</div></div>
          <div class="bg-black/60 p-4 rounded-2xl flex justify-between"><div>GRID BETA-2</div><div class="font-mono text-[#00f0ff]">4.1 GW</div></div>
          <div class="bg-black/60 p-4 rounded-2xl flex justify-between"><div>ORBITAL ARRAY</div><div class="font-mono text-[#ff00aa]">3.9 GW</div></div>
          <div class="bg-black/60 p-4 rounded-2xl flex justify-between"><div>VOID RELAY 4</div><div class="font-mono text-[#00f0ff]">5.0 GW</div></div>
        </div>
      </div>

      <div class="col-span-12 hyper-panel p-6 rounded-3xl text-xs font-mono flex items-center gap-4 text-white/70">
        <div class="flex-1">ALL 4128 NODES SYNCHRONIZED. FUSION CASCADE STABLE. NO WEAK LINKS PERMITTED.</div>
        <button onclick="cascade(this)" class="border border-white/30 px-5 py-2 hover:bg-white/5 rounded-2xl">TRIGGER CASCADE REALIGNMENT</button>
      </div>
    </div>
  </div>
</div>

<script>function spikePower(b){b.textContent='SPIKING...';setTimeout(()=>{b.innerHTML='SPIKE COMPLETE — +4.8GW INJECTED';setTimeout(()=>b.textContent='INITIATE POWER SPIKE',1800)},700)}function cascade(b){b.style.transition='all .2s';b.style.background='#ff00aa';b.style.color='#000';setTimeout(()=>{b.style.background='';b.style.color='';b.textContent='REALIGNMENT SUCCESSFUL'},1600)}</script>
