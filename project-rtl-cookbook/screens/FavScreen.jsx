import React from "react";
import { Text, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { removeFav } from "../store/reducers";
import { useSelector, useDispatch } from "react-redux";

const FavScreen = () => {
  const ids = useSelector((state) => state.ids);
  const dispatch = useDispatch();

  const onPressHandler = (id) => {
    console.log("pressed");
    dispatch(removeFav({ id: id }));
  };
  return (
    <FlatList
      data={MEALS.filter((meal) => ids.includes(meal.id))}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MealItem
          mealItem={item}
          mealItemLongPressHandler={() => onPressHandler(item.id)}
        />
      )}
    />
  );
};

export default FavScreen;
