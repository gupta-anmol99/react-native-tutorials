import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  startGameScreen: { 
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 40,
    backgroundColor: "#72063c",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, // <-- this is the shadow property which is specific to android
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.36,
  },

  startGameButtonPlace: {
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
    padding: 10,
  },

  startScreenInput: {
    width: 100,
    height: 50,
    fontSize: 32,
    textAlign: "center",
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    marginVertical: 12,
    padding: 0,
    borderRadius: 15,
    color: "#ddb52f",
    fontWeight: "bold",
  },

  PressableContainer: {
    backgroundColor: "#ddb52f",

    width: 85,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.26,

    borderRadius: 10,
  },

  ButtonText: {
    textAlign: "center",
    color: "black",
    padding: 10,
    fontFamily: 'open-sans',
  },

  PrimaryButton: {
    borderRadius: 10,
    margin: 10,
    overflow: "hidden",
  },

  ButtonPressed: {
    opacity: 0.75,
  },
});

export default styles;
