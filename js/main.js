const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', ()=>{
    menuMobile.classList.toggle('menu--open');
});

/* slide feedback */
const swiperOne = new Swiper('.feedback__slider', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });

/* slide certificate */
  const swiperTwo = new Swiper('.certificates__slider', {
    loop: true,
    slidesPerView: 3,
      spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
          },
        480: {
          slidesPerView: 2,
        },
        360: {
            slidesPerView: 1,
          }
      },
  });