
// ヘッダーＭＶの画像
const swiper = new Swiper(".swiper", {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 7000,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
            return '<span class="p-mv__pagination"><span class="' + currentClass + '"></span>' + '<span class="p-mv__pagination-line"></span>' + '<span class="' + totalClass + '"></span></span>';
        },
    },
    speed: 3000,
});

// Stayのスライド画像
const swiper_stay = new Swiper(".swiper2", {
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 'auto',
    speed: 10000,
    allowTouchMove: false,
});

// galleryのスライド画像
const swiper_gallery = new Swiper(".swiper3", {
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 'auto',
    speed: 10000,
    allowTouchMove: false,
});