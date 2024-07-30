import React from "react";
import { Octicons } from "@expo/vector-icons";
import { Text, View, Pressable } from "react-native";
import { useContext } from "react";
import ExpenseContext from "../store/ExpenseContext";

const HeaderButton = ({ headerButtonHandler }) => {
  const { expenses, addExpense } = useContext(ExpenseContext);

  return (
    <Pressable onPress={headerButtonHandler}>
      <Octicons
        name="diff-added"
        size={26}
        color="#FCEFF9"
        style={{ padding: 10, marginRight: 10 }}
      />
    </Pressable>
  );
};

export default HeaderButton;
