import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, View, StyleSheet } from "react-native";

const IconButton = ({ onPress }) => {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          { padding: 10 },
          pressed ? styles.pressed : null,
        ]}
        onPress={onPress}
      >
        <AntDesign name="heart" size={24} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});

export default IconButton;
