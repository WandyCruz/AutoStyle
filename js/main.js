const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.remove('-translate-x-full');
  document.body.classList.add('overflow-hidden');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.add('-translate-x-full');
  document.body.classList.remove('overflow-hidden');
});

// Cierra menú si se hace clic en un enlace
document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
    document.body.classList.remove('overflow-hidden');
  });
});
