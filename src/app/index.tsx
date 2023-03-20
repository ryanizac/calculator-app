import { Keyboard, ResultArea, Template } from "@/components";
import { Keys } from "@/constants";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

export function App() {
  const [result, setResult] = useState("");

  function onPressKeys(key: Keys) {
    setResult((prev) => prev + key);
  }

  return (
    <Template>
      <StatusBar style="light" />
      <ResultArea result={result} />
      <Keyboard onPress={onPressKeys} />
    </Template>
  );
}
