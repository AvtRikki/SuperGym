import {Utils} from '../../utils.js';

export class AccordionControl {
  #EXPANDED_SECTION_MODIFICATOR = 'expanded';

  constructor(accordionElement) {
    this.accordionElement = accordionElement;
  }

  Initalize(accordionItemClassName) {
    const accordionItems = this.accordionElement.querySelectorAll(`.${accordionItemClassName}`);
    const expandedClassName = Utils.GetBemClassWithModificator(accordionItemClassName, this.#EXPANDED_SECTION_MODIFICATOR);
    accordionItems.forEach((accordionItem) => {
      accordionItem.addEventListener('click', (evt) => {
        if (!Utils.IsParagraph(evt.target)) {
          accordionItem.classList.toggle(expandedClassName);
          evt.preventDefault();
        }
      });
    });
  }
}
