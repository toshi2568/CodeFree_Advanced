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

// アコーディオンの開閉
$(".p-top-faq__question").on("click", function() {
  $(this)
    .next(".p-top-faq__answer")
    .slideToggle();

  $(this).toggleClass("is-open");

  const $arrow = $(this).find(".p-top-faq__question-arrow");

  if ($(this).hasClass("is-open")) {
    $arrow.attr("src", "./img/faq-up-arrow.png");
  } else {
    $arrow.attr("src", "./img/faq-down-arrow.png");
  }
});

//ページトップへ戻るボタンの表示、非表示
const pageTop = document.querySelector(".p-fixed-buttons");

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {
    pageTop.classList.add("is-show");
  } else {
    pageTop.classList.remove("is-show");
  }

});

// ページトップへ戻るボタンの位置調整
const fixedButtons = document.querySelector(".p-fixed-buttons");
const footer = document.querySelector("footer");

function adjustFixedButtons() {

  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerTop < windowHeight) {

    const footerVisibleHeight = windowHeight - footerTop;

    fixedButtons.style.bottom = `${footerVisibleHeight}px`;

  } else {

    fixedButtons.style.bottom = "0";

  }
}

window.addEventListener("scroll", adjustFixedButtons);

adjustFixedButtons();