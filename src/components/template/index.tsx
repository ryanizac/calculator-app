import * as React from "react";
import { View } from "react-native";
import { styles } from "./styles";

export function Template(props: Template.Props) {
  return <View style={styles.container}>{props.children}</View>;
}

export namespace Template {
  export type Props = {
    children: React.ReactNode;
  };
}
