// ハンバーガーメニュー開く、閉じる
$("#js-hamburger").click(function() {
  $(".hamburger").toggleClass("is-active");
  $(".p-header__menu").toggleClass("is-open");
});

// メニュー項目選択時,元に戻す（クラス強制的に外す）
$(".p-header__menu a").click(function() {
  $(".hamburger").removeClass("is-active");
  $(".p-header__menu").removeClass("is-open");
});
 
// swiperでスライドさせる
const voiceSwiper = new Swiper(".p-top-voice__swiper", {

  spaceBetween: 35,

  loop: true,

  watchOverflow: false,

  navigation: {
    nextEl: ".p-top-voice__next",
    prevEl: ".p-top-voice__prev",
  },

  breakpoints: {
    // spサイズ
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    // pcサイズ
    768: {
      slidesPerView: 3,
      spaceBetween: 35,
    }
  }
});

// スライドで、一番最初の記事をとって、最後に移動
$(".p-top-voice__next").click(function() {
  const firstItem = $(".p-top-voice__item").first();

  $(".p-top-voice__swiper-wrapper").append(firstItem);
});