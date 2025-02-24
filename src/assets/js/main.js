'use strict';

//Swiperの設定
const swiper = new Swiper(".swiper", {
  loop: true,
  //loopedSlides: 4, ←設定すると途中で止まる
  slidesPerView: 4,
  spaceBetween: 50,
  speed: 4000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2.5, // スライド数を減らす
      spaceBetween: 15, // スペースも減らす
    },
    // **768px以上** の場合（768px から上）
    768: {
    },
  },
});