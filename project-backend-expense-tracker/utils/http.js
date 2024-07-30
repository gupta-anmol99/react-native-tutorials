import axios from "axios";

const BACKEND_URL =
  "https://react-native-expense-37790-default-rtdb.firebaseio.com";

export const expenseBase = async (expenseData) => {
  const response = await axios.post(
    BACKEND_URL + "/expenses.json",
    expenseData
  );
  return response.data.name;
};

export const fetchExpenses = async () => {
  const response = await axios.get(BACKEND_URL + "/expenses.json");

  const loadedExpenses = [];

  for (const key in response.data) {
    loadedExpenses.push({
      id: key,
      item: response.data[key].item,
      amount: response.data[key].amount,
      mm: response.data[key].mm,
      dd: response.data[key].dd,
      yy: response.data[key].yy,
    });
  }

  return loadedExpenses;
};

export const updateBase = (id, item, amount) => {
  return axios.patch(BACKEND_URL + `/expenses/${id}.json`, {
    item: item,
    amount: amount,
  });
};

export const deleteBase = (id) => {
  axios.delete(BACKEND_URL + `/expenses/${id}.json`);
};
