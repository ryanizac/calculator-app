import { Keyboard, ResultArea, Template } from "@/components";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

export function App() {
  const [result] = useState("");

  return (
    <Template>
      <StatusBar style="light" />
      <ResultArea result={result} />
      <Keyboard />
    </Template>
  );
}
