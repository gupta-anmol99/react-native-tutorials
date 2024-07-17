import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState(null);

  const [gameOver, setGameOver] = useState(false);

  const [guessList, setGuessList] = useState([]);

  console.log(guessList);

  const onGameOver = () => {
    setGameOver(true);
  };

  let screen = pickedNumber ? (
    <GameScreen
      onGameOver={onGameOver}
      pickedNumber={pickedNumber}
      setGuessList={setGuessList}
    />
  ) : (
    <StartGame setPickedNumber={setPickedNumber} />
  );

  if (gameOver)
    screen = (
      <GameOver
        pickedNumber={pickedNumber}
        guessList={guessList}
        setPickedNumber={setPickedNumber}
        setGameOver={setGameOver}
      />
    );

  const [fontLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <LinearGradient
      colors={["#72063c", "#ddb52f"]}
      style={rootStyles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={rootStyles.rootScreen}
        imageStyle={{ opacity: 0.2 }}
      >
        <SafeAreaView style={rootStyles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const rootStyles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
