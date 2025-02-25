/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/assets/js/main.js":()=>{eval("\n\n//Swiperの設定\nvar swiper = new Swiper(\".swiper\", {\n  loop: true,\n  //loopedSlides: 4, ←設定すると途中で止まる\n  slidesPerView: 4,\n  spaceBetween: 50,\n  speed: 4000,\n  autoplay: {\n    delay: 0,\n    disableOnInteraction: false\n  },\n  breakpoints: {\n    0: {\n      slidesPerView: 2.5,\n      // スライド数を減らす\n      spaceBetween: 15 // スペースも減らす\n    },\n    // **768px以上** の場合（768px から上）\n    768: {}\n  }\n});\n$(function () {\n  //ハンバーガーボタンの実装\n  $('.sp-hamburger').on('click', function () {\n    $('.sp-hamburger__bar').toggleClass('active');\n    $('.sp-header-modal').toggleClass('fadeIn');\n    $('.sp-header-nav').toggleClass('open');\n  });\n  $('.sp-header-modal').on('click', function () {\n    $('.sp-hamburger__bar').toggleClass('active');\n    $(this).toggleClass('fadeIn');\n    $('.sp-header-nav').toggleClass('open');\n  });\n  $('.sp-header-nav').on('click', function () {\n    $('.sp-hamburger__bar').toggleClass('active');\n    $('.sp-header-modal').toggleClass('fadeIn');\n    $(this).toggleClass('open');\n  });\n});\n\n//# sourceURL=webpack:///./src/assets/js/main.js?")}},__webpack_exports__={};__webpack_modules__["./src/assets/js/main.js"]()})();