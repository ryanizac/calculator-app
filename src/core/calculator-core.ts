import { Keys } from "./keys";

export class CalculatorCore {
  static clear() {
    return "0";
  }

  static Resolve(currentValue: string, key: Keys): string {
    if (key === "AC") {
      return this.clear();
    }

    return currentValue + key;
  }
}
