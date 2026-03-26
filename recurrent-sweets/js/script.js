
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