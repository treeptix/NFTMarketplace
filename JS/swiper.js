
const swiper = new Swiper('.swiper', {
  // loop: true,



  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom'
  },

  slidesPerView: 1,
  spaceBetween: -160,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    700: {
      spaceBetween: 30,
      slidesPerView: 2, 
    },

    1000: {
      spaceBetween: 30,
      slidesPerView: 3, 
    },

    1200: {
      spaceBetween: 30,
      slidesPerView: 4, 
    },

    1910: {
      spaceBetween: 30,
      slidesPerView: 6,
    },

  },

});

const swiper2 = new Swiper('.swiper2', {
  // loop: true,

  pagination: {
      el: '.swiper-pagination-2',
      clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next-custom-cont-4',
    prevEl: '.swiper-button-prev-custom-cont-4'
  },

  slidesPerView: 1,
  spaceBetween: 30,

  breakpoints: {
    850: {
      spaceBetween: 30,
      slidesPerView: 2, 
    },


    1250: {
      spaceBetween: 30,
      slidesPerView: 3, 
    },

    1910: {
      spaceBetween: 30,
      slidesPerView: 4, 
    },

  },

});

