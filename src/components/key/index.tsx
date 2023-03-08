import { Pressable, Text } from "react-native";
import { styles } from "./styles";

export function Key<Name extends string>(props: Key.Props<Name>) {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>
    </Pressable>
  );
}

export namespace Key {
  export type Props<Name extends string> = {
    name: Name;
  };
}
