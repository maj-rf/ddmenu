/* eslint-disable no-plusplus */
const imgslider = (() => {
  const slider = document.querySelector('.slider');
  const images = document.querySelectorAll('.slider img');
  const prevNext = document.querySelectorAll('#previous, #next');
  let counter = 1;
  const size = images[0].clientWidth;

  slider.style.transform = `translateX(${-size * counter}px)`;
  prevNext.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (e.target.id === 'next') {
        if (counter >= images.length - 1) return;
        slider.style.transition = 'transform 0.5s ease-in-out';
        counter++;
        slider.style.transform = `translateX(${-size * counter}px)`;
      } if (e.target.id === 'previous') {
        if (counter <= 0) return;
        slider.style.transition = 'transform 0.5s ease-in-out';
        counter--;
        slider.style.transform = `translateX(${-size * counter}px)`;
      }
    });
  });

  slider.addEventListener('transitionend', () => {
    if (images[counter].id === 'lastClone') {
      slider.style.transition = 'none';
      counter = images.length - 2;
      slider.style.transition = `translateX(${-size * counter}px)`;
    }
    if (images[counter].id === 'firstClone') {
      slider.style.transition = 'none';
      counter = images.length - counter;
      slider.style.transition = `translateX(${-size * counter}px)`;
    }
  });
})();

export default imgslider;
