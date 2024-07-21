import { TabControl } from './modules/tab-controls/tab-control.js';
import {VideoLoader} from './modules/videos/video-loader.js';
import {SwiperInitializer} from './modules/sliders/swiper-initializer.js';
import {ScrollerControl} from './modules/scrollers/scroller-control.js';
import {AccordionControl} from './modules/accordions/accordion-control.js';

const priceTabControl = new TabControl('subscription__tab', 'subscription__tab-item');
priceTabControl.Initialize();

const faqTabControl = new TabControl('faq__page-item', 'faq__page-content-list');
faqTabControl.Initialize();


const videoLoader = new VideoLoader('about__video', 'about__video-source', 'video-cover');
videoLoader.Initialize();

const juriSlider = new SwiperInitializer('juri__wrapper');
const juriOptions = juriSlider.CreateJuriOptions('juri__button--next', 'juri__button--prev');
juriSlider.Initialize(juriOptions);

const reviewSlider = new SwiperInitializer('reviews__wrapper');
const reviewOptions = reviewSlider.CreateReviewOptions('reviews__button--next', 'reviews__button--prev');
reviewSlider.Initialize(reviewOptions);

const scroller = new ScrollerControl('hero__action', 'price');
scroller.Initialize();

const accordions = document.querySelectorAll('.accordion');
accordions.forEach((accordionElement) => {
  const accordion = new AccordionControl(accordionElement);
  accordion.Initalize('accordion__item');
});
