+++
title = "Stygian Core"
description = "Infernal reactor command. Molten dashboards where the heat never dies."
tags = ["admin", "dashboard", "dark", "bold"]
+++

<div class="min-h-screen">
  <!-- TOP MOLTEN BAR -->
  <div class="border-b border-[#2a120a] bg-black/70 backdrop-blur-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-8 h-[62px] flex items-center justify-between text-sm">
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 lava rounded-xl flex items-center justify-center text-[#0c0302] font-black text-xl shadow-inner">S</div>
          <div class="leading-none"><span class="font-semibold text-2xl tracking-[-1.5px] display">STYGIAN</span><br><span class="text-[9px] text-[#ff6a00] -mt-1 block font-bold tracking-[2px]">CORE v13.8</span></div>
        </div>
        <div class="ml-4 px-3 py-1 text-xs rounded bg-[#1f0a05] text-[#ff6a00] border border-[#3a160b] flex items-center gap-2"><span class="live inline-block w-1.5 h-1.5 bg-[#ff4d00] rounded-full"></span> REACTOR CRITICAL</div>
      </div>
      
      <div class="flex items-center gap-5 text-xs">
        <div class="font-mono text-[#ff6a00]">SECTOR 09 • DEPTH 4.1km</div>
        <div class="px-4 py-1.5 bg-[#1a0c07] rounded-full border border-[#3a160b] flex items-center gap-2 text-[#ff9500]">
          <span>CORE TEMP</span> <span id="core-temp" class="font-semibold tabular-nums text-white">1847.3</span><span class="text-[#ff6a00]">°C</span>
        </div>
        <div class="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center ring-1 ring-[#3a160b]">🔥</div>
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-8 pt-9">
    <div class="flex justify-between items-end mb-7">
      <div>
        <div class="section-label">INFERNAL OPERATIONS</div>
        <div class="text-[58px] leading-[.9] display tracking-[-3.8px] mt-1">THE HEAT<br>NEVER DIES.</div>
      </div>
      <button onclick="ventPressure()" class="px-8 py-4 bg-gradient-to-r from-[#ff4d00] to-[#c2410f] hover:brightness-110 active:scale-[0.985] transition text-black font-extrabold text-sm tracking-[2px] rounded-2xl flex items-center gap-2 shadow-[0_0_30px_-6px_#ff4d00]">VENT EXCESS PRESSURE</button>
    </div>

    <!-- METRICS - MOLTEN -->
    <div class="grid grid-cols-4 gap-4">
      <div class="molten-panel p-6 rounded-3xl crack">
        <div class="text-[#ff6a00] text-xs">PRESSURE VESSELS</div>
        <div class="metric-num text-white mt-1" data-count="47">47</div>
        <div class="text-xs text-[#bb8f6b] mt-1">ALL AT MAX TOLERANCE</div>
        <div class="heat-bar h-1.5 mt-4 rounded"><div class="h-1.5 w-[100%]" style="width:100%"></div></div>
      </div>
      <div class="molten-panel p-6 rounded-3xl">
        <div class="text-[#ff6a00] text-xs">MAGMA FLOW RATE</div>
        <div class="flex items-baseline gap-1 mt-1"><span class="metric-num text-white" data-count="884">884</span><span class="text-[#ff9500] font-bold">t/s</span></div>
        <div class="text-emerald-400 text-xs mt-2">+12% FROM LAST HOUR</div>
      </div>
      <div class="molten-panel p-6 rounded-3xl">
        <div class="text-[#ff6a00] text-xs">THREAT INCIDENTS</div>
        <div class="metric-num text-[#ff4d00] mt-1" data-count="9">9</div>
        <div class="text-xs text-[#bb8f6b]">3 CONTAINED • 6 ACTIVE</div>
        <div class="mt-3 flex gap-1">
          <div class="flex-1 text-center py-1 text-[10px] bg-[#2a120a] rounded">CONTAINED</div>
          <div class="flex-1 text-center py-1 bg-[#3a160b] text-[#ff4d00] rounded warning-glow">BREACH RISK</div>
        </div>
      </div>
      <div class="molten-panel p-6 rounded-3xl">
        <div class="text-[#ff6a00] text-xs">ENERGY YIELD</div>
        <div class="flex items-end gap-2"><span class="metric-num text-white" data-count="2.4">2.4</span><span class="text-xl text-[#ff9500] pb-1">GW</span></div>
        <div class="text-xs">PEAK: 3.1GW @ 04:14</div>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-4 mt-4">
      <!-- FORGE CREW / OPERATORS -->
      <div class="col-span-5 molten-panel rounded-3xl p-7">
        <div class="flex justify-between mb-5"><div><span class="section-label">FORGE CREW</span><div class="text-2xl tracking-tight">Active Operatives</div></div><div class="text-xs px-3 py-1 bg-[#1f0a05] self-start rounded">31 ONLINE</div></div>
        
        <div class="space-y-2 text-sm">
          <div class="flex justify-between items-center bg-[#1a0c07] px-4 h-11 rounded-2xl"><div class="flex items-center gap-3"><span>CHIEF IGNIS VOR</span></div><span class="text-emerald-400 text-xs">STABLE</span></div>
          <div class="flex justify-between items-center bg-[#1a0c07] px-4 h-11 rounded-2xl"><div class="flex items-center gap-3"><span>PYRA KESSA</span></div><span class="text-emerald-400 text-xs">STABLE</span></div>
          <div class="flex justify-between items-center bg-[#1a0c07] px-4 h-11 rounded-2xl"><div class="flex items-center gap-3"><span>EMBER-7 (SYNTH)</span></div><span class="text-amber-400 text-xs">OVERHEATING</span></div>
          <div class="flex justify-between items-center bg-[#1a0c07] px-4 h-11 rounded-2xl"><div class="flex items-center gap-3"><span>SLAG LORD REX</span></div><span class="text-emerald-400 text-xs">STABLE</span></div>
        </div>
      </div>

      <!-- LIVE CONDUITS -->
      <div class="col-span-7 molten-panel rounded-3xl p-7">
        <div class="section-label mb-2">LIVE CONDUITS • 18</div>
        <div class="grid grid-cols-3 gap-3 text-xs">
          <div class="bg-[#1a0c07] p-3 rounded-2xl flex flex-col"><div class="text-[#ff9500]">CONDUIT-A1</div><div class="text-xl font-semibold tabular-nums">1420°C</div><div class="h-px bg-[#3a160b] my-2"></div><div class="text-emerald-400 text-[10px]">NOMINAL • 99.4% FLOW</div></div>
          <div class="bg-[#1a0c07] p-3 rounded-2xl flex flex-col"><div class="text-[#ff9500]">CONDUIT-B4</div><div class="text-xl font-semibold tabular-nums">1711°C</div><div class="h-px bg-[#3a160b] my-2"></div><div class="text-amber-400 text-[10px]">ELEVATED • 87% FLOW</div></div>
          <div class="bg-[#1a0c07] p-3 rounded-2xl flex flex-col"><div class="text-[#ff9500]">CONDUIT-C9</div><div class="text-xl font-semibold tabular-nums">1994°C</div><div class="h-px bg-[#3a160b] my-2"></div><div class="text-red-400 text-[10px] warning-glow">CRITICAL • 41% FLOW</div></div>
        </div>
      </div>

      <!-- THE PIT LOG -->
      <div class="col-span-12 molten-panel rounded-3xl p-7 mt-1">
        <div class="uppercase text-xs tracking-[2px] text-[#ff6a00] mb-3 flex justify-between"><span>THE PIT • INCIDENT LOG</span> <span class="text-[#663322]">AUTO-SCROLL</span></div>
        <div id="pit-log" class="font-mono text-xs h-[110px] overflow-auto space-y-[3px] leading-snug text-[#bb8f6b]">
          <div><span class="text-[#ff4d00]">[04:41:12]</span> Pressure spike in Sector 4. Auto-vents engaged.</div>
          <div><span class="text-[#ff4d00]">[04:39:50]</span> Slag overflow detected on Line 7. Crew dispatched.</div>
          <div><span class="text-[#ff4d00]">[04:38:03]</span> New record: 1999.4°C sustained for 8m 14s.</div>
        </div>
      </div>
    </div>

    <div class="text-center mt-8">
      <button onclick="triggerEruption(this)" class="text-sm px-6 py-2.5 border border-[#ff4d00]/60 hover:bg-[#2a120a] transition rounded-2xl text-[#ff6a00] tracking-[1.5px]">SIMULATE FULL ERUPTION SEQUENCE</button>
    </div>
  </div>
</div>

<script>
  function ventPressure() {
    const btns = document.querySelectorAll('button');
    const orig = event.currentTarget;
    const el = document.createElement('div');
    el.className = 'fixed inset-0 flex items-center justify-center bg-black/80 z-50';
    el.innerHTML = `<div class="text-center"><div class="text-[#ff4d00] text-6xl mb-2">🌋</div><div class="text-2xl font-bold text-white">PRESSURE VENTED</div><div class="text-sm text-[#bb8f6b] mt-1">Core temperature stabilized −184°C</div></div>`;
    document.body.appendChild(el);
    setTimeout(()=>{ el.remove(); }, 1350);
  }
  function triggerEruption(btn) {
    btn.disabled = true;
    document.body.style.transition = 'filter 600ms';
    document.body.style.filter = 'contrast(1.4) saturate(1.7) hue-rotate(-12deg)';
    setTimeout(() => {
      alert('ERUPTION COMPLETE.\nThe Stygian Core has spoken.\n\nAll systems still online. For now.');
      document.body.style.filter = '';
      btn.disabled = false;
    }, 900);
  }
  // Live log
  setTimeout(() => {
    const log = document.getElementById('pit-log');
    if (log) setInterval(() => {
      const msgs = ['Minor fissure sealed.', 'Flow rate recalibrated.', 'New heat signature detected.', 'Drone #14 lost to magma.'];
      const d = document.createElement('div');
      d.innerHTML = `<span class="text-[#ff4d00]">[${new Date().toLocaleTimeString('en-GB', {hour:'2-digit', minute:'2-digit', second:'2-digit'})}]</span> ${msgs[Math.random()*msgs.length|0]}`;
      log.appendChild(d);
      if (log.children.length > 5) log.firstChild.remove();
    }, 5200);
  }, 4000);
</script>
