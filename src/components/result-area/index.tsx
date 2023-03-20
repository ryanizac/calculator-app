import { Text, View } from "react-native";
import { styles } from "./styles";

export function ResultArea(props: ResultArea.Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>{props.result || ""}</Text>
    </View>
  );
}

export namespace ResultArea {
  export type Props = {
    result: string;
  };
}
