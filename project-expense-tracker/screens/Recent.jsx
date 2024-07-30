import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ExpenseContext from "../store/ExpenseContext";
import RecordContainer from "../components/RecordContainer";
import TotalExpense from "../components/TotalExpense";

const Recent = () => {
  const today = new Date();

  const dd = Number.parseInt(String(today.getDate()).padStart(2, "0"));
  const mm = String(today.getMonth() + 1).padStart(2, "0");

  const { expenses } = useContext(ExpenseContext);

  const recentExp = expenses.filter((expense) => {
    return expense.mm === mm && Number.parseInt(expense.dd) >= dd - 7;
  });

  

  const renderList = (item) => {
    return <RecordContainer item={item} />;
  };
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "stretch" }}>
        <TotalExpense recentExpense={recentExp} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={expenses}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => renderList(item)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  listContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default Recent;
