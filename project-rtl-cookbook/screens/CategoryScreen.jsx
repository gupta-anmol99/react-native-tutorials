import React from "react";
import { Text, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryTile from "../components/CategoryTile";

const CategoryScreen = ({ navigation }) => {
  // navigation is a prop passed by the stack navigator, which is only available to the screen in the Stack.screen. So ot use it in any other component, we need to pass it as a prop to that component. Or we can use the useNavigation hook from @react-navigation/native.

  // This hook gives the navigation object diretly. Head to CategoryTile.jsx to see how to use it in comments.

  const CategoryRender = ({ item }) => {
    const onPressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
        categoryTitle: item.title,
      });
    };

    return <CategoryTile onPressHandler={onPressHandler} item={item} />;
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(item) => CategoryRender(item)}
      key={(item) => item.id}
      numColumns={2}
    />
  );
};

export default CategoryScreen;
