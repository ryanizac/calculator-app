import { Keyboard, ResultArea, Template } from "@/components";
import { CalculatorCore, Keys } from "@/core";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

export function App() {
  const [result, setResult] = useState("");

  function onPressKeys(key: Keys) {
    setResult((prev) => {
      const newValue = CalculatorCore.Resolve(prev, key);
      return newValue;
    });
  }

  return (
    <Template>
      <StatusBar style="light" />
      <ResultArea result={result} />
      <Keyboard onPress={onPressKeys} />
    </Template>
  );
}
