import {Swiper} from '../../vendor/swiper/swiper-bundle.mjs';

export class SwiperInitializer {
  #SWIPER_DATA_SLIDE = 'swiper-slide';

  constructor(slideClassName) {
    this.slideClassName = slideClassName;
    this.swiper = null;
  }

  #DisableLoopState() {
    if (this.swiper.params.loop) {
      this.swiper.params.loop = false;
      this.swiper.update();
    }
  }

  #EnableLoopState() {
    if (!this.swiper.params.loop) {
      this.swiper.params.loop = true;
      this.swiper.update();
    }
  }

  Initialize(options) {
    const slider = document.querySelector(`.${this.slideClassName}`);
    if (slider) {
      this.swiper = new Swiper(slider, options);
      const slides = document.querySelectorAll(`.${this.#SWIPER_DATA_SLIDE}`);
      slides.forEach((slide) => {
        slide.setAttribute('tabindex', '0');
      });

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') {
          this.#DisableLoopState();
        }
      });

      document.addEventListener('keyup', (event) => {
        if (event.key === 'Tab') {
          this.#EnableLoopState();
        }
      });

      document.querySelector(options.navigation.nextEl).addEventListener('click', this.#EnableLoopState);
      document.querySelector(options.navigation.prevEl).addEventListener('click', this.#EnableLoopState);

      return this.swiper;
    }
  }

  CreateJuriOptions(nextSlideClassName, prevSlideClassName) {
    return {
      navigation: {
        nextEl: `.${nextSlideClassName}`,
        prevEl: `.${prevSlideClassName}`,
      },
      slidesPerView: 4,
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
