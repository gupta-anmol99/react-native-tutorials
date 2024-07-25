import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};

const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    addFav: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFav: (state, action) => {
      state.ids = state.ids.filter((id) => id !== action.payload.id);
      // state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const { addFav, removeFav } = favsSlice.actions;

export default favsSlice.reducer;
