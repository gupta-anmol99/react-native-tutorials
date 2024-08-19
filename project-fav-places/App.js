import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";

// Components
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import HeaderIcon from "./components/ui/HeaderIcon";
import { Colors } from "./constants/style";
import Map from "./screens/Map";
import { useEffect, useState, useCallback } from "react";
import { init } from "./util/database";

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [dbInit, setDbInit] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setDbInit(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const initApp = async () => {
      if (dbInit) {
        await SplashScreen.hideAsync();
      }
    };
    initApp();
  }, [dbInit]);

  if (!dbInit) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray500,
            contentStyle: { backgroundColor: Colors.primary50 },
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "Your Places",
              headerRight: ({ tintColor }) => (
                <HeaderIcon
                  icon="plussquareo"
                  size={26}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{ title: "Add New Place" }}
          />
          <Stack.Screen
            name="Map"
            component={Map}
            options={{ presentation: "modal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
