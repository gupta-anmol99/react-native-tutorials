import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import styles from "../style";
import Card from "../components/Card";

function StartGame({ setPickedNumber }) {
  const [enteredValue, setEnteredValue] = useState("");

  const confirmPressHandler = () => {
    if (
      Number.parseInt(enteredValue) <= 0 ||
      Number.parseInt(enteredValue) > 99
    ) {
      Alert.alert("Invalid Number", "Please enter a number between 1 and 99", [
        {
          text: "Got it!",
          style: "destructive",
          onPress: () => setEnteredValue(""),
        },
      ]);
      return;
    }

    console.log(enteredValue);
    setPickedNumber ? setPickedNumber(enteredValue) : null;
  };

  // We will add KeyboardAvoidingView to prevent the keyboard from covering the input field.
  // Behaviour position will move the input field up when the keyboard is opened.
  // We need to scrollview because keyboard avoiding view will break the app
  // because of random positioning. Scrollview will fix this by makeing th screen scrollable.
  // This will also help the user to close the keyboard in iOS by tapping outside the keyboard.

  // TODO Read the docs about KeyboardAvoidingView.

  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{flex:1}} behavior="position"> 
        <Card>
          <TextInput
            maxLength={2}
            keyboardType="number-pad"
            style={styles.startScreenInput}
            value={enteredValue}
            onChangeText={(e) => setEnteredValue(e)}
          />

          <View style={styles.startGameButtonPlace}>
            <PrimaryButton
              startPressHandler={confirmPressHandler}
              text="Confirm"
            />
            <PrimaryButton
              startPressHandler={() => setEnteredValue("")}
              text="Reset"
            />
          </View>
        </Card>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGame;
