function toggleTheme() {
  const body = document.body;
  const isDark = body.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  const sun = document.querySelector('.icon-sun');
  const moon = document.querySelector('.icon-moon');
  if (sun && moon) {
    sun.style.display = newTheme === 'dark' ? 'block' : 'none';
    moon.style.display = newTheme === 'dark' ? 'none' : 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);

  const sun = document.querySelector('.icon-sun');
  const moon = document.querySelector('.icon-moon');
  if (sun && moon) {
    sun.style.display = savedTheme === 'dark' ? 'block' : 'none';
    moon.style.display = savedTheme === 'dark' ? 'none' : 'block';
  }
});
