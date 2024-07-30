import React, { useState } from "react";
import ExpenseContext from "./ExpenseContext";
import { deleteBase, expenseBase, updateBase } from "../utils/http";

const ExpenseContextProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const initExpenses = (expenseData) => {
    setExpenses(expenseData);
  };

  const addExpense = async (item, amount) => {
    const today = new Date();

    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const yy = String(today.getFullYear()).slice(-2);

    const id_firebase = await expenseBase({
      item: item,
      amount: amount,
      mm: mm,
      dd: dd,
      yy: yy,
    });

    console.log(id_firebase);

    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { id: id_firebase, item: item, amount: amount, mm: mm, dd: dd, yy: yy },
    ]);
  };

  const removeExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );

    deleteBase(id);
  };

  const updateExpense = async (id, item, amount) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === id
          ? {
              id: id,
              item: item,
              amount: amount,
              mm: expense.mm,
              dd: expense.dd,
              yy: expense.yy,
            }
          : expense
      )
    );

    await updateBase(id, item, amount);
  };

  const value = {
    expenses: expenses,
    addExpense: addExpense,
    removeExpense: removeExpense,
    updateExpense: updateExpense,
    initExpenses: initExpenses,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
