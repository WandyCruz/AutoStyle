
const header = document.getElementById('mainHeader');

window.addEventListener('scroll', () => {
  if (window.scrollY > 800) { // si ha bajado más de 100px
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
