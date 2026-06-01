+++
title = "Obsidian Crown"
description = "Black glass tyrannical crown. Sharp edges, absolute luxury, zero mercy."
tags = ["admin", "dashboard", "dark", "bold"]
+++

<div class="min-h-screen">
  <div class="border-b border-white/10 bg-black/70 backdrop-blur-xl sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 bg-white flex items-center justify-center text-[#0a0a0c]"><svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24"><polygon points="12,3 22,9 17,20 7,20 2,9"/></svg></div>
        <div class="font-bold tracking-[-1.5px] text-3xl display">OBSIDIAN</div>
      </div>
      <div class="flex items-center gap-6 text-xs font-mono"><div>THE CROWN IS SHARP</div><div class="px-4 py-1 border border-white/20 rounded">TYRANT MODE</div></div>
      <div class="text-xs">EMPEROR • ETERNAL</div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-8 pt-8">
    <div class="flex justify-between items-end">
      <div>
        <div class="section-label">ABSOLUTE MONARCHY</div>
        <h1 class="text-7xl display tracking-[-4.2px] leading-none mt-1">THE BLADE<br>NEVER DULLS.</h1>
      </div>
      <button onclick="executeEdict(this)" class="px-9 py-4 bg-white text-[#0a0a0c] font-bold tracking-[2px] text-sm rounded-none sharp">EXECUTE EDICT</button>
    </div>

    <div class="grid grid-cols-4 gap-4 mt-8">
      <div class="glass p-6 rounded-2xl"><div class="text-xs text-white/60">SUBJECTS IN CHAINS</div><div class="metric mt-2" data-count="148291">148291</div></div>
      <div class="glass p-6 rounded-2xl"><div class="text-xs text-white/60">BLOOD TAX COLLECTED</div><div class="flex items-baseline"><span class="metric" data-count="41.2">41.2</span><span class="text-2xl ml-1 text-white/60">M</span></div></div>
      <div class="glass p-6 rounded-2xl"><div class="text-xs text-white/60">DISSIDENTS SILENCED</div><div class="metric mt-2 text-red-400" data-count="892">892</div></div>
      <div class="glass p-6 rounded-2xl"><div class="text-xs text-white/60">CROWN INTEGRITY</div><div class="metric mt-2" data-count="100">100</div><div class="text-xs text-emerald-400">PERFECT</div></div>
    </div>

    <div class="grid grid-cols-12 gap-4 mt-4">
      <div class="col-span-7 glass rounded-3xl p-7">
        <div class="section-label mb-3">THE IRON COURT</div>
        <div class="space-y-px text-sm">
          <div class="flex justify-between px-5 py-3 bg-white/5"><div>LORD EXECUTIONER</div><span class="text-red-400">BLOODIED</span></div>
          <div class="flex justify-between px-5 py-3 bg-white/5"><div>CHANCELLOR OF PAIN</div><span class="text-red-400">LOYAL</span></div>
          <div class="flex justify-between px-5 py-3 bg-white/5"><div>HIGH INQUISITOR</div><span class="text-red-400">EAGER</span></div>
        </div>
      </div>
      <div class="col-span-5 glass rounded-3xl p-7">
        <div class="section-label">THE FINAL VERDICT</div>
        <div class="text-4xl mt-3 leading-none">All who oppose<br>the Crown<br>become glass.</div>
      </div>
    </div>
  </div>
</div>

<script>function executeEdict(b){b.textContent='EXECUTING...';setTimeout(()=>{b.textContent='ANOTHER LESSON TAUGHT';setTimeout(()=>b.textContent='EXECUTE EDICT',1400)},650)}</script>
