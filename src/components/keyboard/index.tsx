import { Keys } from "@/core";
import { View } from "react-native";
import { Key } from "../key";
import { styles } from "./styles";

export function Keyboard(props: Keyboard.Props) {
  return (
    <View style={styles.container}>
      <Key name="AC" onPress={props.onPress} />
      <Key name="<-" onPress={props.onPress} />
      <Key name="%" onPress={props.onPress} />
      <Key name="/" onPress={props.onPress} />
      <Key name="7" onPress={props.onPress} />
      <Key name="8" onPress={props.onPress} />
      <Key name="9" onPress={props.onPress} />
      <Key name="*" onPress={props.onPress} />
      <Key name="4" onPress={props.onPress} />
      <Key name="5" onPress={props.onPress} />
      <Key name="6" onPress={props.onPress} />
      <Key name="-" onPress={props.onPress} />
      <Key name="1" onPress={props.onPress} />
      <Key name="2" onPress={props.onPress} />
      <Key name="3" onPress={props.onPress} />
      <Key name="+" onPress={props.onPress} />
      <Key name="0" large onPress={props.onPress} />
      <Key name="," onPress={props.onPress} />
      <Key name="=" orange onPress={props.onPress} />
    </View>
  );
}

export namespace Keyboard {
  export type Props = {
    onPress?: (key: Keys) => void;
  };
}
