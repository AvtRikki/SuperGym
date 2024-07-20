import { Utils } from '../../utils.js';

export class TabControl {
  #TAB_NAME_ATTRIBUTE = 'data-tab';
  #ACTIVE_TAB_MODIFICATOR = 'active';

  constructor(headerClassName, contentClassName) {
    this.headerClassName = headerClassName;
    this.contentClassName = contentClassName;
  }

  Initialize() {
    const contents = document.querySelectorAll(`.${this.contentClassName}`);
    const contentMap = this.#BuildMapOfTabContent(contents);

    const headers = document.querySelectorAll(`.${this.headerClassName}`);
    if (headers) {
      this.#SubscribeOnTabChange(headers, contentMap);
    }
  }

  #SubscribeOnTabChange(headers, contentMap) {
    const activeHeaderClassName = Utils.GetBemClassWithModificator(this.headerClassName, this.#ACTIVE_TAB_MODIFICATOR);
    const activeContentClassName = Utils.GetBemClassWithModificator(this.contentClassName, this.#ACTIVE_TAB_MODIFICATOR);
    headers.forEach((header) => {
      const tabName = header.getAttribute(this.#TAB_NAME_ATTRIBUTE);
      header.addEventListener('click', (evt) => {
        evt.preventDefault();
        const isActive = header.classList.contains(activeHeaderClassName);
        if (isActive) {
          return;
        }

        headers.forEach((element) => element.classList.remove(activeHeaderClassName));
        contentMap.values().forEach((element) => element.classList.remove(activeContentClassName));
        header.classList.add(activeHeaderClassName);
        if (contentMap.has(tabName)) {
          const content = contentMap.get(tabName);
          content.classList.add(activeContentClassName);
        }
      });
    });
  }

  #BuildMapOfTabContent(contents) {
    const contentMap = new Map();
    for (const content of contents) {
      const tabName = content.getAttribute(this.#TAB_NAME_ATTRIBUTE);
      if (tabName) {
        contentMap.set(tabName, content);
      }
    }

    return contentMap;
  }
}
