import { StatusBar } from "expo-status-bar";
import styles from "./styles";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItems from "./components/GoalItems";
import AddGoal from "./components/AddGoal";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [val, setVal] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = () => {
    setModalVisible(true);
  };

  const handleTouch = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  };

  const doneButton = () => {
    setTasks((prevTasks) =>
      val.trim().length != 0
        ? [...prevTasks, { task: val, id: Date.now().toString(36) }]
        : prevTasks
    );
    setVal("");

    setModalVisible(false);
  };

  const cancelButton = () => {
    setModalVisible(false);
    setVal("");
  };

  const handleChange = (e) => {
    setVal(e);
  };

  return (
    <View style={styles.appContainer}>
      <View style={{ padding: 10 }}>
        <Button title="Add New Goal" onPress={handleModal} />
      </View>

      {modalVisible && (
        <AddGoal
          cancelButton={cancelButton}
          DoneButton={doneButton}
          handleChange={handleChange}
          val={val}
        />
      )}

      <GoalItems handleTouch={handleTouch} tasks={tasks} />
    </View>
  );
}
