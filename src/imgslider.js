const imgslider = (() => {
  const slider = document.querySelector('.slider');
  const images = document.querySelectorAll('.slider img');
  const prevNext = document.querySelectorAll('#previous, #next');
  //   console.log(prevNext);
  //   const prev = document.querySelector('#previous');
  //   const next = document.querySelector('#next');
  let counter = 1;
  const size = images[0].clientWidth;

  slider.style.transform = `translateX(${-size * counter}px)`;
  prevNext.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (e.target.id === 'next') {
        slider.style.transition = 'transform 0.4s ease in-out';
        counter += 1;
        slider.style.transform = `translateX(${-size * counter}px)`;
        if (counter === 6) counter = 1;
      } if (e.target.id === 'previous') {
        slider.style.transition = 'transform 0.4s ease in-out';
        counter -= 1;
        slider.style.transform = `translateX(${-size * counter}px)`;
        if (counter === 1) counter = 6;
      }
    });
  });
//   next.addEventListener('click', () => {
//     slider.style.transition = 'transform 0.4s ease in-out';
//     counter += 1;
//     slider.style.transform = `translateX(${-size * counter}px)`;
//   });
//   prev.addEventListener('click', () => {
//     slider.style.transition = 'transform 0.4s ease in-out';
//     counter -= 1;
//     slider.style.transform = `translateX(${-size * counter}px)`;
//   });
})();

export default imgslider;
