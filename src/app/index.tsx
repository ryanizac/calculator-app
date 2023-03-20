import { Keyboard, ResultArea, Template } from "@/components";
import { useCalculator } from "@/hooks";
import { StatusBar } from "expo-status-bar";
import React from "react";

export function App() {
  const [result, updateResult] = useCalculator("0");

  return (
    <Template>
      <StatusBar style="light" />
      <ResultArea result={result} />
      <Keyboard onPress={updateResult} />
    </Template>
  );
}
