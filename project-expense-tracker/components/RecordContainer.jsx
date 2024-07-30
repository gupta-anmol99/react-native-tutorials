import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RecordContainer = ({ item }) => {
  const formattedDate = `${item.mm}/${item.dd}/${item.yy}`;
  const navigation = useNavigation();

  const recordPressHandle = () => {
    navigation.navigate("Update", {
      item: item,
    });
  };
  return (
    <View>
      <Pressable
        onLongPress={recordPressHandle}
        style={({ pressed }) => pressed && styles.onTouch}
      >
        <View style={styles.container}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.item}</Text>
            <Text style={styles.dateText}>{formattedDate}</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amountText}>${item.amount}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    width: 360,
    height: 75,
    backgroundColor: "#22577A",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  itemContainer: {
    padding: 1,
    margin: 1,
    height: 50,
    width: 150,
    alignItems: "start",
    justifyContent: "center",
  },

  itemText: {
    color: "#FCEFF9",
    fontSize: 18,
  },
  amountContainer: {
    padding: 1,
    margin: 1,
    height: 50,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dce1e9",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: "center",
  },

  amountText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  dateText: {
    color: "#adb5bd",
    fontSize: 12,
  },

  onTouch: {
    opacity: 0.7,
  },
});

export default RecordContainer;
