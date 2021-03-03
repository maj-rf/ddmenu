const dom = (() => {
  const menuIcon = document.querySelector('.menu-toggle');
  const menuIconEl = document.querySelectorAll('.menu-icon');
  const aElements = document.querySelectorAll('a');
  const liElements = document.querySelectorAll('li');
  const navi = document.querySelector('#navi');
  const contactContent = document.querySelector('#contact-content');
  const aboutContent = document.querySelector('#about-content');
  const dropdown = document.querySelectorAll('.dropdown'); // the dropdown

  const clearActive = () => { // clear existing dropdowns by removing class && other stuff
    dropdown.forEach((dd) => {
      const dropdownEl = dd;
      dropdownEl.style.display = 'none';
    });
    aboutContent.classList.remove('active');
    contactContent.classList.remove('active');
    contactContent.parentElement.childNodes[0].innerText = 'Contact ᐁ';
    aboutContent.parentElement.childNodes[0].innerText = 'About ᐁ';
    liElements.forEach((li) => {
      li.classList.remove('default-li');
    });
  };

  menuIcon.addEventListener('click', () => { // hamburger icon
    navi.classList.toggle('nav-active');
    menuIconEl.forEach((div) => {
      if (div.classList.contains('icon-active')) {
        div.classList.remove('icon-active');
      } else div.classList.add('icon-active');
    });
  });

  aElements.forEach((a) => { // show each clicked aElement
    a.addEventListener('click', (e) => {
      e.target.parentElement.parentElement.childNodes[1].classList.remove('default-li');
      if (e.target.id === 'contact') {
        if (contactContent.style.display === 'none') {
          clearActive();
          e.target.innerText = 'Contact ᐃ';
          e.target.parentElement.classList.add('default-li');
          contactContent.style.display = 'block';
          contactContent.classList.toggle('active');
        } else {
          clearActive();
        }
      } else if (e.target.id === 'about') {
        if (aboutContent.style.display === 'none') {
          clearActive();
          e.target.innerText = 'About ᐃ';
          e.target.parentElement.classList.add('default-li');
          aboutContent.style.display = 'block';
          aboutContent.classList.toggle('active');
        } else {
          clearActive();
        }
      } else {
        clearActive();
        e.target.parentElement.classList.add('default-li');
      }
    });
  });
  clearActive();
  liElements[0].classList.add('default-li');
})();

export default dom;
