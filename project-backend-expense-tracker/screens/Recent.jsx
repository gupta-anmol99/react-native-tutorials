import React, { useState, useContext, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ExpenseContext from "../store/ExpenseContext";
import RecordContainer from "../components/RecordContainer";
import TotalExpense from "../components/TotalExpense";
import { fetchExpenses } from "../utils/http";
import Loading from "../components/Loading";

const Recent = () => {
  const { expenses, initExpenses } = useContext(ExpenseContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getExpensesFromBase = async () => {
      const response = await fetchExpenses();
      initExpenses(response);
      setLoading(false);
    };

    getExpensesFromBase();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const today = new Date();

  const dd = Number.parseInt(String(today.getDate()).padStart(2, "0"));
  const mm = String(today.getMonth() + 1).padStart(2, "0");

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
          data={recentExp}
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
