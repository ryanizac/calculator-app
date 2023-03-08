import { Keyboard, ResultArea, Template } from "@/components";
import { StatusBar } from "expo-status-bar";
import React from "react";

export function App() {
  return (
    <Template>
      <StatusBar style="light" />
      <ResultArea />
      <Keyboard />
    </Template>
  );
}
