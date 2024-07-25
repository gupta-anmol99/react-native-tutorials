import React, { useLayoutEffect } from "react";

import {
  Button,
  Image,
  Text,
  View,
  StyleSheet,
  Platform,
  ScrollView,
} from "react-native";
import IconButton from "../components/IconButton";

const MealDetails = ({ navigation, route }) => {
  const item = route.params.item;

  const rightButtonHandler = () => {
    console.log("Button");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: item.title,
      headerBackTitleVisible: false,
      headerRight: () => {
        return <IconButton onPress={rightButtonHandler} />;
      },
    });
  }, [item, navigation, rightButtonHandler]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Delecious {item.title}</Text>
        </View>
        <View>
          <Image
            style={styles.imageContainer}
            source={{ uri: item.imageUrl }}
          />
          <View style={styles.keyContainer}></View>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Ingredients</Text>
          {item.ingredients.map((ingredient, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.listIndex}>{index + 1}.</Text>
              <Text style={styles.listText}>{ingredient}</Text>
            </View>
          ))}
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Cooking Steps</Text>
          {item.steps.map((step, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.listIndex}>{index + 1}.</Text>
              <Text style={styles.listText}>{step}</Text>
            </View>
          ))}
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Notes</Text>
          <Text>
            <Text style={styles.listIndex}>Duration: </Text>
            {item.duration} min
          </Text>
          <Text>
            <Text style={styles.listIndex}>Cost: </Text>
            {item.affordability.toUpperCase()}
          </Text>
          <Text>
            <Text style={styles.listIndex}>Complexity: </Text>
            {item.complexity.toUpperCase()}
          </Text>
          {item.isGlutenFree ? (
            <Text style={styles.keyText}>Gluten Free!</Text>
          ) : null}
          {item.isLactoseFree ? (
            <Text style={styles.keyText}>Lactose Free!</Text>
          ) : null}
          {item.isVegetarin ? (
            <Text style={styles.keyText}>Vegetarian</Text>
          ) : null}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    marginVertical: 10,
  },

  title: {
    padding: 10,
    textAlign: "center",
    fontWeight: "semibold",
    fontSize: 20,
  },

  keyContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginVertical: 0,
  },

  keyText: {
    fontWeight: "bold",
  },

  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  listIndex: {
    marginRight: 10,
    fontWeight: "bold",
  },
  listText: {
    flex: 1,
  },
});

export default MealDetails;
