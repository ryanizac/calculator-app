import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: "#333533",
    justifyContent: "center",
    alignItems: "center",
  },
  containerPressing: {
    backgroundColor: "#414341",
  },
  largeContainer: {
    width: "auto",
    flex: 3 / 4,
    minWidth: 76,
    maxWidth: "50%",
  },
  orangeContainer: {
    backgroundColor: "#FF8600",
  },

  name: {
    fontSize: 24,
    fontWeight: "500",
    color: "#D6D6D6",
  },
});
