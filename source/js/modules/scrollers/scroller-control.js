export class ScrollerControl {
  constructor(sourceClassName, targetClassName) {
    this.sourceClassName = sourceClassName;
    this.targetClassName = targetClassName;
  }

  Initialize() {
    const source = document.querySelector(`.${this.sourceClassName}`);
    const target = document.querySelector(`.${this.targetClassName}`);
    if (source && target) {
      source.addEventListener('click', () => {
        target.scrollIntoView({block: 'start', behavior: 'smooth'});
      });
    }
  }
}
