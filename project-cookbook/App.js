import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

// components
import CategoryScreen from "./screens/CategoryScreen";
import MealsOverview from "./screens/MealsOverview";
import MealDetails from "./screens/MealDetails";
import FavScreen from "./screens/FavScreen";
import FavContextProvider from "../project-cookbook/context/FavContextProvider";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#fefae0" },
        drawerContentStyle: { backgroundColor: "#fefae0" },
        sceneContainerStyle: { backgroundColor: "#e9edc9" },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favs"
        component={FavScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

// Instead of creating option for every screen, we can create a default option for every screen using screenOptions

// Now, let's say we want to dynamically set options. For example, we want to set the title of the screen to the name of the category that was clicked on. We can do this by passing a function to the options prop of the screen. This function receives route and navigation automatically by react native.

// But there is even a better way of doing this. navigation prop in the screen has a method called setOptions. We can use this method to set the options of the screen dynamically from inside the screen. Head to MealsOverview.jsx and see how we can set the title of the screen dynamically.

export default function App() {
  return (
    <FavContextProvider>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#fefae0" },
            contentStyle: { backgroundColor: "#e9edc9" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              title: "Meal Categories",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverview}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen name="Details" component={MealDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
