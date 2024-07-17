import { StatusBar } from "expo-status-bar";
import styles from "../styles";
import { useState } from "react";
import { Button, TextInput, View, Modal, Image } from "react-native";

function AddGoal({ DoneButton, handleChange, val, cancelButton}) {
  return (
    <Modal animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.imageStyle} source={require("../assets/images/final_goal.png")} />
        <TextInput
          onChangeText={handleChange}
          style={styles.textInput}
          placeholder="Enter New Goal!"
          value={val}
        />
        <View style={styles.doneButtonContainer}>
          <View style={styles.doneButton}>
            <Button onPress={DoneButton} title="Done" />
          </View>
          <View style={styles.doneButton}>
            <Button onPress={cancelButton} title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default AddGoal;
