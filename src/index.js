const aElements = document.querySelectorAll('a');
const homeContent = document.querySelector('#home-content');
const aboutContent = document.querySelector('#about-content');
const clearActive = () => {
  homeContent.style.display = 'none';
  aboutContent.style.display = 'none';
  aboutContent.classList.remove('active');
  homeContent.classList.remove('active');
  homeContent.parentElement.childNodes[1].innerText = 'Home v';
  aboutContent.parentElement.childNodes[1].innerText = 'About v';
};
clearActive();
aElements.forEach((a) => {
  a.addEventListener('click', (e) => {
    if (e.target.id === 'home') {
      if (homeContent.style.display === 'none') {
        clearActive();
        e.target.innerText = 'Home ^';
        homeContent.style.display = 'block';
        homeContent.classList.toggle('active');
      } else {
        clearActive();
      }
    } else if (e.target.id === 'about') {
      if (aboutContent.style.display === 'none') {
        clearActive();
        e.target.innerText = 'About ^';
        aboutContent.style.display = 'block';
        aboutContent.classList.toggle('active');
      } else {
        clearActive();
      }
    }
  });
});
