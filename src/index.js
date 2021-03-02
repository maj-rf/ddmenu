const menuIcon = document.querySelector('.menu-toggle');
const navi = document.querySelector('#navi');
menuIcon.addEventListener('click', () => {
  navi.classList.add('nav-active');
});
