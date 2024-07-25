import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ItemLog = ({ guess }) => {
  return (
    <View style={styles.itemLog}>
      <Text style={styles.itemText}>Guess: {guess}</Text>
    </View>
  );
};

export default ItemLog;

const styles = StyleSheet.create({
  itemLog: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ddb52f",
    borderColor: "#72063c",
    borderWidth: 2,
    borderRadius: 20,
    width:"100%",
  },

  itemText:{
    color: "black",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "open-sans",
  }
});
