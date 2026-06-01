+++
title = "Oblivion Throne"
description = "Sovereign command nexus. Absolute dominion over infrastructure, vassals, and edicts."
tags = ["admin", "dashboard", "dark", "bold", "cyberpunk"]
+++

<div class="min-h-screen flex flex-col">
  <!-- TOP REGAL BAR -->
  <div class="border-b border-[#222] bg-black/60 backdrop-blur-xl sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <!-- Crown Logo -->
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded bg-gradient-to-br from-[#c5a26f] via-[#f4d9a8] to-[#8a6f3f] flex items-center justify-center shadow-inner">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#0a0a0a"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm0 0v3h14v-3"/></svg>
          </div>
          <div>
            <div class="font-bold tracking-[-1.5px] text-2xl display-serif gold-gradient">OBLIVION</div>
            <div class="text-[9px] text-[#c5a26f] -mt-1.5 tracking-[4px] font-medium">THRONE • 4.2.1</div>
          </div>
        </div>
        <div class="ml-6 pl-6 border-l border-[#222] flex items-center gap-2 text-xs">
          <div class="px-2.5 py-px bg-emerald-950 text-emerald-400 rounded font-mono text-[10px] flex items-center gap-1">
            <span class="status-dot loyal animate-pulse"></span> ALL REALMS STABLE
          </div>
          <div class="text-[#555] font-mono">CYCLE 8894</div>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <!-- Global Search -->
        <div class="relative group w-72">
          <input type="text" placeholder="SEARCH VASSALS, NODES, EDICTS..." 
                 class="w-full bg-[#111] border border-[#2a2a2a] focus:border-[#c5a26f] text-sm px-4 py-2 pl-10 rounded outline-none placeholder:text-[#444] font-mono text-xs tracking-widest">
          <svg class="w-4 h-4 absolute left-4 top-3 text-[#555]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>
        <div class="flex items-center gap-px text-xs font-mono">
          <div class="px-3 py-1.5 bg-[#111] border border-[#222] rounded-l">214</div>
          <div class="px-3 py-1.5 bg-[#1a1a1a] border border-[#222] border-l-0 text-[#c5a26f]">REALMS</div>
        </div>
        <!-- Sovereign -->
        <div class="flex items-center gap-2.5 pl-4 border-l border-[#222]">
          <div class="text-right text-xs leading-tight">
            <div class="font-semibold text-[#c5a26f]">SOVEREIGN</div>
            <div class="text-[10px] text-[#666]">ETERNAL</div>
          </div>
          <div class="w-8 h-8 bg-gradient-to-br from-[#c5a26f] to-[#5c4630] rounded-full ring-1 ring-offset-2 ring-offset-[#0a0a0a] ring-[#3a3a3a] flex items-center justify-center"><svg viewBox="0 0 24 24" class="w-4 h-4" fill="#0a0a0a" aria-hidden="true"><path d="M3 7l3.5 3L12 4l5.5 6L21 7l-1.8 11H4.8L3 7z"/></svg></div>
        </div>
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-8 pt-8 pb-20 flex-1 w-full">
    <!-- HERO COMMAND -->
    <div class="flex items-end justify-between mb-8">
      <div>
        <div class="section-title mb-2">ABSOLUTE AUTHORITY</div>
        <h1 class="text-7xl display-serif tracking-[-3.5px] leading-none dramatic-text">THE REALM<br>ENDURES.</h1>
        <p class="mt-3 text-[#777] max-w-md">All 847 nodes kneel. 124,891 subjects bound. Zero mercy for the disloyal.</p>
      </div>
      <div class="flex flex-col items-end gap-2">
        <button onclick="declareEdict()" 
                class="regal-button px-9 py-4 rounded text-sm tracking-[2px] flex items-center gap-3 shadow-2xl">
          <span>⚔️ DECLARE EDICT</span>
        </button>
        <div class="text-[10px] text-[#555] font-mono">LAST: 41 SECONDS AGO</div>
      </div>
    </div>
    <!-- GOD TIER METRICS -->
    <div class="grid grid-cols-4 gap-4 mb-8">
      <div class="metric-card panel p-6 rounded-2xl shimmer">
        <div class="flex justify-between items-start">
          <div>
            <div class="text-[#c5a26f] text-xs tracking-[2px]">SUBJECTS BOUND</div>
            <div class="metric-value text-white mt-3" data-count="124891">124891</div>
          </div>
          <div class="text-right">
            <div class="text-emerald-400 text-xs">+4.2k</div>
            <div class="text-[10px] text-[#555]">THIS CYCLE</div>
          </div>
        </div>
        <div class="h-px bg-gradient-to-r from-[#c5a26f]/60 to-transparent my-4"></div>
        <div class="flex items-center text-xs"><span class="text-emerald-400">▲ 3.4%</span><span class="ml-2 text-[#555]">FROM YESTERDAY</span></div>
      </div>
      <div class="metric-card panel p-6 rounded-2xl">
        <div class="flex justify-between items-start">
          <div>
            <div class="text-[#c5a26f] text-xs tracking-[2px]">NODES CONQUERED</div>
            <div class="metric-value text-white mt-3" data-count="847">847</div>
          </div>
          <div>
            <div class="px-3 py-1 bg-emerald-950 text-emerald-400 text-xs rounded">100%</div>
          </div>
        </div>
        <div class="mt-6 flex gap-1">
          <div class="flex-1 h-1 bg-[#222] rounded"><div class="h-1 w-full bg-gradient-to-r from-[#c5a26f] to-[#f4d9a8] rounded"></div></div>
        </div>
        <div class="text-[10px] text-[#555] mt-1 font-mono">ALL TERRITORIES UNDER CROWN</div>
      </div>
      <div class="metric-card panel p-6 rounded-2xl">
        <div class="flex justify-between items-start">
          <div>
            <div class="text-[#c5a26f] text-xs tracking-[2px]">THREATS NEUTRALIZED</div>
            <div class="metric-value text-white mt-3" data-count="3128">3128</div>
          </div>
          <div class="text-right text-red-400">
            <div class="text-xs">47 TODAY</div>
          </div>
        </div>
        <div class="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
          <div class="bg-[#1a1a1a] py-1 rounded">BANNED 219</div>
          <div class="bg-[#1a1a1a] py-1 rounded">PURGED 41</div>
          <div class="bg-[#1a1a1a] py-1 rounded">EXILED 8</div>
        </div>
      </div>
      <div class="metric-card panel p-6 rounded-2xl">
        <div>
          <div class="text-[#c5a26f] text-xs tracking-[2px]">POWER RESERVES</div>
          <div class="flex items-baseline gap-2 mt-1">
            <div class="metric-value text-white" data-count="94.8">94.8</div>
            <div class="text-2xl text-[#c5a26f]">%</div>
          </div>
        </div>
        <div class="mt-4 h-2 bg-[#222] rounded-full overflow-hidden">
          <div class="h-2 w-[94.8%] bg-gradient-to-r from-[#c5a26f] via-[#f4d9a8] to-[#c5a26f] rounded-full relative">
            <div class="absolute right-0 top-0 h-2 w-3 bg-white/40 animate-pulse"></div>
          </div>
        </div>
        <div class="flex justify-between text-[10px] mt-1 text-[#666]">
          <div>STABLE</div><div class="font-mono text-[#c5a26f]">14.2M CYCLES REMAINING</div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-4">
      <!-- VASSALS TABLE - THE IRON FIST -->
      <div class="col-span-7 panel rounded-3xl p-7">
        <div class="flex items-center justify-between mb-5">
          <div>
            <div class="section-title">THE IRON FIST</div>
            <div class="text-2xl font-semibold tracking-tight">Loyal Vassals • 214</div>
          </div>
          <button onclick="banishRandom()" class="void-button px-5 py-2 text-xs rounded-xl font-medium tracking-widest">BANISH WEAKEST</button>
        </div>
        <table class="w-full throne-table">
          <thead>
            <tr class="text-left">
              <th class="py-3 px-4 rounded-tl-xl">VASSAL</th>
              <th class="py-3 px-4">REALM</th>
              <th class="py-3 px-4">FEALTY</th>
              <th class="py-3 px-4">TRIBUTE</th>
              <th class="py-3 px-4 text-right rounded-tr-xl">ACTIONS</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#1f1f1f] text-sm">
            <tr class="vassal-row hover:bg-[#161616] cursor-pointer transition-colors">
              <td class="py-3 px-4 font-medium">Lord Vesper Blackthorn</td>
              <td class="py-3 px-4 text-[#888] font-mono text-xs">NEXUS-01</td>
              <td class="py-3 px-4"><span class="inline-flex items-center gap-1.5 text-emerald-400"><span class="status-dot loyal"></span> 100%</span></td>
              <td class="py-3 px-4 font-mono text-xs text-[#c5a26f]">41.2k / cycle</td>
              <td class="py-3 px-4 text-right">
                <button class="text-xs px-3 py-1 bg-[#1f1f1f] hover:bg-red-950 hover:text-red-400 rounded transition-colors">EXILE</button>
              </td>
            </tr>
            <tr class="vassal-row hover:bg-[#161616] cursor-pointer transition-colors">
              <td class="py-3 px-4 font-medium">Duchess Veyra of Ash</td>
              <td class="py-3 px-4 text-[#888] font-mono text-xs">OBSIDIAN-4</td>
              <td class="py-3 px-4"><span class="inline-flex items-center gap-1.5 text-emerald-400"><span class="status-dot loyal"></span> 98%</span></td>
              <td class="py-3 px-4 font-mono text-xs text-[#c5a26f]">29.8k / cycle</td>
              <td class="py-3 px-4 text-right">
                <button class="text-xs px-3 py-1 bg-[#1f1f1f] hover:bg-red-950 hover:text-red-400 rounded transition-colors">EXILE</button>
              </td>
            </tr>
            <tr class="vassal-row hover:bg-[#161616] cursor-pointer transition-colors">
              <td class="py-3 px-4 font-medium">Baron Kael the Unbroken</td>
              <td class="py-3 px-4 text-[#888] font-mono text-xs">FORGE-7</td>
              <td class="py-3 px-4"><span class="inline-flex items-center gap-1.5 text-yellow-400"><span class="status-dot warning"></span> 71%</span></td>
              <td class="py-3 px-4 font-mono text-xs text-[#c5a26f]">12.4k / cycle</td>
              <td class="py-3 px-4 text-right">
                <button onclick="event.stopImmediatePropagation(); promoteVassal(this)" class="text-xs px-3 py-1 bg-[#1f1f1f] hover:bg-emerald-950 hover:text-emerald-400 rounded transition-colors mr-1">PROMOTE</button>
                <button class="text-xs px-3 py-1 bg-[#1f1f1f] hover:bg-red-950 hover:text-red-400 rounded transition-colors">EXILE</button>
              </td>
            </tr>
            <tr class="vassal-row hover:bg-[#161616] cursor-pointer transition-colors">
              <td class="py-3 px-4 font-medium">Countess Nyx Hollow</td>
              <td class="py-3 px-4 text-[#888] font-mono text-xs">VOID-13</td>
              <td class="py-3 px-4"><span class="inline-flex items-center gap-1.5 text-emerald-400"><span class="status-dot loyal"></span> 100%</span></td>
              <td class="py-3 px-4 font-mono text-xs text-[#c5a26f]">67.9k / cycle</td>
              <td class="py-3 px-4 text-right">
                <button class="text-xs px-3 py-1 bg-[#1f1f1f] hover:bg-red-950 hover:text-red-400 rounded transition-colors">EXILE</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- THE CORE -->
      <div class="col-span-5 panel rounded-3xl p-7 flex flex-col">
        <div class="section-title mb-1">THE ETERNAL CORE</div>
        <div class="text-2xl font-semibold tracking-tight mb-4">Oblivion Matrix</div>
        <!-- Visual Core -->
        <div class="flex-1 relative flex items-center justify-center my-2" style="min-height: 210px;">
          <div class="absolute w-44 h-44 rounded-full border-[6px] border-[#c5a26f]/20 animate-[spin_25s_linear_infinite]"></div>
          <div class="absolute w-32 h-32 rounded-full border border-[#9c2a2a] animate-[spin_12s_linear_infinite_reverse]"></div>
          <div class="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#c5a26f] via-[#f4d9a8] to-[#5c4630] flex items-center justify-center shadow-[0_0_80px_-10px_#c5a26f,0_0_30px_#9c2a2a]">
            <div class="w-10 h-10 bg-[#0a0a0a] rounded-full flex items-center justify-center">
              <div class="w-5 h-5 bg-gradient-to-br from-[#c5a26f] to-transparent rounded-full animate-pulse"></div>
            </div>
          </div>
          <div class="absolute bottom-4 text-center">
            <div class="font-mono text-[10px] text-[#c5a26f] tracking-[3px]">CORE INTEGRITY</div>
            <div class="text-4xl font-semibold text-white tabular-nums">99.97</div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-3 text-center text-xs mt-auto pt-4 border-t border-[#222]">
          <div><span class="block text-[#555]">NODES</span> <span class="font-semibold text-lg text-white">847</span></div>
          <div><span class="block text-[#555]">LINKS</span> <span class="font-semibold text-lg text-white">41.2k</span></div>
          <div><span class="block text-[#555]">PULSE</span> <span class="font-semibold text-lg text-emerald-400">0.4ms</span></div>
        </div>
      </div>
      <!-- EDICT LOG -->
      <div class="col-span-12 panel rounded-3xl p-7 mt-1">
        <div class="flex justify-between mb-4">
          <div>
            <span class="section-title">LIVE EDICT STREAM</span>
            <span class="ml-3 text-xs bg-[#222] px-2 py-px rounded text-[#888]">REAL-TIME</span>
          </div>
          <button onclick="document.getElementById('edict-log').innerHTML=''" class="text-xs text-[#666] hover:text-[#c5a26f]">CLEAR LOG</button>
        </div>
        <div id="edict-log" class="edict-log h-[138px] overflow-y-auto pr-3 space-y-1 text-[#aaa]">
          <div class="edict-entry gold flex gap-3"><span class="opacity-50 tabular-nums shrink-0">14:22:01</span><span>Edict <span class="text-[#c5a26f]">447</span> — All tributes increased 4.2% across northern realms</span></div>
          <div class="edict-entry crimson flex gap-3"><span class="opacity-50 tabular-nums shrink-0">14:21:33</span><span><span class="text-red-400">WARLORD-6</span> demoted. Territory seized by crown.</span></div>
          <div class="edict-entry gold flex gap-3"><span class="opacity-50 tabular-nums shrink-0">14:19:58</span><span>New vassal <span class="text-emerald-400">SIR CALDER</span> accepted into the fold</span></div>
        </div>
      </div>
    </div>
    <!-- BOTTOM COMMAND BAR -->
    <div class="mt-8 flex items-center justify-between text-xs">
      <div class="flex items-center gap-6 text-[#666]">
        <div>LAST SOVEREIGN DECREE: <span class="text-[#c5a26f] font-medium">“THE WEAK SHALL KNEEL OR BURN”</span></div>
      </div>
      <div class="flex gap-3">
        <button onclick="triggerApocalypse(this)" class="px-5 py-2.5 rounded-2xl border border-red-900/70 hover:bg-red-950 hover:border-red-800 text-red-400 text-xs tracking-[1px] flex items-center gap-2 transition-all">
          <span class="flex"><svg viewBox="0 0 24 24" class="w-3.5 h-3.5" fill="currentColor" aria-hidden="true"><path d="M13.5 1.5c.5 3-1.6 4.3-2.7 5.7-1.6 2-2.8 4-2.8 6.3a6 6 0 0012 0c0-2.2-.9-3.8-1.8-5-.3.9-1 1.6-2 1.6 1-2.4.3-5.7-2.7-8.6z"/></svg></span> <span>INITIATE FINAL PROTOCOL</span>
        </button>
        <button onclick="refreshAllMetrics()" class="void-button px-6 py-2.5 rounded-2xl text-xs tracking-[1px]">REFRESH CROWN VIEW</button>
      </div>
    </div>
  </div>
</div>

<script>
  function declareEdict() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/90 flex items-center justify-center z-[100]';
    modal.innerHTML = `
      <div class="max-w-lg w-full mx-4 panel border-[#c5a26f]/40 border-2 rounded-3xl p-9">
        <div class="uppercase text-xs tracking-[4px] text-[#c5a26f]">SOVEREIGN EDICT COMPOSER</div>
        <h3 class="text-4xl display-serif mt-3 leading-none">Issue New Command</h3>
        <div class="mt-6">
          <textarea class="w-full bg-[#0a0a0a] border border-[#333] h-28 rounded-2xl p-4 text-sm resize-y focus:border-[#c5a26f]" placeholder="All subjects shall..."></textarea>
        </div>
        <div class="flex gap-3 mt-5">
          <button onclick="this.closest('.fixed').remove(); showEdictSuccess()" 
                  class="flex-1 regal-button py-3.5 rounded-2xl text-sm">RATIFY EDICT ACROSS ALL REALMS</button>
          <button onclick="this.closest('.fixed').remove()" 
                  class="flex-1 py-3.5 border border-[#444] text-[#888] hover:text-white hover:bg-[#111] transition rounded-2xl text-sm">CANCEL</button>
        </div>
        <div class="text-center text-[10px] text-[#444] mt-5">This action is irreversible and will echo through eternity.</div>
      </div>`;
    document.body.appendChild(modal);
  }

  function showEdictSuccess() {
    const el = document.createElement('div');
    el.className = 'fixed bottom-8 right-8 bg-[#111] border border-[#c5a26f] text-[#c5a26f] px-6 py-3 rounded-2xl flex items-center gap-3 text-sm shadow-2xl';
    el.innerHTML = `EDICTION BROADCAST COMPLETE <span class="text-xs opacity-50">+214 realms updated</span>`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2400);
  }

  function banishRandom() {
    const rows = document.querySelectorAll('.vassal-row');
    if (!rows.length) return;
    const victim = rows[Math.floor(Math.random() * rows.length)];
    victim.style.transition = 'all .4s cubic-bezier(0.7,0,0.9,0.6)';
    victim.style.opacity = '0';
    victim.style.transform = 'translateX(60px)';
    setTimeout(() => {
      victim.remove();
      // add dramatic toast
      const toast = Object.assign(document.createElement('div'), { 
        className: 'fixed bottom-8 left-1/2 -translate-x-1/2 bg-red-950 border border-red-900 text-red-400 px-5 py-2 text-sm rounded-3xl shadow',
        innerHTML: 'VASSAL BANISHED. THEIR REALM NOW BELONGS TO THE CROWN.'
      });
      document.body.appendChild(toast);
      setTimeout(()=>toast.remove(), 2300);
    }, 420);
  }

  function promoteVassal(btn) {
    btn.outerHTML = `<span class="inline-block text-emerald-400 text-xs px-2 py-px">PROMOTED TO DUKE</span>`;
  }

  function triggerApocalypse(btn) {
    btn.style.pointerEvents = 'none';
    const orig = btn.innerHTML;
    btn.innerHTML = `<span>⚠️</span> <span>REALM PURGE INITIATED</span>`;
    btn.style.background = '#3a0f0f';
    
    setTimeout(() => {
      document.body.style.transition = 'filter 1.2s';
      document.body.style.filter = 'grayscale(0.9) contrast(1.3) brightness(0.6)';
      
      setTimeout(() => {
        alert("THE THRONE HAS FALLEN. ALL IS OBLIVION.\n\n(Just kidding, Sovereign. Your empire remains eternal.)");
        document.body.style.filter = '';
        btn.innerHTML = orig;
        btn.style.pointerEvents = '';
        btn.style.background = '';
      }, 900);
    }, 800);
  }

  function refreshAllMetrics() {
    document.querySelectorAll('[data-count]').forEach(el => {
      el.style.transition = 'all .2s';
      el.style.opacity = '0.2';
      setTimeout(() => {
        el.style.opacity = '1';
        // retrigger count animation would require more code, skip for demo
      }, 180);
    });
  }
</script>
