+++
title = "Blackout Reign"
description = "Emergency surveillance command after total blackout. Red emergency dashboards. Watch everything. Trust nothing."
tags = ["admin", "dashboard", "dark", "bold", "retro"]
+++

<div class="min-h-screen font-mono text-sm">
  <!-- TOP EMERGENCY BAR -->
  <div class="bg-[#cc0000] text-black py-2 px-8 flex items-center justify-between text-xs font-bold tracking-widest">
    <div>⚠️ TOTAL BLACKOUT PROTOCOL ACTIVE — 18:47:02 SINCE INCIDENT</div>
    <div class="flex gap-6"><div>SECTOR 7-DELTA</div><div>THREAT LEVEL: <span class="font-black">OMEGA</span></div></div>
  </div>

  <div class="max-w-7xl mx-auto px-8 pt-7">
    <div class="flex justify-between items-start">
      <div>
        <div class="text-red-600 text-xs">EMERGENCY SURVEILLANCE GRID</div>
        <div class="text-6xl font-semibold tracking-[-2.5px] leading-none text-white mt-1">BLACKOUT<br>REIGN</div>
      </div>
      <div class="text-right">
        <button onclick="glitchAll(this)" class="border border-red-800 hover:bg-red-950 px-5 py-2 text-xs text-red-400">FORCE GLITCH / RECALIBRATE</button>
        <div class="text-[10px] text-red-900 mt-1">ALL FEEDS ARE LIVE • NO DELETIONS</div>
      </div>
    </div>

    <!-- BIG STAT ROW -->
    <div class="grid grid-cols-5 gap-4 mt-8 text-white">
      <div class="bg-zinc-900 border border-zinc-800 p-5 rounded"><div class="text-red-600 text-xs">CAMERAS ONLINE</div><div class="text-5xl font-semibold tabular-nums mt-1" data-count="187">187</div></div>
      <div class="bg-zinc-900 border border-zinc-800 p-5 rounded"><div class="text-red-600 text-xs">UNAUTHORIZED MOVEMENT</div><div class="text-5xl font-semibold tabular-nums mt-1 text-amber-400" data-count="14">14</div></div>
      <div class="bg-zinc-900 border border-zinc-800 p-5 rounded"><div class="text-red-600 text-xs">DOORS BREACHED</div><div class="text-5xl font-semibold tabular-nums mt-1 text-red-500" data-count="3">3</div></div>
      <div class="bg-zinc-900 border border-zinc-800 p-5 rounded"><div class="text-red-600 text-xs">PERSONNEL UNACCOUNTED</div><div class="text-5xl font-semibold tabular-nums mt-1" data-count="29">29</div></div>
      <div class="bg-zinc-900 border border-zinc-800 p-5 rounded flex flex-col"><div class="text-red-600 text-xs">POWER RESERVES</div><div class="flex-1 flex items-end"><span class="text-5xl font-semibold tabular-nums">11</span><span class="text-xl text-red-600 pb-1">%</span></div></div>
    </div>

    <!-- CCTV GRID -->
    <div class="mt-5 grid grid-cols-3 gap-4">
      <div class="bg-black border border-zinc-800 rounded overflow-hidden relative scanline">
        <div class="bg-zinc-950 px-3 py-1 text-[10px] flex justify-between text-red-600"><span>CAM-07 • ROOF</span><span class="live-cam text-emerald-500">● LIVE</span></div>
        <div class="aspect-video bg-[repeating-linear-gradient(0deg,#111_0,#111_2px,#1a1a1a_3px,#1a1a1a_4px)] flex items-center justify-center text-[10px] text-red-900">FEED 07 — NO MOTION DETECTED</div>
      </div>
      <div class="bg-black border border-zinc-800 rounded overflow-hidden relative scanline">
        <div class="bg-zinc-950 px-3 py-1 text-[10px] flex justify-between text-red-600"><span>CAM-12 • CORRIDOR B</span><span class="live-cam text-emerald-500">● LIVE</span></div>
        <div class="aspect-video bg-[repeating-linear-gradient(0deg,#111_0,#111_2px,#1a1a1a_3px,#1a1a1a_4px)] flex items-center justify-center"><span class="text-amber-500 text-xs glitch">⚠️ 2 FIGURES — 41s AGO</span></div>
      </div>
      <div class="bg-black border border-zinc-800 rounded overflow-hidden relative scanline">
        <div class="bg-zinc-950 px-3 py-1 text-[10px] flex justify-between text-red-600"><span>CAM-19 • SERVER VAULT</span><span class="live-cam text-emerald-500">● LIVE</span></div>
        <div class="aspect-video bg-[repeating-linear-gradient(0deg,#111_0,#111_2px,#1a1a1a_3px,#1a1a1a_4px)] flex items-center justify-center text-red-900 text-xs">DOOR FORCED • 2:11 AGO</div>
      </div>
    </div>

    <div class="mt-4 bg-zinc-950 border border-zinc-800 p-5 text-xs flex gap-8 items-center">
      <div class="flex-1">LAST BROADCAST: <span class="text-red-500">"IF YOU ARE SEEING THIS, WE HAVE ALREADY LOST THE LIGHTS."</span></div>
      <button onclick="this.textContent='TRANSMITTING...';setTimeout(()=>location.reload(),900)" class="border border-red-900 px-5 py-2 text-red-400 hover:bg-red-950">BROADCAST LAST KNOWN STATUS</button>
    </div>
  </div>
</div>

<script>function glitchAll(b){document.body.style.transition='filter .05s';document.body.style.filter='grayscale(1) contrast(1.6)';setTimeout(()=>{document.body.style.filter='';b.textContent='GLITCHED — FEEDS STABILIZED'},180)}</script>
