import { Text, View, Pressable, Button, StyleSheet } from "react-native";

import React from "react";

const CustomBtn = ({ btnText, pressHandle }) => {
  return (
    <View>
      <Pressable
        style={({ pressed }) => pressed && styles.onTouch}
        onPress={pressHandle}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.btnText}>{btnText}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: "#22577A",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    color: "#FCEFF9",
    fontSize: 16,
    fontWeight: "bold",
  },

  onTouch:{
    opacity:0.5
  }
});

export default CustomBtn;
