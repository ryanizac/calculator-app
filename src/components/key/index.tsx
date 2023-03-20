import { Keys } from "@/core";
import { useMixStyle } from "@/hooks";
import { Pressable, Text } from "react-native";
import { styles } from "./styles";

export function Key<Name extends Keys>(props: Key.Props<Name>) {
  const containerStyle = useMixStyle(styles.container);

  const onPressIn = () => {
    if (props.orange) return;

    containerStyle.emit("pressing", styles.containerPressing);
  };

  const onPressOut = () => {
    if (props.orange) return;

    containerStyle.emit("pressing", {});
  };

  return (
    <Pressable
      style={[
        containerStyle.value,
        props.large ? styles.largeContainer : undefined,
        props.orange ? styles.orangeContainer : undefined,
      ]}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={() => props.onPress?.(props.name)}
    >
      <Text style={styles.name}>{props.name}</Text>
    </Pressable>
  );
}

export namespace Key {
  export type Props<Name extends Keys> = {
    name: Name;
    large?: boolean;
    orange?: boolean;
    onPress?: (key: Name) => void;
  };
}
