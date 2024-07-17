import { StatusBar } from "expo-status-bar";
import styles from "../styles";
import { useState } from "react";
import { Text, TextInput, View, FlatList, Pressable } from "react-native";

export default function GoalItems({ tasks, handleTouch }) {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id}
        renderItem={(taskData) => {
          return (
            <View style={styles.goalItems}>
              <Pressable
                android_ripple={{ color: "#1d8581" }} 
                onLongPress={() => handleTouch(taskData.item.id)}
                style={({pressed})=> pressed && styles.onTouch}
              >
                <Text style={styles.goalText}>{taskData.item.task}</Text>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
}
