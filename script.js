const swiper1 = new Swiper('.channal-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: '.channal-button-next',
    prevEl: '.channal-button-prev',
  },
});

const swiper2 = new Swiper('.channal-slider-recommended', {
  // Optional parameters
  loop: true,
  slidesPerView: 2.5,

  // Navigation arrows
  navigation: {
    nextEl: '.channal-recommended-button-next',
    prevEl: '.channal-recommended-button-prev',
  },
});

const swiper3 = new Swiper('.channal-slider-food', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: '.channal-food-button-next',
    prevEl: '.channal-food-button-prev',
  },
});