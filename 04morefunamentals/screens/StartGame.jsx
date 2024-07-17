import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
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

  return (
    <Card>
      <TextInput
        maxLength={2}
        keyboardType="number-pad"
        style={styles.startScreenInput}
        value={enteredValue}
        onChangeText={(e) => setEnteredValue(e)}
      />

      <View style={styles.startGameButtonPlace}>
        <PrimaryButton startPressHandler={confirmPressHandler} text="Confirm" />
        <PrimaryButton
          startPressHandler={() => setEnteredValue("")}
          text="Reset"
        />
      </View>
    </Card>
  );
}

export default StartGame;
