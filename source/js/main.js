import { TabControl } from './modules/tab-controls/tab-control.js';
import {VideoLoader} from './modules/videos/video-loader.js';

const priceTabControl = new TabControl('subscription__tab', 'subscription__tab-item');
priceTabControl.Initialize();

const faqTabControl = new TabControl('faq__page-item', 'faq__page-content-list');
faqTabControl.Initialize();


const videoLoader = new VideoLoader('about__video', 'about__video-source', 'video-cover');
videoLoader.Initialize();
