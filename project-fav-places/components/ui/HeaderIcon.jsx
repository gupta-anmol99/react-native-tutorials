import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, StyleSheet } from "react-native";

const HeaderIcon = ({ icon, size, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]} 
    >
      <AntDesign name={icon} size={size} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  pressed: {
    opacity: 0.6,
  },
});

export default HeaderIcon;
