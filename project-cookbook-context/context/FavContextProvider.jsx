import React, { useState } from "react";
import FavContext from "./FavContext";

const FavContextProvider = ({ children }) => {
  const [favs, setFavs] = useState([]);

  const addFavs = (id) => {
    setFavs((favIds) => [...favIds, id]);
  };

  const removeFavs = (id) => {
    setFavs((favIds) => favIds.filter((favId) => favId !== id));
  };

  const value = {
    ids: favs,
    addFavs: addFavs,
    removeFavs: removeFavs,
  };

  return <FavContext.Provider value={value}>{children}</FavContext.Provider>;
};

export default FavContextProvider;
