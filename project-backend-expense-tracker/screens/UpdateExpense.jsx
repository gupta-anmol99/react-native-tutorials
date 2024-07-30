import React, { useState, useContext } from "react";
import { Text, View, TextInput, StyleSheet, Pressable } from "react-native";
import CustomBtn from "../components/CustomBtn";
import ExpenseContext from "../store/ExpenseContext";
import AntDesign from "@expo/vector-icons/AntDesign";

const UpdateExpense = ({ navigation, route }) => {
  const exp = route.params.item;
  const [newItem, setNewItem] = useState(exp.item);
  const [newAmount, setNewAmount] = useState(exp.amount);

  const { expenses, updateExpense, removeExpense } = useContext(ExpenseContext);

  const updateHandle = () => {
    updateExpense(exp.id, newItem, newAmount);
    navigation.navigate("All Expenses");
  };

  const deleteHandle = () => {
    removeExpense(exp.id);
    navigation.navigate("All Expenses");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 20,
            color: "#22577A",
          }}
        >
          Update Expense
        </Text>
      </View>
      <TextInput
        defaultValue={exp.item}
        placeholder="What did you buy?"
        style={styles.textInput}
        onChangeText={(text) => setNewItem(text)}
      />
      <TextInput
        defaultValue={exp.amount.toString()}
        placeholder="How much did you spend?"
        style={styles.textInput}
        onChangeText={(text) => setNewAmount(Number.parseFloat(text))}
        keyboardType="numeric"
      />

      <View>
        <CustomBtn btnText="Update" pressHandle={updateHandle} />
        <CustomBtn btnText="Delete" pressHandle={deleteHandle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingVertical: 50,
    alignItems: "center",
    backgroundColor: "#dce1e9",
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "90%",
    borderRadius: 6,
    marginVertical: 10,
    height: 50,
  },
});

export default UpdateExpense;
