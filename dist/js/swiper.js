
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


// 画面ロード後に2つのswiperの子要素を取得し、2倍にして付与する。(2倍の設定にしないと、現在のswiperの仕様だと全幅表示をした際ループが止まるため)
window.onload = function () {
    // Stayのスライド画像設定
    const swiper_stay = document.querySelector('.swiper2 .swiper-wrapper');
    const slides_s = Array.from(swiper_stay.children);
    const clonedSlides_s = slides_s.map(slide => slide.cloneNode(true));

    clonedSlides_s.forEach(slide => {
        swiper_stay.appendChild(slide);
    });

    new Swiper('.swiper2', {
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 'auto',
        speed: 10000,
        allowTouchMove: false,
    });

    // galleryのスライド画像設定
    const swiper_gallery = document.querySelector('.swiper3 .swiper-wrapper');
    const slides = Array.from(swiper_gallery.children);
    const clonedSlides = slides.map(slide => slide.cloneNode(true));

    clonedSlides.forEach(slide => {
        swiper_gallery.appendChild(slide);
    });

    new Swiper('.swiper3', {
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 'auto',
        speed: 10000,
        allowTouchMove: false,
    });
};