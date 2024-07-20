import {Swiper} from '../../vendor/swiper/swiper-bundle.mjs';

export class SwiperInitializer {
  constructor(slideClassName) {
    this.slideClassName = slideClassName;
  }

  Initialize(options) {
    const slider = document.querySelector(`.${this.slideClassName}`);
    if (slider) {
      return new Swiper(slider, options);
    }
  }

  CreateJuriOptions(nextSlideClassName, prevSlideClassName) {
    return {
      navigation: {
        nextEl: `.${nextSlideClassName}`,
        prevEl: `.${prevSlideClassName}`,
      },
      slidesPerView: 8,
      loop: true,
      spaceBetween: 40,
      breakpoints: {
        0: {
          slidesPerView: 1,
          allowTouchMove: true,
        },
        768: {
          slidesPerView: 2,
          allowTouchMove: true,
        },
        1366: {
          slidesPerView: 4,
          allowTouchMove: false,
        }
      }
    };
  }

  CreateReviewOptions(nextSlideClassName, prevSlideClassName) {
    return {
      navigation: {
        nextEl: `.${nextSlideClassName}`,
        prevEl: `.${prevSlideClassName}`,
      },
      slidesPerView: 1,
      loop: false,
      breakpoints: {
        320: {
          allowTouchMove: true,
        },
        768: {
          allowTouchMove: true,
        },
        1366: {
          allowTouchMove: false,
        },
      },
    };
  }
}
