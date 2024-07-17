import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Button title="Click me" onPress={() => alert("Button Clicked")} />
      </View>
      <Text
        style={{ padding: 8, margin: 16, borderWidth: 1, borderColor: "red" }}
      >
        WOW on ios and android simultaneously!
      </Text>

      <Text
        style={styles.dummyStyleText}
      >
       Second line of text!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cornsilk",
    alignItems: "center",
    justifyContent: "center",
  },

  dummyStyleText: {
    padding: 8,
    margin: 16,
    borderWidth: 1,
    borderColor: "red",
  },
});

// * This is basic structure of a react native app.
// * We have a view which is similar to div in html.
// * There are two ways of styling in react native.
// * We can do the styling inline like we did with the first text element.
// * Or we can create a style object and pass it to the style prop of the element.
