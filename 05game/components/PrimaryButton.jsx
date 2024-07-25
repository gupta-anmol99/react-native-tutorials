import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "../style";

function PrimaryButton({ text, startPressHandler }) {
  
  return (
    <View style={styles.PrimaryButton}>
      <Pressable
        android_ripple={{ color: "#BB971E" }}
        onPress={startPressHandler}
        style={({ pressed }) =>
          pressed
            ? [styles.PressableContainer, styles.ButtonPressed]
            : styles.PressableContainer
        }
      >
        <Text style={styles.ButtonText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
