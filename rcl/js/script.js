const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
  setTimeout(() => {
    loader.classList.add('fade-out');
  }, 1500);
});


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.slider').forEach((slider) => {
    new Splide(slider, {
      type: 'loop',
      perPage: 1,
      arrows: false,
      pagination: false,
  
      autoScroll: {
        speed: 1, 
        pauseOnHover: false,
      },

      breakpoints: {
        768: {
          autoScroll: {
            speed: 0.5
          },
        },
      },
    }).mount(window.splide.Extensions);
  });
});


document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.slider-2').forEach((slider_2) => {
      new Splide(slider_2, {
        type: 'loop',
        perPage: 3,
        arrows: false,
        pagination: false,
        gap:'64px',
    
        autoScroll: {
          speed: .4,
        },

        breakpoints: {
          768: {
            gap:'8px',
          }
        },
      }).mount(window.splide.Extensions);
    });
});

document.addEventListener('DOMContentLoaded', function () {
  new Splide('.slider-3',{
        type: 'loop',
        perPage: 3,
        arrows: false,
        pagination: false,
        gap:'64px',
    
        autoScroll: {
          speed: -.4,
        },

        breakpoints: {
          768: {
            gap:'8px',
          }
        },
  }).mount(window.splide.Extensions);
});

const hamBtn = document.querySelector('.ham-btn');
const hamCont = document.querySelector('.ham-cont');
const hamLinks = document.querySelectorAll('.ham-cont a')

hamBtn.addEventListener('click',() => {
  hamBtn.classList.toggle('is-open');
  hamCont.classList.toggle('is-open');
});

hamLinks.forEach((hamlink) => {
  hamlink.addEventListener('click',() => {
    hamBtn.classList.remove('is-open');
    hamCont.classList.remove('is-open');
  });
});


