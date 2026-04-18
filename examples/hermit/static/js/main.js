function toggleMobileMenu() {
  var menu = document.getElementById('mobile-menu');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}

document.addEventListener('click', function(e) {
  var menu = document.getElementById('mobile-menu');
  var btn = document.getElementById('menu-btn');
  if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) {
    menu.style.display = 'none';
  }
});
