import { Keys } from "./keys";
import { operators, Operators } from "./operators";

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

  static preventComma(currentValue: string) {
    if (currentValue.includes(",")) {
      return currentValue;
    }

    if (currentValue.length === 0) {
      return "0";
    }

    return currentValue + ",";
  }

  static isOperator(key: any): key is Operators {
    return operators.includes(key);
  }

  static preventOperator(currentValue: string, key: Operators) {
    const lastItem = currentValue.at(-1);

    if (lastItem === undefined) {
      return "0";
    }

    if (this.isOperator(lastItem)) {
      const valueWithoutOperator = this.backspace(currentValue);
      return valueWithoutOperator + key;
    }

    return currentValue + key;
  }

  static Resolve(currentValue: string, key: Keys): string {
    if (key === "AC") {
      return this.clear();
    }

    if (key === "<-") {
      return this.backspace(currentValue);
    }

    if (key === ",") {
      return this.preventComma(currentValue);
    }

    if (this.isOperator(key)) {
      return this.preventOperator(currentValue, key);
    }

    if (currentValue === "0") {
      return key;
    }

    return currentValue + key;
  }
}
