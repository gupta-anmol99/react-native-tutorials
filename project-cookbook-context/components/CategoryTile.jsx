import React from "react";
import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

import { useNavigation } from "@react-navigation/native";

const CategoryTile = ({ item, onPressHandler }) => {
  // const navigation = useNavigation();

  return (
    <View style={[styles.tileContainer]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressed : null,
        ]}
        onPress={onPressHandler}
        // onPress={() => navigation.navigate("MealsOverview")}
      >
        <View style={[styles.innerContainer, { backgroundColor: item.color }]}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  tileContainer: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.26,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  pressed: {
    opacity: 0.6,
  },

  button: {
    flex: 1,
  },

  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CategoryTile;
