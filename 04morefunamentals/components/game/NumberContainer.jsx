import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NumberContainer = ({ guessedNumber }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{guessedNumber}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 24,
    borderRadius: 12,
    margin:20,
    justifyContent: "center",
  },
  numberText: {
    textAlign:"center",
    color: "#ddb52f",
    fontSize: 48,
    fontWeight: "bold",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.46,
  },
});
