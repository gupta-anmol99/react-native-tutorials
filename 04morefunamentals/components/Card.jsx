import React from "react";
import styles from "../style";
import { View, TextInput } from "react-native";

const Card = ({ children }) => {
  return <View style={styles.startGameScreen}>{children}</View>;
};

export default Card;
