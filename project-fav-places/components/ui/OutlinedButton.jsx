import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from "../../constants/style";

const OutlinedButton = ({ icon, color, size, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.primary700,
    backgroundColor: Colors.primary50,
    width: "40%",
  },

  pressed: {
    opacity: 0.6,
  },
});

export default OutlinedButton;
