import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

// Components
import CustomBtn from "./CustomBtn";
import ExpenseContext from "../store/ExpenseContext";
import Loading from "./Loading";

const AddExpense = ({ navigation }) => {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState(0);
  const { addExpense } = useContext(ExpenseContext);

  const cancelHandler = () => {
    navigation.goBack();
  };

  const addHandler = () => {
    addExpense(item, amount);
    navigation.goBack();
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.scrollViewContainer}
    >
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior="position"
      >
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <View style={styles.container}>
          <Image
            style={styles.imageStyle}
            source={require("../assets/addExpense.png")}
          />

          <TextInput
            style={styles.textInput}
            placeholder="What did you buy?"
            onChangeText={(text) => setItem(text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="How much did you spend?"
            keyboardType="numeric"
            onChangeText={(amount) => setAmount(Number.parseFloat(amount))}
          />

          <View style={styles.btnContainer}>
            <CustomBtn btnText="Add" pressHandle={addHandler} />
            <CustomBtn btnText="Cancel" pressHandle={cancelHandler} />
          </View>
        </View>
        {/* </TouchableWithoutFeedback> */}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default AddExpense;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: "#dce1e9",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "90%",
    borderRadius: 6,
    marginVertical: 10,
    height: 50,
  },
  btnContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    width: "60%",
  },
  imageStyle: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderColor: "#22577A",
    borderWidth: 2,
    margin: 20,
  },
});
