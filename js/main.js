const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.top-nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});
