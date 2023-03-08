import * as RC from "react";
import * as RN from "react-native";

type Style = RN.ViewStyle | RN.TextStyle | RN.ImageStyle;

type MappedStyleNames = "initial" | string;

type RecordStyles = Record<MappedStyleNames, Style>;

export function useMixStyle(initial: Style = {}) {
  const [allStyles, setAllStyles] = RC.useState<RecordStyles>({
    initial,
  });

  function emit(refname: MappedStyleNames, style: Style) {
    setAllStyles((prev) => ({ ...prev, [refname]: style }));
  }

  return { value: Object.values(allStyles), emit };
}
