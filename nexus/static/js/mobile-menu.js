document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  let isMenuOpen = false;

  if (btn && menu) {
    btn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      if (isMenuOpen) {
        menu.classList.remove('hidden');
        // small delay to allow display:block to apply before opacity transition
        requestAnimationFrame(() => {
          menu.classList.remove('opacity-0');
          menu.classList.remove('pointer-events-none');
        });
        document.body.style.overflow = 'hidden';
      } else {
        menu.classList.add('opacity-0');
        menu.classList.add('pointer-events-none');
        setTimeout(() => {
          menu.classList.add('hidden');
        }, 300);
        document.body.style.overflow = '';
      }
    });
  }
});
