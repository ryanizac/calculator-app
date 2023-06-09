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

    if (currentValue === "0" && key === "-") {
      return "-";
    }

    if (this.isOperator(lastItem)) {
      const valueWithoutOperator = this.backspace(currentValue);
      return valueWithoutOperator + key;
    }

    return currentValue + key;
  }

  static includeOperation(currentValue: string) {
    return operators.find((item) => currentValue.includes(item)) !== undefined;
  }

  static trimKeys(currentValue: string) {
    const lastIndex = currentValue.length - 1;
    const lastValue = currentValue.at(lastIndex);

    if (["%", "*", "/", "-", "+"].includes(lastValue)) {
      return currentValue.slice(0, lastIndex);
    }

    return currentValue;
  }

  static calculate(currentValue: string): string {
    if (!this.includeOperation(currentValue)) {
      return currentValue;
    }

    const rawExpression = this.trimKeys(currentValue);
    const newValue: number = eval(rawExpression);

    if (Number.isNaN(newValue)) {
      return "Error";
    }

    return newValue.toString();
  }

  static preventNaN(key: Keys) {
    if (key === "-") {
      return key;
    }

    if (this.isOperator(key) || key === "<-" || key === "AC") {
      return "0";
    }

    return key;
  }

  static Resolve(currentValue: string, key: Keys): string {
    if (key === "AC") {
      return this.clear();
    }

    if (currentValue === "Error") {
      return this.preventNaN(key);
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

    if (key === "=") {
      return this.calculate(currentValue);
    }

    if (currentValue === "0") {
      return key;
    }

    return currentValue + key;
  }
}
