import React from "react";

const FavContext = React.createContext({
  ids: [],
  addFavs: (id) => {},
  removeFavs: (id) => {},
});

export default FavContext;
