import { Keys } from "./keys";

export class CalculatorCore {
  static Resolve(currentValue: string, key: Keys): string {
    return currentValue + key;
  }
}
