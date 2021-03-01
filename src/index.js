const dropdown = document.querySelector('#dropdown');
const dropdownContent = document.querySelector('.content');
dropdownContent.style.display = 'none';

dropdown.addEventListener('click', (e) => {
  e.preventDefault();
  if (dropdownContent.style.display === 'none') {
    dropdownContent.style.display = 'block';
    dropdownContent.style.position = 'absolute';
    dropdownContent.style.overflow = 'auto';
    dropdownContent.style.zIndex = '1';
    dropdownContent.style.marginLeft = '52%';
  } else dropdownContent.style.display = 'none';
});
