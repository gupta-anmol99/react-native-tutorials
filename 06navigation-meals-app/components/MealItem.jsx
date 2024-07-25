import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Platform,
} from "react-native";

const MealItem = ({ mealItem, mealItemPressHandler }) => {
  const img = mealItem.imageUrl;
  const title = mealItem.title;
  const aff = mealItem.affordability;
  const duration = mealItem.duration;
  const complexity = mealItem.complexity;

  return (
    // <View style={styles.container}>
    //   <Image style={styles.imageContainer} source={{ uri: img }} />
    //   <Text style={styles.text}>{mealItem.title}</Text>
    // </View>
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressed : null,
        ]}
        onPress={mealItemPressHandler}
      >
        <View>
          <Image style={styles.imageContainer} source={{ uri: img }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.propsContainer}>
          <Text>{aff.toUpperCase()}</Text>
          <Text>{duration} min</Text>
          <Text>{complexity.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
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
    justifyContent: "center",
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
  },

  title: {
    padding: 10,
    textAlign: "center",
    fontWeight: "semibold",
    fontSize: 20,
  },

  propsContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
  },

  pressed: {
    opacity: 0.5,
  },
});
export default MealItem;
