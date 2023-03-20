import { Keys } from "./keys";

export class CalculatorCore {
  static clear() {
    return "0";
  }

  static backspace(currentValue: string) {
    const newText = currentValue.slice(0, currentValue.length - 1);

    if (newText === "") {
      return "0";
    }

    return newText;
  }

  static Resolve(currentValue: string, key: Keys): string {
    if (key === "AC") {
      return this.clear();
    }

    if (key === "<-") {
      return this.backspace(currentValue);
    }

    return currentValue + key;
  }
}
