+++
title = "Abyss Throne"
description = "Deep pressure command center. Bioluminescent ops in the crushing dark."
tags = ["admin", "dashboard", "dark", "bold"]
+++

<div class="min-h-screen pb-16">
  <div class="border-b border-[#002a3d] bg-black/50 backdrop-blur sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div class="flex items-center"><div class="w-8 h-8 rounded-full bg-[#00e5ff] flex items-center justify-center text-[#01060f]"><svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M5 12h14" stroke="#01060f" stroke-width="2"/></svg></div><span class="ml-3 font-semibold tracking-[-1px] text-3xl display">ABYSS</span></div>
        <div class="text-[10px] px-3 py-1 border border-[#003a55] rounded text-[#00e5ff]">THRONE PROTOCOL 7</div>
      </div>
      <div class="flex items-center gap-8 text-xs font-mono">
        <div>DEPTH: <span class="text-[#00e5ff]">11,034m</span></div>
        <div>PRESSURE: <span class="text-[#00e5ff]">1,099 BAR</span></div>
        <div class="px-3 py-1 bg-[#001a2e] rounded text-[#00ff9d]">HULL INTEGRITY 99.97%</div>
      </div>
      <div class="flex items-center gap-2"><div class="w-7 h-7 bg-[#001a2e] rounded-full ring-1 ring-[#00e5ff]/40"></div><div class="text-xs">CAPT. <span class="text-white">KEL MORGAN</span></div></div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-8 pt-8">
    <div class="flex items-baseline justify-between">
      <div><div class="uppercase text-[#00e5ff] text-xs tracking-[4px]">DEEP OPERATIONS</div><div class="text-7xl display tracking-[-4.4px] leading-none mt-1">WE COMMAND<br>THE CRUSH.</div></div>
      <button onclick="pingSonar(this)" class="border border-[#00e5ff] hover:bg-[#00e5ff] hover:text-[#01060f] transition px-8 py-3 text-sm rounded-3xl tracking-[1.5px]">SONAR PING • ALL SECTORS</button>
    </div>
    <div class="grid grid-cols-4 gap-4 mt-7">
      <div class="bg-[#00141f] border border-[#002a3d] rounded-3xl p-6"><div class="text-[#00e5ff] text-xs">ACTIVE DRONES</div><div class="text-[46px] leading-none font-semibold mt-2" data-count="19">19</div><div class="text-xs text-[#4a8aa0]">3 RETURNING • 1 LOST TO TRENCH</div></div>
      <div class="bg-[#00141f] border border-[#002a3d] rounded-3xl p-6"><div class="text-[#00e5ff] text-xs">BIOLUMINESCENT SIGNALS</div><div class="text-[46px] leading-none font-semibold mt-2" data-count="184">184</div><div class="text-xs text-emerald-400">+31 IN LAST 6H</div></div>
      <div class="bg-[#00141f] border border-[#002a3d] rounded-3xl p-6"><div class="text-[#00e5ff] text-xs">ANOMALY CONTACTS</div><div class="text-[46px] leading-none font-semibold text-amber-400 mt-2" data-count="4">4</div><div class="text-xs">2 CLASSIFIED • 2 MOVING</div></div>
      <div class="bg-[#00141f] border border-[#002a3d] rounded-3xl p-6"><div class="text-[#00e5ff] text-xs">HULL PRESSURE</div><div class="flex items-baseline mt-1"><span class="text-[46px] leading-none font-semibold" data-count="1099">1099</span><span class="text-lg ml-1 text-[#4a8aa0]">bar</span></div></div>
    </div>
    <div class="grid grid-cols-12 gap-4 mt-4">
      <!-- SONAR VISUAL -->
      <div class="col-span-5 bg-[#00141f] border border-[#002a3d] rounded-3xl p-7 relative overflow-hidden" style="min-height:280px">
        <div class="text-xs text-[#00e5ff] tracking-widest">SONAR ARRAY • SECTOR 11</div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="relative w-52 h-52">
            <div class="absolute inset-0 rounded-full border border-[#00e5ff]/30"></div>
            <div class="absolute inset-4 rounded-full border border-[#00e5ff]/20"></div>
            <div class="absolute inset-9 rounded-full border border-[#00e5ff]/10"></div>
            <div id="sonar" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#00e5ff] rounded-full opacity-70"></div>
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#00e5ff] to-transparent origin-top" style="transform:rotate(35deg)"></div>
            <!-- blips -->
            <div class="absolute w-1.5 h-1.5 bg-[#00ff9d] rounded-full left-[38%] top-[29%]"></div>
            <div class="absolute w-1 h-1 bg-[#00ff9d] rounded-full left-[71%] top-[61%] animate-pulse"></div>
            <div class="absolute w-2 h-2 border border-amber-400 rounded-full left-[24%] top-[68%]"></div>
          </div>
        </div>
        <div class="absolute bottom-6 left-7 text-xs font-mono text-[#4a8aa0]">PING INTERVAL 1.8s • 14,200m RANGE</div>
      </div>
      <!-- CREATURE / CONTACT LOG -->
      <div class="col-span-7 bg-[#00141f] border border-[#002a3d] rounded-3xl p-7">
        <div class="flex justify-between text-xs mb-4"><span class="text-[#00e5ff]">DEEP CONTACTS • LAST 14 HOURS</span><span class="text-[#4a8aa0]">AUTO-CLASSIFIED</span></div>
        <div class="space-y-2 text-sm">
          <div class="flex justify-between bg-black/40 px-5 py-3 rounded-2xl"><div><span class="font-medium">LEVIATHAN-09</span> <span class="text-xs text-amber-400">— MOVING FAST</span></div><div class="text-xs text-[#4a8aa0]">11,412m • 4m ago</div></div>
          <div class="flex justify-between bg-black/40 px-5 py-3 rounded-2xl"><div><span class="font-medium">GHOST POD 3</span></div><div class="text-xs text-[#4a8aa0]">10,991m • 51m ago</div></div>
          <div class="flex justify-between bg-black/40 px-5 py-3 rounded-2xl"><div><span class="font-medium">UNKNOWN • 7.4m LONG</span> <span class="text-red-400 text-xs">— AGGRESSIVE</span></div><div class="text-xs text-[#4a8aa0]">11,028m • 2h ago</div></div>
        </div>
      </div>
      <div class="col-span-12 mt-1 bg-[#00141f] border border-[#002a3d] rounded-3xl p-6 text-xs flex items-center justify-between font-mono">
        <div>ALL SYSTEMS NOMINAL. WE ARE THE ONLY LIGHT IN THE DARK.</div>
        <button onclick="this.innerHTML='TRANSMITTING...';setTimeout(()=>this.innerHTML='BROADCAST TO SURFACE COMPLETE',900)" class="px-6 py-2 bg-[#002a3d] hover:bg-[#004060] rounded-2xl">BROADCAST STATUS TO SURFACE</button>
      </div>
    </div>
  </div>
</div>

<script>function pingSonar(b){b.disabled=true;const s=document.getElementById('sonar');if(s){s.style.transition='all .1s';s.style.transform='scale(3.5)';s.style.opacity='0';setTimeout(()=>{s.style.transition='';s.style.transform='';s.style.opacity='.7';b.disabled=false;},900)}}</script>
