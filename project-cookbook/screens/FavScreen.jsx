import React from "react";
import { Text, FlatList } from "react-native";
import { useContext } from "react";
import FavContext from "../context/FavContext";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const FavScreen = () => {
  const { ids, removeFavs } = useContext(FavContext);

  const onPressHandler = (id) => {
    removeFavs(id);
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
