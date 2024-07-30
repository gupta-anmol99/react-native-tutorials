import { useContext } from "react";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ExpenseContext from "../store/ExpenseContext";

const TotalExpense = ({ recentExpense }) => {
  const { expenses } = useContext(ExpenseContext);

  const expenseList = recentExpense || expenses;

  const total = expenseList.reduce((acc, cur) => acc + cur.amount, 0);

  const textDisplay = recentExpense ? "Last 7 Days" : "Total Expense";

  return (
    <View style={styles.container}>
      <Text style={styles.onlyText}>{textDisplay}</Text>
      <Text style={styles.amountText}>${total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 20,
    backgroundColor: "#dce1e9",
    height: 50,
    width: "80vh",
    justifyContent: "space-between",
    borderColor: "#22577A",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
  },

  onlyText: {
    fontSize: 14,
    color: "#22577A",
  },

  amountText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#22577A",
  },
});

export default TotalExpense;
