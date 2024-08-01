import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function AuthContextProvider({ children }) {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (token) => {
    setToken(token);
    setIsLoggedIn(true);
    AsyncStorage.setItem("token", token);
  };
  const logout = () => {
    setToken("");
    setIsLoggedIn(false);
  };

  value = {
    token: token,
    isLoggedIn: isLoggedIn,
    login: login,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
