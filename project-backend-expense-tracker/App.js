import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

// Components
import AllExpense from "./screens/AllExpense";
import Recent from "./screens/Recent";
import ExpenseContextProvider from "./store/ExpenseContextProvider";
import HeaderButton from "./components/HeaderButton";
import AddExpense from "./components/AddExpense";
import { useNavigation } from "@react-navigation/native";
import UpdateExpense from "./screens/UpdateExpense";

const tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = ({ navigation }) => {
  const headerButtonHandler = () => {
    navigation.navigate("AddExpense");
  };
  return (
    <tabs.Navigator
      sceneContainerStyle={{ backgroundColor: "#dce1e9" }}
      screenOptions={{
        tabBarActiveTintColor: "#FCEFF9",
        tabBarInactiveTintColor: "#8E848A",
        tabBarStyle: { backgroundColor: "#22577A" },
        headerStyle: { backgroundColor: "#22577A" },
        headerTintColor: "#FCEFF9",
        headerRight: () => (
          <HeaderButton headerButtonHandler={headerButtonHandler} />
        ),
      }}
    >
      <tabs.Screen
        name="Recent"
        component={Recent}
        options={{
          title: "Recent Expenses",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="timer-sand-complete"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <tabs.Screen
        name="All Expenses"
        component={AllExpense}
        options={{
          title: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="timetable"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </tabs.Navigator>
  );
};

export default function App() {
  return (
    <ExpenseContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tabs" component={TabNavigator} />
          <Stack.Screen
            name="AddExpense"
            component={AddExpense}
            options={{ presentation: "modal" }}
          />
          <Stack.Screen
            name="Update"
            component={UpdateExpense}
            options={{ presentation: "modal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpenseContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
