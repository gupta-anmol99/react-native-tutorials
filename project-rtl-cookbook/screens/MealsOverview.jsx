import React, { useEffect, useLayoutEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverview = ({ route, navigation }) => {
  // console.log(route.params)
  // route object is also passed along with navigation prop. It contains the params object which contains the data passed from the previous screen. In this case, the data passed from CategoryScreen is categoryTitle and categoryId.

  // We can also get access to route from anywhere in the component by using the useRoute hook from @react-navigation/native.

  const catId = route.params.categoryId;
  const title = route.params.categoryTitle;

  useLayoutEffect(() => {
    navigation.setOptions({ title: title, headerBackTitleVisible: false });
  }, [catId, title, navigation]);

  const selectedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  const renderMealItem = ({ item }) => {
    const mealItemPressHandler = () => {
      navigation.navigate("Details", {
        item: item,
      });
    };

    return (
      <MealItem mealItem={item} mealItemPressHandler={mealItemPressHandler} />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={selectedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
        // numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverview;
