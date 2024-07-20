import {Utils} from '../../utils.js';

export class VideoLoader {
  #VIDEO_SOURCE_ATTRIBUTE = 'data-src';
  #VIDEO_PLAY_BUTTON = 'button-play';

  constructor(containerName, videoSourceClassName, videoCoverClassName) {
    this.videoSourceClassName = videoSourceClassName;
    this.videoCoverClassName = videoCoverClassName;
    this.containerName = containerName;
  }

  #CreateIFrame(source) {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    iframe.setAttribute('referrerpolicy', '"strict-origin-when-cross-origin');
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '100%');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('src', source);

    return iframe;
  }

  Initialize() {
    const playButtonClass = Utils.GetBemClassWithElement(this.videoCoverClassName, this.#VIDEO_PLAY_BUTTON);
    const container = document.querySelector(`.${this.containerName}`);
    const playButton = document.querySelector(`.${playButtonClass}`);
    const videoCover = document.querySelector(`.${this.videoCoverClassName}`);
    const videoSource = document.querySelector(`.${this.videoSourceClassName}`);
    if (!videoSource) {
      return;
    }

    const videoLink = videoSource.getAttribute(this.#VIDEO_SOURCE_ATTRIBUTE);
    if (playButton) {
      playButton.addEventListener('click', () => {
        videoCover.classList.add('visually-hidden');
        playButton.classList.add('visually-hidden');
        const iframe = this.#CreateIFrame(videoLink);
        container.appendChild(iframe);
      });
    }
  }
}
