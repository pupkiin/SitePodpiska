// let sliderTarif = new Swiper('.tarif__swiper', {
//   loop: true,
//   speed: 1000,
//   effect: 'coverflow',
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   touchRatio: 2,
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 150,
//     depth: 560,
//     modifier: 0.25,
//     slideShadows: true,
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.slider_menu-next',
//     prevEl: '.slider_menu-prev',
//   },
//   slideActiveClass: 'activeSlide',
// })

var swiper = new Swiper(".mySwiper", {
    // loop: true,
    initialSlide: 1,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 2,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
      // slideShadows: true,
    },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});