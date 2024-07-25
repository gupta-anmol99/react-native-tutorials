import React, { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import { AntDesign } from "@expo/vector-icons";

const genRadnom = (min, max, exclude) => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return genRadnom(min, max, exclude);
  }

  return randomNum;
};

function GameScreen({ pickedNumber, onGameOver, setGuessList }) {
  const intial_guess = genRadnom(1, 100, pickedNumber);
  const [currentGuess, setCurrentGuess] = useState(intial_guess);

  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);

  const [solved, setSolved] = useState(false);

  useEffect(() => {
    setGuessList([
      {
        guess: intial_guess,
        id: Date.now(),
      },
    ]);
  }, []);

  const lowerHandler = () => {
    const nextGuess = genRadnom(min, currentGuess, currentGuess);
    setCurrentGuess(nextGuess);
    if (nextGuess === parseInt(pickedNumber)) {
      setSolved(true);
      return;
    }
    setMax(currentGuess);
    setGuessList((prevGuesses) => [
      { guess: nextGuess, id: Date.now() },
      ...prevGuesses,
    ]);
  };

  const higherHandler = () => {
    const nextGuess = genRadnom(currentGuess, max, currentGuess);
    setCurrentGuess(nextGuess);
    if (nextGuess === parseInt(pickedNumber)) {
      setSolved(true);
      return;
    }
    setMin(currentGuess);
    setGuessList((prevGuesses) => [
      { guess: nextGuess, id: Date.now() },
      ...prevGuesses,
    ]);
  };

  useEffect(() => {
    if (currentGuess === parseInt(pickedNumber)) {
      onGameOver();
      setMin(1);
      setMax(100);
    }
  }, [onGameOver, currentGuess, pickedNumber]);

  return (
    <View style={styles.gameScreen}>
      <Text style={styles.title}> Computer's Guess</Text>

      <NumberContainer guessedNumber={currentGuess} />

      <Card>
        <View style={styles.HigherLowerContainer}>
          <Text style={styles.HigherLower}>Higher or Lower?</Text>
        </View>
        <View style={styles.ButtonContainer}>
          <PrimaryButton
            startPressHandler={lowerHandler}
            text={<AntDesign name="arrowdown" size={24} />}
          />
          <PrimaryButton
            text={<AntDesign name="arrowup" size={24} />}
            startPressHandler={higherHandler}
          />
        </View>
      </Card>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  gameScreen: {
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
  HigherLowerContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  HigherLower: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    padding: 12,
    marginVertical: 12,
    fontFamily: "open-sans",
  },

  ButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 12,
  },
});
