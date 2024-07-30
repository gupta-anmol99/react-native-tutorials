import React, { useState } from "react";
import ExpenseContext from "./ExpenseContext";

const ExpenseContextProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (item, amount) => {
    const today = new Date();

    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const yy = String(today.getFullYear()).slice(-2);

    // const formattedDate = `${mm}/${dd}/${yy}`;

    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { id: Date.now(), item: item, amount: amount, mm: mm, dd: dd, yy: yy },
    ]);
  };

  const removeExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  const updateExpense = (id, item, amount) => {
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
  };

  const value = {
    expenses: expenses,
    addExpense: addExpense,
    removeExpense: removeExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
