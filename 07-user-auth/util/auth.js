import axios from "axios";

const API_KEY = "AIzaSyAPBpdtp_dm2-qJ2AmYGcT1I852QDWnjQY";

export const createUser = async (email, password) => {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  return response.data.idToken;
};

export const loginUser = async (email, password) => {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
      API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );

  return response.data.idToken;
};
