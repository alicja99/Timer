import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: "#d3d3d3",
    width: "80%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000",
    padding: 16,
  },
  timerText: {
    position: "absolute",
    width: "100%",
    top: 0,
    textAlign: "center",
  },
  errorText: {
    color: "red",
    position: "absolute",
    bottom: 0,
    textAlign: "center",
  },
  textInputContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 128,
  },
});
