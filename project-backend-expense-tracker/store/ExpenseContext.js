import React from "react";

const ExpenseContext = React.createContext({
  expenses: [],
  addExpense: (item, amount) => {},
  removeExpense: (id) => {},
  updateExpense: (id, item, amount) => {},
  initExpenses: () => {},
});

export default ExpenseContext;
