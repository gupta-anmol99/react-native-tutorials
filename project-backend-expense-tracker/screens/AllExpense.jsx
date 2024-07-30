import React, { useContext, useEffect } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import ExpenseContext from "../store/ExpenseContext";
import RecordContainer from "../components/RecordContainer";
import TotalExpense from "../components/TotalExpense";

const AllExpense = () => {
  const { expenses } = useContext(ExpenseContext);

  const renderList = (item) => {
    return <RecordContainer item={item} />;
  };
  return (
    <View style={styles.container}>
      <View style={{alignItems:"stretch"}}>
        <TotalExpense  />
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

export default AllExpense;
