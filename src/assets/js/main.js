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

$(function() {
  //ハンバーガーボタンの実装
  $('.sp-hamburger').on('click', function() {
    $('.sp-hamburger__bar').toggleClass('active');
    $('.sp-header-modal').toggleClass('fadeIn');
    $('.sp-header-nav').toggleClass('open');
  });
  $('.sp-header-modal').on('click', function() {
    $('.sp-hamburger__bar').toggleClass('active');
    $(this).toggleClass('fadeIn');
    $('.sp-header-nav').toggleClass('open');
  });
  $('.sp-header-nav').on('click', function() {
    $('.sp-hamburger__bar').toggleClass('active');
    $('.sp-header-modal').toggleClass('fadeIn');
    $(this).toggleClass('open');
  });
});

//selectタグの初期値の文字色の変更
/*function changeColor(e){
  if( e.value == '' ){
      e.style.color = '#C7C7C7';
  }else{
      e.style.color = '#210000';
  }
}*/
/*function changeColor(e){
  if( e.value == 0 ){
      e.style.color = '';
  }else{
      e.style.color = '#210000';
  }
}*/