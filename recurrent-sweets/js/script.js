const scrollAnimations = document.querySelectorAll('.scroll-animation');

window.addEventListener('scroll',() => {
  scrollAnimations.forEach((scrollAnimation) => {
    const rectTop = scrollAnimation.getBoundingClientRect().top;
    if (window.innerHeight > rectTop + window.innerHeight/5) {
      scrollAnimation.classList.add('active');
    };
  });
});

// window.addEventListener('scroll',() => {
//   scrollAnimations.forEach((scrollAnimation) => {
//     const rectTop = scrollAnimation.getBoundingClientRect().top;
//     if (window.innerHeight*4/5 > rectTop) {
//       scrollAnimation.classList.add('active');
//     };
//   });
// });


  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#slider', {
      type: 'loop',
      perPage: 3,
      breakpoints:{
        767:{
            perPage:1,
        },
      },
      perMove:1,
      gap:'40px',
      autoplay: true,
      interval:3000,
      speed:1000,
      pagination:false,
      focus:'center',
    }).mount();
  });