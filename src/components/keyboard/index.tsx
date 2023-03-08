import { View } from "react-native";
import { Key } from "../key";
import { styles } from "./styles";

export function Keyboard(props: Keyboard.Props) {
  return (
    <View style={styles.container}>
      <Key name="AC" />
      <Key name="<-" />
      <Key name="%" />
      <Key name="/" />
      <Key name="7" />
      <Key name="8" />
      <Key name="9" />
      <Key name="*" />
      <Key name="4" />
      <Key name="5" />
      <Key name="6" />
      <Key name="-" />
      <Key name="1" />
      <Key name="2" />
      <Key name="3" />
      <Key name="+" />
      <Key name="0" />
      <Key name="," />
      <Key name="=" />
    </View>
  );
}

export namespace Keyboard {
  export type Props = {};
}
