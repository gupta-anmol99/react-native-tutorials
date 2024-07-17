import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 15,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  doneButtonContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },

  doneButton: {
    marginHorizontal: 10,
    width: "25%",
  },

  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "90%",
    borderRadius: 6 ,
  },

  goalsContainer: {
    flex: 6,
  },

  goalItems: {
    margin: 6,
    backgroundColor: "#48d1cc",
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
  },

  // * The text color doesn't change to white from parent because unlike web, in react-native, the styles are not cascaded

  goalText: {
    fontSize: 16,
    color: "white",
    padding: 14,
  },

  onTouch: {
    opacity: 0.6,
    color: "1d8581",
  },

  imageStyle:{
    width: 125,
    height: 125,
    margin:20
  }
});

export default styles;
