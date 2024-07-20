export class Utils {
  static GetBemClassWithModificator(className, modificatorName) {
    return `${className}--${modificatorName}`;
  }

  static GetBemClassWithElement(className, modificatorName) {
    return `${className}__${modificatorName}`;
  }
}
