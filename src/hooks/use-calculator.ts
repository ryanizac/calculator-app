import { CalculatorCore, Keys } from "@/core";
import { useState } from "react";

type UpdateCallback = (key: Keys) => void;

export function useCalculator(
  initialValue: string | number
): [string, UpdateCallback] {
  const [value, setValue] = useState<string>(initialValue.toString());

  function updateValue(key: Keys) {
    setValue((prev) => {
      const newValue = CalculatorCore.Resolve(prev, key);
      return newValue;
    });
  }

  return [value, updateValue];
}
