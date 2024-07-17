import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        padding: 60,
        flexDirection: "column",
        justifyContent: "center", // <- Align along vertical axis since flexdir is column
        alignItems: "center" // <- Align along horizontal axis since flexdir is column
    
    }}
    >
      <View
        style={{
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "yellow",
          justifyContent: "center",
          alignItems: "center",
          flex: 2,
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "bisque",
          justifyContent: "center",
          alignItems: "center",
          flex: 3,
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}
