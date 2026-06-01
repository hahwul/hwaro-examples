+++
title = "Void Reign"
description = "Infinite void empire command. Float above the abyss and reign over nothingness made flesh."
tags = ["admin", "dashboard", "dark", "bold"]
+++

<div class="min-h-screen">
  <div class="border-b border-white/10 bg-black/60 backdrop-blur-xl sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded bg-gradient-to-br from-[#a78bfa] to-[#c4b5fd] flex items-center justify-center text-[#05050a]"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L2 9l10 6 10-6-10-6zM2 15l10 6 10-6"/></svg></div>
        <div><span class="font-semibold tracking-[-1.5px] text-3xl display">VOID</span><span class="text-[#a78bfa] font-bold text-sm tracking-[4px] ml-1">REIGN</span></div>
      </div>
      <div class="flex items-center gap-6 text-xs font-mono">
        <div>INFINITE EMPIRE • <span class="text-[#a78bfa]">0 SUBJECTS</span></div>
        <div class="px-4 py-1 bg-white/5 rounded-full border border-white/10">ALL IS NOTHING</div>
      </div>
      <div class="flex items-center gap-2 text-xs"><div class="w-7 h-7 rounded-full bg-white/10"></div> <span>EMPEROR OF EMPTINESS</span></div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-8 pt-9">
    <div class="flex justify-between items-end">
      <div>
        <div class="section-label">ABSOLUTE EMPTINESS</div>
        <div class="text-7xl display tracking-[-4px] leading-none mt-1">THE VOID<br>REIGNS SUPREME.</div>
      </div>
      <button onclick="conquerNothing(this)" class="px-8 py-4 bg-white text-[#05050a] font-bold text-sm tracking-[2px] rounded-2xl hover:bg-[#a78bfa] hover:text-white transition">CONQUER MORE NOTHING</button>
    </div>
    <div class="grid grid-cols-4 gap-4 mt-8">
      <div class="void-panel ethereal p-6 rounded-3xl float"><div class="text-[#a78bfa] text-xs">VOID NODES</div><div class="metric mt-2" data-count="0">0</div><div class="text-xs text-white/50">100% COVERAGE OF NOTHING</div></div>
      <div class="void-panel ethereal p-6 rounded-3xl"><div class="text-[#a78bfa] text-xs">ENTROPY LEVEL</div><div class="metric mt-2" data-count="100">100</div><div class="text-xs text-white/50">MAXIMUM DECAY ACHIEVED</div></div>
      <div class="void-panel ethereal p-6 rounded-3xl"><div class="text-[#a78bfa] text-xs">GHOST VASSALS</div><div class="metric mt-2" data-count="1847291">1847291</div><div class="text-xs text-emerald-400/70">+∞ THIS CYCLE</div></div>
      <div class="void-panel ethereal p-6 rounded-3xl"><div class="text-[#a78bfa] text-xs">REALITY INTEGRITY</div><div class="metric mt-2 text-red-400/80" data-count="0.0">0.0</div><div class="text-xs">IT NEVER EXISTED</div></div>
    </div>
    <div class="grid grid-cols-12 gap-4 mt-4">
      <div class="col-span-7 void-panel rounded-3xl p-7">
        <div class="flex justify-between mb-5"><div><span class="section-label">THE NOTHING LEGIONS</span><div class="text-2xl tracking-tight">Spectral Commanders</div></div></div>
        <div class="space-y-px text-sm">
          <div class="flex justify-between bg-white/5 px-5 py-3 rounded-t-2xl"><div>LORD OF THE FIRST NOTHING</div><span class="text-[#a78bfa]">ETERNAL</span></div>
          <div class="flex justify-between bg-white/5 px-5 py-3"><div>DUCHESS OF ABSENCE</div><span class="text-[#a78bfa]">ETERNAL</span></div>
          <div class="flex justify-between bg-white/5 px-5 py-3"><div>BARON OF THE FINAL SILENCE</div><span class="text-[#a78bfa]">ETERNAL</span></div>
          <div class="flex justify-between bg-white/5 px-5 py-3 rounded-b-2xl"><div>COUNTESS OF THE GREAT EMPTINESS</div><span class="text-[#a78bfa]">ETERNAL</span></div>
        </div>
      </div>
      <div class="col-span-5 void-panel rounded-3xl p-7 relative overflow-hidden">
        <div class="section-label mb-2">THE FLOATING THRONE</div>
        <div class="text-2xl">Reality Anchor Status</div>
        <div class="mt-8 flex justify-center">
          <div class="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center relative">
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#a78bfa]/30 to-transparent"></div>
            <div class="absolute text-[10px] text-center text-white/40">NO ANCHOR<br>FOUND</div>
          </div>
        </div>
      </div>
      <div class="col-span-12 void-panel rounded-3xl p-7 text-xs text-white/60 flex items-center justify-between font-mono">
        <div>THERE IS NO LIGHT HERE. ONLY THE CROWN OF EMPTINESS. ALL HAIL THE VOID.</div>
        <button onclick="this.textContent='ACKNOWLEDGED. NOTHING CHANGED.';setTimeout(()=>this.textContent='BOW TO THE NOTHING',1200)" class="border border-white/20 px-6 py-2 rounded-2xl hover:bg-white/5">BOW TO THE NOTHING</button>
      </div>
    </div>
  </div>
</div>

<script>
function conquerNothing(b){ b.disabled=true; b.textContent='CONQUERING...'; setTimeout(()=>{ b.textContent='MORE NOTHING CONQUERED'; setTimeout(()=>{b.textContent='CONQUER MORE NOTHING'; b.disabled=false;},1400)},600)}
</script>
