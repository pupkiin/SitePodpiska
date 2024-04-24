gsap.registerPlugin(ScrollTrigger);
let navPaddingTop = 40;
let width = document.documentElement.clientWidth;
if (width < 1750) {
  navPaddingTop = 20;
}

if (ScrollTrigger.isTouch !== 1) {
  // header
  gsap.fromTo('.header__layer_1', { opacity: 2, scale: 1 }, {
    opacity: 0, scale: 1.49,
    scrollTrigger: {
      trigger: '.header__layer_1',
      start: "200",
      end: 'bottom -130%+=100px',
      scrub: true,
    }
  })
  // header title
  gsap.fromTo('.header__block', { opacity: 2, scale: 1 }, {
    opacity: 0, scale: 1.1,
    scrollTrigger: {
      trigger: '.header__layer_1',
      start: 'center -50%+=200',
      end: 'bottom -130%+=100px',
      scrub: true,
    }
  })
  // header container
  gsap.fromTo('.header__container', {}, {
    'padding-top': navPaddingTop,
    'padding-bottom': navPaddingTop,
    // 'background-color': '#0D0D0D',
    scrollTrigger: {
      trigger: '.portfolio__title_text',
      end: 'center 55%+=100',
      scrub: true,
    }
  })

  gsap.fromTo('.header__container', {}, {
    'background-color': '#0D0D0D',
    scrollTrigger: {
      trigger: '.portfolio__title_text',
      start: 'top 55%',
      end: 'bottom 155%+=100',
      scrub: true,
    }
  })

  //header item left
  gsap.fromTo('.nav__item_left', {}, {
    height: 50,
    scrollTrigger: {
      trigger: '.header__layer_1',
      start: 'bottom -105%',
      end: 'bottom -155%+=100',
      scrub: true,
    }
  }) 

  // contact items wa
  gsap.fromTo('.nav__wa', {}, {
    width: 50,
    height: 50,
    scrollTrigger: {
      trigger: '.header__layer_1',
      start: 'bottom -105%',
      end: 'bottom -155%+=100',
      scrub: true,
    }
  }) 
  // contact items tg
  gsap.fromTo('.nav__tg', {}, {
    width: 50,
    height: 50,
    scrollTrigger: {
      trigger: '.header__layer_1',
      start: 'bottom -105%',
      end: 'bottom -155%+=100',
      scrub: true,
    }
  }) 

  // svg wa 
  gsap.fromTo('.svg__tg', {}, {
    width: 32,
    height: 27,
    scrollTrigger: {
      trigger: '.header__layer_1',
      start: 'bottom -105%',
      end: 'bottom -155%+=100',
      scrub: true,
    }
  })

  // svg tg
  gsap.fromTo('.svg__wa', {}, {
    width: 29,
    height: 29,
    scrollTrigger: {
      trigger: '.header__layer_1',
      start: 'bottom -105%',
      end: 'bottom -155%+=100',
      scrub: true,
    }
  })


  //

  // portfolio descr
  gsap.fromTo('.portfolio__descr', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.portfolio__types_list',
      end: 'bottom 80%',
      scrub: true,
    }
  })  

  // portfolio title lines
  gsap.fromTo('.portfolio__title_left', {}, {
    left: '-70vw',
    scrollTrigger: {
      trigger: '.portfolio__button_block',
      start: 'bottom 135%',
      end: 'center 30%',
      scrub: true,
    }
  })

  gsap.fromTo('.portfolio__title_right', {}, {
    right: '-70vw',
    scrollTrigger: {
      trigger: '.portfolio__button_block',
      start: 'bottom 135%',
      end: 'center 30%',
      scrub: true,
    }
  })

  // portfolio title went fucking out
  gsap.fromTo('.portfolio__title_block', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.portfolio__works_list',
      start: 'top 75%',
      end: 'bottom 125%',
      scrub: true,
    }
  })  


  // button block
  gsap.fromTo('.portfolio__button_block', { opacity: -1.2 }, {
    opacity: 1,
    scrollTrigger: {
      trigger: '.portfolio__button_block',
      scrub: true,
    }
  })

  gsap.fromTo('.portfolio__types_list', { opacity: -1.7 }, {
    opacity: 1,
    scrollTrigger: {
      trigger: '.portfolio__button_block',
      scrub: true,
    }
  })

  // появление слева
  gsap.fromTo('.portfolio__works_item_1', { x: -400, y: -400, opacity: -4 }, {
    opacity: 1, x: 0, y: 0,
    scrollTrigger: {
      trigger: '.portfolio__title_text',
      scrub: true,
    }
  })

  gsap.fromTo('.portfolio__works_item_4', { x: -400, y: 400, opacity: -4 }, {
    opacity: 1, x: 0, y: 0,
    scrollTrigger: {
      trigger: '.portfolio__title_text',
      scrub: true,
    }
  })

  // появление справа
  gsap.fromTo('.portfolio__works_item_3', { x: 400, y: -400, opacity: -4 }, {
    opacity: 1, x: 0, y: 0,
    scrollTrigger: {
      trigger: '.portfolio__title_text',
      scrub: true,
    }
  })

  gsap.fromTo('.portfolio__works_item_6', { x: 400, y: 400, opacity: -4 }, {
    opacity: 1, x: 0, y: 0,
    scrollTrigger: {
      trigger: '.portfolio__title_text',
      scrub: true,
    }
  })

  // появление по центру
  gsap.fromTo('.portfolio__works_item_2', { y: -400, opacity: -4 }, {
    opacity: 1, y: 0,
    scrollTrigger: {
      trigger: '.portfolio__title_text',
      scrub: true,
    }
  })

  gsap.fromTo('.portfolio__works_item_5', { y: 400, opacity: -4 }, {
    opacity: 1, y: 0,
    scrollTrigger: {
      trigger: '.portfolio__title_text',
      scrub: true,
    }
  })

  // исчезновение блока с картиночками
  gsap.fromTo('.portfolio__works_list', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.unique__section',
      // start: 'top 75%',
      end: 'bottom 230%',
      scrub: true,
    }
  })  



  // unique section

  // blocks
  gsap.fromTo('.unique_1', { x: -400, opacity: 0 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: '.portfolio__works_list',
      scrub: true,
    }
  })

  gsap.fromTo('.unique_2', { x: 400, opacity: 0 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: '.unique_1',
      scrub: true,
    }
  })

  gsap.fromTo('.unique_3', { x: 400, opacity: 0 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: '.unique_2',
      scrub: true,
    }
  })

  gsap.fromTo('.unique_4', { x: -400, opacity: 0 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: '.unique_3',
      scrub: true,
    }
  })

  // blocks` text
  gsap.fromTo('.unique_text_block_1', { x: -400, opacity: 0.2 }, {
    opacity: 2, x: 0,
    scrollTrigger: {
      trigger: '.unique__item',
      scrub: true,
    }
  })

  gsap.fromTo('.unique_text_block_2', { x: 400, opacity: 0.2 }, {
    opacity: 2, x: 0,
    scrollTrigger: {
      trigger: '.unique_1',
      scrub: true,
    }
  })

  gsap.fromTo('.unique_text_block_3', { x: 400, opacity: 0.2 }, {
    opacity: 2, x: 0,
    scrollTrigger: {
      trigger: '.unique_2',
      scrub: true,
    }
  })

  gsap.fromTo('.unique_text_block_4', { x: -400, opacity: 0.2 }, {
    opacity: 2, x: 0,
    scrollTrigger: {
      trigger: '.unique_3',
      scrub: true,
    }
  })


  // Tarifыыыыы

  // title lines
  gsap.fromTo('.tarif__title_left', {}, {
    left: '-70vw',
    scrollTrigger: {
      trigger: '.tarif__title_center',
      start: 'bottom 104%',
      end: 'center 30%',
      scrub: true,
    }
  })

  gsap.fromTo('.tarif__title_right', {}, {
    right: '-70vw',
    scrollTrigger: {
      trigger: '.tarif__title_center',
      start: 'bottom 104%',
      end: 'center 30%',
      scrub: true,
    }
  })

  // background image
  gsap.fromTo('.tarif__figure', { opacity: 0 }, {
    opacity: 1,
    scrollTrigger: {
      trigger: '.swiper',
      start: 'top 60%',
      end: 'bottom 50%',
      scrub: true,
    }
  }) 
  
  // title block bye bye
  gsap.fromTo('.tarif__title_block', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.swiper',
      start: 'top 60%',
      end: 'bottom 90%',
      scrub: true,
    }
  }) 

  // slider appiarence
  gsap.fromTo('.slide__1', { opacity: 0 }, {
    opacity: 1,
    scrollTrigger: {
      trigger: '.swiper',
      start: 'top 53%',
      end: 'bottom 85%',
      scrub: true,
    }
  }) 
  gsap.fromTo('.slide__2', { opacity: 0 }, {
    opacity: 1,
    scrollTrigger: {
      trigger: '.swiper',
      start: 'top 56%',
      end: 'bottom 80%',
      scrub: true,
    }
  }) 
  gsap.fromTo('.slide__3', { opacity: 0 }, {
    opacity: 1,
    scrollTrigger: {
      trigger: '.swiper',
      start: 'top 53%',
      end: 'bottom 85%',
      scrub: true,
    }
  }) 

  gsap.fromTo('.swiper-button-next', { x: 400, opacity: -4 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: '.tarif__title_center',
      scrub: true,
    }
  })

  // появление справа
  gsap.fromTo('.swiper-button-prev', { x: -400, opacity: -4 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: '.tarif__title_center',
      // end: 'bottom 385%',
      scrub: true,
    }
  })
  
  // связь с менеджером
  gsap.fromTo('.tarif__contact_title', { x: -900, opacity: -1 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: '.swiper',
      end: 'bottom 68%',
      start: 'top 170%',
      scrub: true,
    }
  })

  // tg wa
  gsap.fromTo('.tarif__contact_item', { y: 900, opacity: -1 }, {
    opacity: 1, y: 0,
    scrollTrigger: {
      trigger: '.swiper',
      end: 'bottom 68%',
      start: 'top 170%',
      scrub: true,
    }
  })
  gsap.fromTo('.tarif__contact_item', { y: 900, opacity: -1 }, {
    opacity: 1, y: 0,
    scrollTrigger: {
      trigger: '.swiper',
      end: 'bottom 68%',
      start: 'top 170%',
      scrub: true,
    }
  })

  // ** text
  gsap.fromTo('.tarif__contact_descr', { x: 900, opacity: -1 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: '.swiper',
      end: 'bottom 68%',
      start: 'top 170%',
      scrub: true,
    }
  })

  // исчезновение блока
  gsap.fromTo('.tarif__container', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.pages__section',
      // start: 'top 53%',
      end: 'bottom 95%',
      scrub: true,
    }
  }) 



  // pages

  // bg
  gsap.fromTo('.pages__item_1', { x: 400, opacity: -0.1 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: '.pages__list',
      end: 'bottom 77%+=100',
      scrub: true,
    }
  })

  gsap.fromTo('.pages__item_2', { x: -400, opacity: -0.1 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: '.pages__list',
      end: 'bottom 77%+=100',
      scrub: true,
    }
  })
  // text block
  gsap.fromTo('.pages__item_link_left', { x: 400, opacity: -0.1 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: '.pages__list',
      end: 'bottom 80%+=100',
      scrub: true,
    }
  })

  gsap.fromTo('.pages__item_link_right', { x: -400, opacity: -0.1 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: '.pages__list',
      end: 'bottom 80%+=100',
      scrub: true,
    }
  })

  // исчезновение блока
  gsap.fromTo('.pages__block', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.tezis_section',
      // start: 'top 53%',
      end: 'bottom 155%',
      scrub: true,
    }
  }) 



  // Тезисы
  // bg   tezis_section
  gsap.fromTo('.tezis__item_1', { y: 400, opacity: -0.1 }, {
    opacity: 1, y: 0,
    scrollTrigger: {
      trigger: '.tezis__item_1',
      end: 'bottom 178%+=100',
      scrub: true,
    }
  })
  gsap.fromTo('.tezis__item_2', { y: 400, opacity: -0.1 }, {
    opacity: 1, y: 0,
    scrollTrigger: {
      trigger: '.tezis__item_1',
      end: 'bottom 170%+=100',
      scrub: true,
    }
  })
  gsap.fromTo('.tezis__item_3', { y: 400, opacity: -0.1 }, {
    opacity: 1, y: 0,
    scrollTrigger: {
      trigger: '.tezis__item_2',
      end: 'bottom 150%+=100',
      scrub: true,
    }
  })

  //tezis__title_top
  gsap.fromTo('.tezis__item_1 .tezis__title_top', { y: 400, opacity: -0.1 }, {
    opacity: 1, y: 0,
    scrollTrigger: {
      trigger: '.tezis__item_1',
      end: 'bottom 178%+=100',
      scrub: true,
    }
  })
  gsap.fromTo('.tezis__item_2 .tezis__title_top', { y: 400, opacity: -0.1 }, {
    opacity: 1, y: 0,
    scrollTrigger: {
      trigger: '.tezis__item_1',
      end: 'bottom 170%+=100',
      scrub: true,
    }
  })
  gsap.fromTo('.tezis__item_3 .tezis__title_top', { y: 400, opacity: -0.1 }, {
    opacity: 1, y: 0,
    scrollTrigger: {
      trigger: '.tezis__item_2',
      end: 'bottom 160%+=100',
      scrub: true,
    }
  })

  //tezis__title_center
  gsap.fromTo('.tezis__item_1 .tezis__title_center', { y: 400, opacity: -0.1 }, {
    opacity: 1, y: 0,
    scrollTrigger: {
      trigger: '.tezis__item_1',
      end: 'bottom 175%+=100',
      scrub: true,
    }
  })
  gsap.fromTo('.tezis__item_2 .tezis__title_center', { y: 400, opacity: -0.1 }, {
    opacity: 1, y: 0,
    scrollTrigger: {
      trigger: '.tezis__item_1',
      end: 'bottom 165%+=100',
      scrub: true,
    }
  })
  gsap.fromTo('.tezis__item_3 .tezis__title_center', { y: 400, opacity: -0.1 }, {
    opacity: 1, y: 0,
    scrollTrigger: {
      trigger: '.tezis__item_2',
      end: 'bottom 155%+=100',
      scrub: true,
    }
  })

  //tezis__title_bottom
  gsap.fromTo('.tezis__item_1 .tezis__title_bottom', { y: 400, opacity: -0.1 }, {
    opacity: 1, y: 0,
    scrollTrigger: {
      trigger: '.tezis__item_1',
      end: 'bottom 170%+=100',
      scrub: true,
    }
  })
  gsap.fromTo('.tezis__item_3 .tezis__title_bottom', { y: 400, opacity: -0.1 }, {
    opacity: 1, y: 0,
    scrollTrigger: {
      trigger: '.tezis__item_2',
      end: 'bottom 150%+=100',
      scrub: true,
    }
  })

  // first item text animation
  gsap.fromTo('.tezis__item_list', { y: 500, opacity: 0.7 }, {
    opacity: 1, y: -600,
    scrollTrigger: {
      trigger: '.tezis__item_1',
      end: 'bottom 10%+=100',
      scrub: true,
    }
  })

  // исчезновение блока
  gsap.fromTo('.tezis__list', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.questions__section',
      start: 'bottom 280%',
      end: 'bottom 250%',
      scrub: true,
    }
  }) 



  // questions

  // title lines
  gsap.fromTo('.questions__title_left', {}, {
    left: '-85vw',
    scrollTrigger: {
      trigger: '.questions__title_center',
      start: 'bottom 104%',
      end: 'center 30%',
      scrub: true,
    }
  })

  gsap.fromTo('.questions__title_right', {}, {
    right: '-85vw',
    scrollTrigger: {
      trigger: '.questions__title_center',
      start: 'bottom 104%',
      end: 'center 30%',
      scrub: true,
    }
  })

  // title block bye bye
  gsap.fromTo('.questions__title_block', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.questions__list',
      start: 'top 90%',
      end: 'bottom 170%',
      scrub: true,
    }
  }) 

  // questions list 
  gsap.fromTo('.questions__list', { opacity: -1, y: 400 }, {
    opacity: 1, y: 0,
    scrollTrigger: {
      trigger: '.questions__title_block',
      start: 'top 50%',
      // end: 'bottom 170%',
      scrub: true,
    }
  }) 

  // questions item
  gsap.fromTo('.questions__item', { opacity: -1, y: 400 }, {
    opacity: 1, y: 0,
    scrollTrigger: {
      trigger: '.questions__title_block',
      start: 'top 80%',
      // end: 'bottom 170%',
      scrub: true,
    }
  }) 
  // questions item text
  // gsap.fromTo('.questions__item_text', { opacity: 0, y: 500 }, {
  //   opacity: 1, y: 0,
  //   scrollTrigger: {
  //     trigger: '.questions__title_block',
  //     start: 'top 60%',
  //     // end: 'bottom 170%',
  //     scrub: true,
  //   }
  // }) 

  // bye
  gsap.fromTo('.questions__block', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.contact__section',
      // start: 'top 50%',
      end: 'bottom 150%',
      scrub: true,
    }
  }) 





  // contact
  // bg
  gsap.fromTo('.contact__section', { opacity: 0 }, {
    opacity: 1,
    scrollTrigger: {
      trigger: '.contact__section',
      start: 'top 100%',
      end: 'bottom 120%',
      scrub: true,
    }
  }) 

  // title
  gsap.fromTo('.contact__title', { opacity: 0, y: 600 }, {
    opacity: 1, y: 0,
    scrollTrigger: {
      trigger: '.contact__section',
      start: 'top 280%',
      // end: 'bottom 170%',
      scrub: true,
    }
  }) 

  // wa tg
  gsap.fromTo('.tarif__contact_item', { opacity: -0.5, y: 500 }, {
    opacity: 1, y: 0,
    scrollTrigger: {
      trigger: '.contact__section',
      start: 'top 280%',
      // end: 'bottom 170%',
      scrub: true,
    }
  }) 

}

