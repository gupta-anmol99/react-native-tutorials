import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import ItemLog from "../components/ItemLog";

const GameOver = ({
  pickedNumber,
  guessList,
  setPickedNumber,
  setGameOver,
}) => {
  const pressHandler = () => {
    setPickedNumber(null);
    setGameOver(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Over</Text>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="cover"
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>

      <Text style={styles.textContainer}>
        Your phone needed{" "}
        <Text style={styles.gameText}>{guessList.length} </Text>turns to guess
        your number
        <Text style={styles.gameText}> {pickedNumber} </Text>!
      </Text>
      <View>
        <PrimaryButton text={"Restart"} startPressHandler={pressHandler} />
      </View>

      <View style={{width:"100%", flex:1}}>
        <FlatList
          data={guessList}
          renderItem={({ item }) => <ItemLog guess={item.guess}/>}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    padding: 24,
  },

  title: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    fontFamily: "open-sans-bold",
  },

  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    overflow: "hidden",
    margin: 36,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  textContainer: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "open-sans",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 3,
  },

  gameText: {
    color: "#ddb52f",
    fontSize: 28,
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
});
