export class FormValidator {
  #INVALID_PATTERN_MESSAGE_ATTRIBUTE = 'data-validation-pattern';
  #INVALID_REQUIRED_MESSAGE_ATTRIBUTE = 'data-validation-required';
  #DEFAULT_ERROR_MESSAGE = 'Что то пошло не так проверьте ввод данных';

  constructor(formClassName) {
    this.formClassName = formClassName;
  }

  Initialize(invalidInputClassName) {
    const form = document.querySelector(`.${this.formClassName}`);
    if (form) {
      const inputs = form.querySelectorAll('input[required]');
      form.addEventListener('submit', (e) => {
        let valid = true;
        inputs.forEach((input) => {
          const errorMessage = document.getElementById(`${input.id}-error`);
          if (!input.validity.valid) {
            input.classList.add(invalidInputClassName);
            if (input.validity.patternMismatch) {
              errorMessage.textContent = input.getAttribute(this.#INVALID_PATTERN_MESSAGE_ATTRIBUTE);
            } else if (input.validity.valueMissing) {
              errorMessage.textContent = input.getAttribute(this.#INVALID_REQUIRED_MESSAGE_ATTRIBUTE);
            } else {
              errorMessage.textContent = this.#DEFAULT_ERROR_MESSAGE;
            }

            errorMessage.style.display = 'block';
            valid = false;
          } else {
            input.classList.remove(`.${invalidInputClassName}`);
            errorMessage.style.display = 'none';
          }
        });

        if (!valid) {
          e.preventDefault();
        }
      });
    }
  }
}
